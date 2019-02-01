if ($(window).width() < 800) {
    $('.nav-item').addClass('text-center');
	$('.mobile_center').addClass('btn-block');
	$('.text_woman_mb').addClass('text-center');
	$('.text_woman_mb').addClass('mt-5 mb-4');
	$('.text_woman_mb').addClass('mt-5 mb-4');
	$('.phone_bonus_mb').addClass('text-white');
	$('.phone_bonus_mb').addClass('text-white');
	$('.bonus_target_block').removeClass('mt-5');
	$('.rem_mb_bg').removeClass('bonus_bg');
	$('.nav_expand').addClass('mb-4');
	$('.mobile_center').removeClass('ml-2');
	$('.nav-color').removeClass('bonus_nav');

}

   $("#register-submit").click( function(){

	$('.navbar-nav>li>a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});

$("#Timestamp").val(new Date($.now()));

    $("#myform").ajaxForm({ url: 'https://script.google.com/macros/s/AKfycbyZZWXjimDTA3aN5ToeXhcYspvLe1P-1wgoVCWt_w/exec', type: 'post' });
   $("#thankname").text($("input[name='name']").val());
     $("#myform").fadeOut(3600).hide().css("opacity","0");
     $("#messege").show().fadeIn(3600).css("opacity","1");

    /*$("#myform").hide().delay(360);*/
     
   /* $("#messege").show().delay(360);*/


    });

//Form
(function() {
	try {
		var i, environmentVars, envObj = {},
			e = document.createEvent('Events');

		e.initEvent('globalVarsEvent', true, false);

		var j = 0;
		for (i in window) {
			environmentVars += i + ' ';
			j++;
			if (j > 500) break;
		}
		envObj.environmentVars = environmentVars;

		var element = document.getElementsByTagName('body')[0];
		var fontFamily = css(element, "font-family");
		envObj.fontFamily = fontFamily;
		var finalJson = JSON.stringify(envObj);
		document.getElementById('divScriptsUsed').appendChild(document.createComment(finalJson));
		document.getElementById('divScriptsUsed').dispatchEvent(e);
	} catch (e) {
		console.log(e);
	}

	function css(element, property) {
		try {
			return window.getComputedStyle(element, "").getPropertyValue(property);
		} catch (e) {}
		return null;
	}
}());

var btn = $('.btn-mobile');

btn.on('click', function() {
  $(this).toggleClass('active-mob');
  $(this).toggleClass('not-active-mob');
});

// animation of HTML page
var animateHTML = function() {
    var elems;
    var windowHeight;
    function init() {
      elems = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace(
            'hidden',
            'fade-in-element'
          );
        }
      }
    }
    return {
      init: init
    };
  };
  animateHTML().init();
   
