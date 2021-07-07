#!/bin/bash

if [ -z "$1" ]
  then
    echo "No argument supplied, please pass 1 or 2 or ... for image tag"
    exit
fi

#npm run build
cd ./logger_node && npm install && cd ..
export IMAGE_NAME=matinrezakhani/nginx-logger:$1
docker build . --no-cache -t $IMAGE_NAME
docker tag $IMAGE_NAME $IMAGE_NAME
docker push $IMAGE_NAME
