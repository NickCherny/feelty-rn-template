import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

import { LibraryScreen } from './screens/Library';


const ScreenView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

const WelcomeText = styled.Text`
  font-size: 20;
  text-align: center;
  margin-bottom: 10;
`;

const InstructionText = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 5;
`;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const App = () => (
  <LibraryScreen />
);

export default App;
