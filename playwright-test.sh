#!/bin/zsh
docker run --rm --network host -v $(pwd):/work/ -w /work/ mcr.microsoft.com/playwright:v1.12.3-focal /bin/bash /work/run-test.sh
# npm install
# npx playwright test --update-snapshots