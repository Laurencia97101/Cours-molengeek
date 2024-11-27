// Exercice 1 

// Créer une variable qui reçois un array avec 3 éléments -> ex: coding 20, coding 21, coding 22
// let tab1=["coding 20", "coding 21 " ,"coding 22"]

// // Afficher les éléments de l'array
// console.log(tab1)

// // Afficher le nombre d'éléments de l'array
// console.log(tab1.length)

// // Afficher les éléments de l'array 1 par 1
// console.log(tab1[0],tab1[1],tab1[2]);


// Exercice 2
// Créer une variable qui reçois un array avec 3 éléments -> ex: coding 20, coding 21, coding 22
// let tab1=["coding 20", "coding 21 " ,"coding 22"]

// // Afficher les éléments de l'array
// console.log(tab1)

// // Ajouter et afficher votre prénom a l'array
// tab1.push("Lauren")
// console.log(tab1);


// Exercice 3
 
// Créer une variable qui reçois un array avec 3 éléments -> coding 20, coding 21, coding 22
// let tab1=["coding 20", "coding 21 " ,"coding 22"]

// // Afficher les éléments de l'array
// console.log(tab1)

// // Ajouter et afficher votre prenom a l'array
// tab1.push("Lauren")
// console.log(tab1);

// // Remplacer et afficher un élément de l'array par autre chose
// tab1[0]="Patate kawaï"


// Exercice 4 
 
// Créer une variable qui reçois un array avec 3 éléments -> ex: coding 20, coding 21, coding 22
// let tab1=["coding 20", "coding 21 " ,"coding 22"]

// // Afficher les éléments de l'array
// console.log(tab1)

// // Ajouter et afficher votre prenom a l'array
// tab1.push("Lauren")
// console.log(tab1)

// // Remplacer et afficher un élément de l'array par autre chose
// tab1[0]="Patate kawaï"

// // Effacer un élément de l'array
// tab1.pop()

// // Afficher le contenu le d'array
// console.log(tab1)
 

// Exercice4
// let phrase = "Bonjour tout le monde         "

// // Affichez la longueur de la phrase.
// console.log(phrase.lenght)

// // // Retirez les espaces à la fin de la phrase à l'aide d'une méthode.
// phrase=phrase.trimEnd()
// // // Réaffichez la longueur de la phrase après avoir retiré les espaces.
// console.log(phrase)
// // // Affichez uniquement la dernière lettre de la phrase.

// let derniere_Lettre = phrase.charAt(phrase.length - 16)
// console.log(derniere_Lettre)

// // // Retirez "Bonjour" de la phrase.

// console.log(phrase.replace("Bonjour","").trim())
// // // Replacez "Bonjour" au début de la phrase grâce à une méthode.
// let sansBonjour = phrase.replace("Bonjour", "").trim();
// let nouvellePhrase = "Bonjour " + sansBonjour ;
// console.log(nouvellePhrase)
//  // Ajouter "Bonjour" au début de la phrase


// // Supprimez tout de la phrase sauf "Bonjour" à l'aide d'une méthode.
// let mots = phrase.split(" ")// Divise la phrase en mots 
// let premierMot = mots[0] // Garde le premier mot console.log(premierMot);
// console.log(premierMot)

// // Remplacez dans la phrase le mot "Bonjour" par le mot "string".
// console.log(phrase.replaceAll('Bonjour', 'string'));
// // Bonus: Générez un chiffre aléatoire.
// let chiffreAleatoire = Math.floor(Math.random() * 10);
// console.log(chiffreAleatoire);

// // Mettez en majuscules la 5ème et la 7ème lettre de la variable phrase, tout en conservant le reste en minuscules.
// let nouvelPhrase = phrase.substring(0, 4)
//                   + phrase.charAt(4).toUpperCase() 
//                   +phrase.substring(5, 6) 
//                   + phrase.charAt(6).toUpperCase()
//                   + phrase.substring(7);
//  console.log(nouvelPhrase)

// // Trouvez l'index de la 2ème occurrence de la lettre "O" dans le mot "Bonjour".
// let premiereOccurrence = phrase.indexOf("o") // Trouver la première occurrence de "o" 
// let deuxiemeOccurrence = phrase.indexOf("o", premiereOccurrence + 1) // Trouver la deuxième occurrence de "o" console.log(deuxiemeOccurrence);
// console.log(deuxiemeOccurrence);


// // Définissez une variable nom avec votre nom et mettez la première et la dernière lettre en majuscule grâce à des méthodes.
// let nom="lauren"
// let result=nom.slice(1,-1).toUpperCase()
// console.log(result)

// Exercice math

let nombre = 8.56

// Arrondir au nombre à l'entier le plus proche
let arrondi = Math.round(nombre)
console.log(arrondi)

// Arrondir à l'entier vers le haut
let arrondiHaut = Math.ceil(nombre)
console.log(arrondiHaut)

// Arrondir à l'entier vers le bas
let arrondiBas = Math.floor(nombre)
console.log(arrondiBas)

// Enlever toute la partie décimale
let entier = Math.trunc(nombre)
console.log(entier)

// Afficher un nombre aléatoire entre 0-1
let nombreAleatoire = (Math.random() * 1)
 console.log(nombreAleatoire)

// Afficher un nombre aléatoire entre 0-100
let nombreAleatoire2 = (Math.random() * 100)
 console.log(nombreAleatoire2)

// Afficher un nombre entier aléatoire entre 0-100
let nombreAleatoire3 = Math.floor(Math.random() * 100)
 console.log(nombreAleatoire3)

// Afficher 8 puissance 2
let resultat = Math.pow(8, 2)
console.log(resultat)
// Afficher racine carré de 9
let racineCarree = Math.sqrt(9)
console.log(racineCarree)

// Afficher la valeur absolue de -1
let nbr = -1;
let valeurAbsolue = Math.abs(nbr);
console.log(valeurAbsolue)

// Afficher la valeur la plus grande parmi -2, 1000, 8, 57
let maxValue = Math.max(-2, 1000, 8, 57);
console.log(maxValue)

// Afficher la valeur la plus petite parmi -2, 1000, 8, 57
let minValue = Math.min(-2, 1000, 8, 57)
console.log(minValue)
