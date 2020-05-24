FROM buildkite/puppeteer

RUN apt-get update && apt-get -y install procps

RUN yarn --version
RUN yarn global add backstopjs serve

COPY "entrypoint.sh" "/entrypoint.sh"
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]