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
                        image 'contrast/maven-yarn:latest'
                        args '-u 0 --privileged -v /root/.m2:/root/.m2'

                    }
            }
            steps {
                sh 'mvn -B -DskipTests clean package'
            }
        }
        stage('Test') {
            agent {
                    docker {
                        image 'contrast/maven-yarn:latest'
                        args '-u 0 --privileged -v /root/.m2:/root/.m2'
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
            sh "docker rmi $registry:latest"
          }
        }
        
        stage('Deploy Docker Image to Node 1 via Rundeck'){
            agent any
                steps{
                    script{
                        step([$class: "RundeckNotifier",
                        includeRundeckLogs: true,
                        jobId: "1be3f733-c661-495d-bf2e-b28bd67b2f80",
                        rundeckInstance: "Rundeck",
                        shouldFailTheBuild: true,
                        shouldWaitForRunDeckJob: true,
                        tailLog:true])
                    }
                }
            
        }
        
    }
}
