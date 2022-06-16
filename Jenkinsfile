pipeline{
	agent any
    def app
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
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            app.push("latest")
            } 
                echo "Trying to Push Docker Build to DockerHub"
    }
	}
	post {
		always {
			bat 'docker logout'
		}
	}

}