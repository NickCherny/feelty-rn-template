import React from 'react';
import styled from 'styled-components/native';
import {
  compose,
  withState,
  withProps,
  withHandlers,
} from 'recompose';

import TabNavigatorStateless from './TabNaviagtor.view';
import CategoryList from '../List/CategoryList';

const SECTIONS = {
  library: 'library',
  photos: 'photos',
  more: 'more'
};

const PhotosList = styled.Text`
  color: #fff;
  font-size: 86;
  height: 200;
`;

const enhanceTabNavigate = compose(
  withState('selectedTab', 'setSelectedTab', SECTIONS.library),
  withProps(() => ({
    tabs: [
      {
        id: SECTIONS.library,
        label: 'Library',
      }, {
        id: SECTIONS.photos,
        label: 'My Photos'
      }, {
        id: SECTIONS.more,
        label: 'More'
      }
    ],
  })),
  withHandlers({
    renderSection: ({ selectedTab }) => () => {
      switch (selectedTab) {
        case SECTIONS.library:
          return <CategoryList />
        case SECTIONS.photos:
          return <PhotosList>Photos</PhotosList>
        case SECTIONS.more:
          return <PhotosList>More details</PhotosList>
      }
    }
  })
);

export default enhanceTabNavigate(TabNavigatorStateless);
