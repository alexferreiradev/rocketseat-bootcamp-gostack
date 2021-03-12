# Projeto GoBarber
Projeto criado para o curso da rocketseat. Possui autenticacao com jwt e serviço rest com node no backend.

# Configurações para desenvolvimento
Siga estas instruções para configurar seu ambiente de desenvolvimento.

## Variáveis de ambiente
Cada biblioteca utilizada no sistema possui configurações específicas que são definidas em arquivos na pasta `/src/config`, mas para facilitar o deploy, as configurações são configuradas dinamicamente através de variáveis de ambiente setadas no arquivo `.env`. Um exemplo do arquivo para novos clones existe no arquivo `.env.example`.

### .env em Linux
Existem algumas libs para carregar arquivos env, mas no ambiente linux, a forma mais fácil é usar `source .env`.

## JWT
Utilize o texto plano: `gobarber2020` para gerar o md5 para sign do jwt. A secret deve ser configurada no arquivo `config/auth.js`. Exemplo: 
```
export default {
    secret: "<chave--md5>",
    expires: "1d"
}
```
## Banco de dados
A conexão com o banco de dados deve ser configurada no arquivo `config/database.js`. Exemplo de configuração: 
```
module.exports = {
    development: {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    port: process.env.DB_PORT || 5432,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    protocol: process.env.DB_PROTOCOL || 'postgres',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
    }
  },
  production: {
    dialect: 'postgres',
    protocol: 'postgres',
    use_env_variable: 'DATABASE_URL',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    }
  }
}
```
Portanto, ele utiliza variaveis de ambiente. Configure elas em um arquivo `.env.*`, sendo por exemplo o de desenvolvimento: `.env.development`

### Migrations
Este projeto utiliza o sequelize como ORM. Ele tem o cli `sequelize-cli` para executar migrations manualmente. Contudo, para utilizar em diferentes ambientes, utilize o comando: 
`NODE_ENV=development yarn sequelize-cli db:migrate`

### Configuração do Mongo
Necessário configurar a url de conexão com o banco mongo similar a: `mongodb://localhost:27017/mongobarber?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false`. Esta string pode ser copiada da aplicação `mongoCompass` que conecta com um servidor implantado em  docker.

## Envio de emails
O sistema utiliza o [mailtrap](www.mailtrap.io) para enviar email. As configurações de user estão na pasta `/src/config/` no arquivo `mail.js`. Exemplo de configuração: 
```js
export default {
    host: '',
    port: '',
    secure: false,
    auth: {
        user: '',
        pass: '',
    },
    default: {
        from: 'Equipe GoBarber <noreply@gobarber.com>',
    },
};
```
### Envio de email em background
O sistema utiliza o _redis_ e bee-queue para fazer o trabalho de enfileiramento. As configurações são feitas no arquivo `redis.js` na pasta `/src/config`. Exemplo de configuração: 
```js
export default {
    host: 'localhost',
    port: 6379,
}
```

## Novas requisições
Sempre que adicionar requisições, atualize o arquivo: `Insomnia_lasted.json`.

## Monitoramento de erros
O sistema utiliza o Sentry para monitorar erros. As configurações são feitas pelo arquivo `sentry,js`. Exemplo: 
```js
export default {
    dsn: 'https://*****.ingest.sentry.io/****',
}
```
As configurações no projeto é sentry-dsn, o qual pode ser obtido no site dentro de `settings` do projeto dentro de `client-keys`.

# Testes
Um teste mais rápido pode ser feito com o insomnia, simulando as requisições para a API. Sempre que alterar rotas, atualize o arquivo `Insomnia_lasted.json`. 
