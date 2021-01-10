# Go-Barber para cliente
Projeto mobile para os clientes do go-barber conseguirem agendar cortes.

# Desenvolvimento
### Rodando localmente Android
* Conectar seu celular android em modo de debug no PC 
* Construir o projeto android: `yarn run android`
* Executar o projeto com um novo terminal: `yarn start`
* Enviar o projeto android para celular no terminal antigo: `yarn run android`
* O projeto irá executar e poderá deixar o terminal yarn start executando

### Rotas
O projeto utiliza react navigation 4 devido seguir curso da rocketseat.

### Icones
O projeto utiliza a lib vector-icons, veja mais config na [doc oficial](https://github.com/oblador/react-native-vector-icons/tree/v7.1.0)

## Logs
O projeto utiliza o reactotron para criar logs para o desenvolvedor. Configure o IP da sua máquina em `config/reactotronConfig.js`. Assim o app poderá fazer a conexão por um dispositivo que está na mesma rede e o reactotron poderá conectar com o cliente na sua máquina. Para criar logs utilize:
`console.tron.log('msg')`.

## Redux
O projeto utiliza o redux para store dados carregados da api.