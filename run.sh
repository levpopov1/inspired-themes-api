#!/bin/bash

pm2 start src/server.js --name 'inspired-themes-api' --watch --ignore-watch='node_modules'