import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes';
import NavigationService from './services/navigation';

const App = () => {
  const signed = useSelector((state) => state.auth.signed);
  const Routes = createRouter(signed);

  return (
    <Routes
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  );
};

export default App;
