FROM mcr.microsoft.com/playwright:v1.50.0-noble

WORKDIR /work

ADD package.json pnpm-lock.yaml /work/
RUN corepack enable

RUN pnpm install --frozen-lockfile
RUN npx playwright install --with-deps