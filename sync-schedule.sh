#! /bin/bash
set -e

current_date_time=$(date)

echo "running sync script at $current_date_time"

cd ~/code/noorse-site

export VOLTA_HOME="$HOME/.volta"
export PATH="$VOLTA_HOME/bin:$PATH"

echo "path $PATH "

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/github

git pull

whoami
which pnpm

pnpm i
pnpm update-vv-data



git add data
git commit -m "chore: update vv data"
git push