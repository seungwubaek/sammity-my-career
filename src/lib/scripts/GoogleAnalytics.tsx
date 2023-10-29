import React from 'react';
import Script from 'next/script';

const ScriptGoogleAnalytics: React.FC = () => (
  <>
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-PHJ1JR9EPL"
    />
    <Script id="google-analytics">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PHJ1JR9EPL');
        `}
    </Script>
  </>
);

export default ScriptGoogleAnalytics;
