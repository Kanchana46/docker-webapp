node {
    def app
    stage('Clone repository') {
        checkout scm
    }
    stage('Build image') {
        app = docker.build("dockerkr12/nodeapp")
    }
    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
        def customImage = docker.build("dockerkr12/nodeapp")
        customImage.push()
    }
    }
}