FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json .

RUN npm install

COPY . .
RUN npm run build

FROM debian:12-slim as frontend
COPY --from=builder /app/build/server /app/build/server
