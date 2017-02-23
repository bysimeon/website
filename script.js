$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({'overflow':'visible'});
});

$(document).ready(function(){
  $("#braces").click(function(){
    $("#mouth").show();
    $("#twit,#gram").fadeIn();
    $("#braces").hide();
  });
  $("#mouth").click(function(){
    $("#braces").show();
    $("#mouth").hide();
    $("#twit,#gram").fadeOut();
  });
});

$(document).ready(function(){
  $("#one").click(function(){
    $(".page1").fadeIn();
    $(".page2").hide();
    $(".page3").hide();
  });
  $("#two").click(function(){
    $(".page1").hide();
    $(".page2").fadeIn();
    $(".page3").hide();
  });
  $("#three").click(function(){
    $(".page1").hide();
    $(".page2").hide();
    $(".page3").fadeIn();
  });
});
