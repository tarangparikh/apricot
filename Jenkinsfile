pipeline {
    environment {
        registry = "tarangparikh/apricot"
        registryCredential = 'dockerhub'
        dockerImage = ''
    }
    agent none
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('clone'){
            agent any
            steps{
                git 'https://github.com/tarangparikh/apricot'
            }
        }
        stage('Build') {
            agent {
                    docker {
                        image 'maven:3-alpine'
                        args '-v /root/.m2:/root/.m2'

                    }
            }
            steps {
                sh 'mvn -B -DskipTests clean package'
            }
        }
        stage('Test') {
            agent {
                    docker {
                        image 'maven:3-alpine'
                        args '-v /root/.m2:/root/.m2'
                    }
            }
            steps {
                sh 'mvn test'
            }
        }
        stage('Build Docker Image'){
            agent none
            steps{
               script{
                   dockerImage = docker.build registry + ":latest" 
               }
            }
        }
        stage('Deploy Docker Image to Docker Hub'){
            agent none
            steps{
                 script{
                        docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                   }
                 }
            }
        }
        stage('Remove Unused docker image') {
          agent any  
          steps{
            sh "docker rmi $registry:$BUILD_NUMBER"
          }
        }
        stage('Deploy Docker Image to Node 1 via Rundeck'){
            agent any
                steps{
                    script{
                        step([$class: "RundeckNotifier",
                        includeRundeckLogs: true,
                        jobId: "cfe8ee5d-4d5a-418d-816f-3f6c407d1420",
                        rundeckInstance: "Rundeck",
                        shouldFailTheBuild: true,
                        shouldWaitForRunDeckJob: true,
                        tailLog:true])
                    }
                }
            
        }
    }
}
