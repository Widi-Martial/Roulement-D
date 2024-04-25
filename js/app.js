//Creer une <div> avec la classe "dice"
const divDice = document.createElement("div");
divDice.classList.add("dice");

//Ajouter la div dans le parent avec la classe .player
const divPlayer = document.querySelector("#player");
divPlayer.appendChild(divDice);

//créer une fonction qui génere un nombre aléatoire entre 1 et 6
//le nombre tiré sert a modifier la position du dés afin de faire apparaitre la bonne face =>chaque face fait '100px'
function randomNumber(min,max) {
   const roll = Math.floor(Math.random(max - min) * max) + min;
   const diceSizeMove = (`${roll}` - 1) * 100;
   console.log(diceSizeMove);
   divDice.style.backgroundPosition = `-${diceSizeMove}px`;
}
randomNumber(1,6);

//Demander à l'utilisateur combien de dés il souhaite avoir au lancement de la
//Utiliser un formulaire pour la demande de dés 
const fieldDiceRequest = document.createElement("header");
const bodyGame = document.querySelector("body");
const divApp = document.querySelector("#app");
bodyGame.insertBefore(fieldDiceRequest, divApp); // mise du header dans le body
const formDiceRequest = document.createElement("form"); // creation du formulaire
const inputForm = document.createElement("input");//ciblage des inputs
inputForm.type = "number";
inputForm.name ="numberOfDice";
inputForm.placeholder = 'Nombre de dés';
const buttonForm = document.createElement("input");
buttonForm.type = "submit";
buttonForm.value = "Valider";
formDiceRequest.appendChild(inputForm);
formDiceRequest.appendChild(buttonForm);
fieldDiceRequest.appendChild(formDiceRequest);





//Creer une fonction qui contient les instructions pour la création de dés (reprendre les instruction précédente)
//La fonction se lance autant de fois que de dés demandés par l'user

//Bonus : Créer une div après la div.player, mettre la classe .board et l'id #player (possible de faire en html)
//chaque zone doit prendre la moitié de l'écran
//Ajouter a la fonction de création de dés un parametre pour récupéré l'id player ou l'id dealer
