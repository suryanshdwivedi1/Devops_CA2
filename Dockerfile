FROM node:18

WORKDIR /devops_ca2

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]