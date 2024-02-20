export default class formulaire {

//definition du constructeur

constructor(id) {
    this.id=id;
    this.formulaireHtml = document.getElementById(this.id);
    this.formdata = new this.formdata(this.formulaireHtml);
    this.aswers = new Array ();}

    getDiv (id) {
        return document.getElementByid(id).parentNode;
    }

//méthode pour récupérer un élément

    getElement(id) {
        return document.getElementByid(id);
    }

    //pour masquer un élément sans animation

    maskChamp(id) {
        this.getDiv(id).classList.add('masque');
        this.getElement(id).required = false;
    }

    //méthode permettant d'afficher le champ

    showChamp(id)
        this.getDiv(id).classList.remove('disp');
        this.getDiv(id).classList.add('app');
        this.getElement(id).required = true;
    }
    //méthode pour masquer le champ avec animation
    
    hideChamp(id){
        this.getDiv(id).classList.remove('app')
        this;getDiv(id).classList.add('disp');
        this.getElement(id).required = false;
    }
    
    //méthode pour savoir si un radio est séléctionné

    isSelected(id, value, action, otherAction)
    this.formdata new FormData(this.formulaireHtml);
    if(this.formdata.get(id) ==value) { 
        action();
    }
    else{
        otherAction()
    }
  }
  
  //méthode pour récupérer les élément de chaque input (et les ajouter a answer)

    getAnswer() {
        this.formdata = new FormData(this.formulaireHtml);
        this.formdata.forEach(
            (value,key) => {
                if(value != "" && value != "on") {
                }
                this.answers.push([key, value]);
            }
        )
        return this.answers
    }
    //méthode pour afficher dans un alert les résultats

    affAnswers() {
        let chaine = "Récapitulatif\n\n";
        for (let ligne of this.getAnswers()){
            chaine += '${ligne [0]} : ${ligne[1]}\n'
        }
        
        alert(chaine);
    }
    
}