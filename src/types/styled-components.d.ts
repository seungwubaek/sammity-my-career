import { colorType, fontType, layoutType, mediaType } from '@/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: string;
    media: mediaType;
    layout: layoutType;
    font: fontType;
    colors: colorType;
  }
}
