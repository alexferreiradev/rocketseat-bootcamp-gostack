# Projeto GoBarber
Projeto criado para o curso da rocketseat. Possui autenticacao com jwt e serviço rest com node no backend.

# Configurações para desenvolvimento
Siga estas instruções para configurar seu ambiente de desenvolvimento.

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
## Novas requisições
Sempre que adicionar requisições, atualize o arquivo: `Insomnia_lasted.json`.

# Testes
Um teste mais rápido pode ser feito com o insomnia, simulando as requisições para a API. Sempre que alterar rotas, atualize o arquivo `Insomnia_lasted.json`. 
