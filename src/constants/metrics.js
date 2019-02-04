import { Dimensions, Platform } from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const {
  height,
  width
} = Dimensions.get('window');

export const ANDROID_STATUSBAR = 24;
export const DEVICE_HEIGHT = isAndroid ? height - ANDROID_STATUSBAR : height;
export const DEVICE_WIDTH = width;

export const TILE_SIZE = DEVICE_WIDTH * 0.28;
export const TILE_SHADOW_DEPTH = 6;
export const TILE_BORDER_RADIUS = TILE_SIZE * 0.1;

export const BOARD_MARGIN = 20;
export const BOARD_HEIGHT = DEVICE_HEIGHT * 0.96;
export const BOARD_WIDTH = DEVICE_WIDTH;
export const TIME_BAR_HEIGHT = DEVICE_HEIGHT * 0.02;
