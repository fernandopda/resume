  //$(".photo").hide();
  $("#education").hide();
  $("#profesionalExp").hide();
  $("#addInf").hide();
  $("#finalInf").hide(); 
  $("#skills").hide();
  
  /*$("#expList").hide();
  $("#addInfList").hide();
  $("#finalInf").hide(); */
  
  /*$('#fernandoP').click(function(){
      $(".infs").fadeToggle("slow");
    });*/

  $("#fernandoP").click(function(){
    $("#intro").fadeIn("slow");                    
   $("#education").hide();
   $("#profesionalExp").hide(); 
   $("#addInf").hide();  
   $("#skills").hide();                     
  
  
  });
  $("#sk").click(function(){
   $("#skills").fadeIn("slow")
   $("#education").hide();
   $("#profesionalExp").hide(); 
   $("#addInf").hide();  
   $("#intro").hide(); 
  });
  
  $("#edu").click(function(){
   $("#education").fadeIn("slow");
   $("#profesionalExp").hide(); 
   $("#addInf").hide();
   $("#skills").hide();  
   $("#intro").hide(); 
  });
  $("#exp").click(function(){
   $("#profesionalExp").fadeIn("slow");
   $("#education").hide(); 
   $("#addInf").hide();  
   $("#skills").hide();  
   $("#intro").hide();  
  });
  $("#me").click(function(){
   $("#addInf").fadeIn("slow");
   $("#profesionalExp").hide();
   $("#education").hide();
   $("#skills").hide();  
   $("#intro").hide();  
  }); 
  
  $('#fernandoP').mouseover(function(){
    $(this).css({"background-color":"white"});
  });
  $('#fernandoP').mouseleave(function(){
    $(this).css({"background-color":"black"});
  });
  /*$('.changeC').mouseover(function(){
    $(this).css({"color":"white"});
  });
  $('.changeC').mouseleave(function(){
    $(this).css({"color":"black"});
  });*/
