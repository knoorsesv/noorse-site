#!/bin/bash
echo "running playwright test"
# todo: do this in Dockerfile, but for now can't because node_modules gets overwritten by the volume in docker run
npm install

# todo: only run the screenshot test to do this
npm run test:update