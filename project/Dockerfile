FROM node:12-alpine as builder

WORKDIR /app

ADD . .

ENV NODE_ENV production

RUN npm install -g yarn

RUN yarn install

RUN yarn build

RUN yarn export

FROM nginx:1.17.3-alpine

COPY --from=builder /app/out/* /usr/share/nginx/html/