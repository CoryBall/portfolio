import React from 'react'
import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  Head,
} from 'next/document'
import { DocumentInitialProps } from 'next/dist/next-server/lib/utils'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Karla:400,700|Martel:400,700"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Karla:400,700|Martel:400,700"
            media="print"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Karla:400,700|Martel:400,700"
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
