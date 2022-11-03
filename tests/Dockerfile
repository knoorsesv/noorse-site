FROM mcr.microsoft.com/playwright:v1.27.0-focal

RUN npm i -g pnpm

WORKDIR /work

ADD package.json pnpm-lock.yaml /work/

RUN pnpm i --frozen-lockfile
RUN npx playwright install --with-deps