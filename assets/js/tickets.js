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
 "createdBy":{
     "id":"7d1d8aba-cbdd-44cf-"
  },
  "clients": [
        {
            "id":"7d1d8aba-cbdd-44cf-"
        }
    ],"Actions" :[
        {
            "type":2,
            "Description" :"COLOCAR AQUI A MENSAGEM DO CLIENTE"
        }
    ]
};

form.addEventListener('submit', function(e) {
  e.preventDefault();
  fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

function postTicket() {
  //console.log("message = " + message);
  /**/
}
