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
            script { 
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                    app.push("latest")
                    } 
            } 
        }
	}
	post {
		always {
			bat 'docker logout'
		}
	}

}