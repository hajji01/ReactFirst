# README

## Exercice 1 : Création du Header, Footer et du Composant "Produit en Vedette"

Dans ce premier exercice, j'ai commencé par créer l'interface de base de l'application. J'ai ajouté un **Header** (en-tête) et un **Footer** (pied de page) pour structurer l'application et lui donner une présentation complète. 

Ensuite, j'ai créé un composant qui affiche un **produit en vedette**. Ce composant montre des informations telles que le nom du produit, son prix, sa description, ainsi qu'une image du produit. L'objectif de cet exercice était de bien structurer et afficher un produit sur l'interface utilisateur, en utilisant des éléments HTML basiques et du CSS pour le design.

Voici ce que j'ai fait dans ce premier exercice :
- Création du composant `Header` et `Footer`.
- Création d'une section pour afficher un produit en vedette avec son image, son nom, sa description et son prix.

---

## Exercice 2 : Intégration de l'API pour récupérer les Produits

Dans ce deuxième exercice, j'ai intégré une **API** pour récupérer des informations sur des produits. J'ai utilisé `fetch()` pour envoyer une requête HTTP et récupérer des données au format JSON. Ces données sont ensuite stockées dans l'état de l'application grâce à `useState`, et sont affichées dynamiquement à l'utilisateur.

Le but de cet exercice était d'apprendre à travailler avec des données externes et à les afficher dans l'interface utilisateur de manière interactive. J'ai donc ajouté une section pour afficher une liste de produits récupérés depuis l'API, chaque produit étant affiché avec son image, son nom, sa description et son prix. Si les produits sont encore en cours de chargement, un message indique à l'utilisateur que les produits sont en train d'être chargés.

Voici ce que j'ai fait dans ce deuxième exercice :
- Création d'une fonction pour récupérer les produits via une API.
- Utilisation de `useState` pour stocker les produits et `useEffect` pour lancer la requête API.
- Affichage des produits récupérés sous forme de cartes avec une image, un nom, une description, un prix et un bouton "Ajouter au panier".

