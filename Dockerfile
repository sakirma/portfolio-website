FROM nginx:alpine

COPY ./build /usr/share/nginx/htmly

EXPOSE 8080