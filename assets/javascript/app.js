
$(document).ready(function () {

	$('.box').on('click', function () {
		var animations = [ 'jump', 'dangle'];
		var box = this;
		var animation = animations[Math.floor(Math.random() * 2)];

		$(box).addClass(animation);

		setTimeout(function () {
			$(box).removeClass(animation);
		}, 2000);
	});
});

