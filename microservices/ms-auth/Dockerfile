FROM node:lts-alpine as tsc-builder
WORKDIR /usr/src/app

COPY . .
RUN yarn install && yarn run build

FROM node:lts-alpine as runtime-container
WORKDIR /usr/src/app

COPY --from=tsc-builder /usr/src/app/build ./build
COPY --from=tsc-builder /usr/src/app/locales ./locales
COPY --from=tsc-builder ["/usr/src/app/package.json", "/usr/src/app/yarn.lock", "./"]

RUN yarn install --prod

EXPOSE 80

CMD [ "node", "./build/main.js" ]