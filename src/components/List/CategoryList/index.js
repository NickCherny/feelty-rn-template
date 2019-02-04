import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import PackCarousel from '../../PackCarousel';

const ContainerItem = styled.View`
  height: 200;
  margin-bottom: 16;
`;

const HeaderItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  padding-left: 20;
  padding-right: 20;
`;

const TitleItem = styled.Text`
  font-size: 28;
  font-weight: 800;
  color: #fff;
`;

const LinkItem = styled.Text`
  color: #fff;
`;

const WrapperCategoryList = styled.View`
  padding-top: 40;
`;

const CategoryList = () => (
  <WrapperCategoryList>
    <FlatList
      data={[{ key: '1', title: 'New'}, { key: '2', title: 'Group 1'}, { key: '3', title: 'New'},]}
      renderItem={({ item: { title } }) => (
        <ContainerItem>
          <HeaderItem>
            <TitleItem>{title}</TitleItem>
            <LinkItem>link</LinkItem>
          </HeaderItem>
          <PackCarousel />
        </ContainerItem>
      )}
    />
  </WrapperCategoryList>
);

export default CategoryList;
