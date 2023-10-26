const aboutSiteMessages = [
  `이 사이트는 Next.js(React 기반 Front-End 프레임워크)로 개발되었습니다.`,
  `SPA인 React는 Client Side Rendering으로 동작하기 때문에 서버로부터 Script를 모두 다운로드하기 전까지 화면 Painting이 이루어지지 않습니다.
  이로 인해 유저는 사이트에 처음 접속했을 때 오랫동안 하얀 빈 화면만 보게 되므로, UI 경험이 하락하게 됩니다. (slow First Contentful Paint)`,
  `Next.js는 React v18의 Server Component를 활용하여 React의 컴포넌트를 Serve Side Rendering 하는 것으로 이 문제를 해결하였습니다.
  또한 이미지 품질 자동 조정, 컴포넌트, Script, data fetching을 위한 캐싱과 같이 다양한 최적화 기능을 제공합니다.`,
  `이 사이트는 Next.js의 다양한 최적화 기능을 활용하여 Web Core Vital 점수를 높였습니다.
  Client Side Rendering과 Server Side Rendering이 혼합된 렌더링 방식을 도입해서 빠른 Painting과 User Interaction을 가능케 하였습니다.
  또한 Next.js가 HTML <img> element를 확장하여 만든 <Image> 컴포넌트를 활용하여 Image Lazy Loading으로 인한 Cumulative Layout Shift를 예방하였고,
  React의 주요 Third party 중 하나인 styled-components를 Server Side에서 적용하여 Client Side에서 CSS-in-JS 다운로드로 인한 ` +
    `Painting Delay를 획기적으로 줄였습니다.`,
  `이 사이트는 아래와 같은 구조로 서비스 되고 있습니다.`,
];

export default aboutSiteMessages;
