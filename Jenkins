pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Div15/jenkinsjob.git'
            }
        }
        stage('Build') {
            steps {
                bat 'firstProgram.java'
            }
        }
        stage('Execute') {
            steps {
                bat 'firstProgram'
            }
        }
    }
}
