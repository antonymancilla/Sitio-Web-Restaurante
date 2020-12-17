$(document).ready(function () {
  //-----Efecto MENU -------------
  $(".menu a").each(function (index, elemento) {
    //Poner hasta arriba los enlaces
    //El efecto es por que a los elemento "a" tienen una posicion relativa en CSS
    $(this).css({
      top: "-200px",
    });
    $(this).animate(
      {
        top: "0px",
      },
      2000 + index * 500
    );
  });
  //----Efecto HEADER------
  if ($(window).width() > 800) {
    $("header .textos").css({
      opacity: 0,
      marginTop: 0,
    });
    $("header .textos").animate(
      {
        opacity: 1,
        marginTop: "-50px",
      },
      1500
    );
  }
  //----Efecto Scroll Elementos Menu------
  let acerca = $("#acerca-de").offset().top,
    menu = $("#platillos").offset().top,
    galeria = $("#galeria").offset().top,
    ubicacion = $("#ubicacion").offset().top;
  //---------------Enlace ACERCA DE-----
  //"#btn-acerca"->ID del ENLACE
  $("#btn-acerca").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        //acerca->Variable que declaramos al inicio
        scrollTop: acerca - 100,
      },
      //Tiempo de desplazamiento
      1000
    );
  });
  //---------------Enlace MENU ---------
  //"#btn-menu"->ID del ENLACE
  $("#btn-menu").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        //menu->Variable que declaramos al inicio
        scrollTop: menu,
      },
      //Tiempo de desplazamiento
      1000
    );
  });
  //---------------Enlace GALERIA ---------
  //"#btn-galeria"->ID del ENLACE
  $("#btn-galeria").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        //galeria->Variable que declaramos al inicio
        scrollTop: galeria,
      },
      //Tiempo de desplazamiento
      1000
    );
  });
  //---------------Enlace UBICACION ---------
  //"#btn-ubicacion"->ID del ENLACE
  $("#btn-ubicacion").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        //ubicacion->Variable que declaramos al inicio
        scrollTop: ubicacion,
      },
      //Tiempo de desplazamiento
      1000
    );
  });
});
