FROM mcr.microsoft.com/playwright:v1.27.0-focal

WORKDIR /work

ADD package.json yarn.lock /work/

RUN yarn install --frozen-lockfile
RUN npx playwright install --with-deps