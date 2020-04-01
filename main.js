// rendo le liste invisibili
$(".casper").hide();
// creo una funzione che rende le liste
// a comparsa tramite click
$(".ok h3").click(
  function(){
    $(this).siblings('.casper').toggle();
  }
);
