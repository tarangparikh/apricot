export JENKINS_URL=http://35.223.12.157
export JENKINS_USER=tarangparikh
export JENKINS_TOKEN=brightschool
export COOKIE_JAR=/tmp/cookies

JENKINS_CRUMB=$(curl --silent --cookie-jar $COOKIE_JAR $JENKINS_URL'/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,":",//crumb)' -u $JENKINS_USER:$JENKINS_TOKEN)

echo $JENKINS_CRUMB

curl -I --cookie $COOKIE_JAR $JENKINS_URL/job/apricot-pipeline/build  -H $JENKINS_CRUMB -H "Content-Type:text/xml" -u $JENKINS_USER:$JENKINS_TOKEN -v
