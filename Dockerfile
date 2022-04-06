FROM node:16-alpine3.12

# Set working directory
WORKDIR /usr/src/app

# COPY package.json and package-lock.json into WORKDIR
COPY package*.json ./

# Install our dependencies
RUN npm install

# Copy over all our source code
COPY ./src ./src

# Open port 3000 of the container
EXPOSE 3333

# When starting the container run this command
CMD [ "node", "src/server.js" ]
