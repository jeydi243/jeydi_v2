(function($) {
	
	
	"use strict";
	
	
	
	
	/*-------------------------------------------------------------------------------
	  Pagepiling
	-------------------------------------------------------------------------------*/

	if ( $('.b-pagepiling').length ) {
		$('.b-pagepiling').pagepiling({
			scrollingSpeed: 280,
			menu: '#menu, #menuMain',
			
			anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9'],
			sectionsColor: ['#131d27', '#131d27', '#131d27', '#131d27', '#131d27', '#131d27', '#131d27', '#131d27', '#131d27'],
			loopTop: false,
			loopBottom: false,
			navigation: {
				'position': 'left',
				'tooltips': ['Banner Section', 'Skill Section', 'Apps Section', 'Profile Section', 'Web Section', 'Clients Section', 'Clients Section', 'News Section', 'Contact Section']
			},
			afterRender: function(){
				$('#pp-nav').addClass('custom');
			},
			afterLoad: function(anchorLink, index){
				if(index>1){
					$('#pp-nav').removeClass('custom');
				}else{
					$('#pp-nav').addClass('custom');
				}
			},
			onLeave: function(){
				$('.a-progressbar .progress-bar').each(function() {
					if ($('.slide-skills').hasClass('active')) {
						$(this).width($(this).attr('aria-valuenow') + '%');
					} else {
						$(this).width('0');
					}
				});

			}
		});
	}
	
	
	
	
	
		
	

})(window.jQuery);