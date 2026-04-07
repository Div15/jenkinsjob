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
                bat 'docker build -t my-node-app .'
            }
        }

        stage('Remove Old Container') {
            steps {
                bat 'docker rm -f my-container || exit 0'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3005:3000 --name my-container my-node-app'
            }
        }
    }
}
