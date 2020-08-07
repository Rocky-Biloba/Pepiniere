  var fields = {};

  document.addEventListener("DOMContentLoaded", function() {
 fields.nom = document.getElementById('nom');
 fields.courriel= document.getElementById('courriel');
 fields.objet = document.getElementById('objet');
 fields.message = document.getElementById('message');
})
  // valider champs remplis
  function notNull(value){
 if (value == null || typeof value == 'undefined' ) return false;
 return (value.length > 0);
  }

// valider Courriel
function isEmail(courriel) {
let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 return regex.text(String(courriel).toLowerCase());
}

// matcher un champ avec une fonction de validation
// sinon, le champ affiche rouge
function fieldValidation(field, validationFunction) {
 if (field == null) return false;

 let isFieldValid = validationFunction(field.value)
 if (!isFieldValid) {
 field.className = 'placeholderRed';
 } else {
 field.className = '';
 }

 return isFieldValid;
}

// valider tout les champs
function isValid() {
 var valid = true;

 valid &= fieldValidation(fields.nom notNull);
 valid &= fieldValidation(fields.courriel, isEmail);
 valid &= fieldValidation(fields.objet, notNull);
 valid &= fieldValidation(fields.message, notNull);

 return valid;
}


class User {
 constructor(nom, courriel, objet, message) {
 this.nom = nom;
 this.courriel = courriel;
 this.objet = objet;
 this.message = message;
 }
}

function envoyerMsg(){
  if (isValid()){
    let usr = new User(nom.value, courriel.value, objet.value, message.value);

    alert('Merci ${usr.nom}, nous vous répondrons sous peu à l\'adresse ${usr.courriel}.\nLes messages sont stockés dans la base de données')
  } else {
    alert("Assurez-vous de bien remplir tous les champs")
  }
}
