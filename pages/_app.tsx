import React from "react";
import { AppProps } from "next/app";

import "../css/index.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
