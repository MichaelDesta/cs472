  

"use strict"

var counter=0;
var reset=0;
$(function(){

    $("#maze .boundary").mouseover(turnRed);
    $("#end").mouseover(endPoint);
    $("#maze").mouseenter(mazeEnter);
    $("#start").mouseover(resetPoint);
  
});

function mazeEnter(){
    reset++;
}



function turnRed(evt) {
    $("#maze .boundary").addClass('youlose');
     counter ++;
}



function endPoint(evt){
    if(counter==0 && reset>0){
        $("#status").text("You won");
    }

    else{
        $("#status").text("You lost");
    }
}


function resetPoint(evt){
    $("#maze .boundary").css('background-color','#eeeeee');
    location.reload();
}


  /////////////////////////////////////////////////Another method
//   var counter=0;
  
//   $(document).ready(function(){
    
//     //
//     $(".boundary").mouseover(function(){
//         $(".boundary").css("background-color","red");
//         ++counter;
//     });
//     $("#start").click(function(){  
//         $("#start").text("starting....");
//         $(".boundary").css("background-color","#eeeeee");
//         $("#status").text("Click the S to begin.");
//         location.reload();
//         });
//     //
//     $("#end").mouseover(function(){
//         $("#end").text("end...");
//         if(counter>0){
//         $("#status").text("you lost")
//         }
//         else{
//             $("#status").text("you won")
//         }
//     });

// $("#start").mouseleave(function(){
//     $("#start").text("S");
//     $("#start").css("background-color","grey");
//     });

// $("#end").mouseleave(function(){
//     $("#end").text("E");
// });

// });

//location.reload();