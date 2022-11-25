FROM node:16


WORKDIR /app

COPY  package*.json ./
COPY  .env ./

RUN npm install

COPY . .

CMD [ "npm" ,"start"]

# crear una imagen de coker

# docker build docker build -t node-infraestructura .

# docker images

#docker run -it -p 8080:8080  node-infraestructura 

#              nombre-imagem      usuario/nombre-imagen  
# docker tag node-infraestructura gianvaldiris/node-infraestructura




