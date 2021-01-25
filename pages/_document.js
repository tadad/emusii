import Document, { Html, Head, Main, NextScript } from 'next/document'
import * as snippet from '@segment/snippet'

export default class MyDocument extends Document {
  renderSnippet() {
    const opts = {
      apiKey: "dWtvgqRiQMoTI7IZkJRrXXG9hJCcF937",
      page: true,
    }

    return snippet.min(opts)
  }

  render() {
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
