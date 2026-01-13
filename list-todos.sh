#! /bin/zsh

rg -i todo --vimgrep | sd '(^.*):(\d+):\d+:\s*(.*$)' ' - [ ] Todo in: [$1](https://github.com/knoorsesv/noorse-site/blob/main/$1#L$2)' > .todos.md

cat .todos.md
gh issue edit 488 --body-file .todos.md

git add .todos.md