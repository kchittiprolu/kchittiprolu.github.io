		//Function to collapse opened navbar when user click anywhere on the website
		$(document).click(function(event) {
		    var clickover = $(event.target);
		    var $navbar = $(".navbar-collapse");
		    var _opened = $navbar.hasClass("in");
		    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
		        $navbar.collapse('hide');
		    }
		});

		//Function for toggling navbar.
		$(function() {
		    $('.toggle').click(function(event) {
		        event.preventDefault();
		        var target = $(this).attr('href');
		        $(target).toggleClass('show hidden');
		    });
		});

		$('.nav > li a').click(function(e) {
		    var $this = $(this);
		    $this.parent().siblings().removeClass('active').end().addClass('active');
		});