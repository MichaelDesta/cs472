
$(document).ready(function(){
    var timer=null;

    $('#start').click(function(){
      const txtCircles=parseInt($('#numbercircles').val());

     for(let i=0;i<txtCircles; i++ ){
        var x = Math.floor(Math.random() * 100);
        var y = Math.floor(Math.random() * 100);
        var z = Math.floor(Math.random() * 100);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";


        $("<div></div>")
        .addClass("circle")
        .css("background-color", bgColor)
        .insertAfter("#controls");
        
       
    }
    $(".circle").mouseout(function() {
        $('.circle').animate({
            opacity:"1"
        });
      });

      $(".circle").mouseover(function() {
        $('.circle').animate({
            opacity:"0.34"
        });
      });

    timer=setInterval(resize, 250);
   
  })

  function resize(){
  
    const txtWidth=parseInt($('#width').val());
    const cssWidth=parseInt($('.circle').css("width"));
    const txtGrowth=parseInt($('#growthamount').val());
              
    $('.circle').css("width", parseInt($('.circle').css('width')) + 4*txtGrowth + "px");
    $('.circle').css("height", parseInt($('.circle').css('width')) + 4*txtGrowth + "px");



    $(".circle").click(function() {
        clearInterval(timer);
        $('.circle').css("width", 0 + "px");
        $('.circle').css("height", 0 + "px");
        
      });
  }

})