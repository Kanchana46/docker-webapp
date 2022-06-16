pipeline{
	agent any
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
		stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {
            def customImage = docker.build("miltonc/dockerwebapp")
            customImage.push()
        }
        }
	}
	post {
		always {
			bat 'docker logout'
		}
	}

}