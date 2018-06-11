# Instructions copied from - https://hub.docker.com/_/python/
FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

#COPY package*.json ./
#RUN npm install

# Bundle app source
COPY . .

# tell the port number the container should expose
EXPOSE 3000

# run the command
CMD ["npm", "start"]
