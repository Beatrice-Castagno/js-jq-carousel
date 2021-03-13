$(function() {
  var prev = $(".prev");
  var next = $(".next");

  // funzione freccia destra
  next.click( function() {
    var imageActive = $(".images img.active");
    var imageFirst = $(".images img.first");
    var bulletActive = $("i.active");
    var bulletFirst = $("i.first");

  if ($(imageActive).hasClass("last")) {
    $(imageActive).removeClass("active");
    $(imageFirst).addClass("active");
    $(bulletActive).removeClass("active");
    $(bulletFirst).addClass("active");
    } else {
      $(bulletActive).removeClass("active").next().addClass("active");
      $(imageActive).removeClass("active").next().addClass("active");
    }
   }
  );

  // funzione freccia sinistra
  prev.click( function() {
    var imageActive = $(".images img.active");
    var imageLast = $ (".images img.last");
    var bulletActive = $("i.active");
    var bulletLast = $("i.last");

  if ($(imageActive).hasClass("first")) {
    $(imageActive).removeClass("active");
    $(imageLast).addClass("active");
    $(bulletActive).removeClass("active");
    $(bulletLast).addClass("active");
  } else {
    $(imageActive).removeClass("active").prev().addClass("active");
    $(bulletActive).removeClass("active").prev().addClass("active");
    }
   }
  );

 }
);
