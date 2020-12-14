// --------preloader--------------
$(window).on('load', function() {
	setTimeout(function() {
        $('.preloader').slideUp('slow');
      	$('.cube-wrapper').fadeOut();
    }, 1000);
});

// --------header--------------
$(document).ready(function() {
	$('.toggle-menu-btn').on('click', function(){
		if($(this).hasClass('open')){
			$('.wrapper').removeClass("sidebar-opened");
			$('.overlay_bg').hide();
			$(this).removeClass('open');
		}else{
			$(this).addClass('open');
			$('.wrapper').addClass("sidebar-opened");
			$('.overlay_bg').show();
		}
	});
	$('.overlay_bg').on('click', function(){
		$('.wrapper').removeClass("sidebar-opened");
		$('.overlay_bg').hide();
		$('.toggle-menu-btn').removeClass('open');
	});

	$('.sidenav-container').on('mouseenter',function () { 
		$('.wrapper').addClass('sidebar-opened');
	}).on('mouseleave',function () { 
		$('.wrapper').removeClass('sidebar-opened');
		$("#sidebarmenu .collapse").collapse('hide');
	});


	// $(window).on('load', function() {
	// 	if (window.matchMedia('(min-width: 992px)').matches) {
	// 		console.log('load-if');
	// 		$('.wrapper').addClass("on_hove_sidebar");
	// 	}else{
	// 		$('.wrapper').removeClass("on_hove_sidebar");
	// 		console.log('load-else');
	// 	}
	// }).on('resize', function(){
	// 	if (window.matchMedia('(min-width: 992px)').matches) {
	// 		console.log('resize');
	// 		$('.wrapper').addClass("on_hove_sidebar");
	// 	}else{
	// 		$('.wrapper').removeClass("on_hove_sidebar");
	// 	}
	// });

	
});


$(document).ready(function() {

	// --------select2-------
	$('.customSelect').each(function() {
		var dropdownParents = $(this).parents('.select2Part')
		$(this).select2({
			dropdownParent: dropdownParents,
			minimumResultsForSearch: -1
		});
	});
	$('.customSelectSearch').each(function() {
		var dropdownParents = $(this).parents('.select2Part');
		$(this).select2({
			dropdownParent: dropdownParents,
		});
		$('.customSelectSearch').select2().on('select2:open', function(e){
			$('.select2-search__field').attr('placeholder', 'Search Item');
		})
	});
	$('.customSelectSearchmultiple').each(function() {
		var dropdownParents = $(this).parents('.select2Part');
		var placehldrget = $(this).attr("data-placeholder");
		$(this).select2({
			dropdownParent: dropdownParents,
			placeholder: placehldrget,
		});
	});

	// --------mCustomScrollbar-------
	if ($('.scroll-sidebar').length) {
		$(".scroll-sidebar").mCustomScrollbar({
			theme:"minimal-dark",
			mouseWheelPixels: 300,
			scrollInertia: 300
		});
	}

	// --------date-picker-------
	if ($('#postdate').length) {
		$('#postdate').datepicker({
			format: "dd-mm-yyyy",
			orientation: "bottom right",
			templates :{
				leftArrow: '<i class="fa fa-chevron-left"></i>',
				rightArrow: '<i class="fa fa-chevron-right"></i>'
			}
		});
	}

	$('.password-show-icon').on('click', function(){
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			$(this).find('i').removeClass('fa-eye').addClass('fa-eye-slash');
			$(this).parent().find('.input-password').attr('type', 'text');
		}else{
			$(this).removeClass('active');
			$(this).find('i').removeClass('fa-eye-slash').addClass('fa-eye');
			$(this).parent().find('.input-password').attr('type', 'password')
		}
	});
	
	
	
	$(".btn-click").click(function(){
		$(this).toggleClass('active');
	});

	// --------------add active class-on another-page move----------
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('.account-sidebar ul li a[href="'+path+'"]');
	// Add active class to target2 link
	target.parent().addClass('active');

	$("#imgInp").on('change',function() {
		readURL(this);
	});

	if ($('.c-review-slider').length) {
		$('.c-review-slider').owlCarousel({
			loop: false,
			margin: 30,
			nav: true,
			navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
			dots: false,
			autoWidth: true,
			autoplay: false,
			autoplayTimeout: 5000,
			autoplayHoverPause: false,
			responsive: {
				0: {
					items:1,
					autoWidth: false,
					margin: 10,
				},
				480: {
					items:1,
					autoWidth: false,
					margin: 15,
				},
				576: {
					items:1,
					autoWidth: false,
					margin: 15,
				},
				992: {
					items: 2,
					autoWidth: false
				},
				1200: {
					items:3,
					autoWidth: false
				},
				1600: {
					items:4,
					autoWidth: false
				}
			}
		})
	};
});

function headerStuck(){
	$(window).scroll(function(){
		var headerHeight = $('.header');
		var scroll = $(window).scrollTop();
		if (scroll >= 100)
		{
			headerHeight.addClass('is-stuck');
		}else{
			headerHeight.removeClass('is-stuck');
		}
	});
}

function Swiperslider(){
	var propertyswiper = new Swiper('.Swiperslider', {
		slidesPerView: 3,
	    spaceBetween: 10,
	    noSwiping: false,
	    simulateTouch:false,
		navigation: {
	        nextEl: '.swiper-slider-next',
	        prevEl: '.swiper-slider-prev',
	    },
	    scrollbar: {
	        el: '.swiper-scrollbar',
	        draggable: true,
	    },
	    breakpoints: {
	    	767: {
	          slidesPerView: 1,
	        },
	        1199: {
	          slidesPerView: 2,
	        },
	      }
	});
}

// ----------profile-image-update---------
function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		
		reader.onload = function(e) {
			$('#imgpreviewPrf').attr('src', e.target.result);
		}
		
		reader.readAsDataURL(input.files[0]); // convert to base64 string
	}
}

function equalize(sel){
	var els = Array.prototype.slice.call(document.querySelectorAll(sel));  
	var row = [];
	var max;
	var top;
	  function setHeights() {
		row.forEach(function(e) {
		  e.style.height = max + 'px';
		});
	  }
	
	  for(var i=0; i < els.length; i++) {
		var el = els[i];
		el.style.height = 'auto';
		if (el.offsetTop !== top){     
		  setHeights();
		  top = el.offsetTop;      
		  max = 0;
		  row = [];
		}
		row.push(el);
		max = Math.max(max, el.offsetHeight);
	  }
	  setHeights(); 
	}
	window.onload = window.onresize = function() {
	  equalize('.c-review-slider .c-review-item');
	  equalize('.pf-categoy-row > .col-md-12 .eat-box');
	  
};
function isMobile() {//for detect mobile browser
   var appsVersion = navigator.appVersion,
	   isAndroid = (/android/gi).test(appsVersion),
	   isIOS = (/iphone|ipad|ipod/gi).test(appsVersion);
   return (isAndroid || isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
}



$('.password-show-icon').on('click', function(){
	if(!$(this).hasClass('active')){
		$(this).addClass('active');
		$(this).find('i').removeClass('fa-eye').addClass('fa-eye-slash');
		$(this).parent().find('.input-password').attr('type', 'text');
	}else{
		$(this).removeClass('active');
		$(this).find('i').removeClass('fa-eye-slash').addClass('fa-eye');
		$(this).parent().find('.input-password').attr('type', 'password')
	}
});



$(".btn-click").click(function(){
	$(this).toggleClass('active');
})