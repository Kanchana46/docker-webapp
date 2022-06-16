pipeline{
	agent any
	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')
	}
	stages {
	    stage('gitclone') {
			steps {
				checkout scm
			}
		}
		stage('Build') {
			steps {
				bat 'docker build -t dockerkr12/nodeapp .'
			}
		}
		stage('Login') {
			steps {
				bat 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}
		stage('Push') {
			steps {
				bat 'docker push dockerkr12/nodeapp'
			}
		}
	}
	post {
		always {
			bat 'docker logout'
		}
	}

}