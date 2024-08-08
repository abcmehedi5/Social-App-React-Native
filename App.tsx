import React from 'react';
import Navigation from './src/Navigation/Navigation';
import {PaperProvider} from 'react-native-paper';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <Navigation></Navigation>
    </PaperProvider>
  );
}

export default App;
