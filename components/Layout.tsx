import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="relative h-screen w-screen flex flex-col justify-center items-center">
    <Head>
      <title>mlpal.ai</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="mlpal - an AI solutions architect"
      />
      <meta property="og:title" content={`mlpal.ai`} />
      <meta
        property="og:description"
        content="mlpal - an AI solutions architect"
      />
      <meta property="og:url" content="https://mlpal.ai/" />
      <meta property="og:type" content="website" />
    </Head>
    {children}
  </div>
);

export default Layout;
