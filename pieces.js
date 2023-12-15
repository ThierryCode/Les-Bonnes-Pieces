// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

for (let i = 0; i < pieces.length; i++) {

    const article = pieces[i];
    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    // Création des balises 
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
    const stockElement = document.createElement("p");
    stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
    
    // On rattache la balise article a la section Fiches
    sectionFiches.appendChild(pieceElement);
    // On rattache l’image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    //Ajout des éléments au DOM pour l'exercice
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);

 }
 //Reordonner les fiche par la fonction sort
 const boutonTrier = document.querySelector('.btn-trier');
 boutonTrier.addEventListener("click", ()=>{
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort((a,b)=>{
        return a.prix - b.prix;
    });
    console.log(piecesOrdonnees);
 });
 // Filtrer les fiches produit par le methode filtre
 const boutonFilter = document.querySelector('.btn-filtrer');
 boutonFilter.addEventListener("click", ()=>{
    const piecesFiltrees = pieces.filter((piece)=>{
        return piece.prix <= 35;
    });
    console.log(piecesFiltrees);
 });
 //Fitlrer les pièce par ordre decroissants
 const boutonDecroissant = document.querySelector(".btn-decroissant");

 boutonDecroissant.addEventListener("click", ()=>{
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort((a,b)=>{
        return b.prix - a.prix;
    });
    console.log(piecesOrdonnees);
 });
 //Afficher les pièces sans descriptions
 const boutonNoDescription = document.querySelector(".btn-nodesc");
 boutonNoDescription.addEventListener("click", ()=>{
    const piecesFiltrees = pieces.filter((piece)=>{
        return piece.description
    });
    console.log(piecesFiltrees);
 });

 //Affichages des noms des pièces abordables avec la methode map
 const noms = pieces.map(piece => piece.nom);
 for(let i = pieces.length-1; i>=0 ; i--){
    if(pieces[i].prix >35){
        noms.splice(i,1);
    }
 }
 
 //Afficher les noms des pieces abordables
 const abordablEsElements = document.createElement('ul');
 for(let i = 0; i < noms.length; i++){
    const nomElement = document.createElement("li");
    nomElement.innerText = noms[i];
    abordablEsElements.appendChild(nomElement);
 }
 document.querySelector('.abordables').appendChild(abordablEsElements)

