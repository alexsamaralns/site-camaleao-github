let token = "f0ae371e-5848-45eb-a109-b3d66a105d98";
let url = "https://api.movidesk.com/public/v1/tickets?token=" + token + "&returnAllProperties=false";

var data = new Date();
var day = data.getDate();,

var mouth = data.getMonth() + 1;
var year = data.getFullYear();
var hour = data.getHours();
var min = data.getMinutes();
var msec = data.getMilliseconds();
var dateTime = year + "-" + mouth + "-" + day + "T" + hour + ":" +
  min + ":" + msec;

function postTicket() {
  fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  //body: JSON.stringify(data),
  RequestBody:
    {
     "type": 2,
     "subject": "Assunto Teste",
     "category": "Dúvida",
     "urgency": "Média",
     "status": "Status",
     "justification": "Justificativa",
     "createdDate": dateTime,
      ... Demais colunas no formato do layout acima
    }
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}
