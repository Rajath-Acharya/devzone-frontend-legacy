import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import AuthNavigation from './src/navigation/AuthNavigation';

function App(): JSX.Element {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}

export default App;
