// Ajoutez un gestionnaire d'événements au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
    // Récupérer l'élément du curseur
    var curseur = document.querySelector(".end");
    var startt = document.querySelector(".start");
    var wallsElements = document.querySelectorAll(".walls");
    
    // Ajouter un gestionnaire d'événements au clic sur l'élément du curseur
    curseur.addEventListener("click", function () {
        // Changer la couleur de fond de la classe "walls" en vert
        changerCouleurFondWalls("green");
    });

// Ajouter un gestionnaire d'événements au clic sur l'élément du curseur
startt.addEventListener("click", function () {
    // Changer la couleur de fond de la classe "walls" en vert
    changerCouleurFondWalls("black");
});
 // Ajouter un gestionnaire d'événements mouseenter à chaque élément avec la classe "walls"
 wallsElements.forEach(function (wall) {
    wall.addEventListener("mouseenter", function () {
        // Changer la couleur de fond de tous les éléments "walls" en rouge
        changerCouleurFondWalls("red");
    });

    wall.addEventListener("mouseleave", function () {
        
        changerCouleurFondWalls(""); 
    });
});


     

 });


function changerCouleurFondWalls(couleur) {
    var walls = document.querySelectorAll(".walls");
    walls.forEach(function (wall) {
        wall.style.backgroundColor = couleur;
    });
}

// Fonction pour vérifier si le curseur est sur la route
function estSurLaRoute(x, y) {
    // Vérifiez les coordonnées du curseur par rapport aux blocs de route
    // Vous devrez adapter cela en fonction de la disposition spécifique de votre jeu
    return (
        x > 0 && x < window.innerWidth &&
        y > 0 && y < window.innerHeight
    );
}