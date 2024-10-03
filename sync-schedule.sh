#! /bin/bash

cd ~/code/noorse-site

git pull
pnpm i
pnpm update-vv-data
pnpm format

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/github

git add data
git commit -m "chore: update vv data"
git push