docker run --gpus all --shm-size 1g -p 8080:80 -v ./model:/model ghcr.io/huggingface/text-generation-inference:1.3 --model-id /model
cd /var/www/html/YouTube-operational-API
docker-compose up -d

# python3 manage.py runserver 0:3000