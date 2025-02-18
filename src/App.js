
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const produit = {
    nom: "Iphone 13 256Gb",
    prix: 1299.99,
    description: "Un smartphone performant avec un excellent rapport qualité-prix.",
    image: "https://media.ldlc.com/r1600/ld/products/00/05/88/60/LD0005886075_1.jpg"
  };

  const [produits, setProduits] = useState([]);

  // Utilisation d'async/await
  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await fetch("http://localhost:3001/produits");
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();
        console.log("Produits récupérés :", data);
        setProduits(data);
      } catch (error) {
        console.error("Erreur lors de l'appel API :", error);
      }
    };

    fetchProduits();
  }, []);

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


        <section style={{ marginTop: '2rem' }}>
          <h2>Nos produits</h2>
          {produits.length === 0 ? (
            <p>Chargement des produits...</p>
          ) : (
            produits.map((produit) => (
              <div key={produit.id} style={{ border: '1px solid #ddd', padding: '1rem', margin: '1rem 0', maxWidth: '300px', textAlign: 'center' }}>
                <img src={produit.image} alt={produit.nom} style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
                <h3>{produit.nom}</h3>
                <p>{produit.description}</p>
                <p><strong>Prix :</strong> {produit.prix}€</p>
                <button style={{ padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>
                  Voir
                </button>
              </div>
            ))
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
