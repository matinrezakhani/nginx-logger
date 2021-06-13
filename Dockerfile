FROM nginx:mainline-alpine

RUN apk add nodejs 

COPY nginx.conf /etc/nginx
COPY logger_node /var/www/logger
COPY start_logger.sh /var/www/ 

RUN chmod +x /var/www/start_logger.sh

CMD /var/www/start_logger.sh




