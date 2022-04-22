FROM node:17-alpine AS appbuild
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=appbuild /usr/src/app/dist/livraria-io-front /usr/share/nginx/html
COPY ./nginx/default.conf.template /etc/nginx/conf.d/default.conf.template
CMD ["/bin/bash", "-c", \
"echo API_URL=[$API_URL], && \
echo PORT=[$PORT], && \
sed -i s#HEROKU_API_URL#$API_URL#g /usr/share/nginx/html/main.*.js && \
envsubst '$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && \
nginx -g 'daemon off;'"]
