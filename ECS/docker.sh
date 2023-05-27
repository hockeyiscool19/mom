

docker build --no-cache -t my-ecs .
docker run -it my-ecs

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 363194772334.dkr.ecr.us-east-1.amazonaws.com
docker push 363194772334.dkr.ecr.us-east-1.amazonaws.com/mom-texter:tag
docker tag my-ecs:latest 363194772334.dkr.ecr.us-east-1.amazonaws.com/mom-texter:tag
docker pull 363194772334.dkr.ecr.us-east-1.amazonaws.com/mom-texter:tag
docker run -it --name temp7 363194772334.dkr.ecr.us-east-1.amazonaws.com/mom-texter:tag

