/**----------------------------------------
retina蟇ｾ蠢�
-------------------------------------------- */

$(function(){
	var retinaCheck = window.devicePixelRatio;
	if(retinaCheck >= 2) { // Retina繝�ぅ繧ｹ繝励Ξ繧､縺ｮ縺ｨ縺阪ｒ蛻�ｲ舌＆縺帙※縺�ｋ
		$('img.retina').each( function() {
			var retinaimg = $(this).attr('src').replace(/\.(?=(?:png|jpg|jpeg)$)/i, '@2x.');
			$(this).attr('srcset', retinaimg + " 2x");
		});
	}
});

/**----------------------------------------
繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｧ繝壹�繧ｸ繝医ャ繝励�繧ｿ繝ｳ陦ｨ遉ｺ
-------------------------------------------- */

$(document).ready(function(){
 
    $("#pageTop").hide();
     // 竊代�繝ｼ繧ｸ繝医ャ繝励�繧ｿ繝ｳ繧帝撼陦ｨ遉ｺ縺ｫ縺吶ｋ
 
    $(window).on("scroll", function() {
 
        if ($(this).scrollTop() > 100) {
            // 竊� 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ菴咲ｽｮ縺�100繧医ｊ繧ょｰ上＆縺��ｴ蜷医↓莉･荳九�蜃ｦ逅�ｒ縺吶ｋ
            $('#pageTop').slideDown("fast");
            // 竊� (100繧医ｊ蟆上＆縺�凾縺ｯ)繝壹�繧ｸ繝医ャ繝励�繧ｿ繝ｳ繧偵せ繝ｩ繧､繝峨ム繧ｦ繝ｳ
        } else {
            $('#pageTop').slideUp("fast");
            // 竊� 縺昴ｌ莉･螟悶�蝣ｴ蜷医�蝣ｴ蜷医�繧ｹ繝ｩ繧､繝峨い繝��縺吶ｋ縲�
        }
         
    // 繝輔ャ繧ｿ繝ｼ蝗ｺ螳壹☆繧�
 
        scrollHeight = $(document).height(); 
        // 繝峨く繝･繝｡繝ｳ繝医�鬮倥＆
        scrollPosition = $(window).height() + $(window).scrollTop(); 
        //縲繧ｦ繧｣繝ｳ繝峨え縺ｮ鬮倥＆+繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆鬮倥＆竊偵迴ｾ蝨ｨ縺ｮ繝医ャ繝励°繧峨�菴咲ｽｮ
        footHeight = $(".footerCopy").innerHeight();
        // 繝輔ャ繧ｿ繝ｼ縺ｮ鬮倥＆
                 
        if ( scrollHeight - scrollPosition  <= footHeight ) {
        // 迴ｾ蝨ｨ縺ｮ荳九°繧我ｽ咲ｽｮ縺後√ヵ繝�ち繝ｼ縺ｮ鬮倥＆縺ｮ菴咲ｽｮ縺ｫ縺ｯ縺�▲縺溘ｉ
        //  ".gotop"縺ｮposition繧誕bsolute縺ｫ螟画峩縺励√ヵ繝�ち繝ｼ縺ｮ鬮倥＆縺ｮ菴咲ｽｮ縺ｫ縺吶ｋ        
            $("#pageTop").css({
                "position":"absolute",
                "bottom": "0px"
            });
        } else {
        // 縺昴ｌ莉･螟悶�蝣ｴ蜷医�蜈��css繧ｹ繧ｿ繧､繝ｫ繧呈欠螳�
            $("#pageTop").css({
                "position":"fixed",
                "bottom": footHeight
            });
        }
    });
 
    // 繝医ャ繝励∈繧ｹ繝�繝ｼ繧ｹ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
    $('#pageTop a').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 500);
        // 繝壹�繧ｸ縺ｮ繝医ャ繝励∈ 500 縺ｮ繧ｹ繝斐�繝峨〒繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺吶ｋ
        return false;
     });
 
});

/**----------------------------------------
繧ｹ繝槭� 髮ｻ隧ｱ繝ｪ繝ｳ繧ｯ
-------------------------------------------- */

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

/**----------------------------------------
繧ｹ繝槭� 蝗ｺ螳壹ヵ繝�ち繝ｼ
-------------------------------------------- */

$(function(){


     var $elem = $(".footerTop"), //陦ｨ遉ｺ縺ｮ謫堺ｽ懊ｒ縺吶ｋ繧ｪ繝悶ず繧ｧ繧ｯ繝�(繝輔ャ繧ｿ繝ｼ)
               $content = $("#footer"), //陦ｨ遉ｺ繧貞､画峩縺吶ｋ蝓ｺ貅悶→縺ｪ繧九が繝悶ず繧ｧ繧ｯ繝�
               $win = $(window); //window繧ｪ繝悶ず繧ｧ繧ｯ繝�

     var contentTop = 0; //陦ｨ遉ｺ螟画峩繧偵☆繧句渕貅也せ


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


     // HTML縺悟虚逧�↓螟峨ｏ繧九％縺ｨ繧定�∴縺ｦ縲…ontentTop繧呈怙譁ｰ縺ｮ迥ｶ諷九↓譖ｴ譁ｰ縺励∪縺�
     function updatePosition(){
          contentTop = $content.offset().top + $elem.outerHeight();
     }


     // 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ縺溘�縺ｫ繝√ぉ繝�け
     function update(){
          // 迴ｾ蝨ｨ縺ｮ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ菴咲ｽｮ + 逕ｻ髱｢縺ｮ鬮倥＆縺ｧ逕ｻ髱｢荳九�菴咲ｽｮ繧呈ｱゅａ縺ｾ縺�
          if( $win.scrollTop() + $win.height() > contentTop ){
               $elem.addClass("static");
          }else if( $elem.hasClass("static") ){
               $elem.removeClass("static");
          }
     }


});

/**----------------------------------------
繧ｹ繝槭� 蝗ｺ螳壹ヵ繝�ち繝ｼ蜃ｺ迴ｾ
-------------------------------------------- */
/**
// 繝壹�繧ｸ縺ｮ隱ｭ縺ｿ霎ｼ縺ｿ縺悟ｮ御ｺ�＠縺ｦ縺九ｉ螳溯｡�
   $(function() {
      // 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ騾比ｸｭ縺九ｉ陦ｨ遉ｺ縺励◆縺�Γ繝九Η繝ｼ繝舌�繧呈欠螳�
      var navBox = $(".footerBox");

      // 繝｡繝九Η繝ｼ繝舌�縺ｯ蛻晄悄迥ｶ諷九〒縺ｯ豸医＠縺ｦ縺翫￥
      navBox.hide();

      // 陦ｨ遉ｺ繧帝幕蟋九☆繧九せ繧ｯ繝ｭ繝ｼ繝ｫ驥上ｒ險ｭ螳�(px)
      var TargetPos = 100;

      // 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺輔ｌ縺滄圀縺ｫ螳溯｡�
      $(window).scroll( function() {
         // 迴ｾ蝨ｨ縺ｮ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ菴咲ｽｮ繧貞叙蠕�
         var ScrollPos = $(window).scrollTop();
         // 迴ｾ蝨ｨ縺ｮ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ菴咲ｽｮ縺ｨ縲∫岼逧��繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ菴咲ｽｮ繧呈ｯ碑ｼ�
         if( ScrollPos > TargetPos ) {
            // 陦ｨ遉ｺ(繝輔ぉ繧､繝峨う繝ｳ)
            navBox.fadeIn();
         }
         else {
            // 髱櫁｡ｨ遉ｺ(繝輔ぉ繧､繝峨い繧ｦ繝�)
            navBox.fadeOut();
         }
      });
   });
*/