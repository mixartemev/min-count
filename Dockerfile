FROM node:alpine
MAINTAINER Mike Artemiev <mixartemev@gmail.com>
WORKDIR /usr/src/app
COPY public .
EXPOSE 3000
CMD ["node", "public/app.js"]