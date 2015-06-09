$(document).ready(function(){
	$(".img-slicker").slick({
		nextArrow: $(".right-arrow"),
		prevArrow: $(".left-arrow"),
		swipe: false,
		touchMove: true,
		slidesToShow: 6,
		respondTo: "slider"
	});
	// nav-bar bascket
	$(".bascket, .bascket-dropdown").mouseover(function(){
		$(".bascket").addClass("bascket-hovered");
		$(".bascket-dropdown").show();
	});
	$(".bascket, .bascket-dropdown").mouseleave(function(){
		$(".bascket").removeClass("bascket-hovered");
		$(".bascket-dropdown").hide();
	});
	// nav-bar seeker
	$(".seeker").click(function(){
		if ($(".seeker").hasClass("hovered-seeker") == false) {
				$(".seeker").addClass("hovered-seeker");
				$(".seeker-text").show("slide", {direction: "right"}, 800);
				$(".seeker-text").focus();
		}
		else {
			$(".seeker").removeClass("hovered-seeker");
			$(".seeker-text").hide("slide", {direction: "right"}, 500);
		};
	});
	$('.selectpicker').selectpicker({
		dropupAuto: false,
		size: 3
	});

	$('.filter-select').selectpicker({
		dropupAuto: false,
		size: 5
	});

	$('.mobile-filter-select').selectpicker({
		dropupAuto: false,
		size: 4
	})

	$('.cart-selectpicker').selectpicker({
		dropupAuto: false,
		size: 4
	});

	$('.selectpicker-cards').selectpicker({
		dropupAuto: false,
		size: 2
	});

	$('.country-select').selectpicker({
		dropupAuto: false,
		size: 5
	});
	// Modal window
	$('#myModal').on('shown.bs.modal', function () {
	$('#myInput').focus()
	});
	//Password
	$(".eye-toggle").addClass("ciphering");
	var $showSymbol = function (value){
		$(".login-password").attr("type", value);
		$(".eye-toggle").toggleClass("ciphering");
		if (value == "password") {
			console.log("Пароль функционирует");
		};
	};
	$(".eye-toggle").click(function(){
		if ($(".eye-toggle").hasClass("ciphering") == true) {
			$showSymbol("text");
		}
		else {
			$showSymbol("password");
		};
	});
	//Subtotal count
	var Subtotal = 0;
	$(".shopping-price").each(function(){
		Subtotal += parseFloat($(this).text());
		console.log(Subtotal);
	});
	$(".shopping-subtotal").text(Subtotal.toFixed(2));
});