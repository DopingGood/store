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
	};
	$(".eye-toggle").click(function(){
		if ($(".eye-toggle").hasClass("ciphering") == true) {
			$showSymbol("text");
		}
		else {
			$showSymbol("password");
		};
	});

	// Shopping carts
	if ($(".goodsincart").length) {

		$(".shopping-price").each(function()
		{
			var text = $(this).text();
			$(this).attr("data-origin-price", text);
		})
		//Subtotal count
		var $subtotal;
		$(".subtotal-price").each(function(){
			var $elements = parseFloat($(this).text());
			$subtotal += $elements.toFixed(2);
			console.log($subtotal);
		});
		//Amount count
		$(".cart-plus").click(function(e){
			e.preventDefault();			
			var $item = $(this).parents(".auto-count"),
				$counterEl = $item.find(".counter"),
				$counter = parseInt($counterEl.text(), 10),
				$priceEl = $item.find(".shopping-price"),
				$price = parseFloat($priceEl.text()).toFixed(2),
				$originPrice = parseFloat($priceEl.data("origin-price")).toFixed(2);

			// увеличиваем счетчик
			$counter++				
			$counterEl.text($counter); 

			// Увеличивем цену по формуле количество * цена
			$priceEl.text(parseFloat($originPrice * $counter).toFixed(2));

		});

		$(".cart-dash").click(function(e){
			e.preventDefault();
			var $item = $(this).parents(".auto-count"),
				$counterEl = $item.find(".counter"),
				$counter = parseInt($counterEl.text(), 10),
				$priceEl = $item.find(".shopping-price"),
				$price = parseFloat($priceEl.text()).toFixed(2),
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
		// Close
		$(".close-button").click(function(e)
		{
			e.preventDefault();
			$item = $(this).parents(".auto-count");
			$item.remove();
		})

	};
});