pipeline {
    agent any

    tools {
        nodejs 'nodejs' // Replace with the exact name you gave in "Global Tool Configuration"
    }

    environment {
        SONARQUBE_INSTALLATION = 'SonarQube CE' 
        SERVICE_NAME = 'yours_mobile'
        BRANCH_NAME = 'master'
         
    }

    stages {
        // stage('init') {
        //     steps {
        //         githubNotify buildState: 'INPROGRESS', repoSlug: "${SERVICE_NAME}"
        //         echo "Service name: ${SERVICE_NAME}"
        //         echo "Branch name: ${BRANCH_NAME}"
        //     }
        // }

        stage('Git Checkout') {
            steps {
                git url: 'https://github.com/gpavankumarnov/yours_mobile.git', branch: 'master'
            }
        }

        stage('NPM Install') {
            steps {
               sh "npm install"
            }
        }

         stage('Node build') {
            steps {
               sh "npm run build"
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            githubNotify buildState: 'SUCCESSFUL', repoSlug: "${SERVICE_NAME}"
        }
    }
}
