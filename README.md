# Node.js Redis Cache Example

Este é um exemplo simples de aplicativo Node.js que utiliza o Redis como cache. O aplicativo demonstra como realizar operações básicas de cache, como definir valores, recuperar valores e definir um tempo de expiração para chaves no Redis.

## Requisitos

Para executar este projeto, você precisa ter o Node.js e o Redis instalados em sua máquina.

- Node.js: [Instalação do Node.js](https://nodejs.org/)
- Redis: [Instalação do Redis](https://redis.io/download)

## Instalação

1. Clone este repositório para o seu ambiente local:
    ```bash
    git clone https://github.com/ViniciusPereira03/node-redis-cache.git
    ````

2. Navegue até o diretório do projeto:
    ```bash
    cd node-redis-cache
    ```

3. Instale as dependências do projeto:
    ```bash
    npm install
    ```

## Executando o projeto

Para executar o projeto, você pode simplesmente rodar o script `app.js`:

```bash
node app.js
```

## Funcionalidades
O aplicativo demonstra as seguintes funcionalidades:

1. Definir um valor no Redis.
2. Recuperar um valor do Redis.
3. Definir um valor com tempo de expiração no Redis.
4. Recuperar um valor em intervalos de tempo, para acompanhar a expiração no Redis.
