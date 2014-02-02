(function ( $ ) {
	$.fn.blueMobileMenu = function( options ) {
		var settings = $.extend({
            animateSpeed: 400,
        }, options );

		var id = this.attr("id"),
			mobile = true,
			firstLvlCnt = 0;

		$("a[href$=" + id + "]").addClass("blueMobileMenuIcon").on("click", function() {
			$("#" + id).slideToggle();
		});

		this.addClass("blueMobileMenu");
		this.find("li").attr("class", "firstLevel");
		this.find("li ul li").attr("class", "secondLevel");
		this.find("li ul li ul li").attr("class", "thirdLevel");
		this.find("li ul li ul li ul li").attr("class", "fourthLevel");

		this.find(".firstLevel").each(function() {
			firstLvlCnt++;
		});

		this.find("li").has("ul").addClass("closed").prepend("<img class='icon' src='imgs/icon_arrow_right.png'/>");

		if(mobile === true) {
			this.on("click", ".icon", function(e) {
				$(this).parent().find("ul").first().slideToggle();

				if( $(this).parent().hasClass("closed") ) {
					$(this).attr("src", "imgs/icon_arrow_down.png");
					$(this).parent().removeClass("closed").addClass("open");
				}
				else {
					$(this).attr("src", "imgs/icon_arrow_right.png");
					$(this).parent().removeClass("open").addClass("closed");
				}
					
				e.stopPropagation();
			});
		}

		this.append("<div style='clear:both;'></div>");

		return this;
	}
}( jQuery ));