FROM mcr.microsoft.com/playwright:v1.50.0-noble

WORKDIR /work

ADD package.json pnpm-lock.yaml /work/
# Explicitly installing latest version because of bug https://github.com/nodejs/corepack/issues/612
RUN npm install --global corepack@latest
RUN corepack --version
RUN corepack enable

RUN pnpm install --frozen-lockfile
RUN npx playwright install --with-deps