FROM mcr.microsoft.com/playwright:focal

WORKDIR /work

ADD package.json /work/package.json
RUN cat package.json

RUN npm install
RUN npx playwright install
RUN npx playwright install-deps