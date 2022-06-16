node {
    checkout scm

    docker.withRegistry('https://hub.docker.com', 'dockerhub') {

        def customImage = docker.build("dockerkr12/nodeapp")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}