// Nav multilevel menu Dropdown On Hover. From: https://codepen.io/ajaypatelaj/pen/prHjD
/*$(".dropdown").hover(
    function(){
        $(this).children('ul').slideDown('fast');
    },
    function () {
        $(this).children('ul').slideUp('fast');            
    }
);*/

// THIS IS THE OLD ONE
// Nav menu Dropdown On Hover. From: http://bootsnipp.com/snippets/featured/slide-dropdown-navigation
$(document).ready(function(){
$(".dropdown").hover(
    function() {
        if (window.matchMedia('(min-width: 769px)').matches) { // ده كونديشن لمنع الدبل كليك في الجوال
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( false ,false, false ).delay(100).stop(false ,false , false).slideDown("fast");
            $(this).toggleClass('open');
        }
    },
    function() {
        if (window.matchMedia('(min-width: 769px)').matches) {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( false ,false, false ).delay(100).stop(false ,false , false).slideUp("fast");
            $(this).toggleClass('open');
        }
    }
);

/*$(".dropdown").hover(
    function() {
        if (window.matchMedia('(min-width: 769px)').matches) { // ده كونديشن لمنع الدبل كليك في الجوال
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');
        }
    },
    function() {
        if (window.matchMedia('(min-width: 769px)').matches) {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');
        }
    }
);*/
    var myNavBar = {

        flagAdd: true,

        elements: [],

        init: function (elements) {
            this.elements = elements;
        },

        /*add : function() {
            if(this.flagAdd) {
                for(var i=0; i < this.elements.length; i++) {
                    document.getElementById(this.elements[i]).className += " fixed-theme";
                }
                this.flagAdd = false;
            }
        },

        remove: function() {
            for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className =
					document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
            }
            this.flagAdd = true;
        }*/
        add : function() {
            if(this.flagAdd) {
                $("#nav").addClass("fixed-theme");
                this.flagAdd = false;
            }
        },

        remove: function() {
            $("#nav").removeClass("fixed-theme");
            this.flagAdd = true;
        }
    };

    /**
     * Init the object. Pass the object the array of elements
     * that we want to change when the scroll goes down
     */
    
    /*myNavBar.init(  [
        "nav",
        "header-container",
        "brand"
    ]);*/

    /**
     * Function that manage the direction
     * of the scroll
     */
    function offSetManager(){

        var yOffset = 0;
        var currYOffSet = window.pageYOffset;

        if(yOffset < currYOffSet) {
            myNavBar.add();
        }
        else if(currYOffSet == yOffset){
            myNavBar.remove();
        }

    }

    /**
     * bind to the document scroll detection
     */
    window.onscroll = function(e) {
        offSetManager();
    }

    /**
     * We have to do a first detectation of offset because the page
     * could be load with scroll down set.
     */
    offSetManager();
});
// The next code to test ie fixes on ie11+, because they deprecates conditional comments. 
/*

// JS get IE version
function ieVersion(){
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer'){
        var ua = navigator.userAgent;
        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null) rv = parseFloat( RegExp.$1 );
    }
    return rv;
}


$.browser = {msie: (navigator.appName == 'Microsoft Internet Explorer') ? true : false}
if ($.browser.msie){
    if (navigator.userAgent.toLowerCase().indexOf('msie 8') != -1) {
        document.write('<link rel="stylesheet" media="screen" href="css/ie8.css" />');
        // For Bootstrap
        document.write('<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>');
        document.write('<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>');
    }
}
*/

/* IE11 Fix for img-responsive which targets only ie version 11 not engines nor simulators */
var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
if(isIE11){document.write('<style>.img-responsive{width:100%}</style>')}
/*AOS.init({
    easing: 'ease-in-out-sine'
});*/

$(document).ready(function () {

    $(".bs-docs-popover").popover();

    $('[data-toggle="tooltip"]').tooltip();

    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active')
    });
});

// PreLoader
/*$(window).load(function(){
    $('#loading').hide();
    $('#container').animate({opacity:1},1000);
});*/
