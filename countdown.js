var myInterval = setInterval(clock, 1000);

function createButton() {
  var element = document.getElementById("countdown");
  element.remove();
  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'heart';
  button.setAttribute('onClick', 'homePage()');

  var container = document.getElementById('banner');
  container.appendChild(button);
}

function homePage() {
  window.open("/hunt.html");
}

if (clock() <= 0) {
  var stop = true;

}

if (stop === true) {

  createButton();
  console.log(clock());
}

function clock() {
  var startDate = new Date().getTime();
  // var endDate = new Date();
  var endDate = new Date("2025-04-01T20:30:00");
  // let endDate = new Date("2023-01-26T10:29:00");
  var timeRemaining = parseInt((endDate - startDate) / 1000);
  if (timeRemaining >= 0) {
    days = parseInt(timeRemaining / 86400);
    timeRemaining = (timeRemaining % 86400);
    hours = parseInt(timeRemaining / 3600);
    timeRemaining = (timeRemaining % 3600);
    minutes = parseInt(timeRemaining / 60);
    timeRemaining = (timeRemaining % 60);
    seconds = parseInt(timeRemaining);
    document.getElementById("days").innerHTML = parseInt(days, 10) + ":";
    document.getElementById("hours").innerHTML = ("0" + hours).slice(-2) + ":";
    document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2) + ":";
    document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
  }
  return timeRemaining;

}





