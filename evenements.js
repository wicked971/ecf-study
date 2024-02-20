import Formulaire from"./formulaire.js";

//Créer le formulaire

const formulaire = new Formulaire('formulaire');

formulaire.maskChamp ('email');

//addEvenListerner pour changer le comportement en fonction de objet

formulaire.getElement('objet').addEventListerner('change', ()=>{formulaire.isSelected('objet', "demande_de_contact",() =>{formulaire.showChamp('email')},()=>formulaire.hideChamp('email')})});

//addEventlistener pour récupérer les données du formulaire

formulaire.formulaireHtml.addEventListener('submit',
  (event)=>{
 event.preventDefault();
 formulaire.affAnswers();
  }
)