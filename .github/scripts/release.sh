#!/bin/sh

git config user.name "Github action"
git config user.email "actions@gmail.com"

yarn global add standard-version
yarn release
