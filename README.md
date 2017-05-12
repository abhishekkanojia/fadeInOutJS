# FadeInOut Js - lets you apply fadeInOut effect to list of text provided by changing them one by one.

--------------
	## Usage
--------------
Include fadeInOut.js file on your html page.

`<script type="text/javascript" src="/path/to/fadeInOut.js"></script>`
``` javascript
<script>
	
	/**********
		
	 It takes only two parameters:
	 	1. timeInterval: time after which text is changed (in milliseconds). e.g 3000 means 3 second.
	 	
	 	2. brag: array of strings you want to show repeatedly one after the other. 
	 	
	********/
	
	// ".fader" given in following snippet is element class that is be used by fadeInOut-js to display text.
	// you can use any element's class or id that you like.

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
</script>
```	
	
--------------------------
Demo can be seen on my website.

[https://abhishekkanojia.github.io]


	
