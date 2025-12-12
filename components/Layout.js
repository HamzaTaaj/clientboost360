import Head from 'next/head';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>ClientBoost360</title>
                <meta name="description" content="ClientBoost360 is a full-service digital marketing brand by Synergy Stream LLC, helping law firms, clinics, and professional service providers grow without the high cost of an in-house team." />
                <link rel="icon" href="/favicon.png" />
            </Head>

            {/* Header */}
            <Header />

            {/* Page Content */}
            <main className="">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Layout;
