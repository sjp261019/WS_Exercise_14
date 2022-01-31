$(document).ready(function(){
  
  $.fn.toggleText = function(t1, t2){
    if (this.text() == t1) this.text(t2);
    else                   this.text(t1);
    return this;
  };

  $(".menu").children().hover(function (){
    $(this).toggleClass("menuitems2");
    $(this).toggleText('hello', '');
  });

  $(document).ready(function(){
    
    $(".menu2").children().hover(function (){
      $(this).toggleClass("menuitems2");
      $(this).toggleText('hello', '');
    });
  });


  $(document).ready(function(){
    
    $(".menu3").children().hover(function (){
      $(this).toggleClass("menuitems2");
      $(this).toggleText('hello', '');
    });
  });

  $(document).mousemove(function(e){
    $("#circle").css({
      left: e.pageX,
      top: e.pageY
    });
  });

  document.body.style.cursor = "none";

});


