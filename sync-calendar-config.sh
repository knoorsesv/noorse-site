#! /bin/zsh

gh api -X GET -H 'Accept: application/vnd.github+json' /repos/knoorsesv/calendarsync/contents/dist/resulting-config.json --jq '.download_url' | xargs curl -o data/calendar-config.json