$(document).ready(function() {
  $("form[name='loginForm']").validate({
    rules: {
      inputUser: {
        required: true,
      },
      inputPassword: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      inputUser: "Por favor digite um login e/ou não seu login está incorreto.",
      inputPassword: {
        required: "Por favor digite uma senha e/ou não sua senha está incorreta.",
        minlength: "Sua senha deve ter no mínimo 5 caractéres"
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });    
});

function init() {
    // start up after 2sec no matter what
    window.setTimeout(function() {
        start();
    }, 2000);
}

// fade in experience
function start() {
    $('body').removeClass("loading").addClass('loaded');
}

$(window).load(function() {
    // fade in page
    init();
});