# Projeto frontend para fastfeet
Projeto web para frontend do sistema fastfeet.

# Dev
- Configuação de api
- Configuação de ambiente

## Ambiente
O prettier e eslint são utilizados para manter legibilidade de códigos.

## API
A Api está disponível através de IP e porta configurado em arquivo `.env`. Utilize o exemplo `.env.example` para criar o arquivo `.env`.

A api está em projeto na pasta `../backend`. O debug pode ser feito utilizando o `/services/server.json` com o [serverjs](). Exemplo:
`npx json-server --watch ./src/services/server.json --port 8080` ou instale globalmente com `npm install -g json-server`
