pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/Div15/jenkinsjob.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t my-html-app .'
            }
        }

        stage('Remove Old Container') {
            steps {
                bat 'docker rm -f html-container || exit 0'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 8081:80 --name html-container my-html-app'
            }
        }
    }
}
