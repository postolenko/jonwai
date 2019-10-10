function getTrianglesSizes() {
	$(".tab_link").each(function() {
		parentBlockHeight = $(this).outerHeight();
		tabLinkTriangle = $(this).find(".tr");
		tabLinkTriangle.each(function() {
			$(this).css({
				"border-bottom-width" : parentBlockHeight + "px"
			});
		});
	});
}

function getMinTabHeight() {
    $(".tabs").each(function() {
        heightArray = [];
        $(this).find(".tabs_content .tab").css({
        	"min-height" : "auto"
        });
        $(this).find(".tab").each(function() {
			heightArray.push($(this).height());
        });
        maxHeight = Math.max.apply(null, heightArray);
        console.log(heightArray);
        console.log(maxHeight);
        $(this).find(".tabs_content .tab").css({
        	"min-height" : maxHeight + "px"
        });
    });
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var parentBlock;
var tabLinkTriangle;

var indexRating,
	idRating,
	el,
	currentRating,
	maxRating,
	myRating;

var heightArray, maxHeight;

$(window).load(function() {
	getMinTabHeight();
});

$(window).resize(function() {
	getTrianglesSizes();
	getMinTabHeight();
});

$(document).ready(function() {

	$(".tab_link").prepend("<span class='tr left_tr'></span>");
    $(".tab_link").append("<span class='tr right_tr'></span>");	

    getTrianglesSizes();

    $(".tabs").each(function() {
        $(this).find(".tab_link").each(function() {
            if( $(this).hasClass("active") ) {
                indexActiveTab = $(this).index(".tab_link");
                $(this).click();
                return false;
            } else {
                indexActiveTab = 0;
            }
        });
        $(this).find(".tab_link").eq(indexActiveTab).click();
        $(this).find(".tab_link").eq(indexActiveTab).addClass("active");
    });

    $(".tab_link").click(function (e) {
        if( $(this).hasClass("active") ) {
            e.preventDefault();
        } else {
            tabsParent = $(this).closest(".tabs");
            attrForTabLink = $(this).attr("for");
            activeTabRadio = tabsParent.find(".radio_tab[id = '"+ attrForTabLink +"']");
            activeTabRadio.prop("checked", true);
            tabsParent.find(".tab_link").each(function () {                
                if( $(this).hasClass("active") ) {
                    $(this).removeClass("active");
                }
            });
            $(this).addClass("active");
        }
    });

    if( $(".testimonial_slider").length > 0 ) {
        $(".testimonial_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            autoplaySpeed: 4000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendArrows: $(".testimonial_arrows"),
            prevArrow: '<button class="slick-prev slick_arrow_2" aria-label="Previous" type="button"></button>',
            nextArrow: '<button class="slick-next slick_arrow_2" aria-label="Next" type="button"></button>'
        });
    }

    if($(".rating").length > 0) {
	    $(".rating").rateYo({ 
	        rating: 4,
	        spacing: "5px", 
	        numStars: 5, 
	        minValue: 0, 
	        maxValue: 5, 
	        normalFill: '#afc8d5',
	        ratedFill: '#528b00',
	        starWidth: "14px",
	        readOnly: true
	    });
    }

    if($(".rating_set").length > 0) {
	    $(".rating_set").rateYo({ 
	        spacing: "5px", 
	        numStars: 5, 
	        minValue: 0, 
	        maxValue: 5, 
	        normalFill: '#afc8d5',
	        ratedFill: '#528b00',
	        starWidth: "14px"
	    });
    }

});