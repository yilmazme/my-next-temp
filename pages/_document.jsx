import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    // somehow maybe needed, e.g lang to html
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}