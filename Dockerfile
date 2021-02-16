FROM node:14.15.5

ENV NODE_ENV=production
COPY . /app
WORKDIR /app
RUN yarn install

CMD [ "node", "index.js" ]