import { DefaultTheme } from 'styled-components';

const defaultMedia = {
  desktopMinWidth: 1024,
  tabletMaxWidth: 1023,
  tabletMinWidth: 700,
  mobileMaxWidth: 699,
  mobileMinWidth: 350,
};

const defaultLayout = {
  // Content
  contentWidth: 1024,
  // Header
  headerHeight: 60,
  headerIconSize: 20,
  // Section
  sectionHorizontalPadding: 20,
  // HeroSkillStacks
  heroSkillStacksLogoWidth: {
    desktop: '75px',
    tablet: '60px',
    mobile: '55px',
  },
  heroSkillStacksNumOfSkillPerRow: {
    desktop: 10,
    tablet: 6,
    mobile: 4,
  },
  // SkillInventory
  skillSearchBtnSize: 20,
  skillSlotHeight: 50,
  skillExpGaugeHeight: 10,
  // Projects
  projectCardMaxWidth: 320,
  projectCardHeight: 100,
  // Modal
  modalHorizontalPadding: 20,
  modalVerticalPadding: 10,
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
  black: '#222222',
  background: '#fff',
  darkBackground: '#222222',
  codeBackground: '#b1deee',
  border: '#e5e5e5',
  lightBorder: '#ebebeb',
  darkBorder: '#a5a5a5',
  listHovered: '#f1f1f1',
  // Loading Spinner
  loadingSpinner: '#0070C0',
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
  // Introduction
  speechCardBorder: '#5e5e5e',
  // Modal
  modalBackdrop: 'rgba(0, 0, 0, 0.5)',
};

const defaultStyle = {
  // Header
  dropdownShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
};

const defaultZIndex = {
  // 주석을 이용해서 각 엘리먼트의 상속 관계를 표시해야 함
  // Main
  // ToTop
  toTop: 1,
  // Modal
  modalBackdrop: 100,
  modal: 200,
};

const theme: DefaultTheme = {
  mode: 'light',
  media: defaultMedia,
  layout: defaultLayout,
  font: defaultFont,
  color: defaultColors,
  style: defaultStyle,
  zIndex: defaultZIndex,
};

export type mediaType = typeof defaultMedia;
export type layoutType = typeof defaultLayout;
export type fontType = typeof defaultFont;
export type colorType = typeof defaultColors;
export type styleType = typeof defaultStyle;
export type zIndexType = typeof defaultZIndex;
export default theme;
