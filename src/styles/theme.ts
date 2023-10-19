import { DefaultTheme } from 'styled-components';

const defaultMedia = {
  desktopMinWidth: 1024,
  tabletMaxWidth: 1023,
  tabletMinWidth: 700,
  mobileMaxWidth: 699,
};

const defaultLayout = {
  // Header
  headerHeight: 60,
  // Section
  sectionHorizontalPadding: 20,
};

const defaultFont = {
  fontSize: 16,
  mobileFontSize: 16,
  headerLogoSubTitleSize: '1rem',
};

const defaultColors = {
  bgColor: '#fff',
  borderColor: '#e5e5e5',
  lightBorderColor: '#ebebeb',
};

const theme: DefaultTheme = {
  mode: 'light',
  media: defaultMedia,
  layout: defaultLayout,
  font: defaultFont,
  colors: defaultColors,
};

export type mediaType = typeof defaultMedia;
export type layoutType = typeof defaultLayout;
export type fontType = typeof defaultFont;
export type colorType = typeof defaultColors;
export default theme;
