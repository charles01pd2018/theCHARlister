import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head >
          {/* Site Logo */}
          <link rel="icon" href="/favicon.ico" />
          {/* Imported Fonts */}
          <link rel="preload" href="/static/fonts/paytone-one/PaytoneOne-Regular.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/static/fonts/valera-round/VarelaRound-Regular.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/static/fonts/questrial/Questrial-Regular.ttf" as="font" crossOrigin="" /> 
        </Head>
        <body className='loading'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;