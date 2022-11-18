function VerzascaSite() {
    var self = this;


    var xhr;
    self.loadPage = function (activeTab) {

        var url = "";
        self.apiCategory = activeTab ? activeTab.toLowerCase() : "index";


        if (history && history.replaceState && self.apiCategory !== "index")
            history.replaceState(null, null, "#" + self.apiCategory);
        else
            window.location.hash = '';

        switch (self.apiCategory) {
            case "index":
                url = "pg-home";
                break;
            case "pg-ordernow":
                url = "pg-ordernow";
                break;
            case "about":
                url = "pg-home";
                break;
            case "services":
                url = "pg-home";
                break;
            case "why":
                url = "pg-home";
                break;
            case "prices":
                url = "pg-home";
                break;
            case "pg-main_login":
                url = "pg-main_login";
                break;
            case "pg-contact-us":
                url = "pg-contact-us";
                break;
				case "cookie-policy":
                url = "cookie-policy";
                break;
                case "privacy-policy":
                url = "privacy-policy";
                break;
                case "return-policy":
                url = "return-policy";
                break;
                case "terms-and-conditions":
                url = "terms-and-conditions";
                break;
            default:
                url = "index";
        }
        self.showingCategory = activeTab.charAt(0).toUpperCase() + activeTab.slice(1, -1);





        //$('.navigation-item').removeClass('active');
        //$('#' + self.apiCategory + '.navigation-item').addClass('active');

        if (xhr) {
            xhr.abort();
        }

        xhr = $.ajax({
            dataType: "html",
            url: ["pages/", url, ".html"].join(""),
            success: function (data) {
				
                $("#page-content").empty().html(data);
                if (url === "pg-home" && self.apiCategory !== 'index') {
                    $('body, html').animate({
                        scrollTop: $('#' + self.apiCategory).offset().top
                    }, 0);
                }
                else {
                    $('body, html').animate({
                        scrollTop: $('#page-content').offset().top
                    }, 600);
                }
            }
        });

        return true;
    };
}


$(document).ready(function () {
    //$("#page-content").load("pages/pg-home.html");
    //$("#brand, #pg-home, .pg-home").click(function () { $("#page-content").load("pages/pg-home.html") });
    //$(".navbar-brand").click(function () { javascript: location.reload(true) });

    //$("#pt-about").click(function () {
    //    $("#page-content").load("pages/pg-home.html");
    //    $('body, html').animate({ scrollTop: $("#about").offset().top }, 600);
    //});
    //$("#pt-services").click(function () {
    //    $("#page-content").load("pages/pg-home.html");
    //    $('body, html').animate({ scrollTop: $("#services").offset().top }, 600);
    //});
    //$("#pt-why").click(function () {
    //    $("#page-content").load("pages/pg-home.html");
    //    $('body, html').animate({ scrollTop: $("#why").offset().top }, 600);
    //});
    //$("#pt-prices").click(function () {
    //    $("#page-content").load("pages/pg-home.html");
    //    $('body, html').animate({ scrollTop: $("#prices").offset().top }, 600);
    //});

    //$("#pg-contact-us").click(function () { $("#page-content").load("pages/pg-contact-us.html") });
    //$("#pg-ordernow").click(function () { $("#page-content").load("pages/pg-ordernow.html") });
    //$("#pg-signin").click(function () { $("#page-content").load("pages/pg-signin.html") });

    /*
        $("#pg-sections").click(function(){$("#page-content").load("pages/pg-sections.html")});
        $("#pg-sections-2").click(function(){$("#page-content").load("pages/pg-sections-2.html")});
        $("#pg-news-sections").click(function(){$("#page-content").load("pages/pg-news-sections.html")});
        $("#pg-article-details").click(function(){$("#page-content").load("pages/pg-article-details.html")});
        $("#pg-news-details").click(function(){$("#page-content").load("pages/pg-news-details.html")});
        $("#pg-video-details").click(function(){$("#page-content").load("pages/pg-video-details.html")});
        $("#pg-product-details").click(function(){$("#page-content").load("pages/pg-product-details.html")});
        $("#pg-gallery").click(function(){$("#page-content").load("pages/pg-gallery.html")});
        $("#pg-faq").click(function(){$("#page-content").load("pages/pg-faq.html")});
        $("#pg-search-results").click(function(){$("#page-content").load("pages/pg-search-results.html")});
        $("#pg-audio-details").click(function(){$("#page-content").load("pages/pg-audio-details.html")});
    
        $("#pt-sliders").click(function(){$("#page-content").load("pages/pt-sliders.html")});
        $("#pt-slick-slider").click(function(){$("#page-content").load("pages/pt-slick-slider.html")});
        $("#pt-sly-slider").click(function(){$("#page-content").load("pages/pt-sly-slider.html")});
        $("#pt-filter-gallery").click(function(){$("#page-content").load("pages/pt-filter-gallery.html")});
        $("#pt-vertical-accordion").click(function(){$("#page-content").load("pages/pt-vertical-accordion.html")});
        $("#pt-nav-links").click(function(){$("#page-content").load("pages/pt-nav-links.html")});
        $("#pt-carousel").click(function(){$("#page-content").load("pages/pt-carousel.html")});
        $("#pt-thumb-hover").click(function(){$("#page-content").load("pages/pt-thumb-hover.html")});
        $("#pt-ihover").click(function(){$("#page-content").load("pages/pt-ihover.html")});
        $("#pt-google-maps").click(function(){$("#page-content").load("pages/pt-google-maps.html")});
        $("#pt-text-effects").click(function(){$("#page-content").load("pages/pt-text-effects.html")});
        $("#pt-social").click(function(){$("#page-content").load("pages/pt-social.html")});
        $("#pt-menus").click(function(){$("#page-content").load("pages/pt-menus.html")});
        $("#pt-accordion").click(function(){$("#page-content").load("pages/pt-accordion.html")});
        $("#pt-img-map").click(function(){$("#page-content").load("pages/pt-img-map.html")});
        $("#pt-panels").click(function(){$("#page-content").load("pages/pt-panels.html")});
        $("#pt-collapsable-rnav").click(function(){$("#page-content").load("pages/pt-collapsable-rnav.html")});
        $("#pt-affix-nav").click(function(){$("#page-content").load("pages/pt-affix-nav.html")});
        
        $("#pt-forms-styles").click(function(){$("#page-content").load("pages/pt-forms-styles.html")});
        $("#pt-form-validation-1").click(function(){$("#page-content").load("pages/pt-form-validation-1.html")});
        $("#pt-form-validation-2").click(function(){$("#page-content").load("pages/pt-form-validation-2.html")});
        $("#pt-buttons").click(function(){$("#page-content").load("pages/pt-buttons.html")});
        $("#pt-action-buttons").click(function(){$("#page-content").load("pages/pt-action-buttons.html")});
        $("#pt-form-controls").click(function(){$("#page-content").load("pages/pt-form-controls.html")});
        $("#pt-progressbars").click(function(){$("#page-content").load("pages/pt-progressbars.html")});
        $("#pt-interaction-messages").click(function(){$("#page-content").load("pages/pt-interaction-messages.html")});
        $("#pt-lobibox").click(function(){$("#page-content").load("pages/pt-lobibox.html")});
        $("#pt-tables").click(function(){$("#page-content").load("pages/pt-tables.html")});
        $("#pt-data-table").click(function(){$("#page-content").load("pages/pt-data-table.html")});
        $("#pt-tabs").click(function(){$("#page-content").load("pages/pt-tabs.html")});
    */
    window.VerzascaSite = new VerzascaSite();
    $("a.navigation-item").each(function () {
        if (!this.onclick && this.getAttribute("target") != "_blank") {
            this.onclick = function (e) {
                VerzascaSite.loadPage(this.hash.substring(1));
                e.preventDefault();
            };
        }
    });
    
    var url = new URL(window.location.href);
    
    var advsource = url.searchParams.get("adv");
    
    if (advsource == null) {
        VerzascaSite.loadPage(window.location.hash.substring(1) || "Index");
    } else {
        VerzascaSite.loadPage("pg-ordernow");
    }
    
    

    $('#swipe-ltr').click(function () {
        $('link[href="css/bootstrap-style.css"]').attr('href', 'css/bootstrap-style-ltr.css');
    });


    /*  $("a[title='text']").click(function(){$("#container").load("pages/cont-city-details.html")});
        $("a#brand, .breadCrumb > .home").click(function(){$("#container").load("pages/cont-home.html")});*/
});

$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a:not(".dropdown-toggle")')) {
        $(this).collapse('hide');
    }
});
