# Projeto GoBarber
Projeto criado para o curso da rocketseat. Possui autenticacao com jwt e serviço rest com node no backend.

# Configurações para desenvolvimento
Siga estas instruções para configurar seu ambiente de desenvolvimento.

## Variáveis de ambiente
Cada biblioteca utilizada no sistema possui configurações específicas que são definidas em arquivos na pasta `/src/config`, mas para facilitar o deploy, as configurações são configuradas dinamicamente através de variáveis de ambiente setadas no arquivo `.env`. Um exemplo do arquivo para novos clones existe no arquivo `.env.example`.

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
    dialect: 'postgres',
    host: '172.17.0.2',
    username: '<user>',
    password: '<password>',
    database: 'go-barber',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
    }
}
```

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

# Testes
Um teste mais rápido pode ser feito com o insomnia, simulando as requisições para a API. Sempre que alterar rotas, atualize o arquivo `Insomnia_lasted.json`. 
