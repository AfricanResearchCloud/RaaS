# Research as a Service
This project is designed to deliver an easy to use web based interface to get started with eResearch tools, such as iPython, object storage, and other X11 based open source tools.

## Technologies
* Docker
* nodejs
* passport
* express

## Components (Microservices)
* GUI (Web Interface)
* Access and Authorization
* Certificate Store
* Router
* Director (Docker Orchestration)
* Repository (Image & Metadata)
* Storage (possibly just docker image with object storage)
* DB (mongoDB)

### GUI (projector)
Presentation layer

### Access and Authorization (bobbie)
Will make use of *passport* and other services

### Certificate Store (locksmith)
Will contain per user certificates to encrypt traffic between Presentation layer & backend (docker container)

### Router ()
Link persentation layer to backend router

### Director ()
Start docker containers and manage networks

### Repository (Image & Metadata)
Docker registry and extra metadata per Image
