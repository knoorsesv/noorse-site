#! /bin/zsh 
echo "fetching test reports from github"

# todo: only works from inside test folder, use relative paths or throw error if run from elsewhere

rm -rf ./playwright-report
rm -rf ./test-results


branch=$(git symbolic-ref --short HEAD)

lastRunId=$(gh run list --branch $branch --limit 1 --json databaseId --jq '.[0].databaseId')

echo "Got run id $lastRunId for branch $branch"

gh run download $lastRunId --name screenshot-test-playwright-report --dir ./playwright-report
gh run download $lastRunId --name screenshot-test-test-results --dir ./test-results

setopt extended_glob

for file in ./test-results/**/*-actual.png~*retry*(N); do 
  echo "found actual screenshot $file in test results"; 
  # echo $file | sed 's/test-results\/screenshots-Screenshot-Test-for/page/';
  # echo $file | sed 's/test-results\/screenshots-Screenshot-Test-for/page/' | sed 's/\.\///'
  newFileName=$(echo $file | sed 's/test-results\/screenshots-Screenshot-Test-for/page/' | sed 's/\.\///' | sed 's/\/.*-actual.png/-linux.png/')
  echo $newFileName
  mv $file ./screenshots.spec.js-snapshots/$newFileName
done

unsetopt extended_glob

git commit -am "chore: update ci screenshots" && git push

npx playwright show-report

