pipeline { 
    agent any 
    stages { 
        stage('Cloning our Git') { 
            steps { 
               checkout scm
            }
        } 
        stage('Build') {
			steps {
				bat 'docker build -t dockerkr12/nodeapp .'
			}
		}
        stage('Deploy our image') { 
            steps { 
                script { 
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {

                    def customImage = docker.build("dockerkr12/nodeapp")

                    /* Push the container to the custom Registry */
                    customImage.push()
    }
                } 
            }
        } 
    }
}

