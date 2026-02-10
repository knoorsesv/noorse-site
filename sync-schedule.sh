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

(
  git add . && git reset HEAD --hard &&  git pull

  pnpm i

  set +e
  pnpm update-vv-data && git add . && git commit -m "chore: update schedule data" && git push
  status=$?
  set -e

  if [ $status -eq 0 ]; then
    curl -X POST -F "tags=all" -F "body=Synced new vv data" http://debokomaru.alpaca-bortle.ts.net:8000/notify/apprise
  else
    curl -X POST -F "tags=all" -F "body=Error updating vv data" http://debokomaru.alpaca-bortle.ts.net:8000/notify/apprise
  fi
)



