function verifpseudo(champ) {
  var v = champ.value;
  if (v.length < 2 || v.length > 25) {
      champ.style.backgroundColor = "#FA8072";
  } else {
      champ.style.backgroundColor = "#8FBC8F";
  }
}

function verifemail() {
  var r = /^[a-zA-Z0-9._-]+@[a-zA-Z.]{2,}\.[a-z]{2,3}$/;
  var emailElement = document.getElementById("email");
  var e = emailElement.value;
  if (r.test(e)) {
      emailElement.style.backgroundColor = "#8FBC8F";
  } else {
      emailElement.style.backgroundColor = "#FA8072";
  }
}

function verifpass() {
  var password1 = document.getElementById("password1");
  var password2 = document.getElementById("password2");

  if (password1.value === password2.value) {
      password1.style.backgroundColor = "#8FBC8F";
      password2.style.backgroundColor = "#8FBC8F";
  } else {
      password1.style.backgroundColor = "#FA8072";
      password2.style.backgroundColor = "#FA8072";
      alert("Mot de Passe et Confirmation doivent être identiques");
  }
}
