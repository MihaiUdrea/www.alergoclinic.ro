// <![CDATA[
$(function() {
	// radius Box
	$('.box_radius').css({"border-radius":"8px", "-moz-border-radius":"8px", "-webkit-border-radius":"8px"});
	
	 element = document.getElementById("slideshow");
	 
	  var arrElements = element.getElementsByTagName("div");
	  //alert(arrElements.length);
	  //iterate over elements:
	  for (var i = 0; i < arrElements.length; i++) {
		//get pointer to current element:
		var divElement = arrElements[i];

		//check for desired attribute:
		divElement.style.visibility = "visible";
	  }
     
	
	// Slider script
	// blindZ curtainY fade scrollUp toss	
	$('#slideshow').cycle({
        fx:     'fade',
        speed:  'slow',
        timeout: 5000,
        pager:  '#slider_nav',
        pagerAnchorBuilder: function(idx, slide) {
            // return sel string for existing anchor
            return '#slider_nav li:eq(' + (idx) + ') a';
        }
    });
	// contact form
	$('#contactform').submit(function(){				  
		var action = $(this).attr('action');
		$.post(action, { 
			name: $('#name').val(),
			email: $('#email').val(),
			company: $('#company').val(),
			subject: $('#subject').val(),
			message: $('#message').val()
		},
			function(data){
				$('#contactform #submit').attr('disabled','');
				$('.response').remove();
				$('#contactform').before('<p class="response">'+data+'</p>');
				$('.response').slideDown();
				if(data=='Message sent!') $('#contactform').slideUp();
			}
		); 
		return false;
	});
});
// ]]>