# Como hospedar o site com Docker

Este documento contém instruções para hospedar o site de aniversário da Sarah usando Docker.

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

Se você deseja hospedar este site online, você pode:

1. Usar um serviço como Netlify, Vercel ou GitHub Pages para hospedar o site estaticamente
2. Usar um serviço como DigitalOcean, Heroku ou AWS para hospedar o container Docker

### Exemplo com Netlify

1. Crie uma conta no Netlify
2. Arraste e solte a pasta do projeto no Netlify
3. O site estará disponível em poucos segundos

### Exemplo com DigitalOcean

1. Crie uma conta no DigitalOcean
2. Crie um novo Droplet com Docker pré-instalado
3. Faça upload dos arquivos para o Droplet
4. Execute o comando `docker-compose up -d`
5. Configure as regras de firewall para permitir tráfego na porta 80
