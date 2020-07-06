# Projeto fastfeet
Projeto criado para o curso da rocketseat. Possui autenticacao com jwt e serviço rest com node no backend.

# Configurações para desenvolvimento
Siga estas instruções para configurar seu ambiente de desenvolvimento.

## Variáveis de ambiente
Cada biblioteca utilizada no sistema possui configurações específicas que são definidas em arquivos na pasta `/src/config`, mas para facilitar o deploy, as configurações são configuradas dinamicamente através de variáveis de ambiente setadas no arquivo `.env`. Um exemplo do arquivo para novos clones existe no arquivo `.env.example`.

## JWT
Utilize o texto plano: `fastfeet` para gerar o md5 para sign do jwt. A secret deve ser configurada no arquivo `config/auth.js`, similar a:
```
export default {
    secret: "asdfasdfasdfasdfasdfasdf",
    expires: "7d"
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
