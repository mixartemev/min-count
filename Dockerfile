FROM node:alpine
MAINTAINER Mike Artemiev <mixartemev@gmail.com>
WORKDIR /usr/src/app
COPY app.js ./
EXPOSE 3000
CMD ["node", "app.js"]