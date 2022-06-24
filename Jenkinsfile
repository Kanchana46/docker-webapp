pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerToken')
	}

	stages {
	    
	    stage('gitclone') {

			steps {
				checkout scm
			}
		}

		stage('Build') {

			steps {
				sh 'docker build -t dockerkr12/nodeapp .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push dockerkr12/nodeapp'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}
