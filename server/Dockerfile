FROM node:alpine
RUN npm i -g --production json-server
WORKDIR /server
ENTRYPOINT ["json-server"]
CMD ["-w", "db.json", "-p", "80", "-H", "0.0.0.0"]