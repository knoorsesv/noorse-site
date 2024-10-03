#! /bin/bash
set -e

echo "running sync script $date"

cd ~/code/noorse-site

. ~/.bashrc

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