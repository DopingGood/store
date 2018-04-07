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

	$(".bascket").click(function(e){
		e.preventDefault();
	});
	// nav-bar seeker
	$(".seeker").click(function(){
		var $s = $(".seeker"),
			$st = $(".seeker-text");
		if ($s.hasClass("hovered-seeker") == false) {
			// Открытие поисковая панели
			$s.addClass("hovered-seeker");
			$st.show("slide", {direction: "right"}, 800);
			$(".bascket-dropdown").css("right", "24.7rem");
			$s.attr({type:"submit"});
			$st.focus();
			// Закрытие при щелчке вне поисковой панели
			$(document).bind("click.event", function(e){
				var $clickTarget = $(e.target).attr("class");
				if ($clickTarget != "seeker-text" && $clickTarget != "seeker") {
					$st.hide("slide", {direction: "right"}, 500);
					$s.removeClass("hovered-seeker");
					$(".bascket-dropdown").css("right", "6.7rem");
					$s.attr({type:"button"});
					$(document).unbind("click.event");
				}
			});
		};
		return false;
		});
	// Filters
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
		var $subtotal = 0;
		var $eachElement = function() {
			$(".subtotal-price").each(function(){
			var $elements = parseFloat($(this).text());
			$subtotal += $elements;
		});
		};
		$eachElement();
		var $subtotalValue = function() {
			$(".shopping-subtotal").text(($subtotal).toFixed(2));
		};
		$subtotalValue();
		//Amount count
		$(".cart-plus").click(function(e){
			e.preventDefault();
			var $item = $(this).parents(".auto-count"),
				$counterEl = $item.find(".counter"),
				$counter = parseInt($counterEl.text(), 10),
				$priceEl = $item.find(".shopping-price"),
				$originPrice = parseFloat($priceEl.data("origin-price"));

			// увеличиваем счетчик
			$counter++				
			$counterEl.text($counter); 

			// Увеличивем цену по формуле количество * цена
			$priceEl.text(parseFloat($originPrice * $counter).toFixed(2));
			//Вычисляем и записываем итог
			$subtotal += $originPrice;
			$subtotalValue();
		});

		$(".cart-minus").click(function(e){
			e.preventDefault();
			var $item = $(this).parents(".auto-count"),
				$counterEl = $item.find(".counter"),
				$counter = parseInt($counterEl.text(), 10),
				$priceEl = $item.find(".shopping-price"),
				$originPrice = parseFloat($priceEl.data("origin-price"));

			// Не может быть меньше 1
			if ($counter > 1)
			{
				// Уменьшаем счетчик
				$counter--
				$counterEl.text($counter);

				// Уменьшаем цену по формуле количество - цена
				$priceEl.text(parseFloat($originPrice * $counter).toFixed(2));

				//Вычисляем и записываем итог
				$subtotal -= $originPrice;
				$subtotalValue();
			}
		});
		// Close
		$(".close-button").click(function(e) {
			e.preventDefault();
			var	$item = $(this).parents(".auto-count"),
				$priceEl = $item.find(".shopping-price"),
				$price = parseFloat($priceEl.text());
			//Итог после удаления
			$subtotal -= $price;
			$subtotalValue();
			$item.remove();
		})

	};
});