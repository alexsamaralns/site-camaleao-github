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
let tel = document.getElementById('tel');
let clickControl = 0;

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (clickControl === 0) {

    clickControl = 1;

    if (name.value !== '' && email.value !== '' && subject.value !== '' && message.value !== '' && tel.value !== '') {

        var postForm = {
          'name': name.value,
          'email': email.value,
          'subject': subject.value,
          'message': message.value,
          'tel': tel.value,
          'datetime': dateTime
        };

        $.ajax({
          type: 'POST',
          url: '../assets/php/form.php', //https://www.sistemacamaleao.com/php/form.php',
          data: postForm,
          dataType: 'json',
          success: function(data) {
            if (data.success) {
              clickControl = 0;
              document.getElementById('name').value = '';
              document.getElementById('email').value = '';
              document.getElementById('subject').value = '';
              document.getElementById('message').value = '';
              document.getElementById('tel').value = '';
              launch_toast_success();
            } else {
              clickControl = 0;
              launch_toast_error();
            }
          }
        });

      event.preventDefault();

    } else {

      clickControl = 0;

      launch_toast_warning();

      event.preventDefault();

    }

  }

});

function launch_toast_success() {
  var x = document.getElementById("toast-success");
  var y = document.getElementById("desc-success");
  /*var p1 = document.getElementById("success-line1");
  var p2 = document.getElementById("success-line2");
  var p3 = document.getElementById("success-line3");
  var p4 = document.getElementById("success-line4");
  var p5 = document.getElementById("success-line5");*/
  x.className = "show";
  setTimeout(function() {
    if(screen.width <= 990) {
      y.innerText = `
        Sua mensagem foi recebida
        com sucesso!
        Em breve entraremos
        em contato.
        Obrigado!
      `;
    }else {
      y.innerText = `
        Sua mensagem foi recebida com sucesso! Em breve entraremos em contato. Obrigado!
      `;
    }
  }, 600);
  hiden_text("desc-success")
  setTimeout(function() {
    x.className = x.className.replace("show", "");
    y.innerText = ``;
  }, 4800);
}

function launch_toast_warning() {
  var x = document.getElementById("toast-warning");
  var y = document.getElementById("desc-warning");
  x.className = "show";
  setTimeout(function() {
    if(screen.width <= 990) {
      y.innerText = `
        Por favor,
        preencha todos os campos!
      `;
    }else {
      y.innerText = `Por favor, preencha todos os campos!`;
    }
  }, 600);
  hiden_text("desc-warning")
  setTimeout(function() {
    y.innerText = ``;
    x.className = x.className.replace("show", "");
  }, 4800);
}

function launch_toast_error() {
  var x = document.getElementById("toast-error");
  var y = document.getElementById("desc-error");
  x.className = "show";
  setTimeout(function() {
    if(screen.width <= 990) {
      y.innerText = `
        Algo deu errado!
        Tente novamente.
      `;
    }else {
      y.innerText = `Algo deu errado! Tente novamente.`;
    }
  }, 600);
  hiden_text("desc-error")
  setTimeout(function() {
    y.innerText = ``;
    x.className = x.className.replace("show", "");
  }, 4800);
}

function hiden_text(id) {
  var y = document.getElementById(id);
  setTimeout(function() {
    y.innerText = "";
  }, 4300);
}
