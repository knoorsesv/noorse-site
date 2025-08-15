#! /bin/bash
set -e

# todo: execute this on a server somewhere
current_date_time=$(date)

echo "running sync script at $current_date_time"

# todo: make this variable?
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