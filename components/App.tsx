"use client";

import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface AppProps {
    children: any;
}

const App: React.FC<AppProps> = (props) => {
    return (
        <>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    );
}

export default App;
