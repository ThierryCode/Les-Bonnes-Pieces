// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

//Création des 4 balises
const article = pieces[1];
const imageElement = document.createElement("img");
imageElement.src = article.image;

const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;

const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "Aucune catégorie";

const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "Pas de desctription pour le moment";

const stockElement = document.createElement("p");
stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

//Ajout des 4 balises dans une div class .fiche parent 
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(stockElement);

