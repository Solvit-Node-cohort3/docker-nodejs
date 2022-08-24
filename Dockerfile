FROM node:17-alpine 

USER node

RUN mkdir /home/node/src 

WORKDIR /home/node/src

COPY --chown=node:node package.json package-lock.json ./ 

COPY --chown=node:node . .

RUN npm ci 

EXPOSE 3000

CMD ["node", "server.js"]



