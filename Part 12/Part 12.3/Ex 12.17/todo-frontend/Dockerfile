FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

FROM nginx:1.25-alpine

EXPOSE 80

COPY --from=0 /usr/src/app/dist /usr/share/nginx/html

ENV VITE_BACKEND_URL=http://localhost:3000