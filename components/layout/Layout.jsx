import React from "react";
import Head from "next/head";
import styles from "./Layout.module.scss";
import Navbar from "../navbar/Navbar";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>my-next</title>
        <meta name="description" content="Next App by mehmet yilmaz" />
        <meta name="keywords" content="mehmet yilmaz" />
        <meta name="author" content="mehmet yilmaz" />
        <link rel="icon" href="/kalp.png" />
      </Head>
        <Navbar/>
      <div className={styles.main}>
        {children}
        </div>
    </div>
  );
}

export default Layout;
