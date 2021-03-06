# Projeto Fastfeet mobile
Aplicativo para entregadores utilizarem

# Desenvolvimento
O projeto foi criado utilizando a cli `npx react-native init modulo06`. Não foi configurado/testado no emulador, somente dispositivo físico android.

## Configurar ambiente para Android
As clis de react utilizam binários do SDK android, desta forma eles devem estar no PATH dos terminais que você irá utilizar. Adicione assim:
```
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
Ambiente com alias esta com o nome: `configureReactNativeEnv`.

## Rodar o projeto com Android USB
Execute `npx react-native start` e em outro terminal `npx react-native run-android`.
Caso não execute normal na primeira vez, execute: `cd android && ./gradlew clean && cd .. && npx react-native run-android` em outro terminal.

## Rodar reactotron via USB
Execute `adb reverse tcp:9090 tcp:9090` para redirecionar as portas do android. Configure o ip da sua máquina de dev no codigo de `ReactotronConfig.js`.

## Adição de react navigation
Adicione as seguintes bibliotecas: `yarn add @react-navigation/native` e `yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view`

### Com Stacks
Adicione a lib: `yarn add @react-navigation/stack` e utilize stacks para navegaçao

### Uso de react vector icons
- Android: Deve seguir os passos de [Doc]([www.github.com](https://github.com/oblador/react-native-vector-icons#android)):
  - apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
  - project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
  - compile project(':react-native-vector-icons')
  <!-- - import com.oblador.vectoricons.VectorIconsPackage; em MainApplication
  - , new VectorIconsPackage() em MainApplication -->
  -
]

## API
A Api está disponível através de IP e porta configurado em arquivo `.env`. Utilize o exemplo `.env.example` para criar o arquivo `.env`.

A api está em projeto na pasta `../backend`. O debug pode ser feito utilizando o `/services/server.json` com o [serverjs](). Exemplo:
`npx json-server --watch ./src/services/server.json --port 8080` ou instale globalmente com `npm install -g json-server`
