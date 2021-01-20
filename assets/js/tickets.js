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
var tel = document.getElementById('tel');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if(name.value != '' && email.value != '' && subject.value != '' && message.value != '' && tel.value != '') {

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
      url: '../assets/php/form.php', //'https://www.sistemacamaleao.com/form.php',
      data: postForm,
      dataType: 'json',
      success: function(data) {
        if (data.success) {
          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('subject').value = '';
          document.getElementById('message').value = '';
          document.getElementById('tel').value = '';
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Sua mensagem foi recebida com sucesso, você receberá contato pelo seu e-mail e/ou' +
              'telefone em breve! Obrigado.',
            showConfirmButton: true
          })
        } else {
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Algo deu errado!',
            showConfirmButton: true
          })
        }
      }
    });
    event.preventDefault();

  }else {

    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Por favor, preencha todos os campos!',
      showConfirmButton: true
    });
    event.preventDefault();

  }

});
