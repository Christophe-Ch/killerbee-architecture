FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./
RUN npm install

COPY src/ ./

RUN npm run build

EXPOSE 80
CMD ["npm", "start"]