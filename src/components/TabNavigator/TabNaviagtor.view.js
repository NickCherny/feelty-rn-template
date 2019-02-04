import React from 'react';
import styled from 'styled-components';
import {
  View,
} from 'react-native';

import Tabs from 'react-native-tabs';

const WrapperTabs = styled.View`
  height: 100%;
`;

const ItemTab = styled.Text`
  height: 60;
  color: #444;
`;

const TabNavigatorStateless = ({
  tabs,
  selectedTab,
  setSelectedTab,
  renderSection
}) => (
  <WrapperTabs>
    {renderSection()}
    <Tabs
      selected={selectedTab}
      selectedStyle={{color: '#FFF'}}
      onSelect={({ props: { name } }) => setSelectedTab(name)}
    >
      {tabs.map(({ id, label }) => <ItemTab key={id} name={id}>{label}</ItemTab>)}
    </Tabs>
  </WrapperTabs>
);

export default TabNavigatorStateless;
