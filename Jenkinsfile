pipeline {
    agent any

    environment {
        SONARQUBE_INSTALLATION = 'SonarQube CE' 
        SERVICE_NAME = 'yours_mobile'
        BRANCH_NAME = 'master'
    }

    stages {
        stage('init') {
            steps {
                githubNotify buildState: 'INPROGRESS', repoSlug: "${SERVICE_NAME}"
                echo "Service name: ${SERVICE_NAME}"
                echo "Branch name: ${BRANCH_NAME}"
            }
        }

        stage('Git Checkout') {
            steps {
                git url: 'https://github.com/gpavankumarnov/yours_mobile.git', branch: 'master'
            }
        }

        stage('lint') {
            steps {
                sh 'npm run lint:ci'
            }
        }

        stage('test') {
            steps {
                sh 'npm run coverage'
            }
            post {
                always {
                    junit testResults: 'reports/junit.xml', allowEmptyResults: true
                }
            }
        }

        stage('dev-build') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            bitbucketStatusNotify buildState: 'SUCCESSFUL', credentialsId: "${BITBUCKET_OAUTH_CREDENTIAL_ID}", repoSlug: "${SERVICE_NAME}", commitId: "${GIT_COMMIT}"
        }
    }
}
