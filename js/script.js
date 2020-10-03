function count(els) {
	els.each(function () {
		$(this)
			.prop('Counter', 0)
			.animate(
				{
					Counter: $(this).text(),
				},
				{
					duration: 3000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					},
				}
			);
	});
}
const els = $('.counter .counter__count');
new Waypoint({
	element: els,

	handler: function () {
		count(els);

		this.destroy();
	},

	offset: 'bottom-in-view',
});
