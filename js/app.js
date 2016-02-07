$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-still').show();
		$('.ryu-ready').hide();	
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show().finish()
		.animate(
			{'left': '1220px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			});
	})
	.mouseup(function() {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	})

	$('body').keydown(function(event) {
		console.log(event);
		if(event.keyCode == 88){
		 $('.ryu-ready').hide();
		 $('.ryu-throwing').hide();
		 $('.ryu-still').hide();
		 $('.ryu-cool').show();
		}
	})
	.keyup(function(event) {
		console.log(event);
		if(event.keyCode == 88){
		 $('.ryu-still').show();
		 $('.ryu-cool').hide();
		}
	});
})

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}