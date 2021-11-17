FROM node:14

EXPOSE 80
ENV NODE_ENV=production

WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
COPY yarn.lock ./
RUN yarn install --production=false
COPY . .

RUN yarn build

RUN yarn install --production && \
    yarn autoclean --init && \
    echo *.ts >> .yarnclean && \
    yarn autoclean --force && \
    yarn cache clean

CMD ["node", "./build/server.js"]
