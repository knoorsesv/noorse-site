#!/bin/bash
echo "running playwright test"
export RUN_IN_DOCKER=true
# todo: do this in Dockerfile, but for now can't because node_modules gets overwritten by the volume in docker run
npm install
npm run test