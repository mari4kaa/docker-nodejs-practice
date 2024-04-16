FROM node:21-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@10.5.2

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]
