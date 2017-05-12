/*
	Author : Abhishek Kanojia
	Source : https://github.com/abhishekkanojia/fadeInOutJS
*/

/*
--------------
	USAGE
--------------	

	$(document).ready(function(){

		$(".fader").fadeInOut({
			timeInterval: 3000,
			brag: ['I am a Freelance Developer',
					'A Hobbyist',
					'Out of Box Thinker',
					'And You\'re',
					'An Awesome Visitor'
				  ]
		});
	});
----------------
Yes, That's It.
----------------

*/

jQuery.fn.extend({
	fadeInOut: function(options) {
		var element = $(this);
		var i = 0;

		setInterval(function(){
			element.fadeOut("slow",function(){
				if(i===options.brag.length){
					i=0;
				}
				element.text(options.brag[i++]);
				element.fadeIn("slow");
			});
		},options.timeInterval);
	}
});