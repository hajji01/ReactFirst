import React from 'react';

function Footer() {
    const footerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '1rem',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%'
    };

    return (
        <footer style={footerStyle}>
            <p> Zakaria HAJJI. IPSSI Lille</p>
        </footer>
    );
}

export default Footer;
