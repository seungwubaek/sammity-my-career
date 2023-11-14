// TODO: need to use markdown converting

const aboutSiteMessages = [
  `This site is developed with Next.js (React based Front-End framework).`,
  'React is a SPA that works with Client Side Rendering, so painting screen is not completed until all scripts are ' +
    `downloaded from the server.
  As a result, users see only white blank screens for a long time when they access the site for the first time, ` +
    `which leads to a decrease in UI experience. (slow First Contentful Paint)`,
  `Next.js solved this problem to use SSR (Server Side Rendering) of React components by utilizing Server Component of React v18.
  It also provides various optimization features such as automatic image quality adjustment, caching for script, component, and data fetching.`,
  `This site has improved Web Core Vital score by utilizing those various optimization features of Next.js.
  By introducing a Composite Rendering method of Client Side Rendering and Server Side Rendering, it made fast Painting and User Interaction possible.
  Also, this site prevented Cumulative Layout Shift caused by Image Lazy Loading by utilizing <Image> component, ` +
    `which is an extension of HTML <img> element made by Next.js,
  And this site dramatically reduced Painting Delay caused by downloading CSS-in-JS on Client Side by applying styled-components, ` +
    `one of React's major Third party, on Server Side.`,
  'This site is being served with the following structure.',
];

export default aboutSiteMessages;
