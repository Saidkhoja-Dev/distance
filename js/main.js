var elForm = document.querySelector(".way__form");
var elPerson = document.querySelector(".result__person");
var elBike = document.querySelector(".result__bike");
var elCar = document.querySelector(".result__car");
var elPlane = document.querySelector(".result__plane");


elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  var elWayInput = parseFloat(elForm.querySelector(".way__input").value.trim(), 10);
  
  
  var speedPerson = 3.6 / 60;
  var speedBike = 20.1 / 60;
  var speedCar = 70 / 60;
  var speedPlane = 800 / 60;


  if (!isNaN(elWayInput) && elWayInput >= 0) {
    var byPerson = Math.floor((elWayInput/speedPerson) / 60) + ' soat '  + (Math.floor(elWayInput/speedPerson) % 60) + ' daqiqa';
    
    var byBike = Math.floor((elWayInput/speedBike) / 60) + ' soat ' + (Math.floor(elWayInput/speedBike) % 60) + ' daqiqa';
    
    var byCar = Math.floor((elWayInput/speedCar) / 60) + ' soat ' + (Math.floor(elWayInput/speedCar) % 60) + ' daqiqa';
    
    var byPlane = Math.floor((elWayInput/speedPlane) / 60) + ' soat ' + (Math.floor(elWayInput/speedPlane) % 60) + ' daqiqa';

    elPerson.textContent = byPerson;
    elBike.textContent = byBike;
    elCar.textContent = byCar;
    elPlane.textContent = byPlane;
   
  }else {
    console.log("Musbat son kiriting !");
  }
});