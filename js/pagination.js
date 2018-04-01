$( document ).ready(function() {

	var pagination = $('.pagination'),
		paginationItems = pagination.find('.pagination_item');

	var cardsBlockArr = $('.cards_block');
	var ACTIVE_CLASS = 'active';
	var CLOSE_CLASS = 'closed';


	paginationItems.click(function () {

		paginationItems.each(function (i, elem) {
			$(elem).removeClass(ACTIVE_CLASS);
		});

		$(this).addClass(ACTIVE_CLASS);

		paginationItems.each(function (i, elem) {
			if($(elem).hasClass(ACTIVE_CLASS)){
				cardsBlockArr.each(function (k, elem) {
					if(i === k){
						$(elem).removeClass(CLOSE_CLASS);
					} else {
						$(elem).addClass(CLOSE_CLASS);
					}
				});
			}
		});
	});

	$('.pagination_item_arrow_left').click(function () {

		var activeIndex;

		paginationItems.each(function (i, elem) {

			if($(elem).hasClass(ACTIVE_CLASS)){
				activeIndex = i;
			}

			if($(elem).hasClass(ACTIVE_CLASS) && i)
				$(elem).removeClass(ACTIVE_CLASS);
		});

		if(activeIndex){
			$(paginationItems[activeIndex - 1]).addClass(ACTIVE_CLASS);

			if(activeIndex < 0)
				return;

			cardsBlockArr.each(function (i, elem) {
				if(i === activeIndex - 1){
					$(elem).removeClass(CLOSE_CLASS);
				} else {
					$(elem).addClass(CLOSE_CLASS);
				}
			});
		}
	});


	$('.pagination_item_arrow_right').click(function () {
		var activeIndex;

		paginationItems.each(function (i, elem) {

			if($(elem).hasClass(ACTIVE_CLASS)){
				activeIndex = i;
			}

			if($(elem).hasClass(ACTIVE_CLASS) && paginationItems.length !== i+1)
				$(elem).removeClass(ACTIVE_CLASS);
		});

		if(typeof  activeIndex === 'number'){

			$(paginationItems[activeIndex + 1]).addClass(ACTIVE_CLASS);

			if(activeIndex + 1 === cardsBlockArr.length)
				return;

			cardsBlockArr.each(function (i, elem) {
				if(i === activeIndex + 1){
					$(elem).removeClass(CLOSE_CLASS);
				} else {
					$(elem).addClass(CLOSE_CLASS);
				}
			});
		}
	});

	var topButtons = $('.buttons_block_item');

    topButtons.click(function () {

        topButtons.each(function (i, elem) {
            $(elem).removeClass(ACTIVE_CLASS);
        });

        $(this).addClass(ACTIVE_CLASS);
    });

});