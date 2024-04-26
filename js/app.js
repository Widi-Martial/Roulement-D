//Creer une <div> avec la classe "dice"
//Creer une fonction qui contient les instructions pour la création de dés (reprendre les instruction précédente)
function createDice(){
const divDice = document.createElement("div");
divDice.classList.add("dice");
const divPlayer = document.querySelector("#player");
divPlayer.appendChild(divDice);


}
createForm();
//créer une fonction qui génere un nombre aléatoire entre 1 et 6
//le nombre tiré sert a modifier la position du dés afin de faire apparaitre la bonne face =>chaque face fait '100px'
function randomNumber(min,max) {
   const divDice = document.querySelectorAll(".dice");
   for ( let i = 0; i < divDice.length;i++) {
   const roll = parseInt(Math.floor(Math.random(max - min) * max) + min);
   const diceSizeMove = (`${roll}` - 1) * 100;
   divDice[i].style.backgroundPosition = `-${diceSizeMove}px`;
}
}
//randomNumber(1,6);

//Demander à l'utilisateur combien de dés il souhaite avoir au lancement de la
//Utiliser un formulaire pour la demande de dés 
function createForm() {
const bodyGame = document.querySelector("body");
const divApp = document.querySelector("#app");

const fieldDiceRequest = document.createElement("header");
const formDiceRequest = document.createElement("form"); // creation du formulaire

const diceButton = document.createElement("input");//creation button lancer dés
diceButton.id = "diceButton";
diceButton.type = "submit";
diceButton.value = "Dés";

const inputForm = document.createElement("input");//création des inputs
inputForm.id = "inputName";
inputForm.type = "number";
inputForm.name ="numberOfDice";
inputForm.placeholder = 'Nombre de dés';

const buttonForm = document.createElement("input");
buttonForm.id = "inputButton";
buttonForm.type = "submit";
buttonForm.value = "Valider";

const reloadButton = document.createElement("input");
reloadButton.id = "refresh";
reloadButton.type = "submit";
reloadButton.value = "rafraichir";

bodyGame.insertBefore(fieldDiceRequest, divApp); // mise du header dans le body avant la div "#app"
fieldDiceRequest.appendChild(formDiceRequest); //mise du formulaire dans le header
formDiceRequest.appendChild(diceButton);
formDiceRequest.appendChild(inputForm);//mise du champs de saisie dans le formulaire
formDiceRequest.appendChild(buttonForm);//mise du bouton valider dans le formulaire
formDiceRequest.appendChild(reloadButton);//mise bouton rafraichir dans le formulaire

}


//obtenir la valeur de randomNumber, 

const buttonForm = document.getElementById("inputButton");
buttonForm.addEventListener("click", function(event){
     event.preventDefault();
   const inputName = (document.getElementById("inputName"));
   const NbUserDice = parseInt(inputName.value);
   for (let i = 0; i < NbUserDice;i++) {
      createDice();
     }   
});

const diceButton = document.getElementById("diceButton");
diceButton.addEventListener("click", function(event){
   event.preventDefault();
   randomNumber(1,6);
})

   
   

//La fonction se lance autant de fois que de dés demandés par l'user


//Bonus : Créer une div après la div.player, mettre la classe .board et l'id #player (possible de faire en html)
//chaque zone doit prendre la moitié de l'écran
//Ajouter a la fonction de création de dés un parametre pour récupéré l'id player ou l'id dealer
