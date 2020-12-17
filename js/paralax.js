$(document).ready(function () {
  //Para acceder al tamaño del scroll
  $(window).scroll(function () {
    let windowWidth = $(window).width();
    //Se efectua si solo es mayor a 800px si es menos es por que esta en dispositivos moviles
    //En la MEDIDA DE MEDIAQUERY tienen que llevar la MISMA MEDIDA
    //@media screen and (max-width: 800px)
    //Obtener el valor con $(window).scrollTop(); ejecutando en la consola
    if (windowWidth > 800) {
      let scroll = $(window).scrollTop();
      $("header .textos").css({
        //Puedes cambiarle el valor ->scroll / 3 o entre 4
        transform: "translate(0px," + scroll / 2 + "%)",
      });
      $(".acerca-de article").css({
        //Puedes cambiarle el valor ->scroll / 3 o entre 4
        transform: "translate(0px, -" + scroll / 4 + "%)",
      });
    }
  });
  $(window).resize(function () {
    let windowWidth = $(window).width();
    if (windowWidth < 800) {
      $(".acerca-de article").css({
        //Puedes cambiarle el valor ->scroll / 3 o entre 4
        transform: "translate(0px, 0px)",
      });
    }
  });
});
