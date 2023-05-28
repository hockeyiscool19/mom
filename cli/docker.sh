#!/bin/bash

source dev.env.gitignore


case "$1" in
  -b) docker build -t my-cli . ;;
  -r) docker run -it my-cli ;;
  -l) aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $AWS_ACCOUNT_NUM.dkr.ecr.us-east-1.amazonaws.com ;;
  -p) docker push 363194772334.dkr.ecr.us-east-1.amazonaws.com/mom-texter:tag && docker tag my-cli:latest $AWS_ACCOUNT_NUM.dkr.ecr.us-east-1.amazonaws.com/mom-texter:tag ;;
  -m) docker tag my-cli:latest $AWS_ACCOUNT_NUM.dkr.ecr.us-east-1.amazonaws.com/mom-texter:tag ;;
  -r) docker stop temp && docker rm temp ;;
  -a) docker build --no-cache -t my-cli . && 
        aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $AWS_ACCOUNT_NUM.dkr.ecr.us-east-1.amazonaws.com &&
        docker push $AWS_ACCOUNT_NUM.dkr.ecr.us-east-1.amazonaws.com/mom-texter:tag && docker tag my-cli:latest $AWS_ACCOUNT_NUM.dkr.ecr.us-east-1.amazonaws.com/mom-texter:tag &&
        docker tag my-cli:latest $AWS_ACCOUNT_NUM.dkr.ecr.us-east-1.amazonaws.com/mom-texter:tag &&
        docker stop temp && 
        docker rm temp &&
        docker run -it --name temp $AWS_ACCOUNT_NUM.dkr.ecr.us-east-1.amazonaws.com/mom-texter:tag ;;

  *) echo "Invalid option";;
esac
