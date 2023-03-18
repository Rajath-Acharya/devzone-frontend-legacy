import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import GlobalNavigation from './src/navigation/GlobalNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <GlobalNavigation />
    </NavigationContainer>
  );
}

export default App;
