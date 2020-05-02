FROM buildkite/puppeteer

RUN sudo apt-get update && sudo apt-get -y install procps

RUN yarn --version

COPY "entrypoint.sh" "/entrypoint.sh"
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]