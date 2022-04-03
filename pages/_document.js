import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth" lang="en">
        <Head />
        <body className=" text-inavy dark:text-white bg-white dark:bg-idark transition-all duration-[100] ease-in">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
