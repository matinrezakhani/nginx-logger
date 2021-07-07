# nginx-logger

> docker images with nginx and logger for frontend projects


## Build docker image

#### **1- Clone** 
```bash
git clone git@github.com:matinrezakhani/nginx-logger.git
```

#### **2- Build** 
```bash
./build.sh <tag name>  
```

<br>
<br>

## Use

#### in develop mode run logger in your system
```bash
docker run -it -p 8080:80 matinrezakhani/nginx-logger:1.0.0 
```

#### 1- Add [logger function](https://github.com/matinrezakhani/nginx-logger/blob/master/logger_front/logger.js)  in you frontend project


#### 2- Use
```javascript
logger(type , location , message); 
```
| param               | type                                | description                                                                                                             |
| ------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------     |
| type                | string "info" , "warn" , "error"    | type of log                                                                                                             |
| location            | string                              | a helper description in case log is from                                                                                |
| message             | string                              | message of your log                                                                                                     |

<br>

## build frontend

### add `FROM matinrezakhani/nginx-logger:1.0.0` in your Dockerfile 

<br>

### Dockerfile:
``` dockerfile
FROM matinrezakhani/nginx-logger:1.0.0

RUN rm -rf /usr/share/nginx

COPY build /var/www/site-data
```