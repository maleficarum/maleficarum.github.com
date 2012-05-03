$(document).ready(function() {
	$("#submit").click(function() {
		$(this).parent().submit();
	});
	
	$('#name').focus(function() {
		if ($(this).attr('value') == 'Name') {
			$(this).attr('value', '');
		}
	});
	$('#email').focus(function() {
		if ($(this).attr('value') == 'Email') {
			$(this).attr('value', '');
		}
	});
	$('#subject').focus(function() {
		if ($(this).attr('value') == 'Subject') {
			$(this).attr('value', '');
		}
	});
});

var options = { 
	beforeSubmit:  validate,  // pre-submit callback 
	success:       showResponse,  // post-submit callback 
	resetForm: true        // reset the form after successful submit 
}; 
				
$('#contact_us').ajaxForm(options); 
				
function showResponse(responseText, statusText){
	$('#contact_us').slideUp({ opacity: "hide" }, "normal");
	$("#note").show();
	$('#note').slideDown({ opacity: "show" }, "slow");
}
				
function validate(formData, jqForm, options) {
	$("p.error").slideUp({ opacity: "hide" }, "fast");
			 
	var nameValue = $('input[name=Name]').fieldValue(); 
	var emailValue = $('input[name=Email]').fieldValue();
	var subjectValue = $('input[name=Subject]').fieldValue();
	var messageValue = $('textarea[name=Message]').fieldValue(); 
	
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	var correct = true;
	
	if ((!nameValue[0]) || (nameValue == 'Name')) {
		$(".error1").fadeIn("slow");
		$("#name").css('width' , '252px');
		correct = false;
	}
	else {
		$(".error1").fadeOut("slow");
		$("#name").css('width' , '369px');
	}
	
	if (!emailValue[0]) {
		//$("p.error.wrong_email").slideDown({ opacity: "show" }, "slow");
		$(".error2").fadeIn("slow");
		$("#email").css('width' , '252px');
		correct = false;
	} else if(!emailReg.test(emailValue[0])) {
		//$("p.error.wrong_email").slideDown({ opacity: "show" }, "slow");
		$(".error2").fadeIn("slow");
		$("#email").css('width' , '252px');
		correct = false;
	}
	else {
		$(".error2").fadeOut("slow");
		$("#email").css('width' , '369px');
	}
	
	if ((!subjectValue[0]) || (subjectValue[0] == 'Subject')) {
		$(".error4").fadeIn("slow");
		$("#subject").css('width' , '252px');
		correct = false;
	}
	else {
		$(".error4").fadeOut("slow");
		$("#subject").css('width' , '369px');
	}
	
	if (!messageValue[0]) {
		//$("p.error.wrong_message").slideDown({ opacity: "show" }, "slow");
		$(".error3").fadeIn("slow");
		correct = false;
	}
	else {
		$(".error3").fadeOut("slow");
	}
	
	if (!correct) {return false;}
} 	
