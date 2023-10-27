import {
  colorType,
  fontType,
  layoutType,
  mediaType,
  styleType,
  zIndexType,
} from '@/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: string;
    media: mediaType;
    layout: layoutType;
    font: fontType;
    color: colorType;
    style: styleType;
    zIndex: zIndexType;
  }
}
