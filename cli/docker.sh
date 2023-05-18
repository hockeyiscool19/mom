
# https://docs.docker.com/engine/reference/commandline/rm/#:~:text=Use%20the%20docker%20container%20prune,(unused)%20images%20and%20networks.
docker rm $(docker ps --filter status=exited -q)

docker build -t cli .

docker run -d cli


docker build -t my-cli .

docker run -it my-cli
