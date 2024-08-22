import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface AppProps {
    children: any;
}

const App = ({ children }: AppProps) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default App;