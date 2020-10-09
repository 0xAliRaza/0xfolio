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
const counterEls = $('.counter .counter__count');
new Waypoint({
	element: counterEls,

	handler: function () {
		count(counterEls);

		this.destroy();
	},

	offset: 'bottom-in-view',
});

$(window).on('scroll', function (event) {
	var scrollValue = $(window).scrollTop();
	if (scrollValue > 10) {
		$('.navbar-top').addClass('navbar-top--scrolled');
	} else {
		$('.navbar-top').removeClass('navbar-top--scrolled');
	}
	
});



const navbar = $('.navbar-top'); //Select your nav element here
let previousScroll = 0;

$(window).scroll(function handleNav() {
  let currentScroll = $(window).scrollTop(); //Distance scrolled down the page
  let navHeight = $(navbar).height(); //Height of navbar

  //When scrolling down AND you've scrolled past navHeight * 2.25, add .scrollUp
  if (currentScroll > previousScroll && currentScroll > navHeight * 2.25) {
    $(navbar).addClass("scrollUp");
    //When scrolling up AND you've scrolled less than navHeight, remove .scrollUp
  } else if (previousScroll > currentScroll && !(currentScroll <= navHeight)) {
    $(navbar).removeClass("scrollUp");
  }
  previousScroll = currentScroll;
});



$('#navbarTopCollapsible').on('show.bs.collapse', function () {
	$('.navbar-top').addClass('bg-dark-trans');
});
$('#navbarTopCollapsible').on('hide.bs.collapse', function () {
	$('.navbar-top').removeClass('bg-dark-trans');
});

// new Waypoint({
// 	element: $('#header'),

// 	handler: function () {
// 		alert('hi');

// 		// this.destroy();
// 	},

// 	offset: '200',
// });

// $(document).on('scroll', function() {
// 	if ($(this).scrollTop() >= $('#about').position().top) {
// 	  $('.navbar').addClass('navbar--fixed-top')
// 	}
//   })
