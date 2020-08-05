<<<<<<< HEAD
This project was bootstrapped with [Create React App] from official Nodejs website.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />

*Please be sure to run `npm install` within the directory first and then run `npm start`

*Development will be runnning on *localhost:3000*

## Running React Application on Docker 

If choosing to run with Docker instead:

Must have Docker installed on your device

## Run Command:

`$ docker run \`
     `-it \`
     `--rm \`
     `-v ${PWD}:/sorting-visualizer \`
     `-p 3001:3000 \`
     `-e CHOKIDAR_USEPOLLING=true \`
     `ejwalton17/visual:1.0`

* Project will be running on localhost:3001 
