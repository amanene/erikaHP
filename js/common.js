$(function(){
	var retinaCheck = window.devicePixelRatio;
	if(retinaCheck >= 2) {
		$('img.retina').each( function() {
			var retinaimg = $(this).attr('src').replace(/\.(?=(?:png|jpg|jpeg)$)/i, '@2x.');
			$(this).attr('srcset', retinaimg + " 2x");
		});
	}
});



$(document).ready(function(){
 
    $("#pageTop").hide();

 
    $(window).on("scroll", function() {
 
        if ($(this).scrollTop() > 100) {

            $('#pageTop').slideDown("fast");
        } else {
            $('#pageTop').slideUp("fast");
        }
         
 
        scrollHeight = $(document).height(); 
        scrollPosition = $(window).height() + $(window).scrollTop(); 
        footHeight = $(".footerCopy").innerHeight();
                 
        if ( scrollHeight - scrollPosition  <= footHeight ) {
            $("#pageTop").css({
                "position":"absolute",
                "bottom": "0px"
            });
        } else {
            $("#pageTop").css({
                "position":"fixed",
                "bottom": footHeight
            });
        }
    });
 
    $('#pageTop a').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 500);
        return false;
     });
 
});

$(function() {
    if (!isPhone())
        return;

    $('span[data-action=call]').each(function() {
        var $ele = $(this);
        $ele.wrap('<a href="tel:' + $ele.data('tel') + '"></a>');
    });
});

function isPhone() {
    return (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0);
}

$(function(){


     var $elem = $(".footerTop"),
               $content = $("#footer"),
               $win = $(window);

     var contentTop = 0;

     $win
          .load(function(){
               updatePosition();
               update();
          })
          .resize(function(){
               updatePosition();
               update();
          })
          .scroll(function(){
               update();
          });


     function updatePosition(){
          contentTop = $content.offset().top + $elem.outerHeight();
     }


     function update(){
          if( $win.scrollTop() + $win.height() > contentTop ){
               $elem.addClass("static");
          }else if( $elem.hasClass("static") ){
               $elem.removeClass("static");
          }
     }


});

/*
   $(function() {
      var navBox = $(".footerBox");

      navBox.hide();

      var TargetPos = 100;

      $(window).scroll( function() {
         var ScrollPos = $(window).scrollTop();
         if( ScrollPos > TargetPos ) {
            navBox.fadeIn();
         }
         else {
            navBox.fadeOut();
         }
      });
   });
*/