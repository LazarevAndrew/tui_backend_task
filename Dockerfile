FROM node:12-alpine

EXPOSE 80

ENV ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
