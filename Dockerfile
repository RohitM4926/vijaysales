FROM node:7
WORKDIR /app
COPY package.json /app
RUN npm install
COPY node server.json
EXPOSE 9000
