FROM node:22.11.0-slim

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Yarn
RUN npm install -g yarn | true

# Install dependencies for the monorepo
COPY . .
RUN yarn install

# Expose port 3000
EXPOSE 3000

# Start the app
CMD yarn web
