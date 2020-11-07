# Projeto Gobarber

## Desenvolvimento
Projeto criado com yarn, portanto, utilize `yarn` para compilar e `yarn start` para executar.

## Configurar import root
Add libs: `yarn add customize-cra react-app-rewired babel-plugin-root-import -D`. Crie o arquivo config-overrides.js: 
```
// eslint-disable-next-line import/no-extraneous-dependencies
const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(addBabelPlugin([]));
``` 
Trocar `react-scripts` por `rewired` no package.json: 
```
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
```
Configure o esline com novo plugin `yarn add eslint-import-resolver-babel-plugin-root-import -D`:
```
...rules...,
settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      },
    },
  },
```
Configure para o VSCODE para encontrar o arquivo com jsconfig.json: 
```
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "~/*": ["*"]
    }
  }
}
```

## Configuração de redux
Adicione as libs: `yarn add redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer`.

