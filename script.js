function Gerador() {
  let frases = {
    "Pitagoras":
      "Eduquem as crianças, para que não seja necessário punir os adultos.",
    "Aristóteles": "O ignorante afirma, o sábio duvida, o sensato reflete.",
    "Nikola Tesla":
      "Esteja sozinho, este é o segredo da invenção, estar sozinho, isto é quando as ideias nascem."
  };

  let autores = Object.keys(frases);
  let autor = autores[Math.floor(Math.random() * autores.length)];
  let frase = frases[autor];

  document.getElementById("frase").innerHTML = '"'+frase+'"';
  document.getElementById("autor").innerHTML = autor;
}
