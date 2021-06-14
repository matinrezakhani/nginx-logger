# nginx-logger

> docker images with nginx and logger for frontend projects


## Build docker image

#### **1- Clone** 
```bash
git clone https://git.kuknos.org/kuknos-internal/frontend-logging-baseimage.git
```

#### **2- Build** 
```bash
./build.sh <tag name>  // build docker image and push to kuknos repository
```

<br>
<br>

## Use

#### in develop mode run logger in your system
```bash
docker run -it -p 8080:80 repository.kuknos.org:3051/kuknos/nginx-logger // run loger and listen on port 8080
```

#### 1- Add [logger function]()  in you frontend project


#### 2- Use
```javascript
    logger(type , location , message) 
```
| param               | type                                | description                                                                                                             |
| ------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------     |
| type                | string "info" , "warn" , "error"    | type of log                                                                                                             |
| location            | string                              | a helper description in case log is from                                                                                |
| message             | string                              | message of your log                                                                                                     |



