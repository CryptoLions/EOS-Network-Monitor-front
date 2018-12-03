FROM node:9.5

# RUN apk add --no-cache gcc make libpng-dev openssl bash

# Copy app source
COPY . /www

# Set work directory to /www
WORKDIR /www

# set env variables
ARG API_URL=https://api.eosnetworkmonitor.io 
ENV API_URL=${API_URL}

# Install Node.js dependencies
RUN cd /www && npm install
RUN npm run build

# set env variables
ENV NODE_ENV production
ENV PORT 8090

# expose the port to outside world
EXPOSE 8090

CMD ["npm", "run", "start:prod"]