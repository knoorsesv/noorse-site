#! /bin/zsh

rg -i todo --vimgrep | sd '(^.*):(\d+):\d+:\s*(.*$)' ' - [ ] [$1](https://github.com/knoorsesv/noorse-site/blob/main/$1#L$2)' > .todos
cat .todos
gh issue edit 488 --body-file .todos
