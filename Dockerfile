FROM alpine:3.14
WORKDIR /metrics
RUN apk add --no-cache nodejs-current npm
COPY . .
RUN npm install
ENV NPN_CONFIG_LOGLEVEL warn
ENV PATH /metrics/node_modules/.bin:$PATH
CMD npm run start
EXPOSE 3000