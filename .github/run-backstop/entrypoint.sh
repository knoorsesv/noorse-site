#!/bin/sh

set -e

sh -c "yarn"
sh -c "yarn test:ci"