// --------preloader--------------
$(window).on('load', function() {
	setTimeout(() => {
		$('.loader-icon').addClass('animate__backOutDown');
		$('.page-ath-gfx').addClass('active');
		$('.preloader').fadeOut('slow');
	}, 1000);
	TopbarStuck();
});

// --------header--------------
$(document).ready(function() {
	$('.toggle-menu-btn').on('click', function(){
		if($(this).hasClass('open')){
			$('.wrapper').removeClass("sidebar-opened");
			$('.overlay_bg').removeClass('active');
			$(this).removeClass('open');
		}else{
			$(this).addClass('open');
			$('.wrapper').addClass("sidebar-opened");
			$('.overlay_bg').addClass('active');
		}
	});
	$('.overlay_bg').on('click', function(){
		$('.wrapper').removeClass("sidebar-opened");
		$('.overlay_bg').removeClass('active');
		$('.toggle-menu-btn').removeClass('open');
	});
	TopbarStuck();

	$('.sidenav-container').on('mouseenter',function () {
		$('.sidenav-container').addClass('sidenav-hover');
		$('.sidenav-container').removeClass('sidebar-mini');
	}).on('mouseleave',function () { 
		setTimeout(() => {
		}, 500);
		// $('.sidenav-hover .navleft-menu li ul.submenu').removeClass('show');
		$('.sidenav-container').removeClass('sidenav-hover');
		$('.sidenav-container').addClass('sidebar-mini');
		// $(".wrapper:not(.sidebar-opened) #sidebarmenu .collapse").collapse('hide');
		
	});
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



	if ($('.mCustomScrollbar').length) {
		$(".mCustomScrollbar").mCustomScrollbar({
			theme:"minimal-dark",
			mouseWheelPixels: 150,
			scrollInertia: 1000
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


	// --------search-store-box---------
    $(document).ready(function(e) {
        $('.search-filter-btn, .search-close-icon').click(function(event) {
            $(".serach-store-box").toggleClass("active");
            event.stopPropagation();
        });
        $(".serach-store-box").click(function(event) {
            event.stopPropagation();
        });
        $(document).click(function(event) {
            if (!$(event.target).hasClass('active')) {
                $(".serach-store-box").removeClass("active");
            }
        });
    });

	// --------------add active class-on another-page move----------
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('.navleft-menu ul li a[href="'+path+'"]');
	// Add active class to target2 link
	target.parent().addClass('active');


});

function TopbarStuck(){
	$(window).scroll(function(){
		var headerHeight = $('.top-bar');
		var scroll = $(window).scrollTop();
		if (scroll >= 50)
		{
			headerHeight.addClass('is-stuck-top');
		}else{
			headerHeight.removeClass('is-stuck-top');
		}
	});
}


// ----tooltip----------
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})