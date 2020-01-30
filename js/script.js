// Griglia 6x6, ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
// I quadrati fateli prima a mano e poi con javascript.
$(document).ready(function() {
    for (var i = 0; i < 36; i++) {
      $('.flex').append('<div class="quadrato"></div>'); // aggiungiamo a flex la classe quadrato
    }

    $(document).on('click', '.quadrato', function() {
      var coloreNumero = $(this); // selezioniamo UN quadrato

      $.ajax({
        url : "https://flynn.boolean.careers/exercises/api/random/int",
        method : "GET",
        success : function (data) {
          console.log(data);
          $(coloreNumero).html(data.response);
          if (data.response <= 5) {
            $(coloreNumero).addClass("yellow");
          } else if (data.response > 5) {
            $(coloreNumero).addClass("green");
          }
        },
        error: function (richiesta, stato, errori) {
          alert("E' avvenuto un errore. " + errore);
        }
      })
    });

});
