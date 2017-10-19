$(function(){
  $('form#selection').submit(function(event) {
    event.preventDefault();
    var animal = $("input:radio[name=animal]:checked").val();

    if(animal === "ocelot"){
      $('#ocelot').show();
    } else {
      $('#ocelot').hide();
    };
    if(animal === "orangutan"){
      $('#orangutan').show();
    } else {
      $('#orangutan').hide();
    };
    if(animal === "lemur"){
      $('#lemur').show();
    } else {
      $('#lemur').hide();
    };
  });
});
