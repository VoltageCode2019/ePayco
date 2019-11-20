
(function($) {
  "use strict"; // Start of use strict
  
  // Boton del menu, en dispositivos moviles
  $("#menu-toggle").click(function(e){
    
    e.preventDefault();
    $("#wrapper").toggleClass("menuDisplayed");
  
  });

  // Enviar Formulario
  $("#submit_info").click(function(e) {
    
    e.preventDefault();
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )

  });

  // Cancelar Formulario
  $("#cancel_info").click(function(e) {
    
    e.preventDefault();
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })

  });

})(jQuery); // End of use strict
