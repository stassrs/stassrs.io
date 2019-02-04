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


//Validation and Register Start............

$("#register-submit").click( function(){
	var nametemp = 0;
	var mailtemp = 0;
	var phonetemp = 0;
	
	if ($("input[name='name']").val() === ''){
		//$("input[name='name']").css({"border-color":"red", "transition":"ease 1s"});
		$("input[name='name']").attr("placeholder","Введите Ваше Имя");
		$("input[name='name']").addClass("is-invalid");
		nametemp = 0;
	} else {
			//$("input[name='name']").css({"border-color":"#DDD", "transition":"ease 1s"});
				$("input[name='name']").addClass("is-valid");
			nametemp = 1;
	}
	
	if ($("input[name='phone']").val() === ''){
		//$("input[name='phone']").css({"border-color":"red", "transition":"ease 1s"});
		$("input[name='phone']").attr("placeholder","Введите Ваш Телефон");
			$("input[name='phone']").addClass("is-invalid");
		phonetemp = 0;
	} else {
		if ($("input[name='phone']").is(":invalid")){
			$("input[name='phone']").addClass("is-invalid");
			phonetemp = 0;
	} else {
			$("input[name='phone']").addClass("is-valid");
			phonetemp = 1;
	} 
			//$("input[name='phone']").css({"border-color":"#DDD", "transition":"ease 1s"});
		
	}
	
	
	if ($("input[name='email']").val() === ''){
		//$("input[name='email']").css({"border-color":"red", "transition":"ease 1s"});
		$("input[name='email']").attr("placeholder","Введите Ваш E-mail");
			$("input[name='email']").addClass("is-invalid");
	
		mailtemp = 0;
	} else {
			
			if(isValidEmailAddress($("input[name='email']").val())){
					//$("input[name='email']").css({"border-color":"#DDD", "transition":"ease 1s"});
						$("input[name='email']").addClass("is-valid");
	
			var mailtemp=1;
			} else {
		
			//$("input[name='email']").css({"border-color":"red", "transition":"ease 1s"});
				$("input[name='email']").addClass("is-invalid");
	var mailtemp=0;
	
			}
	
			
	}
	
	
	if ((nametemp == 1) && (phonetemp == 1) && (mailtemp == 1)){
	
	$("#Timestamp").val(new Date($.now()));
	
		$("#myform").ajaxForm({ url: 'https://script.google.com/macros/s/AKfycbyZZWXjimDTA3aN5ToeXhcYspvLe1P-1wgoVCWt_w/exec', type: 'post' });
	 
	fbq('track', 'Purchase');
	
	   $("#thankname").text($("input[name='name']").val());
		 $("#myform").fadeOut(3600).hide().css("opacity","0");
		 $("#messege").show().fadeIn(3600).css("opacity","1");
	
		/*$("#myform").hide().delay(360);*/
		 
	   /* $("#messege").show().delay(360);*/
		  var d = new Date();
	   
	$("input[name='nametg']").val($("input[name='name']").val());
	$("input[name='phonetg']").val($("input[name='phone']").val());
	$("input[name='emailtg']").val($("input[name='email']").val());
	   $("input[name='timetg']").val(d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate()+'  '+d.getHours()+':'+d.getMinutes());
	   
	   
	$("#sendtotg").click();
		 $("#totelegram").ajaxForm({ url: 'https://socialcircle.com.ua/telegram.php', type: 'post' });
		 
		 
	} else { return(false);}
		
		});
	
	$("#sendtotg").click(function(){
			
			$("#totelegram").ajaxForm({ url: 'https://socialcircle.com.ua/telegram.php', type: 'post' }); 
		
	});
	
	$( "input[name='email']" ).change(function() {
	//$("input[name='email']").css({"border-color":"#DDD", "transition":"ease 1s"});
	//$("input[name='email']").addClass("is-valid");
	
	if ($("input[name='email']").is(":invalid")){
	$("input[name='email']").removeClass("is-valid").addClass("is-invalid");
	} else {
	$("input[name='email']").removeClass("is-invalid").addClass("is-valid");
	} 
	
	});
	
	$( "input[name='name']" ).change(function() {
	//$("input[name='name']").css({"border-color":"#DDD", "transition":"ease 1s"});
	$("input[name='name']").removeClass("is-invalid").addClass("is-valid");
	
	if ($("input[name='name']").val().length == 0 ){
	$("input[name='name']").removeClass("is-valid").addClass("is-invalid");
	} else {
	$("input[name='name']").removeClass("is-invalid").addClass("is-valid");
	} 
	
	
	});
	
	
	$( "input[name='phone']" ).change(function() {
	//$("input[name='phone']").css({"border-color":"#DDD", "transition":"ease 1s"});
	
	if ($("input[name='phone']").is(":invalid")){
	$("input[name='phone']").removeClass("is-valid").addClass("is-invalid");
	} else {
	$("input[name='phone']").removeClass("is-invalid").addClass("is-valid");
	} 
	
	
	
	});
	
	function isValidEmailAddress(emailAddress) {
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		return pattern.test(emailAddress);
	}
	
//Validation and Register END............
	
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
