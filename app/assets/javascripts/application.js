// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require masonry/jquery.masonry
//= require masonry/jquery.event-drag
//= require masonry/jquery.imagesloaded.min
//= require masonry/jquery.infinitescroll.min
//= require masonry/modernizr-transitions
//= require_tree .

$(function(){
	$('#masonry-container').masonry({
		columnWidth: 375,
		percentPosition: true,
		itemSelector: '.item'
	});

	// Replaces Site header when window loads smaller than 723px
	if($(window).width() < 723){
		$('header h1').replaceWith( "<h1>@YKYWAASW</h1>");
	}

	// Replaces site header when window is resized to be smaller than 723px
	$(window).resize(function() {
    if( $(this).width() < 723 ) {
        	$('header h1').replaceWith( "<h1>@YKYWAASW</h1>");
    	}
	});

	// Replaces site header back to default when window is resized bigger than 723px
	$(window).resize(function() {
    if( $(this).width() >= 723 ) {
        	$('header h1').replaceWith( "<h1>You Know You Work at a Startup When...</h1>");
    	}
	});
});