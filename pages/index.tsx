import React, { Fragment } from "react";
import Head from "next/head";

import "../css/index.css";

const index: React.StatelessComponent<{}> = () => (<Fragment>
  <Head>
    <title>Next.js + Jest + TypeScript</title>
  </Head>
  <p>A simple example repo</p>
</Fragment>);

export default index;
