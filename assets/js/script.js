window.onscroll = function() {
    "use strict";
    var b = $(window).scrollTop();
    if( b > 72){
        $("#topButton").addClass("topButton");
        $("#topButton").removeClass("hide-up-button");
    }else if(b == 0) {
      $("#topButton").addClass("hide-up-button");
      $("#topButton").removeClass("topButton");
    }
};

var mounthly = document.getElementById('mounthly');
var yearly = document.getElementById('yearly');
var semiannual = document.getElementById('semiannual');

document.getElementById('mounthly').style.backgroundColor = "transparent";
document.getElementById('mounthly').style.fontWeight = "400";
document.getElementById('yearly').style.backgroundColor = "var(--primary-color)";
document.getElementById('yearly').style.fontWeight = "600";
document.getElementById('semiannual').style.backgroundColor = "transparent";
document.getElementById('semiannual').style.fontWeight = "400";

mounthly.addEventListener('click', function() {
  changePlan(0);
})

yearly.addEventListener('click', function() {
  changePlan(1);
})

semiannual.addEventListener('click', function() {
  changePlan(2);
})

function changePlan(plan) {
    if(plan == 0) {
      document.getElementById('mounthly').style.backgroundColor = "var(--primary-color)";
      document.getElementById('mounthly').style.fontWeight = "600";
      document.getElementById('yearly').style.backgroundColor = "transparent";
      document.getElementById('yearly').style.fontWeight = "400";
      document.getElementById('semiannual').style.backgroundColor = "transparent";
      document.getElementById('semiannual').style.fontWeight = "400";
      document.getElementById('diamond-value').innerHTML = "129";
      document.getElementById('diamond-value').style.fontWeight = "600";
      document.getElementById('diamond-value').style.fontSize = "4.5rem";
      document.getElementById('gold-value').innerHTML = "89";
      document.getElementById('gold-value').style.fontWeight = "600";
      document.getElementById('gold-value').style.fontSize = "4.5rem";
      document.getElementById('diamond-month').innerHTML = "1 MÊS";
      document.getElementById('gold-month').innerHTML = "1 MÊS";
    }else if(plan == 1) {
      document.getElementById('mounthly').style.backgroundColor = "transparent";
      document.getElementById('mounthly').style.fontWeight = "400";
      document.getElementById('yearly').style.backgroundColor = "var(--primary-color)";
      document.getElementById('yearly').style.fontWeight = "600";
      document.getElementById('semiannual').style.backgroundColor = "transparent";
      document.getElementById('semiannual').style.fontWeight = "400";
      document.getElementById('diamond-value').innerHTML = "89";
      document.getElementById('diamond-value').style.fontWeight = "600";
      document.getElementById('diamond-value').style.fontSize = "4.5rem";
      document.getElementById('gold-value').innerHTML = "49";
      document.getElementById('gold-value').style.fontWeight = "600";
      document.getElementById('gold-value').style.fontSize = "4.5rem";
      document.getElementById('diamond-month').innerHTML = "12 MESES";
      document.getElementById('gold-month').innerHTML = "12 MESES";
    }else if(plan == 2) {
      document.getElementById('mounthly').style.backgroundColor = "transparent";
      document.getElementById('mounthly').style.fontWeight = "400";
      document.getElementById('yearly').style.backgroundColor = "transparent";
      document.getElementById('yearly').style.fontWeight = "400";
      document.getElementById('semiannual').style.backgroundColor = "var(--primary-color)";
      document.getElementById('semiannual').style.fontWeight = "600";
      document.getElementById('diamond-value').innerHTML = "109";
      document.getElementById('diamond-value').style.fontWeight = "600";
      document.getElementById('diamond-value').style.fontSize = "4.5rem";
      document.getElementById('gold-value').innerHTML = "69";
      document.getElementById('gold-value').style.fontWeight = "600";
      document.getElementById('gold-value').style.fontSize = "4.5rem";
      document.getElementById('diamond-month').innerHTML = "6 MESES";
      document.getElementById('gold-month').innerHTML = "6 MESES";
    }
}

/*const saibaMais = document.getElementById('#saibaMais');

saibaMais.addEventListener('click', scrollToSection2);

function scrollToSection2(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute('href');
  const section = document.querySelector(id);
  console.log(section.offsetTop);
  window.scroll({
    top: section.offsetTop - 100,
    behavior: "smooth"
  });
}*/

function scrollToSection(idSection) {
  const section = document.querySelector(idSection);
  let difference = 0;
  console.log(section.offsetTop);
  if(idSection == "#section-2") {
    difference = 100;
  }
  window.scroll({
    top: section.offsetTop - difference,
    behavior: "smooth"
  });
}
