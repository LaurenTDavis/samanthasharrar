angular.module('App', []);


angular.module('App')
	.controller('mainController', ['$scope', '$http', function($scope, $http){
	function collapseNavbar() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// // jQuery for page scrolling feature - requires jQuery Easing plugin
// $(function() {
//     $('a.page-scroll').bind('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// }]);



function ValidateForm(frm) {
	if (frm.Name.value == "") { 
		alert('Name is required.'); 
		frm.Name.focus(); 
		return false; 
	}
	if (frm.FromEmailAddress.value == "") { 
		alert('Email address is required.'); 
		frm.FromEmailAddress.focus(); 
		return false; 
	}
	if (frm.FromEmailAddress.value.indexOf("@") < 1 || frm.FromEmailAddress.value.indexOf(".") < 1) { 
		alert('Please enter a valid email address.'); 
		frm.FromEmailAddress.focus(); 
		return false; 
	}
	return true; 
}


$scope.question1 = true;
$scope.question2 = false;
$scope.question3 = false;
$scope.question4 = false;

$scope.business1= false;
$scope.individual1 = false;


$scope.viewBusiness = function() {
	$scope.business1 = true; 
	$scope.question1 = false;
}
$scope.viewIndividual = function() {
	$scope.individual1 = true; 
	$scope.question1 = false;
}


 setTimeout(function(){
       
    $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your full name'
                    }
                }
            },
            emailAdd: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            message: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a message'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');

            var forms = document.getElementById("contact_form");
            forms.reset();
        });
    });
    }, 0);

	
}])

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});



