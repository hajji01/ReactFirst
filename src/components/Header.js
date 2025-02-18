import React from 'react';

function Header() {
    const headerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '1rem',
        textAlign: 'center'
    };

    return (
        <header style={headerStyle}>
            <h1>Mon E-commerce</h1>
            <nav>
                <a href="/" style={{ color: '#fff', margin: '0 10px' }}>Accueil</a>
                <a href="/produits" style={{ color: '#fff', margin: '0 10px' }}>Produits</a>
                <a href="/contact" style={{ color: '#fff', margin: '0 10px' }}>Contact</a>
            </nav>
        </header>
    );
}

export default Header;
