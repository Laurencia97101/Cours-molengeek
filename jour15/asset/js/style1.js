// Exercice 1
 

// Vérification de l'égalité :

// Utilisez console.log() pour vérifier l'égalité entre 1 et "1".
// let nbr="1"

// if (nbr==1) { 
//     console.log(nbr "est vrai"); 
// } else { 
//     console.log("votre nombre n'est égale à 1");
// }


// Utilisez console.log() pour vérifier l'égalité STRICTE entre 1 et "1".
// if (1 === "1") { 
//     console.log( nbr +"est vrai");
// } else {
//     console.log( nbr+ "est faux");
// }   
// }


// Vérification de la longueur d'un prénom :

// Créez un programme qui demande le prénom d'une personne.
// let prenom=prompt("quel est votre prenom")
// // Si la longueur du prénom est inférieure à 5 caractères, affichez une alerte avec le message "Ton nom est trop court".
 
// if (prenom.length<5) {
//     alert("Ton nom est trop court")
// } else {
//     alert("il a une longueur raisonnable")
// }


// Addition et Vérification de la réponse :

// Affichez une addition à l'utilisateur.
// Demandez-lui de résoudre l'addition.
// let nombre1 = Math.floor(Math.random() * 100);
// let nombre2 = Math.floor(Math.random() * 100);

// // Calculer le résultat de l'addition
// let resultat = nombre1 + nombre2;

// // Afficher l'addition et demander la réponse à l'utilisateur
// let reponse = parseInt(prompt(`Quelle est la somme de ${nombre1} + ${nombre2} ?`));

// // Vérifier si la réponse est correcte
// if (reponse === resultat) {
//     alert("Félicitations ! Votre réponse est correcte.");
// } else {
//     alert(`Incorrect. La bonne réponse était ${resultat}.`);
// }

// Si la réponse est correcte, félicitez-le. Sinon, dites-lui que la réponse est incorrecte.
 

// Multiplication et Vérification de la réponse :

// Affichez une multiplication à l'utilisateur.
// Demandez-lui de résoudre la multiplication.
// Si la réponse est correcte, félicitez-le en indiquant la bonne réponse. Sinon, dites-lui à combien d'unités il était de la bonne réponse.
 
// let nombre1 = Math.floor(Math.random() * 11);
// let nombre2 = Math.floor(Math.random() * 11);

// // Calculer le résultat de l'addition
// let resultat = nombre1 * nombre2;

// // Afficher l'addition et demander la réponse à l'utilisateur
// let reponse = parseInt(prompt(`Quelle est la multiplication de ${nombre1} * ${nombre2} ?`));

// // Vérifier si la réponse est correcte
// if (reponse === resultat) {
//     alert("Félicitations ! Votre réponse est correcte.");
// } else {
//     alert(`Incorrect. La bonne réponse était ${resultat}.`);
// }


// Ajout d'éléments dans un tableau :
// Créez un programme qui permet d'ajouter des éléments dans un tableau via des prompts.
// Quand le tableau contient 3 éléments, renvoyez une alerte avec le contenu du tableau.
 
// let tab=["banane", "voiture","poire","danser"]
// prompt("veillez ajouter 3 élément suplémentaire.")
// if (tab=3*i) {
//     alert("élément ajouter sont"+ i)
// } else {
    
// }
// let tab = ["banane", "voiture", "poire", "danser"];
// let elementsAjoutes = 0;

// function ajouterElement(message) {
//     let nouvelElement = prompt(message);
//     if (nouvelElement) {
//         tab.push(nouvelElement);
//         elementsAjoutes++;
//     }
// }

// ajouterElement("Veuillez ajouter le premier élément supplémentaire :");
// ajouterElement("Veuillez ajouter le deuxième élément supplémentaire :");
// ajouterElement("Veuillez ajouter le troisième élément supplémentaire :");

// if (elementsAjoutes === 3) {
//     alert(`Les éléments du tableau sont : ${tab.join(", ")}`);
// } else {
//     alert("Une erreur est survenue. Veuillez réessayer.");
// }

// Classification des chiffres dans des bacs :
// Créez un programme qui permet à l'utilisateur de mettre des chiffres dans des bacs.
// Si le chiffre est plus grand ou égal à 12, il va dans le bac "grandNombres". Sinon, il va dans le bac "petitNombres".
// Affichez ensuite une seule alerte avec le contenu des deux bacs.
let chiffre=+prompt("Choisissez un nombre entre 0 et 100")
if (chiffre<=12) {
    alert("Votre chiffre est dans le bac des petitNombres")
} else {
    alert("Votre chiffre est dans le bac des grandNombres")
}

// Exercice Inventé :

// Inventez un exercice en utilisant les concepts appris en JavaScript jusqu'à présent, en incluant des conditions