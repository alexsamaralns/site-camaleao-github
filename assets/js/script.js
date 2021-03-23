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

function scrollToSection(idSection) {
  const section = document.querySelector(idSection);
  let difference = 0;
  var width = screen.width;
  if((idSection == "#section-2" || idSection == "#section-9") && width > 990) {
      difference = 100;
  }
  window.scroll({
    top: section.offsetTop - difference,
    behavior: "smooth"
  });
}

var btnTestFree = document.getElementById('test-free-btn');

function shake() {
  setInterval(function(){
    btnTestFree.classList.add("animate__shakeX");
    setTimeout(function() {
      btnTestFree.classList.remove("animate__shakeX");
    }, 1000);
  }, 5000);
}

shake();

function mask(o, f) {
  setTimeout(function () {
      var v = mphone(o.value);
      if (v != o.value) {
          o.value = v;
      }
  }, 1);
}

function mphone(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
      r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}
