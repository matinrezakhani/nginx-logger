FROM node:current-alpine3.13

RUN apk add nginx 

COPY nginx.conf /etc/nginx
COPY logger_node /var/www/logger
COPY run.sh /var/www/ 

RUN chmod +x /var/www/run.sh
RUN nginx && nginx -s reload 

CMD /var/www/run.sh




