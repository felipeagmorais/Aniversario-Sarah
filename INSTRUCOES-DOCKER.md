
Caso queira hospedar esse site no docker bastaseguir as orientações desse arquivo

## Requisitos

- Docker instalado no seu computador ou servidor
- Docker Compose instalado (opcional, mas recomendado)

## Opção 1: Usando Docker Compose (Mais fácil)

1. Abra o terminal na pasta do projeto
2. Execute o seguinte comando:

```bash
docker-compose up -d
```

3. O site estará disponível em: http://localhost:8080

Para parar o servidor:

```bash
docker-compose down
```

## Opção 2: Usando Docker diretamente

1. Construa a imagem Docker:

```bash
docker build -t sarah-birthday-site .
```

2. Execute o container:

```bash
docker run -d -p 8080:80 -v ./images:/usr/share/nginx/html/images sarah-birthday-site
```

3. O site estará disponível em: http://localhost:8080

Para parar o servidor:

```bash
docker ps
# Copie o CONTAINER ID do container sarah-birthday-site
docker stop [CONTAINER_ID]
```

## Para hospedagem online

Se você deseja hospedar este site online, você pode utilizar diversos serviços, pessoalmente gosto muito do railway
