 $(document).ready(function(){

           //--------------- scroll -------------------------------
   $("html").niceScroll({

    cursorcolor: "#1dba9b",
    scrollspeed: 150,
    cursordragspeed: 0.9,
  });

   var ht = $("html").getNiceScroll();
     ht.resize();

  $(".test").fitText(1.5,{

    minFontSize: "10px",
    maxFontSize: "30px;" 
  });




 }) ;