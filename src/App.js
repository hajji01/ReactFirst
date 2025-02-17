// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const produit = {
    nom: "Iphone 13 256Gb",
    prix: 1299.99,
    description: "Un smartphone performant avec un excellent rapport qualité-prix.",
    image: "https://media.ldlc.com/r1600/ld/products/00/05/88/60/LD0005886075_1.jpg" // Image temporaire
  };

  return (
    <div className="App">
      <Header />
      <main style={{ padding: '2rem', marginBottom: '4rem' }}>
        <h2>Produit en vedette</h2>
        <div style={{ border: "1px solid #ddd", padding: "1rem", maxWidth: "300px", textAlign: "center" }}>
          <img src={produit.image} alt={produit.nom} style={{ width: "100%" }} />
          <h3>{produit.nom}</h3>
          <p>{produit.description}</p>
          <p><strong>Prix :</strong> {produit.prix}€</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
