import Head from "next/head";
import Script from "next/script";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>ClientBoost360</title>
        <meta
          name="description"
          content="ClientBoost360 is a full-service digital marketing brand by Synergy Stream LLC, helping law firms, clinics, and professional service providers grow without the high cost of an in-house team."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* HubSpot script — load ONCE globally */}
      <Script
        src="https://js-na2.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
      />

      {/* Header */}
      <Header />

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;
