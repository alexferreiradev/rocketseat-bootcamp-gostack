# Projeto fastfeet
Projeto criado para o curso da rocketseat. Possui autenticacao com jwt e serviço rest com node no backend.

# Configurações para desenvolvimento
Siga estas instruções para configurar seu ambiente de desenvolvimento.

## JWT
Utilize o texto plano: `fastfeet` para gerar o md5 para sign do jwt. A secret deve ser configurada no arquivo `config/auth.js`, similar a: 
```
export default {
    secret: "asdfasdfasdfasdfasdfasdf",
    expires: "7d"
}
```