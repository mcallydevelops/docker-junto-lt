FROM node:14-alpine
COPY package.json package-lock.json ./
RUN npm install && mkdir /front-end && mv ./node_modules ./front-end
WORKDIR /front-end
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]