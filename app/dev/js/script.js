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
				$(".bascket-dropdown").css("right", "24.7rem");
		}
		else {
			$(".seeker").removeClass("hovered-seeker");
			$(".seeker-text").hide("slide", {direction: "right"}, 500);
			$(".bascket-dropdown").css("right", "6.7rem");
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
	var $Subtotal = 0;
	// var $autoCounter = $(".shopping-price").each(function(){
	// 	$Subtotal += parseFloat($(this).text());
	// 	$(".shopping-subtotal").text($Subtotal.toFixed(2));
	// });
	function $autoCounter(){
		var $quantityOfItems = parseFloat($(this).find('.amount-toggle p').text());
		var $costOfItems = parseFloat($(this).find('.shopping-price').text()) * $quantityOfItems;
		console.log($costOfItems);
		$(this).find(".shopping-price").text($costOfItems.toString());
		$Subtotal += $costOfItems;
		$(".shopping-subtotal").text($Subtotal.toFixed(2));
	};
	$(".auto-count").each($autoCounter);
	//quontity counter
	$(".cart-plus, .cart-dash").click(function(){
		var $counter = $(this).parent().siblings();
		$Subtotal = 0;
		if ($(this).hasClass("cart-plus") == true) {
			$counter.text(parseFloat($counter.text()) + 1);
			// $Subtotal = 0;
			// $(".auto-count").each($autoCounter);
			return false;
		}
		else {
			if (parseFloat($counter.text()) > 1) {
				$counter.text(parseFloat($counter.text()) - 1);
				// $Subtotal = 0;
				// $(".auto-count").each($autoCounter);
				return false;
			}
			else {
				return false;
			};
		};
		$(".auto-count").each($autoCounter);
	});
	// $(".toggles a:last-child").click(function(){
	// 	var $counter = $(this).parent().siblings();
	// 	if (parseFloat($counter.text()) > 1) {
	// 		$counter.text(parseFloat($counter.text()) - 1);
	// 		$Subtotal = 0;
	// 		$(".auto-count").each($autoCounter);
	// 		return false;
	// 	}
	// 	else {
	// 		return false;
	// 	};
	// });
});