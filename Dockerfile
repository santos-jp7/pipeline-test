FROM node:16-slim as BUILDER

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./

FROM node:16-alpine

ARG NODE_ENV=production

WORKDIR /app

COPY --from=BUILDER /app/ ./

EXPOSE 3000

CMD ["npm", "start"]