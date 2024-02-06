FROM node:20-alpine

WORKDIR /app

COPY . .

RUN yarn install

# Creates a "dist" folder with the production build
RUN yarn run build