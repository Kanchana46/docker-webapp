pipeline{
	agent any
	environment { 
        registry = "dockerkr12/nodeapp" 
        registryCredential = 'dockerhub' 
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
		stage('Deploy our image') { 
            steps { 
                script { 
                    docker.withRegistry( '', registryCredential ) { 
                       dockerImage.push() 
                  }
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