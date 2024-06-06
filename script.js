var mes = (new Date().getMonth());

var tentativas = ["sabor", "olhos", "arms", "gatinha", "algema", "sapinha", "baby", "love", "smile", "sol"];

var tentativas24 = ["", "", "paint", "", "sapinha", "burning"];



function mostraBarraSubmit() {
  var disp = document.getElementById("barraSubmit").style.display;
  if (disp === "block") {
    disp = "none";
  } else {
    disp = "block";
  }
}

function submitPalavra() {
  let palavraDigitada = document.getElementById("palavraDigitada").value;
  console.log(palavraDigitada);
  console.log(tentativas[mes], mes);
  palavraDigitada = palavraDigitada.toLowerCase();
  console.log(palavraDigitada);
  if (palavraDigitada == tentativas24[mes]) {
    console.log("Acertou!");
    r = confirm("Acertou!");
    if (r) {
      window.location.href = "/mes17.html";
      console.log("confirmou");
    }
  } else {
    alert("Errou! Tenta de novo");
    document.getElementById("palavraDigitada").value = '';
  }
}

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  let element = document.getElementById('embed-iframe');
  let options = {
    width: '100%',
    height: '152',
    uri: 'https://open.spotify.com/playlist/1Q7OFR10FTsBounh78s1Lh'
  };
  let callback = (EmbedController) => { };
  IFrameAPI.createController(element, options, callback);

};

function cuzin() {
  window.location.href = "https://www.youtube.com/watch?v=orWnzqBA63w";
}

function semCuzin() {
  alert("Errou! Tenta de novo");
  document.getElementById("botaonao").style.display = "none";
}
