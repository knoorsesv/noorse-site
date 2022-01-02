#!/bin/bash
echo "running playwright test"
pwd
node --version
ls
# todo: do this in Dockerfile, but for now can't because node_modules gets overwritten by the volume in docker run
npm install
# npx playwright install
cat package.json

npm run test