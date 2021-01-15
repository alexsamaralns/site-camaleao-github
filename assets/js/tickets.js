let token = "f0ae371e-5848-45eb-a109-b3d66a105d98";
let url = "https://api.movidesk.com/public/v1/tickets?token=" + token + "&returnAllProperties=false";

var data = new Date();
var day = data.getDate();

var mouth = data.getMonth() + 1;
var year = data.getFullYear();
var hour = data.getHours();
var min = data.getMinutes();
var msec = data.getMilliseconds();
var dateTime = year + "-" + mouth + "-" + day + "T" + hour + ":" + min + ":" + msec;

var form = document.getElementById('form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
var message = document.getElementById('message');

var dados = {
  "type": 2,
  "subject": "Assunto",
  "category": "Dúvida",
  "urgency": "Baixa",
  "status": "Aguardando",
  "justification": "Retorno do cliente",
  "createdDate": "2021-01-15T14:36:01+00:00",
  "createdBy": {
    "id": "7d1d8aba-cbdd-44cf-"
  },
  "clients": [{
    "personType": 1,
    "profileType": 2,
    "businessName": "MARCOS JUNIOR DA SILVA",
    "email": "junior000638@gmail.com",
    "phone": "(37)998429353"
  }],
  "Actions": [{
    "type": 2,
    "Description": "COLOCAR AQUI A MENSAGEM DO CLIENTE"
  }]
};

form.addEventListener('submit', function(e) {
  e.preventDefault();
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "type": 2,
    "subject": "Assunto",
    "category": "Dúvida",
    "urgency": "Baixa",
    "status": "Aguardando",
    "justification": "Retorno do cliente",
    "createdDate": "2021-01-15T14:36:01+00:00",
    "createdBy": {
      "id": "7d1d8aba-cbdd-44cf-",
      "personType": 1,
      "profileType": 2,
      "businessName": "MARCOS JUNIOR DA SILVA",
      "email": "junior000638@gmail.com",
      "phone": "(37)998429353"
    },
    "clients": [{
      "id": "7d1d8aba-cbdd-44cf-",
      "personType": 1,
      "profileType": 2,
      "businessName": "MARCOS JUNIOR DA SILVA",
      "email": "junior000638@gmail.com",
      "phone": "(37)998429353"
    }],
    "Actions": [{
      "type": 2,
      "Description": "MENSAGEM ALTERADA"
    }]
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://api.movidesk.com/public/v1/tickets?token=f0ae371e-5848-45eb-a109-b3d66a105d98&returnAllProperties=false", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
});

function postTicket() {
  //console.log("message = " + message);
  /**/
}
