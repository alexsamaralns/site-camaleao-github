document.getElementById('mounthly').style.backgroundColor = "transparent";
document.getElementById('mounthly').style.fontWeight = "400";
document.getElementById('yearly').style.backgroundColor = "var(--primary-color)";
document.getElementById('yearly').style.fontWeight = "600";
document.getElementById('semiannual').style.backgroundColor = "transparent";
document.getElementById('semiannual').style.fontWeight = "400";

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
