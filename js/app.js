var app = {
    common: function() {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 0) {
            $('#mainMenu').addClass('sticky');
            $('#mainHeader').addClass('sticky');
        } else {
            $('#mainMenu').removeClass('sticky');
            $('#mainHeader').removeClass('sticky');
        }
        
        // Scroll Event
        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            if(scrollTop > 0) {
                $('#mainMenu').addClass('sticky');
                $('#mainHeader').addClass('sticky');
            } else {
                $('#mainMenu').removeClass('sticky');
                $('#mainHeader').removeClass('sticky');
            }
        });

        // Sidemenu
        $('#handleMenu').click(function(e) {
			e.preventDefault();
            $(this).toggleClass('active');
            $('#mainMenu').toggleClass('showMenu');
            $(this).find('img').attr('src', function(index, attr) {
				var newAttr = attr.split('/');
				var curImg = newAttr[newAttr.length - 1].split('.')[0];
				var path = newAttr.slice(0, newAttr.length - 1).join('/');

				if(curImg == 'menu') {
					// $(this).closest('.primaryMenu').find('#toggleMenu').slideDown(400);
					return path + '/close.svg'
				} else {
					// $(this).closest('.primaryMenu').find('#toggleMenu').slideUp(300);
					return path + '/menu.svg'
				}
			});
        });

        // Mobile Menu
		$('.menuHandle').click(function(e) {
			$(this).find('img').attr('src', function(index, attr) {
				
			});
		});
    },

    slickSlider: function () {
        $('#homeSlider').slick({
            infinite: true,
            arrows: false,
            dots: true,
            fade: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: 'linear',
            autoplaySpeed: 2000,
            responsive: [
                // {
                //     breakpoint: 1024,
                //     settings: {
                //         slidesToShow: 3,
                //         slidesToScroll: 3,
                //         infinite: true,
                //         dots: true
                //     }
                // }
            ]
        });
        
        $('#timelineSlider').slick({
            dots: false,
            arrows: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1.3
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    },

    init: function () {
        this.common();
        this.slickSlider();
    }
};

$(document).ready(function() {
    app.init();
});