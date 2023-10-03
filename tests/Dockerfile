FROM mcr.microsoft.com/playwright:v1.38.1-focal

WORKDIR /work

ADD package.json yarn.lock /work/

RUN yarn install --frozen-lockfile
RUN npx playwright install --with-deps