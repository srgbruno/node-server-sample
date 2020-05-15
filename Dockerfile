# Specifying the base image
FROM node:alpine

# Setting the app workspace inside the container 
WORKDIR /usr/app

# Copying node dependencies file and install it 
COPY package*.json ./
RUN npm install

# Copying remaining app files to the WORKDIR container
COPY . .

# Setting port to be used in the container
EXPOSE 8080

CMD [ "npm", "start" ]