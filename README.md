Qlik Core Proof of Concept
How to Run
=======

## cd into Project Directory 
cd qlik-core-poc

## Pull docker image
Docker pull qlikcore/engine

## Start the engine in docker container
ACCEPT_EULA=yes docker-compose up -d

## Verify docker container is running
docker ps -a

## Install scripts
npm install

## Code change for running locally
No environment varialbes have been set up, so if running locally, change the string below in index.js
"url: 'ws://167.99.80.6:19076/app',"
to
"url: 'ws://localhost:19076/app',"
This will re-point to Qlik core running locally

## Run the app
npm start

