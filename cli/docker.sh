# Steps to build and run the docker image
docker build -t my-cli .
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 363194772334.dkr.ecr.us-east-1.amazonaws.com
docker tag my-cli:latest 363194772334.dkr.ecr.us-east-1.amazonaws.com/mom-texter:tag
docker push 363194772334.dkr.ecr.us-east-1.amazonaws.com/mom-texter:tag
