import React from 'react';
import Navigation from './src/Navigation/Navigation';
import {PaperProvider} from 'react-native-paper';
import Providers from './src/store/provider';

function App(): JSX.Element {
  return (
    <Providers>
      <PaperProvider>
        <Navigation></Navigation>
      </PaperProvider>
    </Providers>
  );
}

export default App;
