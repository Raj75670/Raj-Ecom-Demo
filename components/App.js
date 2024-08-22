"use client";

import { React } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const App = (props) => {
    return (
        <>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}

export default App;