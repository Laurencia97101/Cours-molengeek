// Exercice 1
 

// Stockez dans une variable, via un prompt, un jour de la semaine
// . À l'aide d'un switch, affichez ce que vous avez planifié de faire ce jour-ci.
// La console devra afficher : “On est lundi. Tu as cours à MolenGeek et tu as du sport en soirée.”

// Stocker dans une variable, via un prompt, un jour de la semaine
let jour = prompt("Veuillez entrer un jour de la semaine :").toLowerCase();

// À l'aide d'un switch, afficher ce que vous avez planifié de faire ce jour-ci
switch (jour) {
    case "lundi":
        console.log("On est lundi. Tu as cours à MolenGeek et tu as du sport en soirée.");
        break;
    case "mardi":
        console.log("On est mardi. Tu as une réunion avec l'équipe de projet.");
        break;
    case "mercredi":
        console.log("On est mercredi. Tu dois travailler sur ton projet personnel.");
        break;
    case "jeudi":
        console.log("On est jeudi. C'est le jour de la présentation de ton travail.");
        break;
    case "vendredi":
        console.log("On est vendredi. Tu as un rendez-vous médical l'après-midi.");
        break;
    case "samedi":
        console.log("On est samedi. C'est le week-end, relaxe-toi et profite du temps libre.");
        break;
    case "dimanche":
        console.log("On est dimanche. C'est le jour du repos et des activités en famille.");
        break;
    default:
        console.log("Jour invalide. Veuillez entrer un jour de la semaine valide.");
}

// Exercice 2
 

// Déclarer une variable qui prendra comme valeur un type de météo
// À l'aide d'un switch, affichez une réaction appropriée au temps
// Ex: Il pleut. Je prend un parapluie
 
// Déclarer une variable pour le type de météo
let meteo = prompt("Quel temps fait-il aujourd'hui ? (soleil, pluie, neige, nuages, vent)");

// Utiliser un switch pour afficher une réaction appropriée au type de météo
switch (meteo.toLowerCase()) {
    case "soleil":
        console.log("Il fait beau aujourd'hui. Profite du soleil !");
        break;
    case "pluie":
        console.log("Il pleut. Je prends un parapluie.");
        break;
    case "neige":
        console.log("Il neige. Je mets mon manteau et mes gants.");
        break;
    case "nuages":
        console.log("Le ciel est nuageux. Je prends peut-être une petite veste.");
        break;
    case "vent":
        console.log("Il y a du vent. Je porte une écharpe.");
        break;
    default:
        console.log("Je ne sais pas quel temps il fait. Soyez préparé à tout !");
}

// Exercice 3
 

// Déclarez une variable dont la valeur sera donnée par l'utilisateur.
// Faites un switch, si la variable donnée est divisible par 2, faite une alert qui renvoit "Le nombre est un multiple de 2" sinon "Le nombre n'est pas un multiple de 2" ou encore si l'utilisateur n'a pas rentré un nombre "Ceci n'est pas un nombre"
 // Déclarez une variable dont la valeur sera donnée par l'utilisateur
// let valeur = prompt("Veuillez entrer une valeur :");

// // Convertir la valeur en nombre entier
// let nbr = parseInt(valeur);

// switch (true) {
//     case isNaN(nbr):
//         alert("Ceci n'est pas un nombre");
//         break;
//     case (nbr % 2 === 0):
//         alert("Le nombre est un multiple de 2");
//         break;
//     default:
//         alert("Le nombre n'est pas un multiple de 2");
//         break;
// }


// Exercice 4
 

// Déclarez trois variables que l'utilisateur remplira : nbr1 / operateur(+-/*) / nbr2;
// Faite switch qui en fonction de l'opérateur donné, effectuera le calcul avec cet opérateur et afficher le résultat.
// Ex:nbr1 = 1 | operateur = "+" | nbr2 = 3  => affichera 4

// Déclarez trois variables que l'utilisateur remplira
// let nbr1 = parseFloat(prompt("Veuillez entrer le premier nombre :"));
// let operateur = prompt("Veuillez entrer un opérateur (+, -, *, /) :");
// let nbr2 = parseFloat(prompt("Veuillez entrer le deuxième nombre :"));

// let resultat;

// // Utiliser un switch pour effectuer le calcul en fonction de l'opérateur donné
// switch (operateur) {
//     case "+":
//         resultat = nbr1 + nbr2;
//         break;
//     case "-":
//         resultat = nbr1 - nbr2;
//         break;
//     case "*":
//         resultat = nbr1 * nbr2;
//         break;
//     case "/":
//         if (nbr2 !== 0) {
//             resultat = nbr1 / nbr2;
//         } else {
//             resultat = "Erreur : Division par zéro";
//         }
//         break;
//     default:
//         resultat = "Opérateur invalide";
// }

// // Afficher le résultat
// alert(`Le résultat de ${nbr1} ${operateur} ${nbr2} est : ${resultat}`);
