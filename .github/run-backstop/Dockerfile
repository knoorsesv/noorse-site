FROM buildkite/puppeteer

RUN apt-get update && apt-get -y install procps

RUN yarn --version
RUN yarn global add backstopjs serve start-server-and-test

COPY "entrypoint.sh" "/entrypoint.sh"
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]