

docker build --no-cache -t my-lambda .
docker run -it my-lambda

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 363194772334.dkr.ecr.us-east-1.amazonaws.com
docker push 363194772334.dkr.ecr.us-east-1.amazonaws.com/mom-texter:tag
docker tag my-lambda:latest 363194772334.dkr.ecr.us-east-1.amazonaws.com/mom-texter:tag
docker pull 363194772334.dkr.ecr.us-east-1.amazonaws.com/mom-texter:tag
docker run -it --name temp6 363194772334.dkr.ecr.us-east-1.amazonaws.com/mom-texter:tag

