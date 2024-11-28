// Exercice1
// Récupérer deux nombres avec des prompts et les stocker dans des variables
// let nombre1 = prompt("Veuillez entrer le premier nombre :")
// let nombre2 = prompt("Veuillez entrer le deuxième nombre :")

// // Convertir les valeurs saisies en nombres
// nombre1 = parseFloat(nombre1)
// nombre2 = parseFloat(nombre2)

// // Vérifier si les valeurs sont égales
// let sontEgaux = (nombre1 === nombre2)

// // Afficher le résultat dans une alerte
// alert(`Le nombre ${nombre1} et le nombre ${nombre2} sont-ils égaux ? : ${sontEgaux}`)


// Exercice2

// let nombreX=prompt("Veuillez entrer le premier nombre :")
// let nombreY=prompt("Veuillez entrer le deuxième nombre :")



// nombreX = parseFloat(nombreX)
// nombreY = parseFloat(nombreY)


// let plusPetit = (nombreX < nombreY)

// alert(`La somme des nombres ${nombreX} est il plus petit que  ${nombreY}   ? : ${plusPetit}`)


// Exercice3

// let nombreX=prompt("Veuillez entrer le premier nombre :")
// let nombreY=prompt("Veuillez entrer le deuxième nombre :")
// let nombreZ=prompt("Veuillez entrer le troisième nombre:")


// nombreX = parseFloat(nombreX)
// nombreY = parseFloat(nombreY)
// nombreZ= parseFloat(nombreZ)

// let laSomme = (nombreX + nombreY > nombreZ)

// alert(`La somme des nombres ${nombreX} + ${nombreY} est il plus grande à ${nombreZ} ? : ${laSomme}`)

// Exercice4
// Étape 1 : Récupérer la phrase de l'utilisateur
// let phrase = prompt("Veuillez entrer une phrase :");

// // Étape 2 : Demander l'estimation du nombre de caractères
// let estimation = parseInt(prompt("Combien de caractères pensez-vous que cette phrase contient ?"));

// // Étape 3 : Calculer la longueur réelle de la phrase
// let longueurReelle = phrase.length;

// // Étape 4 : Comparer l'estimation avec la longueur réelle
// if (estimation === longueurReelle) {
//     alert(`Correct ! La phrase contient bien ${longueurReelle} caractères.`);
// } else {
//     let difference = Math.abs(longueurReelle - estimation);
//     alert(`Incorrect, tu étais à ${difference} unités de la bonne réponse ! La phrase contient ${longueurReelle} caractères.`);
// }


// Exercice5

// let prenom=prompt("Veuillez entrez votre prénom")

// if (prenom) {
//     alert("Bonjour "+ prenom)
// } else {
//     alert("veuillez entrez votre prenom")
// }

// Exercice6
// Fonction pour demander à l'utilisateur de répondre par oui ou non
// function demanderConfirmation(message) {
//     return confirm(message);
// }

// Proposer à l'utilisateur de s'abonner
// let abonnement = demanderConfirmation("Voulez-vous vous abonner ?");

// if (abonnement) {
//     // Demander quelle formule l'utilisateur veut prendre
//     let formule = prompt("Quelle formule voulez-vous prendre ? Luxe ou Normal");

//     if (formule.toLowerCase() === "luxe") {
//         alert("Félicitation vous avez choisi la formule Luxe !");
//     } else if (formule.toLowerCase() === "normal") {
//         alert("Merci pour votre abonnement.");
//     } else {
//         alert("Option non reconnue. Veuillez choisir entre Luxe ou Normal.");
//     }
// } else {
//     // Demander à l'utilisateur s'il est certain
//     let certain = demanderConfirmation("Êtes-vous certain de ne pas vouloir vous abonner ?");

//     if (certain) {
//         alert("C'est dommage, passez une bonne journée !");
//     } else {
//         // Reproposer la formule
//         let formule = prompt("Quelle formule voulez-vous prendre ? Luxe ou Normal");

//         if (formule.toLowerCase() === "luxe") {
//             alert("Félicitation vous avez choisi la formule Luxe !");
//         } else if (formule.toLowerCase() === "normal") {
//             alert("Merci pour votre abonnement.");
//         } else {
//             alert("Option non reconnue. Veuillez choisir entre Luxe ou Normal.");
//         }
//     }
// }

// Exercice7

// let age=+prompt("Pour votre réservation veuillez entrez votre age : ")
// if (age>18) {
//     alert("Vous êtes majeur, vous pouvez réserver")
// } if(age<18){
//     alert("vous êtes mineur, l’accès est réservé aux grands")
// } if (age<=0){
//     alert("vous n’êtes même pas nés, n’essayez pas de tricher")
// } if (age>=100) {
//     alert("vous êtes encore vivant ? Évitez de voir ce film pour le rester.")
// } if (age===18){
//     alert("pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant.")
// }else {
//     alert("Inconnu veuillez entrez votre age ")
// }


// Exercice8
// Créer des variables pour les questions et les réponses correctes
// let question1 = prompt("Quelle est la capitale de la France ?");
// let question2 = prompt("Quelle est la couleur du ciel pendant une journée ensoleillée ?");

// let reponseCorrecte1 = "Paris";
// let reponseCorrecte2 = "Bleu";

// // Variables pour stocker les résultats des réponses
// let correct1 = (question1.trim().toLowerCase() === reponseCorrecte1.toLowerCase());
// let correct2 = (question2.trim().toLowerCase() === reponseCorrecte2.toLowerCase());

// // Vérifier les réponses de l'utilisateur
// if (!correct1 && !correct2) {
//     alert("Vous avez échoué. Aucune des réponses n'est correcte.");
// } else if (correct1 && correct2) {
//     alert("Félicitations ! Vous avez répondu correctement à toutes les questions.");
// } else {
//     let message = "Vous y êtes presque. Vous avez eu tort à la question : ";
//     if (!correct1) {
//         message += "1 (la bonne réponse était " + reponseCorrecte1 + ")";
//     }
//     if (!correct1 && !correct2) {
//         message += " et ";
//     }
//     if (!correct2) {
//         message += "2 (la bonne réponse était " + reponseCorrecte2 + ")";
//     }
//     alert(message);
// }


// Exercice9
// let anneeNaissance = parseInt(prompt("Veuillez entrer votre année de naissance pour la réservation au cinéma :"));
// let anneeActuelle = new Date().getFullYear();
// let age = anneeActuelle - anneeNaissance;

// if (age < 0) {
//     alert("Vous n’êtes même pas nés, n’essayez pas de tricher.");
// } else if (age === 18) {
//     alert("Vous pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant.");
// } else if (age > 100) {
//     alert("Vous êtes encore vivant ? Évitez de voir ce film pour le rester.");
// } else if (age >= 18) {
//     alert("Vous êtes majeur, vous pouvez réserver.");
// } else {
//     alert("Vous êtes mineur, l’accès est réservé aux grands.");
// }



