FROM node:18

WORKDIR /app

COPY package*.json ./
COPY . .

ARG REVDEBUG_SERVER_HOSTNAME_COMMAND

RUN npm config set @revdebug:registry https://nexus.revdebug.com/repository/npm/
RUN npm install
RUN npm install @revdebug/revdebug
RUN npx revd ${REVDEBUG_SERVER_HOSTNAME_COMMAND}

CMD ["npm", "run", "serve"]

