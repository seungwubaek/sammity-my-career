import { DefaultTheme } from 'styled-components';

const defaultMedia = {
  desktopMinWidth: 1024,
  tabletMaxWidth: 1023,
  tabletMinWidth: 700,
  mobileMaxWidth: 699,
};

const defaultLayout = {
  // Content
  contentWidth: 1024,
  // Header
  headerHeight: 60,
  // Section
  sectionHorizontalPadding: 20,
  // SkillInventory
  skillSearchBtnSize: 20,
  skillSlotHeight: 50,
  skillExpGaugeHeight: 10,
  // Project
  projectCardMaxWidth: 320,
  projectCardHeight: 100,
};

const defaultFont = {
  // Desktop
  fontSize: 16,
  h1Size: '1.8rem',
  h2Size: '1.6rem',
  // Tablet
  tabletFontSize: 16,
  tabletH1Size: '1.6rem',
  tabletH2Size: '1.4rem',
  // Mobile
  mobileFontSize: 16,
  mobileH1Size: '1.6rem',
  mobileH2Size: '1.4rem',
  // Header
  headerLogoSubTitleSize: '1rem',
  headerLogoSubTitleSizeMobile: '0.9rem',
  // Footer
  footerFontSize: '0.8rem',
};

const defaultColors = {
  primary: '#0070C0',
  secondary: '#00B0F0',
  background: '#fff',
  darkBackground: '#222222',
  border: '#e5e5e5',
  lightBorder: '#ebebeb',
  darkBorder: '#a5a5a5',
  // SkillInventory
  skillAlignDefault: '#8dc6ff',
  skillAlignDefaultActive: '#638bb2',
  skillAlignName: '#cbf078',
  skillAlignNameActive: '#9ecb4f', // how about #7bef77
  skillAlignLevel: '#f1b963',
  skillAlignLevelActive: '#ef8534',
  skillExpGaugeBackground: '#dfdfdf',
  skillExpGaugeHigh: '#0070C0',
  skillExpGaugeMid: '#009e47',
  skillExpGaugeLow: '#ffa600',
  skillExpGaugeBeginner: '#ff6e55',
};

const theme: DefaultTheme = {
  mode: 'light',
  media: defaultMedia,
  layout: defaultLayout,
  font: defaultFont,
  color: defaultColors,
};

export type mediaType = typeof defaultMedia;
export type layoutType = typeof defaultLayout;
export type fontType = typeof defaultFont;
export type colorType = typeof defaultColors;
export default theme;
