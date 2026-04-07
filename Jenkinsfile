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
                sh 'docker build -t my-node-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3005:3000 my-node-app'
            }
        }
    }
}
