FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
ENV NODE_OPTIONS=--max_old_space_size=4096
RUN npm ci 

COPY . .
EXPOSE 8080
CMD [ "npm", "run", "prod" ]