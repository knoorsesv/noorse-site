#! /bin/bash

cd ~/code/noorse-site

source ~/.bashrc

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/github

git pull

whoami
which pnpm

pnpm i
pnpm update-vv-data
pnpm format


git add data
git commit -m "chore: update vv data"
git push