FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json .

RUN npm install

COPY . .
RUN npm run build

RUN  sed -i 's/\r$//' ./entrypoint.sh && chmod +x ./entrypoint.sh
ENTRYPOINT  ["./entrypoint.sh"]
