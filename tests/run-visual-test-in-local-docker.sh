#! /bin/bash
echo "running tests in docker image"

die () {
    echo >&2 "$@"
    exit 1
}

echo "$1"

if [ "$#" -lt 1 ]; then
    echo "Error: At least one argument is required you should provide the base url to test."
    echo "Usage: $0 <argument>"
    exit 1
fi

if [ "$2" == "--update" ]; then
    echo "--update flag is provided. Running pnpm update command."
TEST_COMMAND="pnpm test:update"
else
    echo "Running pnpm with provided argument: $1"
TEST_COMMAND="pnpm test:visual"
fi

# [[ -z $1 ]] || { echo "Invalid input, provide the PLAYWRIGHT_TEST_BASE_URL as first argument." >&2; exit 1; }

# $IMAGE=ghcr.io/knoorsesv/playwright-base:pnpm-1.0
IMAGE=ghcr.io/knoorsesv/playwright-base:local

docker run -e PLAYWRIGHT_TEST_BASE_URL="$1" -e DEBUG=pw:api -v "$(pwd)":/work --rm "$IMAGE" $TEST_COMMAND --max-failures=1 

if [ $? -ne 0 ]; then
    echo "Error: Docker command failed. Executing error handling command..."
    pnpm exec playwright show-report
    exit 1
else
    echo "Docker command executed successfully."
fi