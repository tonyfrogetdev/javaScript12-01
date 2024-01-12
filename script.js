// Exercice 1

const inputText = document.querySelector("#text");
const inputCopie = document.querySelector("#copie");

inputText.addEventListener("input", () => {
  inputCopie.value = inputText.value;
});

// Exercice 2

// Je récupere mon input et mes td avec tous leur id(s)
let numberInput = document.querySelector("#number");
let number = document.querySelector("#numberTable");
let numberCarre = document.querySelector("#numberTableCarre");
let numberCube = document.querySelector("#numberTableCube");

numberInput.addEventListener("input", (event) => {
  // Je(Hugo m'a montré) récupere la valeur de la target de l'event que je stock dans userInput
  const userInput = event.target.value;
  // Je cree le calcul au Carré en multipliant userInput par lui même
  const calculCarre = userInput * userInput;
  // Je cree le calcul au cube en multipliant le carré par userInput
  const calculCube = calculCarre * userInput;

  // Je veux afficher dans la valeur de number userInput
  number.textContent = userInput;
  // Je veux afficher dans la valeur de calculCarre dans numberCarre
  numberCarre.textContent = calculCarre;
  // Je veux afficher dans la valeur de calculCube dans numberCube
  numberCube.textContent = calculCube;
});

// Exercice 3

// Je cible mon carré et mon bouton avec deux variables
const blueSquare = document.querySelector(".blue");
const button = document.querySelector("#bouge");

// je crée les variables qui mettent en mouvement mon carré

// Je deplace de 200px à droite
const bougeDroite = [{ transform: "translate(200px)" }];
// Je garde la position 200px et j'enleve 200px pour qu'il remonte
const bougeHaut = [{ transform: "translate(200px, -200px)" }];
// je met 0px pour qu'il reprend sa position initiale en horizontal et -200px pour qu'il reste en vertical
const bougeGauche = [{ transform: "translate(0px,-200px)" }];
// Je met 0px, 0px pour qu'il reprend la position de départ
const bougeBas = [{ transform: "translate(0px ,0px)" }];

// Je crée une animation, avec sa vitesse en milliseconde(durée), nombre d'itérations et forwards pour qu'il garde son nouveau style.
const bougeAnim = {
  duration: 1000,
  iterations: 1,
  fill: "forwards",
};

// Je crée une fonction pour que passer à l'aniamtion suivante
let indexAnimation = 0;
const animationSuivante = () => {
  // je crée une variable avec toutes mes animations dans un tableau
  const animations = [bougeDroite, bougeHaut, bougeGauche, bougeBas];
  // si mon index animation est inférieur à la taille de mon tableau d'animation
  //  je voulais faire une boucle mais j'arrive pas
  blueSquare.animate(animations[indexAnimation], bougeAnim);
  indexAnimation++;
  if (indexAnimation >= animations.length) {
    indexAnimation = 0;
  }
};

// Je veux créer un event où quand je clique, j'appele la fonction
button.addEventListener("click", () => {
  // j'appelle ma fonction
  animationSuivante();
});

// Exercice 4

// je cible mes div pour les mettres dans des variables
const tableau = document.querySelector(".tableau");
const galerie = document.querySelector(".galerie");

// je crée un évènement sur le click
galerie.addEventListener("click", (e) => {
  // Je vérifie si l'event que je cible est bien une image
  if (e.target.tagName === "IMG") {
    // je stock l'attribut src de cette cible(img) dans une variable
    const srcImageCliquée = e.target.getAttribute("src");
    // je cible l'image dans me ma variable tableau(qui cible ma div)
    let imageDansTableau = tableau.querySelector("img");
    //Si une image est dans le tableau, attribu lui le src de l'image cliquée
    if (imageDansTableau) {
      imageDansTableau.setAttribute("src", srcImageCliquée);
      // Sinon crée une nouvelle image
    } else {
      const nouvelleImage = document.createElement("img");
      // tu lui met le nouveau src de l'image créer
      nouvelleImage.setAttribute("src", srcImageCliquée);
      // ajoute l'image créer au tableau
      tableau.appendChild(nouvelleImage);
    }
  }
});

/* <div class="calculatrice">
      <form action="">
        <input type="text" id="firstNumber"/>
        <select name="calculette" id="operator">
          <option value="1">+</option>
          <option value="2">-</option>
          <option value="3">*</option>
          <option value="4">/</option>
        </select>
        <input type="text" id="secondNumber"/>
        <input type="submit" value="Calculer" id="calculate" />
      </form>
    </div>*/

// je récupère d'abord les élements

const calculatrice = document.querySelector(".calculatrice");
const firstNumber = document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");
const operator = document.querySelector("#operator");
const calculateButton = document.querySelector("#calculate");

// élement pour faire apparaitre disparaitre calculatrice
const displayOn = document.querySelector("#displayOn");
const displayOff = document.querySelector("#displayOff");

// les textes

const displayText = document.querySelector("#displayText");
const textInfo = document.querySelector("#textInfo");

// Je dois trouver les moyens de
// faire une adition de firstNumber et secondNumber quand l'operator est sur +
// Faire une soustraction de firstNumber par secondNumber quand l'opérator est sur -
// Faire une multiplication de first number et second number quand l'opérator est sur *
// Faire une division de first number par second number quand l'opérator est sur
// à chaque fois, je dois afficher une alert pour chaque calcul
// Je pense je peux faire des if else ou switch pour les différent calcul

calculateButton.addEventListener("click", (e) => {
  e.preventDefault();
  // Je cible la valeur que j'inscrirais dans l'input firstNumber
  const firstNum = parseInt(firstNumber.value);
  // pareil pour secondNumber et j'utilise parseInt pour transformer en nombre
  const secondNum = parseInt(secondNumber.value);
  // Pareil ici
  const selectOperator = parseInt(operator.value);

  // Je déclare une variable qui peut changer result
  let result;

  // J'utilise un switch pour chaque opération
  switch (selectOperator) {
    case 1:
      result = firstNum + secondNum;

      alert(`${firstNum} + ${secondNum} = ${result}`);
      break;
    case 2:
      result = firstNum - secondNum;
      alert(`${firstNum} - ${secondNum} = ${result}`);
      break;
    case 3:
      result = firstNum * secondNum;
      alert(`${firstNum} * ${secondNum} = ${result}`);
      break;
    case 4:
      result = firstNum / secondNum;
      alert(`${firstNum} / ${secondNum} = ${result}`);
      break;
    default:
      alert("operator invalide");
      break;
  }
});

displayOn.addEventListener("click", (e) => {
  e.preventDefault();
  calculatrice.setAttribute("style", "display:block;");
});

displayOff.addEventListener("click", (e) => {
  e.preventDefault();
  calculatrice.setAttribute("style", "display:none");
});

// Je dois faire deux eventListener par actions sur les 3 elements
// Un qui affiche le texte et un qui le fait disparaître
// Après j'essaierai de faire un seul addEventListener avec un if
firstNumber.addEventListener("mouseover", () => {
  displayText.textContent = "Saisissez un chiffre";
  textInfo.style.display = "block";
});

firstNumber.addEventListener("mouseout", () => {
  textInfo.style.display = "none";
});

secondNumber.addEventListener("mouseover", () => {
  displayText.textContent = "Saisissez un chiffre";
  textInfo.style.display = "block";
});

secondNumber.addEventListener("mouseout", () => {
  textInfo.style.display = "none";
});

operator.addEventListener("mouseover", () => {
  displayText.textContent = "Saisissez un operateur : + - * /";
  textInfo.style.display = "block";
});

operator.addEventListener("mouseout", () => {
  textInfo.style.display = "none";
});
