import React from 'react';
import styled from 'styled-components/native';

import CategoryList from '../../components/List/CategoryList';
import { TabNavigator } from '../../components/TabNavigator';

const ScreenView = styled.View`
  background-color: #000;
`;

const LibraryView = () => (
  <ScreenView>
    <TabNavigator />
  </ScreenView>
);

export default LibraryView;
