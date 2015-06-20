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

	$(".bascket").click(function(){
		return false;
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


	if ($(".mycart").length) {

		$.each($(".shopping-price"), function()
		{
			var text = $(this).text();
			$(this).attr("data-origin-price", text);
		})

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
		// $(".auto-count").each($autoCounter);
		//quontity counter

		$(".cart-plus").click(function(e){
			e.preventDefault();			
			var $item 		 = $(this).parents(".auto-count"),
				$counterEl 	 = $item.find(".counter"),
				$counter 	 = parseInt($counterEl.text(), 10),
				$priceEl 	 = $item.find(".shopping-price"),
				$price 		 = parseFloat($priceEl.text()).toFixed(2),
				$originPrice = parseFloat($priceEl.data("origin-price")).toFixed(2);

			// увеличиваем счетчик
			$counter++				
			$counterEl.text($counter); 

			// Увеличивем цену по формуле количество * цена
			$priceEl.text(parseFloat($originPrice * $counter).toFixed(2));

		});

		$(".cart-dash").click(function(e){
			e.preventDefault();
			var $item 		 = $(this).parents(".auto-count"),
				$counterEl 	 = $item.find(".counter"),
				$counter 	 = parseInt($counterEl.text(), 10),
				$priceEl 	 = $item.find(".shopping-price"),
				$price 		 = parseFloat($priceEl.text()).toFixed(2),
				$originPrice = parseFloat($priceEl.data("origin-price")).toFixed(2);

			// Не может быть меньше 1
			if ($counter > 1)
			{
				// Уменьшаем счетчик
				$counter--
				$counterEl.text($counter);

				// Уменьшаем цену по формуле количество * цена
				$priceEl.text(parseFloat($price - $originPrice).toFixed(2));
			}

			
		});

		$(".close-button").click(function(e)
		{
			e.preventDefault();
			$item = $(this).parents(".auto-count");
			$item.remove();
		})

	};


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