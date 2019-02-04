import React from 'react';
import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';

import {
  DEVICE_WIDTH
} from '../../constants/metrics';

const ContainerItem = styled.View`
`;

const ImageItem = styled.View`
  width: 100%;
  flex: 4;
  flex-basis: 100;
  background: #ccc;
`;

const DescriptionItemImage = styled.Text`
  color: #fff;
  font-size: 16;
`;

const MOC_DATA = [
  {
    url: '',
    label: 'some text'
  },
  {
    url: '',
    label: 'Awesome'
  },
  {
    url: '',
    label: 'aasdasd asads a'
  }
];

const PackCarousel = () => (
  <Carousel
    ref={(c) => this._carousel = c}
    data={MOC_DATA}
    renderItem={({ item: { label } }) => (
      <ContainerItem>
        <ImageItem />
        <DescriptionItemImage>{label}</DescriptionItemImage>
      </ContainerItem>
    )}
    sliderWidth={DEVICE_WIDTH}
    itemWidth={DEVICE_WIDTH - 40}
  />
);

export default PackCarousel;
