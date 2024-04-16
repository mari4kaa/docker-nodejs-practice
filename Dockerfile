FROM node:21-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@10.5.2

COPY . .

RUN npm run build

FROM node:15-alpine AS final

WORKDIR /app

COPY --from=builder /app/package*.json ./

COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/dist ./dist

CMD ["node", "./dist/src/main.js"]
