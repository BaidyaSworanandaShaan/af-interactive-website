FROM node:20.10.0
# LABEL app=recruit-fe-app-v1

WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]