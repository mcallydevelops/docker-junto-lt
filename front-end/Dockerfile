FROM node:14-alpine
COPY package.json package-lock.json ./
RUN npm install --only=prod && mkdir /front-end && mv ./node_modules ./front-end
WORKDIR /front-end
COPY . .
RUN npm run build
CMD ["npm", "start"]