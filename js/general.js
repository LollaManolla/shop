/******* Run functions when window is loaded ********/
$(window).on('load', function() {
    masonryEventWorks();
    masonryCatOgArtWorks();
    printDimensions();
    productDimensions();
});

/******* Run functions when document is ready ********/
$(document).ready(function() {
    dropMenu();
    checkDeviceForAddProducts();
    $('[bg-img]').bgImage();
    openRegPanel();
    mobileMenu();
    dashMenu();
    initMainSlider();
    dragCoverImg();
    showAdditionalAddress();
    deleteCoverImg();
    bounceOffer();
    saveNewCoverPic();
    artistMenu();
    productTemplateOverlay();
    scrollRecentViews();
    rightLeftArrows();
    createDatePickers();
    calcRelatedEventsWidth();
    calcRelatedEventsSliderWidth();
    calcViewEventsHeight();
    calcViewFollowsHeight();
    calcViewGalleriesHeight();
    openTab();
    calcViewInvitesHeight();
    addImagesSelect();
    lightenYourPrice();
    checkReqPrice();
    yearSpinner();
    calcViewProductsHeight();
    showMyProdBtns();
    showEditRelatedItemMsg();
    hoverOnProductButtons();
    showDeleteItemMsg();
    checkDeviceForMyProducts();
    showCategoryProdButtons();
    showProdCatButtonsMobile();
    showOgArtFilterMobile();
    hideOgArtFilterMobile();
    showCategoryProdButtonsAll();
    showProdCatButtonsMobileAll();
    quantitySpinner();
    loadBook();
    createDatePickersRefs();
    quantitySpinnerCart();
    initArtPrintSize();
    showSearchWl();
    showSearchWlMobile();
    showSearchWlMsg();
    ccSpinner();
    changePayMethod();
    generateMap();
    colorSuppMap();
	quantitySpinnerCartCards();
});

/******* Run functions when document resize **********/
$(window).resize(function() {
    if ($('#productTemplates').length) {
        if ($(window).width() <= 1000) {
            $('#productTemplates').hide();
            $('#productTemplates_notAvail').show();
        } else if ($(window).width() > 1000) {
            $('#productTemplates').show();
            $('#productTemplates_notAvail').hide();
        }
    }
    if ($('#art-templates').length) {
        if ($(window).width() <= 1000) {
            $('#art-templates').hide();
            $('#art-templates').removeClass("large-padding-bottom-y");
            $('#add-art-not-avail').show();
        } else if ($(window).width() > 1000) {
            $('#art-templates').show();
            $('#art-templates').addClass("large-padding-bottom-y");
            $('#add-art-not-avail').hide();
        }
    }
    if ($(".my-prod-img").length) {
        if ($(window).width() <= 1000) {
            toggleProductLinks("off");
        } else if ($(window).width() > 1000) {
            toggleProductLinks("on");
        }
    }

    if ($('#og_art_filter_wrapper').length) {
        if ($(window).width() <= 1000) {
            $('#og_art_filter_wrapper').hide();
            $('.toggleFilterPanel').show();
            $('.toggleFilterPanelUp').hide();
        } else if ($(window).width() > 1000) {
            $('#og_art_filter_wrapper').show();
            $('.toggleFilterPanel').hide();
            $('.toggleFilterPanelUp').hide();
        }
    }

    setTimeout(function() {
        getRecentViewsSliderCoeff();
        resetRecentViews();
        scrollRecentViews();
    }, 500);

    if ($('.related-events-max-four').length) {
        calcRelatedEventsWidth();
    }
    if ($('.related-events-over-four').length) {
        calcRelatedEventsSliderWidth();
    }
    calcViewEventsHeight();
    calcViewFollowsHeight();
    calcViewGalleriesHeight();
    calcViewInvitesHeight();
    calcViewProductsHeight();
    showProdCatButtonsMobile();
    showProdCatButtonsMobileAll();
    resizeArtPrintPage();
    showSearchWlMobile();




    if ($('#artistProfession').is(":visible")) {
      resizeRegPasswordArtist();
    }
    else if ($('#artistProfession').not(":visible")) {
      resizeRegPasswordSupporter();
    }


});
/******* Run functions when document orientation changed (handheld devices) **********/
$(window).on("orientationchange", function() {

    setTimeout(function() {
        getRecentViewsSliderCoeff();
        resetRecentViews();
        scrollRecentViews();
    }, 500);
    if ($('.related-events-max-four').length) {
        calcRelatedEventsWidth();
    }
    if ($('.related-events-over-four').length) {
        calcRelatedEventsSliderWidth();
    }
    calcViewEventsHeight();
    calcViewFollowsHeight();
    calcViewGalleriesHeight();
    calcViewInvitesHeight();
});

var checkDeviceForAddProducts = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if ($('#productTemplates').length) {
            $('#productTemplates').html("");
            $('#productTemplates_notAvail').show();
        }
        if ($('#art-templates').length) {
            $('#art-templates').html("");
            $('#art-templates').removeClass("large-padding-bottom-y");
            $('#add-art-not-avail').show();
        }
    }
};
/*****************************************************/
/******************* FUNCTIONS ***********************/
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**************** Offer bounced effect ***************/
var bounceOffer = function() {
    if ($('.header-offer').length) {
        setInterval(function() {
            $(".header-offer span").effect("bounce", {
                distance: 10,
                times: 3
            }, "slow");
        }, 5000);
    }
};
/************ drop menu ******************************/
var dropMenu = function() {
    var $trigger = $('[trigger]');
    var $drop = $('[dropdown]');

    // on click on dropdown icon in header
    $trigger.on('click', function(e) {

        // because of previous line, mobile menu doesn't close on click so the below has been added
        if ($(".mob_menu").hasClass("mob_menu_active")) {
            $('.mob_menu').removeClass("mob_menu_active");
        }

        // remove active styling of other triggers and dropdowns
        var $data = $(this).attr("trigger");
        $drop.not('[dropdown= ' + $data + ']').removeClass("active");
        $trigger.not($(this)).removeClass("active");

        $(document).find('[dropdown= ' + $data + ']').toggleClass("active");
        $(document).find('[dropdown= ' + $data + ']').find("input[autofocus]").focus();

        // remove active styling if already present on click (closing the menu)
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).toggleClass("active");
        }
        return false;
    });

    // hide drop down on screen click
    $('html').click(function() {
        $(".drop-content").removeClass("active");
        $(".drop-trigger").removeClass("active");
        $(".share-content").removeClass("active");
    });
};

/*********** set images as bg of container and fill 100%, hide image ****/
$.fn.bgImage = function() {
    var $element = $(this);
    $element.each(function() {
        var $img = $(this).find('img.hidden-img'),
            $src = $img.attr('src');

        $img.hide();

        if (!$img.length || $src === "" || $src === undefined) {
            $(this).css({
                'background-image': 'url("")'
            });
        } else
            $(this).css({
                'background-image': 'url("' + $src + '")'
            });
    });
};

/******** open login/registration panel ******************/
var openRegPanel = function() {
    //********************
    if ($("[data-tab]").length) {
        var e = $("[data-tab]");
        e.click(function() {
          //  getCountries();
        //    getStates();
            var a = $(this);
            t = a.data("tab");
            a.addClass("active");
            $("[data-tab-id]").hide();
            $('[data-tab-id="' + t + '"]').show();
          //  $('.popup-inner.registration-popup').css("max-width", "650px");
            $('.popup-inner.registration-popup').removeClass("artist-rego");
            if (t != "register") {
                e.removeClass("active");
                a.addClass("active");
            }
        });
    }
    //*********************
    if ($("#artistButton").length) {
        var f = $("#artistButton");
        f.click(function() {
          $('.popup-inner.registration-popup').addClass("artist-rego");
          $("#regCountryState").show();
          $("#regPhoneSkype").show();
          $("#regFLName").show();
          $("#artistProfession").show();
          $("#regId").show();
          resizeRegPasswordArtist();
          $("#regPassword").css("float", "left");
          $("#regPassword").css("margin-top", "0");

        });
    }
    //*********************
    if ($("#supportButton").length) {
        var fs = $("#supportButton");
        fs.click(function() {
          $("#regCountryState").hide();
          $("#regPhoneSkype").hide();
          $("#regFLName").hide();
          $("#artistProfession").hide();
          $("#regId").hide();
          $('.popup-inner.registration-popup').removeClass("artist-rego");
          resizeRegPasswordSupporter();
          $("#regPassword").css("float", "none");
          $("#regPassword").css("margin-top", "20px");
        });
    }
    //*********************
    if ($("[data-popup]").length) {
        var a;
        var t = $("[data-popup]");
        t.click(function() {
            var e = $(this);
            var m = e.data("tab");
            var t = e.data("popup");
            if (m == "register") {
                $('[data-tab="login"]').removeClass("active");
                $('[data-tab="registerSelect"]').addClass("active");
                $("#artistProfession").show();
            } else {
                $('[data-tab="login"]').addClass("active");
                $('[data-tab="registerSelect"]').removeClass("active");
            }
            a = $('[data-popup-id="' + t + '"]');
            $("[data-popup-id]").hide();
            a.show();

            /*  $("body, html").css({
                  overflow: "hidden"
              }); */
            a.click(function(e) {
                if (e.target === this) {
                    $(this).fadeOut("fast");
                    //    $("body, html").attr("style", "");
                }
            });
        });
    }
    //*************************
    var closeIcon = $("#closeLoginPopup");
    closeIcon.click(function() {
        $("[data-popup-id]").hide();
    });
    var closeNotes = $("#close-notifications");
    closeNotes.click(function() {
        $("[data-popup-id]").hide();
    });
};

var resizeRegPasswordArtist = function() {
  if ($(window).width() <= 1000) {
    $("#regPassword").css("padding-right", "0");
    $("#regUsername").css("margin-bottom", "10px");
  }
  else if ($(window).width() > 1000) {
    $("#regUsername").css("margin-bottom", "0");
    $("#regPassword").css("padding-right", "0");
  }
};

var resizeRegPasswordSupporter = function() {
  if ($(window).width() <= 1000) {
    $("#regPassword").css("padding-right", "0");
    $("#regUsername").css("margin-bottom", "10px");
  }
  else if ($(window).width() > 1000) {
    $("#regUsername").css("margin-bottom", "20px");
    $("#regPassword").css("padding-right", "20px");
  }
};
/************** open/close dashboard mobile menu ****************/
var dashMenu = function() {
    if ($('.navigation_toggle_dots').length) {
        $(".navigation_toggle_dots").click(function(e) {
            // hide main menu if it is open
            if ($(".mob_menu").is(":visible")) {
                $(".mob_menu").slideUp("fast");
            }
            // set z-index of profile pic so that it doesn't cover menu
            if ($(".dashboard_menu").is(":visible")) {
                setTimeout(function() {
                    $(".userprofile_img").css("z-index", "1100");
                }, 600);
            } else {
                $(".userprofile_img").css("z-index", "0");
            }

            $(".dashboard_menu").slideToggle("slow");
        });
    }
};

/************** open/close mobile menu ****************/
var mobileMenu = function() {
    $(".navigation_toggle").click(function(e) {
        // hide dashboard menu if it is open
        if ($(".dashboard_menu").is(":visible")) {
            $(".dashboard_menu").slideUp("fast");
        }
        // set z-index of profile pic and camera so that they don't cover menu
        if ($(".mob_menu").is(":visible")) {
            setTimeout(function() {
                $(".camera").css("z-index", "1200");
                $(".userprofile_img").css("z-index", "1100");
            }, 600);
        } else {
            $(".camera").css("z-index", "0");
            $(".userprofile_img").css("z-index", "0");
        }
        $(".mob_menu").slideToggle("slow");
    });


    // hide mobile menus when start scrolling
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 2) {
            // hide dashboard menu on scroll and restore cover img z-index
            if ($(".dashboard_menu").not(":hidden")) {
                $(".dashboard_menu").slideUp("fast");
                setTimeout(function() {
                    $(".userprofile_img").css("z-index", "1100");
                }, 600);
            }

            if ($(".mob_menu").not(":hidden")) {
                $(".mob_menu").slideUp("fast");
                setTimeout(function() {
                    $(".camera").css("z-index", "1200");
                    $(".userprofile_img").css("z-index", "1100");
                }, 600);
            }
        }
    });
};

/************ setup header slider ***********************/
var initMainSlider = function() {
    if ($('#header-slide').length) {
        $("#header-slide").owlCarousel({
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            navigation: false,
            pagination: true,
            autoPlay: true,
            stopOnHover: true,
            transitionStyle: "fade"

        });
    }
};
/************ show subscribe form on click ***********************/
function showSubscribeForm() {
    if ($('#showSubscribeFormButton').length) {
        $('#showSubscribeFormButton').hide();
        $('.subscribe-form').slideDown("slow", function() {
            $(this).show();
        });
    }
}

/************ show subscribe form on click ***********************/
function hideSubscribeForm() {
    if ($('#hide-subscribe-form').length) {

        $('.subscribe-form').slideUp("slow", function() {
            $('#showSubscribeFormButton').show();
        });
    }
}

/*---------- PREVIEW PROFILE IMAGE ON SELECT ------------*/
function showMyProfile(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        // DODAO Zoran za proveru velicine i extenzije slike START
        var imgSize = Math.round((fileInput.files[0].size / 1024) / 1024);
        var imgExtSplit = fileInput.files[0].type.split("/");
        var imgExt = imgExtSplit[1];
        if (imgExt === 'jpeg') {
            imgExt = 'jpg';
        }
        if (imgSize > 5) {
            $('#size-error').show();
            $('#' + fileInput.id).val('');
            return false;
        }
        if (imgExt !== 'jpg' && imgExt !== 'png' && imgExt !== 'gif') {
            $('#ext-error').show();
            $('#' + fileInput.id).val('');
            return false;
        }
        // DODAO Zoran END
        var reader = new FileReader();
        reader.onload = function(e) {

            // get orientation
            binImg = e.target.result;
            input = document.getElementById('profile-img-file-input');
            getOrientation(input.files[0], function(orientation) {

                if ([5, 6, 7, 8].indexOf(orientation) > -1) {
                    $('#profileRotator').attr('src', binImg);
                    var c = document.getElementById("profile-Photo-Slice");
                    c.width = $('#profileRotator').height();
                    c.height = $('#profileRotator').width();
                    var ctx = c.getContext("2d");
                    ctx.transform(0, 1, -1, 0, $('#profileRotator').height(), 0);
                    ctx.drawImage(document.getElementById('profileRotator'), 0, 0);
                    urlRot = c.toDataURL();
                    // set Base64 string in src of positioner
                    $('#profile-image-preview').css("background-image", "url(" + urlRot + ")");
                } else {
                    // set Base64 string in src of positioner
                    $('#profile-image-preview').css("background-image", "url(" + binImg + ")");
                }
            });
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

/*---------- PREVIEW EVENT IMAGE ON SELECT ------------*/
function showEventPhoto(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        // DODAO Zoran za proveru velicine i extenzije slike START
        var imgSize = Math.round((fileInput.files[0].size / 1024) / 1024);
        var imgExtSplit = fileInput.files[0].type.split("/");
        var imgExt = imgExtSplit[1];
        if (imgExt === 'jpeg') {
            imgExt = 'jpg';
        }
        if (imgSize > 5) {
            $('#size-error').show();
            $('#' + fileInput.id).val('');
            return false;
        }
        if (imgExt !== 'jpg' && imgExt !== 'png' && imgExt !== 'gif') {
            $('#ext-error').show();
            $('#' + fileInput.id).val('');
            return false;
        }
        // DODAO Zoran END
        var reader = new FileReader();
        reader.onload = function(e) {

            // get orientation
            binImg = e.target.result;
            input = document.getElementById('event-img-file-input');
            getOrientation(input.files[0], function(orientation) {

                if ([5, 6, 7, 8].indexOf(orientation) > -1) {
                    $('#event-photo-rotator').attr('src', binImg);
                    var c = document.getElementById("event-Photo-Slice");
                    c.width = $('#event-photo-rotator').height();
                    c.height = $('#event-photo-rotator').width();
                    var ctx = c.getContext("2d");
                    ctx.transform(0, 1, -1, 0, $('#event-photo-rotator').height(), 0);
                    ctx.drawImage(document.getElementById('event-photo-rotator'), 0, 0);
                    urlRot = c.toDataURL();
                    // set Base64 string in src of positioner
                    $('.event-photo-preview').css("background-image", "url(" + urlRot + ")");
                } else {
                    // set Base64 string in src of positioner
                    $('.event-photo-preview').css("background-image", "url(" + binImg + ")");
                }
            });
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

/*---------- PREVIEW ID IMAGE ON SELECT ------------*/
function showMyID(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        // DODAO Zoran za proveru velicine i extenzije slike START
        var imgSize = Math.round((fileInput.files[0].size / 1024) / 1024);
        var imgExtSplit = fileInput.files[0].type.split("/");
        var imgExt = imgExtSplit[1];
        if (imgExt === 'jpeg') {
            imgExt = 'jpg';
        }
        if (imgSize > 5) {
            $('#size-error').show();
            $('#' + fileInput.id).val('');
            return false;
        }
        if (imgExt !== 'jpg' && imgExt !== 'png' && imgExt !== 'gif') {
            $('#ext-error').show();
            $('#' + fileInput.id).val('');
            return false;
        }
        // DODAO Zoran END
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#id-image-preview').css("background-image", "url(" + e.target.result + ")");
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

/*---------- PREVIEW COVER IMAGE ON SELECT ------------*/
function showMyImage(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        // DODAO Zoran za proveru velicine i extenzije slike START
        var imgSize = Math.round((fileInput.files[0].size / 1024) / 1024);
        var imgExtSplit = fileInput.files[0].type.split("/");
        var imgExt = imgExtSplit[1];
        if (imgExt === 'jpeg') {
            imgExt = 'jpg';
        }
        if (imgSize > 5) {
            $('#size-error').show();
            $('#' + fileInput.id).val('');
            return false;
        }
        if (imgExt !== 'jpg' && imgExt !== 'png' && imgExt !== 'gif') {
            $('#ext-error').show();
            $('#' + fileInput.id).val('');
            return false;
        }
        // DODAO Zoran END
        var reader = new FileReader();
        reader.onload = function(e) {
            // get orientation
            binImg = e.target.result;
            input = document.getElementById('cover-img-file-input');
            getOrientation(input.files[0], function(orientation) {

                if ([5, 6, 7, 8].indexOf(orientation) > -1) {
                    $('#rotator').attr('src', binImg);
                    var c = document.getElementById("cover-Photo-Slice");
                    c.width = $('#rotator').height();
                    c.height = $('#rotator').width();
                    var ctx = c.getContext("2d");
                    ctx.transform(0, 1, -1, 0, $('#rotator').height(), 0);
                    ctx.drawImage(document.getElementById('rotator'), 0, 0);
                    urlRot = c.toDataURL();
                    // set Base64 string in src of positioner
                    $('#cover-img').attr('src', urlRot);
                } else {
                    // set Base64 string in src of positioner
                    $('#cover-img').attr('src', binImg);
                }
            });
            $(".profile-cover").show();
            $(".profile-cover_inner > img").show();
            $(".profile-cover-save").hide();
            $('#cover-img').css('transform', 'translate3d(0px, 0px, 0px)');
            $('#cover-img').attr('src', e.target.result);
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

/*---------- COVER IMAGE DRAGGABLE ------------*/
var dragCoverImg = function() {
    /*--------- DRAG IMAGE -----------*/
    if ($('.profile-cover_wrapper').length) {
        Draggable.create("#cover-img", {
            type: "x,y",
            bounds: ".profile-cover_wrapper",
            edgeResistance: 0.0
        });
    }
};

/************ delete cover image on edit profile page ***********************/
var deleteCoverImg = function() {
    if ($('#deleteCoverImg').length) {
        $("#deleteCoverImg").click(function(e) {
            $.post('php/page/delete_cover.php', {
                uid: $('#jsuid').val(),
                cover: 'images/cover_blank.png'
            }).done(function(data) {
                if (data === 'ok') {
                    location.reload();
                }
            });
        });
    }
};
/************ save croppped repositioned cover photo ***********************/
var saveNewCoverPic = function() {
    if ($('#saveProfile').length) {
        // check if cover img not empty
        if ($("#cover-img").attr("src") !== "") {

            // get cover img position in wrapping div
            var coverImg = document.getElementById('cover-img');
            var slice = coverImg.getBoundingClientRect();
            var sliceTop = slice.top;
            var sliceBottom = slice.bottom;
            var sliceLeft = slice.left;
            var sliceRight = slice.right;

            // get original cover image size
            var imgWidth = $("#cover-img").width();
            var imgHeight = $("#cover-img").height();

            // get transform matrix
            var imgTrans = $("#cover-img").css("transform");
            var matrix = new CSSMatrix(imgTrans);

            // get size of cover image parent element
            var wrapWidth = $('.profile-cover').width();
            var wrapHeight = $('.profile-cover').height();

            // clone visible part of cover image in invisible CANVAS
            var cover_canvas = document.getElementById("cover-Photo-Slice");
            cover_canvas.width = wrapWidth;
            cover_canvas.height = wrapHeight;
            var ctx = cover_canvas.getContext("2d");

            // the top parameter is defined by the y translate3d value (matrix.m42) after positioning new cover image
            ctx.drawImage(coverImg, sliceLeft, matrix.m42, imgWidth, imgHeight);

            // decode Canvas image to Base64 string and parse in src of visible image element
            var url = cover_canvas.toDataURL();
            $("#cover-img-save").attr("src", url);

            // show positioned and cropped cover image after save
            $('.profile-cover-save').show();
            // hide draggable image
            $('.profile-cover').hide();
        }
    }
};

/*---------- PREVIEW ORIGINAL ART ON ADD ------------*/
function showOriginalArt(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        // DODAO Zoran za proveru velicine i extenzije slike START
        var imgSize = Math.round((fileInput.files[0].size / 1024) / 1024);
        var imgExtSplit = fileInput.files[0].type.split("/");
        var imgExt = imgExtSplit[1];
        if (imgExt === 'jpeg') {
            imgExt = 'jpg';
        }
        if (imgSize > 10) {
            $('#size-error').show();
            $('#' + fileInput.id).val('');
            return false;
        }
        if (imgExt !== 'jpg' && imgExt !== 'png') {
            $('#ext-error').show();
            $('#' + fileInput.id).val('');
            return false;
        }
        // DODAO Zoran END
        var reader = new FileReader();
        reader.onload = function(e) {

            // get orientation
            binImg = e.target.result;
            input = document.getElementById('art-input');
            getOrientation(input.files[0], function(orientation) {

                if ([5, 6, 7, 8].indexOf(orientation) > -1 && [5, 6, 7, 8].indexOf(orientation) !== 3) {
                    $('#original-art-rotator').attr('src', binImg);
                    var c = document.getElementById("original-art-slice");
                    c.width = $('#original-art-rotator').height();
                    c.height = $('#original-art-rotator').width();
                    var ctx = c.getContext("2d");
                    ctx.transform(0, 1, -1, 0, $('#original-art-rotator').height(), 0);
                    ctx.drawImage(document.getElementById('#original-art-rotator'), 0, 0);
                    urlRot = c.toDataURL();
                    // set Base64 string in src of positioner
                    $('#original-art-preview').css("background-image", "url(" + urlRot + ")");

                } else if ([5, 6, 7, 8].indexOf(orientation) === 3) {
                    console.log(2);
                    $('#original-art-rotator').attr('src', binImg);
                    var c2 = document.getElementById("original-art-slice");
                    c2.width = $('#original-art-rotator').height();
                    c2.height = $('#original-art-rotator').width();
                    var ctx2 = c2.getContext("2d");
                    ctx2.transform(0, 1, -1, 0, $('#original-art-rotator').height(), 0);
                    ctx2.rotate(Math.PI);
                    ctx2.translate(-parseInt(c2.height), -parseInt(c2.width));
                    ctx2.drawImage(document.getElementById('original-art-rotator'), 0, 0);
                    urlRot2 = c2.toDataURL();
                    $('#original-art-preview').css("background-image", "url(" + urlRot2 + ")");
                } else {
                    // set Base64 string in src of positioner
                    $('#original-art-preview').css("background-image", "url(" + binImg + ")");
                }
            });
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

/*---------- PREVIEW ART PRINT ON ADD ------------*/
function showArtPrint(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        // DODAO Zoran za proveru velicine i extenzije slike START
        var imgSize = Math.round((fileInput.files[0].size / 1024) / 1024);
        var imgExtSplit = fileInput.files[0].type.split("/");
        var imgExt = imgExtSplit[1];
        if (imgExt === 'jpeg') {
            imgExt = 'jpg';
        }
        if (imgSize > 50) {
            $('#size-error').show();
            $('#' + fileInput.id).val('');
            return false;
        }
        if (imgExt !== 'jpg' && imgExt !== 'png') {
            $('#ext-error').show();
            $('#' + fileInput.id).val('');
            return false;
        }
        // DODAO Zoran END
        var reader = new FileReader();
        reader.onload = function(e) {

            // get orientation
            binImg = e.target.result;
            input = document.getElementById('art-input');
            getOrientation(input.files[0], function(orientation) {

                if ([5, 6, 7, 8].indexOf(orientation) > -1 && [5, 6, 7, 8].indexOf(orientation) !== 3) {
                    $('#original-art-rotator').attr('src', binImg);
                    var c = document.getElementById("original-art-slice");
                    c.width = $('#original-art-rotator').height();
                    c.height = $('#original-art-rotator').width();
                    var ctx = c.getContext("2d");
                    ctx.transform(0, 1, -1, 0, $('#original-art-rotator').height(), 0);
                    ctx.drawImage(document.getElementById('#original-art-rotator'), 0, 0);
                    urlRot = c.toDataURL();
                    // set Base64 string in src of positioner
                    $('#original-art-preview').css("background-image", "url(" + urlRot + ")");

                } else if ([5, 6, 7, 8].indexOf(orientation) === 3) {
                    console.log(2);
                    $('#original-art-rotator').attr('src', binImg);
                    var c2 = document.getElementById("original-art-slice");
                    c2.width = $('#original-art-rotator').height();
                    c2.height = $('#original-art-rotator').width();
                    var ctx2 = c2.getContext("2d");
                    ctx2.transform(0, 1, -1, 0, $('#original-art-rotator').height(), 0);
                    ctx2.rotate(Math.PI);
                    ctx2.translate(-parseInt(c2.height), -parseInt(c2.width));
                    ctx2.drawImage(document.getElementById('original-art-rotator'), 0, 0);
                    urlRot2 = c2.toDataURL();
                    $('#original-art-preview').css("background-image", "url(" + urlRot2 + ")");
                } else {
                    // set Base64 string in src of positioner
                    $('#original-art-preview').css("background-image", "url(" + binImg + ")");
                }
            });
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

/*---------- remove art from add product ------------*/
function removeArt() {
    $('#original-art-preview').css("background-image", "none");
    $('#art-input').val('');
}
/*---------- hide size error in add product when click on cancel in error------------*/
function hideSizeError() {
    $('#size-error').hide();
}

/*---------- hide extension error in add product when click on cancel in error------------*/
function hideExtError() {
    $('#ext-error').hide();
}
function hideShipError() {
    $('#shipping-error').hide();
}
// get image orientation
var getOrientation = function(file, callback) {
    var reader = new FileReader();
    reader.onload = function(e) {

        var view = new DataView(e.target.result);
        if (view.getUint16(0, false) != 0xFFD8) return callback(-2);
        var length = view.byteLength,
            offset = 2;
        while (offset < length) {
            var marker = view.getUint16(offset, false);
            offset += 2;
            if (marker == 0xFFE1) {
                if (view.getUint32(offset += 2, false) != 0x45786966) return callback(-1);
                var little = view.getUint16(offset += 6, false) == 0x4949;
                offset += view.getUint32(offset + 4, little);
                var tags = view.getUint16(offset, little);
                offset += 2;
                for (var i = 0; i < tags; i++)
                    if (view.getUint16(offset + (i * 12), little) == 0x0112)
                        return callback(view.getUint16(offset + (i * 12) + 8, little));
            } else if ((marker & 0xFF00) != 0xFF00) break;
            else offset += view.getUint16(offset, false);
        }
        return callback(-1);
    };
    reader.readAsArrayBuffer(file);
};

/************ show/hide secondary address feilds in edit profile pages ***********************/
var showAdditionalAddress = function() {

    if ($('#primaryAddress').length) {
        $("#primaryAddress").click(function(e) {
            if ($("#billingAddressRow").is(":visible")) {
                $("#billingAddressRow").hide();
            }
            if ($("#billingCountryStateRow").is(":visible")) {
                $("#billingCountryStateRow").hide();
            }
            if ($("#billingAddressCityRow").is(":visible")) {
                $("#billingAddressCityRow").hide();
            }
        });
        $("#billingAddress").click(function(e) {
            $("#billingCountryStateRow").show();
            $("#billingAddressRow").show();
            $("#billingAddressCityRow").show();
        });
    }
};

/************ artist dashboard menu ******************************/
var artistMenu = function() {
    var $trigger = $('[triggerLink]');
    // on hover menu item in dashboard menu
    $trigger.hover(function() {
        var $data = $(this).attr("triggerLink");
        var $popupLink = $(document).find('[popLink= ' + $data + ']');
        $popupLink.toggleClass("active");

    });
};

/************ product template overlays ******************************/
var productTemplateOverlay = function() {
    var $trigger = $('[triggerOL]');
    // on hover over product template selection box
    $trigger.hover(function() {
        var $data = $(this).attr("triggerOL");
        var $overlay = $(document).find('[overlay= ' + $data + ']');
        //  $overlay.fadeToggle( 400, "ease" );
        $overlay.fadeToggle(350);
    });
};

/************ returns coefficient for scrollRecentViews ******************************/

var getRecentViewsSliderCoeff = function() {
    var coeff;
    var numItems = $(".product-show > .column-4").length;

    if ($(window).width() <= 999 && $(window).width() >= 510) {
        coeff = numItems - 3;
    } else if ($(window).width() <= 509) {
        coeff = numItems - 2;
    } else {
        coeff = numItems - 5;
    }

    return coeff;
};

/************ resets product-show left position for scrollRecentViews when orientation changed or resize ******************************/
var resetRecentViews = function() {
    $(".product-show").css("left", 0);
};

/************ returns move value for right and left button clicks ******************************/
var getRecentViewMove = function() {
    var a = $(".product-show > .column-4").outerWidth(true) + "px";
    return a;
};
/************ returns sliderLimit value for right and left button clicks ******************************/
var getRecentViewSliderLimit = function() {
    var b = -($(".product-show > .column-4").outerWidth(true) * getRecentViewsSliderCoeff());
    return b;
};

var scrollRecentViews = function() {
    var numItems = $(".product-show > .column-4").length;


    var view = $(".product-view-container");
    var show = $(".product-show");
    var productBox = $(".product-show > .column-4");
    var productBox_margin_right = parseInt(productBox.css("margin-right")) + 2;
    var productBox_margin_left = parseInt(productBox.css("margin-left"));
    show.css("width", (productBox.outerWidth(true) * numItems) + "px");
    var move = productBox.outerWidth(true) + "px";
    var sliderLimit = -(productBox.outerWidth(true) * getRecentViewsSliderCoeff());

};

var rightLeftArrows = function() {
    /************ scrolls recent views to the right ******************************/
    if ($(".right-arrow").length) {
        $(".right-arrow").click(function() {
            var show = $(".product-show");
            var currentPosition = parseInt(show.css("left"));
            if (currentPosition >= getRecentViewSliderLimit()) show.stop(false, true).animate({
                left: "-=" + getRecentViewMove()
            }, {
                duration: 400
            });
        });
    }

    /************ scrolls recent views to the left ******************************/
    if ($(".left-arrow").length) {
        $(".left-arrow").click(function() {
            var show = $(".product-show");
            var currentPosition = parseInt(show.css("left"));
            if (currentPosition < 0) {
                show.stop(false, true).animate({
                    left: "+=" + getRecentViewMove()
                }, {
                    duration: 400
                });

                if (show.position().left >= 0) {
                    show.stop(false, true).animate({
                        left: 0
                    }, {
                        duration: 400
                    });
                }
            }
        });

    }

};

/************ date and time pickers for create new event ******************************/
var createDatePickers = function() {

    if ($('#start-date').length) {
        $("#start-date").datepicker();
    }
    if ($('#end-date').length) {
        $("#end-date").datepicker();
    }
    if ($('#start-time').length) {
        $("#start-time").timepicker({
            'timeFormat': 'h:i A'
        });
    }
    if ($('#end-time').length) {
        $("#end-time").timepicker({
            'timeFormat': 'h:i A'
        });
    }
};
/************ set up masonry layout for artworks featured in event ******************************/
var masonryEventWorks = function() {
    if ($('.events-works-wrapper').length) {
        $('.events-works-wrapper').masonry({
            // options
            itemSelector: '.event-work-container',
            columnWidth: '.event-work-container',
            gutter: 25
        });
    }
};

/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}
/************ calc width of related event slider for mobile portrait view ******************************/
var calcRelatedEventsSliderWidth = function() {
    if ($('.related-events-over-four').length) {
        if ($(window).width() <= 509) {

            if (getMobileOperatingSystem() == "Android" || getMobileOperatingSystem() == "Windows Phone") {
                $('.product-show .column-4.profile-event').css('width', '198px');
                $('.related-events-over-four .product-view-container').css('width', '218px');
            } else if (getMobileOperatingSystem() == "iOS") {
                $('.product-show .column-4.profile-event').css('width', '178px');
                $('.related-events-over-four .product-view-container').css('width', '198px');
            } else {
                $('.product-show .column-4.profile-event').css('width', '198px');
                $('.related-events-over-four .product-view-container').css('width', '218px');
            }
        } else if ($(window).width() >= 509 && $(window).width() < 1000) {

            $('.product-show .column-4.profile-event').css('width', '204.5px');
            $('.related-events-over-four .product-view-container').css('width', '428.5px');
        } else if ($(window).width() >= 1000 && $(window).width() <= 1600) {

            $('.product-show .column-4.profile-event').css('width', '179.5px');
            $('.related-events-over-four .product-view-container').css('width', '778.5px');
        } else if ($(window).width() > 1600) {

            $('.product-show .column-4.profile-event').css('width', '273.5px');
            $('.related-events-over-four .product-view-container').css('width', '1155px');
        }

    }
};
/************ calc width of related events wrapper if there are 4 or less related events ******************************/
var calcRelatedEventsWidth = function() {
    if ($('.related-events-max-four').length) {
        if ($(window).width() >= 1000) {
            var relatedEventsWidth = 0;

            $('.related-events-max-four .column-4.profile-event').each(function(index) {
                relatedEventsWidth = relatedEventsWidth + $(this).outerWidth(true);
            });
            $('.related-events-max-four').css("width", relatedEventsWidth);
        } else {
            $('.related-events-max-four').css("width", "100%");
        }
    }
};
/************ calculate height of events wrapper ******************************/
var calcViewEventsHeight = function() {
    if ($('.view-current-events').length) {
        var numEvents = $('.profile-event').length;
        var eventHeight = $('.profile-event').outerHeight(true);
        var eventsWidth = $('.view-current-events').outerWidth(true);
        $('.view-current-events-scroll').css("width", eventsWidth + 18);
        if (numEvents <= 4) {
            $('.view-current-events').css("height", eventHeight);
            $('.view-current-events-scroll').css("height", eventHeight);
        } else if (numEvents > 4 && numEvents <= 8) {
            $('.view-current-events').css("height", eventHeight * 2);
            $('.view-current-events-scroll').css("height", eventHeight * 2);
        } else if (numEvents >= 9) {
            $('.view-current-events').css("height", eventHeight * 3);
            $('.view-current-events-scroll').css("height", eventHeight * 3);
        }
        if (numEvents > 12) {
            bounceDownArrow();
        }
    }
};

/************ calculate height of products wrapper ******************************/
var calcViewProductsHeight = function() {
    if ($('#view-products-select').length) {

        var numEvents = $('.box-product3').length;
        var eventHeight = $('.box-product3').outerHeight(true);
        var eventsWidth = $('.view-current-events').outerWidth(true);
        $('.view-current-events-scroll').css("width", eventsWidth + 18);

        if (numEvents === 0) {
            $('.view-current-events').css("height", 0);
            $('.view-current-events-scroll').css("height", 0);
        } else if (numEvents >= 1 && numEvents <= 4) {
            $('.view-current-events').css("height", eventHeight);
            $('.view-current-events-scroll').css("height", eventHeight);
        } else if (numEvents > 4 && numEvents <= 8) {
            $('.view-current-events').css("height", eventHeight * 2);
            $('.view-current-events-scroll').css("height", eventHeight * 2);
        } else if (numEvents >= 9) {
            $('.view-current-events').css("height", eventHeight * 3);
            $('.view-current-events-scroll').css("height", eventHeight * 3);
        }
        if (numEvents > 12) {
            bounceDownArrow();
        }
    }
};

/************ calc height of followings wrapper ******************************/
var calcViewFollowsHeight = function() {
    if ($('.view-follows').length) {

        var numFollows = $('.follow-item-col').length;
        var followsHeight = $('.follow-item-col').outerHeight(true);
        var followsWidth = $('.view-follows').outerWidth(true);
        $('.view-follows-scroll').css("width", followsWidth + 18);

        if (numFollows <= 5) {
            $('.view-follows').css("height", followsHeight);
            $('.view-follows-scroll').css("height", followsHeight);
        } else if (numFollows > 5 && numFollows <= 10) {
            $('.view-follows').css("height", followsHeight * 2);
            $('.view-follows-scroll').css("height", followsHeight * 2);
        } else if (numFollows > 10 && numFollows <= 15) {
            $('.view-follows').css("height", followsHeight * 3);
            $('.view-follows-scroll').css("height", followsHeight * 3);
        } else if (numFollows > 15 && numFollows <= 20) {
            $('.view-follows').css("height", followsHeight * 4);
            $('.view-follows-scroll').css("height", followsHeight * 4);
        } else if (numFollows >= 21) {
            $('.view-follows').css("height", followsHeight * 4);
            $('.view-follows-scroll').css("height", followsHeight * 4);
            bounceDownArrow();
        }
        // bounce arrow for mobile view
        if (numFollows > 5 && $(window).width() < 1000 && $(window).width() > 509) {
            bounceDownArrow();
        } else if (numFollows > 4 && $(window).width() < 509) {
            bounceDownArrow();
        }
    }

};
/************ calculate height of galleries wrapper ******************************/
var calcViewGalleriesHeight = function() {
    if ($('.view-galleries').length) {
        var numGalls = $('.view-box-gallery').length;
        var eventHeight = $('.view-box-gallery').outerHeight(true);
        var eventsWidth = $('.view-galleries').outerWidth(true);
        $('.view-galleries-scroll').css("width", eventsWidth + 18);
        if (numGalls <= 3) {
            $('.view-galleries').css("height", eventHeight);
            $('.view-galleries-scroll').css("height", eventHeight);
        } else if (numGalls > 3 && numGalls <= 6) {
            $('.view-galleries').css("height", eventHeight * 2);
            $('.view-galleries-scroll').css("height", eventHeight * 2);
        } else if (numGalls > 7) {
            $('.view-galleries').css("height", eventHeight * 3);
            $('.view-galleries-scroll').css("height", eventHeight * 3);
        }
        if (numGalls > 9) {
            bounceDownArrow();
        }
    }
};

/************ switch between tabs on invites page ******************************/
var openTab = function() {

    if ($('.tab-bar').length) {
        $('.tab-bar li').first().addClass("active-tab");
        $('.view-invites-received').hide();

        $('.tab-bar li').click(
            function() {
                $(this).addClass("active-tab");
                $(this).siblings().removeClass("active-tab");
                if ($(this).attr('id') == "sent-inv") {
                    $('.view-invites-sent').show();
                    $('.view-invites-received').hide();
                } else if ($(this).attr('id') == "rec-inv") {
                    $('.view-invites-sent').hide();
                    $('.view-invites-received').show();
                }
            });
    }
};


/************ calculate height of invites wrappers ******************************/
var calcViewInvitesHeight = function() {
    var invitesSentHeight;
    var invitesSentWidth;
    var numInvitesSent;

    if ($('.view-invites-sent').length) {
        numInvitesSent = $('.view-invites-sent .artist-invite').length;

        if ($('.view-invites-sent').is(':visible')) {
            invitesSentHeight = $('.view-invites-sent .artist-invite').outerHeight(true);
            invitesSentWidth = $('.view-invites-sent').outerWidth(true);
        } else {
            invitesSentHeight = $('.view-invites-received .artist-invite').outerHeight(true);
            invitesSentWidth = $('.view-invites-received').outerWidth(true);
        }

        $('.view-invites-sent-scroll').css("width", invitesSentWidth + 18);

        if (numInvitesSent <= 5) {
            for (i = 1; i < 5; i++) {
                if (numInvitesSent == i) {
                    $('.view-invites-sent').css("height", invitesSentHeight * i);
                    $('.view-invites-sent-scroll').css("height", invitesSentHeight * i);
                }
            }
        } else {
            $('.view-invites-sent').css("height", invitesSentHeight * 5);
            $('.view-invites-sent-scroll').css("height", invitesSentHeight * 5);
            bounceDownArrow();
        }
    }

    if ($('.view-invites-received').length) {

        var numInvitesRecd = $('.view-invites-received .artist-invite').length;
        var invitesRecdHeight;
        var invitesRecdWidth;

        if ($('.view-invites-received').is(':visible')) {
            invitesRecdHeight = $('.view-invites-received .artist-invite').outerHeight(true);
            invitesRecdWidth = $('.view-invites-received').outerWidth(true);
        } else {
            invitesRecdHeight = $('.view-invites-sent .artist-invite').outerHeight(true);
            invitesRecdWidth = $('.view-invites-sent').outerWidth(true);
        }
        $('.view-invites-received-scroll').css("width", invitesRecdWidth + 18);
        if (numInvitesRecd <= 5) {
            for (i = 1; i < 5; i++) {
                if (numInvitesSent === i) {
                    $('.view-invites-received').css("height", invitesRecdHeight * i);
                    $('.view-invites-received-scroll').css("height", invitesRecdHeight * i);
                }
            }
        } else {
            $('.view-invites-received').css("height", invitesRecdHeight * 5);
            $('.view-invites-received-scroll').css("height", invitesRecdHeight * 5);
            bounceDownArrowRecd();
        }
    }
};
/************ bounce downwards arrow to indicate scrolling possible ******************************/
var bounceDownArrow = function() {
    if ($('.down-arrow').length) {
        $('.events-wrapper').hover(
            function() {
                $('.down-arrow').addClass("active");
            },
            function() {
                $('.down-arrow').removeClass("active");
            }
        );
        $('.follows-wrapper').hover(
            function() {
                $('.down-arrow').addClass("active");
            },
            function() {
                $('.down-arrow').removeClass("active");
            }
        );
        $('.galleries-wrapper').hover(
            function() {
                $('.down-arrow').addClass("active");
            },
            function() {
                $('.down-arrow').removeClass("active");
            }
        );
        $('.view-invites-sent').hover(
            function() {
                $('.down-arrow').addClass("active");
            },
            function() {
                $('.down-arrow').removeClass("active");
            }
        );
        $('.product-cat-wrapper').hover(
            function() {
                $('.down-arrow').addClass("active");
            },
            function() {
                $('.down-arrow').removeClass("active");
            }
        );
        if ($(window).width() < 1000) {
            $('.down-arrow').addClass("active");
        } else {
            $('.down-arrow').removeClass("active");
        }
    }
};
/************ for invites sent ******************************/
var bounceDownArrowSent = function() {
    $('.view-invites-sent').hover(
        function() {
            $('.down-arrow.sent-arrow').addClass("active");
        },
        function() {
            $('.down-arrow.sent-arrow').removeClass("active");
        }
    );
};
/************ for invites received ******************************/
var bounceDownArrowRecd = function() {
    $('.view-invites-received').hover(
        function() {
            $('.down-arrow.recd-arrow').addClass("active");
        },
        function() {
            $('.down-arrow.recd-arrow').removeClass("active");
        }
    );
};
var addImagesSelect = function() {
    if ($('#select-artists').length) {
        $("#select-artists").msDropDown();
    }
};
var lightenYourPrice = function() {
    $(".your-price").keyup(function() {
        if ($(this).val() !== '') {
            $(this).css('background-color', '#fff');
        } else {
            $(this).css('background-color', '#2d2d2d');
        }
    });
};
var checkReqPrice = function() {
    $('#req-price').click(function() {
        var cb1 = $('#req-price').is(':checked');
        $('#prod-your-price').prop('disabled', (cb1));
    });
};
var yearSpinner = function() {
    if ($('#product-year').length) {
        var spinner = $("#product-year").spinner({
            min: new Date().getFullYear() - 100,
            max: new Date().getFullYear()
        });
    }
};
var showMyProdBtns = function() {
    $(".product-img2.my-prod-img").mouseover(function() {
        $(this).parent().find(".my-product-buttons-wrapper").show();
    });
    $(".product-img2.my-prod-img").mouseout(function() {
        $(this).parent().find(".my-product-buttons-wrapper").hide();
    });
};
var showProductDesc = function(e) {
    var id = e.id;
    id = id.replace("productbox_", "");
    $(".my-product-description-box").each(function() {
        if ($(this).attr("id") != $("#descriptionbox_" + id)) {
            $(this).hide();
        }
    });
    $("#descriptionbox_" + id).parent().show();
    $("#descriptionbox_" + id).show();

    if ($(window).width() < 1000) {
        $('body').css('overflow-y', 'hidden');
    }
};
var hideProductDesc = function(e) {
    $(e).parent().hide();
    $(e).parent().parent().hide();
    $('body').css('overflow', 'auto');
    if ($(window).width() < 1000) {
        $('body').css('overflow-y', 'visible');
    }
};
var showEditRelatedItemMsg = function() {
    if ($('.product-edit-btn').length) {
        $('.product-edit-btn').mouseover(function() {
            $(this).parent().parent().parent().find(".edit-notification").show();
        });
        $('.product-edit-btn').mouseout(function() {
            $(this).parent().parent().parent().find(".edit-notification").hide();
        });
    }
};
var showDeleteItemMsg = function() {
    if ($('.product-delete-btn').length) {
        $('.product-delete-btn').mouseover(function() {
            $(this).parent().parent().parent().find(".delete-notification").show();
        });
        $('.product-delete-btn').mouseout(function() {
            $(this).parent().parent().parent().find(".delete-notification").hide();
        });
    }
};
var hoverOnProductButtons = function() {
    $('.my-product-buttons-wrapper').mouseover(function() {
        $(this).parent().attr('onclick', '');
    });
    $('.my-product-buttons-wrapper').mouseout(function() {
        $(this).parent().attr('onclick', 'showProductDesc(this)');
    });
};
var deleteProduct = function(e) {
    $("#product-delete-popup").show();
    $("#delete_prod_id").val($(e).parent().parent().attr("id"));
    $("#prid").val($(e).parent().parent().attr("data-uid"));
};
var hideDeleteProduct = function() {
    $("#product-delete-popup").hide();
    $("#delete_prod_id").val("");
    $("#prid").val("");
};
var confirmDeleteProduct = function() {
    $("#product-delete-popup").hide();
    $("#product-delete-confirmation-popup").show();

};
var hideDeleteConfirm = function(e) {
    $("#product-delete-confirmation-popup").hide();
    var p_box = $("#delete_prod_id").val();
    $('#' + p_box).attr("onclick", "");
    $('#' + p_box).html('<div class="overlay_product_delete"><h5>Pending deletion</h5></div>');
    $('#' + p_box).css('cursor', 'auto');
    if ($('#' + p_box).parent().is("a")) {
        $('#' + p_box).unwrap("a");
    }
    $("#delete_prod_id").val("");
};
var previewBackProduct = function(e) {
    var bg_img = $(e).css("background");
    var lg_bg = $(e).parent().find('.pdb-main-img').css("background");
    $(e).css("background", lg_bg);
    $('#bgPreviewImgVal').val(bg_img);
    $(e).parent().find('.pdb-main-img').css("background", $('#bgPreviewImgVal').val());

};
var printDimensions = function() {
    if ($(".art-print-product-home").length) {
        $(".art-print-product-home").each(function(index) {
            if (this.width < this.height) {
                $(this).css({
                    "width": "auto",
                    "height": "65%"
                });
            } else if (this.width > this.height) {
                $(this).css({
                    "width": "65%",
                    "height": "auto"
                });
            } else if (this.width === this.height) {
                $(this).css({
                    "width": "auto",
                    "height": "65%"
                });
            }
            $(this).css("display", "inline-block");
        });
    }
};
// ------------ prepare my products for mobile display
var checkDeviceForMyProducts = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if ($(".my-prod-img").length) {
            toggleProductLinks("off");
        }
    }
};
// ------------- show / hide links etc for my products on resize and for mobile display
var toggleProductLinks = function(e) {
    if (e == "on") {
        $(".my-prod-img").each(function(index) {
            $(this).find(".product-edit-btn").show();
            $(this).find(".my-product-buttons-wrapper").hide();
            $(this).mouseout(function() {
                $(this).parent().find(".my-product-buttons-wrapper").hide();
            });
        });
    } else if (e == "off") {
        $(".my-prod-img").each(function(index) {

            $(this).find(".product-edit-btn").hide();
            $(this).find(".my-product-buttons-wrapper").show();
            $(this).off('mouseout');
        });
    }

};
/************ set up masonry layout for artworks featured in original art category ******************************/
var masonryCatOgArtWorks = function() {
    if ($('.cat-ogart-works-wrapper').length) {
        $('.cat-ogart-works-wrapper').masonry({
            // options
            itemSelector: '.cat-ogart-work-container',
            columnWidth: '.cat-ogart-work-container',
            gutter: 25
        });
    }
};
// ---------- this method is used by original art category
var showCategoryProdButtons = function() {
    $(".cat-ogart-work-container .product-img").mouseover(function() {
        $(this).find(".my-product-cat-buttons-wrapper").show();
    });
    $(".cat-ogart-work-container .product-img").mouseout(function() {
        $(this).find(".my-product-cat-buttons-wrapper").hide();
    });
};
// ---------- this method is used by original art category
var showProdCatButtonsMobile = function() {
    if ($(".cat-ogart-work-container").length) {
        if ($(window).width() <= 1000) {
            $(".cat-ogart-work-container").find(".my-product-cat-buttons-wrapper").show();
            $(".cat-ogart-work-container .product-img").off('mouseout');
        } else if ($(window).width() > 1000) {
            $(".cat-ogart-work-container").find(".my-product-cat-buttons-wrapper").hide();
            $(".cat-ogart-work-container .product-img").mouseout(function() {
                $(".cat-ogart-work-container .product-img").find(".my-product-cat-buttons-wrapper").hide();
            });
        }
    }
};
var showOgArtFilterMobile = function() {
    if ($('.toggleFilterPanel').length) {
        $('.toggleFilterPanel').on('click', function(e) {
            $('#og_art_filter_wrapper').slideDown("slow", function() {
                $('.toggleFilterPanel').hide();
                $('.toggleFilterPanelUp').show();
            });
        });
    }
};
var hideOgArtFilterMobile = function() {
    if ($('.toggleFilterPanel').length) {
        $('.toggleFilterPanelUp').on('click', function(e) {
            $('#og_art_filter_wrapper').slideUp("slow", function() {
                $('.toggleFilterPanel').show();
                $('.toggleFilterPanelUp').hide();
            });
        });
    }
};
var addProductToWishlist = function(e) {
    $(e).parent().parent().find('.wishlist-msg').fadeIn().delay(2000).fadeOut();
};
var addProductToCart = function(e) {
    $(e).parent().parent().find('.cart-msg').fadeIn().delay(2000).fadeOut();
};
// ---------- this method is used by all categories except original art category
var showCategoryProdButtonsAll = function() {
    if ($(".product-cat-wrapper").length) {
        $(".column-3.box-product3").mouseover(function() {
            $(this).find(".my-product-cat-buttons-wrapper").show();
        });
        $(".column-3.box-product3").mouseout(function() {
            $(this).find(".my-product-cat-buttons-wrapper").hide();
        });
    }
};
// ---------- this method is used by all categories except original art category
var showProdCatButtonsMobileAll = function() {
    if ($(".product-cat-wrapper").length) {
        if ($(window).width() <= 1000) {
            $(".column-3.box-product3").find(".my-product-cat-buttons-wrapper").show();
            $(".column-3.box-product3").off('mouseout');
        } else if ($(window).width() > 1000) {
            $(".column-3.box-product3").find(".my-product-cat-buttons-wrapper").hide();
            $(".column-3.box-product3").mouseout(function() {
                $(".column-3.box-product3").find(".my-product-cat-buttons-wrapper").hide();
            });
        }
    }
};
var productDimensions = function() {
    if ($(".cat-product-img").length) {
        $(".cat-product-img").each(function(index) {
            if (this.width < this.height) {
                $(this).css({
                    "width": "auto",
                    "height": "65%"
                });
            } else if (this.width > this.height) {
                $(this).css({
                    "width": "65%",
                    "height": "auto"
                });
            } else if (this.width === this.height) {
                $(this).css({
                    "width": "auto",
                    "height": "65%"
                });
            }
            if ($(this).attr("id") !== "print-main-small") {
              $(this).css("display", "inline-block");
            }
        });
    }
};
var addProductToWishlistIndividual = function(e) {
    $(e).parent().parent().find('.wishlist-msg-individual').fadeIn().delay(2000).fadeOut();
};
var addProductToCartIndividual = function(e) {
    $(e).parent().parent().find('.cart-msg-individual').fadeIn().delay(2000).fadeOut();
};
var showPriceEnq = function() {
    $("#price-enquiry-panel").show();
    if ($(window).width() < 1000) {
        $('body').css('overflow-y', 'hidden');
    }
};
var closePriceEnq = function() {
    $("#price-enquiry-panel").hide();
    $("#enq_nature").val("");
    $("#enq_msg").val("");
    $("#enq_mail").val("");
    $('body').css('overflow', 'auto');
    if ($(window).width() < 1000) {
        $('body').css('overflow-y', 'visible');
    }
};
var openVideoPanel = function() {
    $("#video-panel").show();
    if ($(window).width() < 1000) {
        $('body').css('overflow-y', 'hidden');
    }
};
var closeVideoPanel = function() {
    $("#video-panel").hide();
    var video = $("#og-art-vid").attr("src");
    $("#og-art-vid").attr("src", "");
    $("#og-art-vid").attr("src", video);
    $('body').css('overflow', 'auto');
    if ($(window).width() < 1000) {
        $('body').css('overflow-y', 'visible');
    }
};
var quantitySpinner = function() {
    if ($('#product-quantity').length) {
        var spinner = $("#product-quantity").spinner({
            min: 1,
            max: 100000
        });
    }
    if ($('#prod-shipping-time').length) {
        var spinner2 = $("#prod-shipping-time").spinner({
            min: 1,
            max: 1000
        });
    }
    if ($('#product-quantity-cards').length) {
        var spinner = $("#product-quantity-cards").spinner({
            min: 1,
            max: 2
        });
    }
};
var previewBackProductIndividual = function(e) {
    var imgsrc = $(e).find(".cat-product-img").attr("src");
    var imgsrc2 = $(".individual-main-img").find(".cat-product-img").attr("src");
    $(e).find(".cat-product-img").attr("src", imgsrc2);
    $('#bgPreviewImgVal').val(imgsrc);
    $(".individual-main-img").find(".cat-product-img").attr("src", imgsrc);
    productDimensions();
};

var previewBackGreetingIndividual = function(e) {
    var portrait = false;
    var portrait2 = false;
    // check orientation of thumbnail pic
    if ($(e).find(".cat-product-img").width() <  $(e).find(".cat-product-img").height()) {
      portrait = true;
    }
    // check orientation of main pic
    if ($("#greeting").find(".cat-product-img").width() <  $("#greeting").find(".cat-product-img").height()) {
      portrait2 = true;
    }
    var imgsrc = $(e).find(".cat-product-img").attr("src");
    var imgsrc2 = $("#greeting").find(".cat-product-img").attr("src");
    $(e).find(".cat-product-img").attr("src", imgsrc2);
    $('#bgPreviewImgVal').val(imgsrc);
    $("#greeting").find(".cat-product-img").attr("src", imgsrc);

    // adjust bg of main pic
    if (portrait === true) {
      $("#greeting").attr("style", 'background: url("images/greetingcard-back-portrait-blank.png") no-repeat center 42% / auto 68%, linear-gradient( #eeebeb, #f9f9f9); position: relative;');
    }
    else if (portrait === false) {
      $("#greeting").attr("style", 'background: url("images/greetingcard-back-blank.png") no-repeat 55% 49% / 68.5% auto, linear-gradient( #eeebeb, #f9f9f9); position: relative;');
    }
    // adjust bg of thumbnail pic
    if (portrait2 === false) {
      $(e).attr("style", 'background: url("images/greetingcard-back-blank.png") no-repeat 55% 49% / 68.5% auto, linear-gradient( #eeebeb, #f9f9f9); position: relative;');
    }
    else if (portrait2 === true) {
      $(e).attr("style", 'background: url("images/greetingcard-back-portrait-blank.png") no-repeat center 42% / auto 68%, linear-gradient( #eeebeb, #f9f9f9); position: relative;');
    }
    //resize images
    productDimensions();
};

var showZoomedProduct = function() {
    $("#zoomed-img").show();
    if ($(window).width() < 1000) {
        $('body').css('overflow-y', 'hidden');
    }
};

var closeZoomedProduct = function() {
    $("#zoomed-img").hide();
    $('body').css('overflow', 'auto');
    if ($(window).width() < 1000) {
        $('body').css('overflow-y', 'visible');
    }
};

// ---------- this method is used by individual art print and original art for zooming images
var pswpElement = $('.pswp')[0];
var openLightBox = function() {
    console.log("aa");
    var $pic = $('#full-size-img'),
        getItems = function() {
            var items = [];
            $pic.each(function() {
                var $href = $(this).attr('src'),
                    $width = $(this).width(),
                    $height = $(this).height();
                var item = {
                    src: $href,
                    w: $width,
                    h: $height
                };
                items.push(item);
            });
            return items;
        };
    var items = getItems();
    var options = {
        index: 1,
        bgOpacity: 0.7,
        shareEl: false,
        fullscreenEl: false,
        showHideOpacity: true
    };

    var lightBox = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    lightBox.init();
    return lightBox;
};

var loadBook = function() {

    if ($('.flipbook').length) {

        $('.flipbook').turn({
            // Width

            width: 800,

            // Height

            height: 566,

            // Elevation

            elevation: 0,

            // Enable gradients

            gradients: true,

            // Auto center this flipbook

            autoCenter: true

        });

    }
};

var openBookPreview = function() {
    $('#book-wrapper').show();
};

var closeBookPreview = function() {
    $('#book-wrapper').hide();
};
var deleteReferral = function() {
    $('#referral-delete-popup').show();
};
var hideDeleteReferral = function() {
    $('#referral-delete-popup').hide();
};

var showGmp = function() {
    $('#gm-list').show();
};
var closeGmp = function() {
    $('#gm-list').hide();
};

var showRdem = function() {
    $("#redmptn").slideDown();
};
var sendReferralInvite = function() {
    $('.ref-inv-msg').fadeIn().delay(2000).fadeOut();
};
/************ date and time pickers for referrals ******************************/
var createDatePickersRefs = function() {

    var year = (new Date()).getFullYear();
    var month = (new Date()).getMonth();
    var day = (new Date()).getDate();

    if ($('#start-date-ref').length) {
        $("#start-date-ref").datepicker({
            minDate: new Date(year, month, day),
            maxDate: new Date(year, 11, 31),
            onSelect: function(selectedDate) {
                var newDate = new Date(selectedDate);
                newDate.setDate(newDate.getDate() + 30);
                $("#end-date-ref").datepicker({
                    minDate: selectedDate,
                    maxDate: newDate,
                    onSelect: function(selectedDate) {

                        $("#get-cupon").prop("disabled", false);
                    }
                });
            }
        });
    }
};

var applyRedemption = function() {
    $("#rdmptAppd").slideDown();
};

var quantitySpinnerCart = function() {
    if ($('.cart-product-quantity').length) {
        $('[id^="cpq_"]').each(function(index) {
            var spinner = $(this).spinner({
                min: 1,
                max: 100000,
                stop: function(event, ui) {
                    //addQuantity(this);
                }
            });
        });
    }
};
var quantitySpinnerCartCards = function() {
    if ($('.cart-product-quantity-cards').length) {
        $('[id^="cpqc_"]').each(function(index) {
            var spinner = $(this).spinner({
                min: 1,
                max: 2,
                stop: function(event, ui) {
                    //addQuantity(this);
                }
            });
        });
    }
};
var initArtPrintSize = function() {
    if ($('#print-main').length) {
        $('#init-img-width').val($('#print-main').css("width"));
        $('#init-img-height').val($('#print-main').css("height"));
    }
};
var paper_selected = false;
var m_left = "";
var printPaper = function(e) {
  if ($(window).width() >= 1000) {
    if (paper_selected === false) {
      if ($(window).width() > 1600) {
        $('#print-main').animate({
          width: "173px",
          height: "260px",
          marginLeft: 0 - (173 / 2)
        });
      } else if ($(window).width() >= 1000 && $(window).width() <= 1600) {
        $('#print-main').animate({
          width: "140px",
          height: "211px",
          marginLeft: 0 - (140 / 2)
        });
      }
      paper_selected = true;
      setTimeout(function() {
        m_left = $("#print-main").css("margin-left");
      }, 500);
    }
  }

  if (e.value === "Canvas print") {
    if ($(window).width() >= 1000) {
      $('#indv-print-container').css("background", "url('images/print-view.png') no-repeat center center / 100% 100%");
      $('#print-main').addClass("print-medium-selected");
      $('#print-main').addClass("print-medium-canvas");
    }
    $('#print-main').css("border", "none");
    $('#print-size').prop('disabled', false);
    $('#print-frame').prop('disabled', true);
    $('#print-frame').val("select");


  } else if (e.value === "Matt poster paper") {
    if ($(window).width() >= 1000) {
      $('#indv-print-container').css("background", "url('images/print-view.png') no-repeat center center / 100% 100%");
      $('#print-main').addClass("print-medium-selected");
    }
    $('#print-size').prop('disabled', false);
    $('#print-frame').prop('disabled', false);
    $('#print-main').removeClass("print-medium-canvas");
  } else if (e.value === "Somerset photo paper") {
    if ($(window).width() >= 1000) {
      $('#indv-print-container').css("background", "url('images/print-view.png') no-repeat center center / 100% 100%");
      $('#print-main').addClass("print-medium-selected");
    }
    $('#print-size').prop('disabled', false);
    $('#print-frame').prop('disabled', false);
    $('#print-main').removeClass("print-medium-canvas");
  } else if (e.value === "select") {
    if ($(window).width() >= 1000) {
      $('#indv-print-container').css("background", "linear-gradient( #eeebeb, #f9f9f9)");
      $('#print-main').animate({
        width: $('#init-img-width').val(),
        height: $('#init-img-height').val()
      });
      $('#print-main').removeClass("print-medium-selected");
      $('#print-main').removeClass("print-medium-canvas");
      $('#print-main').css("margin-left", 0);
      $('#print-main').css("border", "none");
    }
    $('#print-size').prop('disabled', true);
    $('#print-frame').prop('disabled', true);
    $('#print-frame').val("select");
    $('#print-size').val("24x36");
    paper_selected = false;
  }
};

var print_size = "";

var printSize = function(e) {
    if ($(window).width() >= 1000) {

      if ($(window).width() > 1600) {

          if (e.value === "select") {
              $('#print-main').animate({
                  width: "173px",
                  height: "260px",
                  //marginLeft: 0 - (173/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "6x4") {
              $('#print-main').animate({
                  width: "44px",
                  height: "29px",
                  //marginLeft: 0 - (51/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "7x5") {
              $('#print-main').animate({
                  width: "51px",
                  height: "36px",
                  //marginLeft: 0 - (51/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "a5") {
              $('#print-main').animate({
                  width: "42px",
                  height: "60px",
                  //marginLeft: 0 - (42/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "8x8") {
              $('#print-main').animate({
                  width: "58px",
                  height: "58px",
                  //marginLeft: 0 - (58/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "6x12") {
              $('#print-main').animate({
                  width: "44px",
                  height: "87px",
                  //marginLeft: 0 - (44/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "10x8") {
              $('#print-main').animate({
                  width: "72px",
                  height: "58px",
                  //marginLeft: 0 - (72/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "12x8") {
              $('#print-main').animate({
                  width: "87px",
                  height: "58px",
                  //marginLeft: 0 - (87/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "a4") {
              $('#print-main').animate({
                  width: "60px",
                  height: "85px",
                  //marginLeft: 0 - (60/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "6x18") {
              $('#print-main').animate({
                  width: "44px",
                  height: "130px",
                  //marginLeft: 0 - (44/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "8x16") {
              $('#print-main').animate({
                  width: "58px",
                  height: "116px",
                  //marginLeft: 0 - (58/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "12x12") {
              $('#print-main').animate({
                  width: "87px",
                  height: "87px",
                  //      //marginLeft: 0 - (87/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "14x11") {
              $('#print-main').animate({
                  width: "101px",
                  height: "80px",
                  //      //marginLeft: 0 - (101/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "8x24") {
              $('#print-main').animate({
                  width: "58px",
                  height: "173px",
                  //    //marginLeft: 0 - (58/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "16x12") {
              $('#print-main').animate({
                  width: "116px",
                  height: "87px",
                  //    //marginLeft: 0 - (116/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "a3") {
              $('#print-main').animate({
                  width: "85px",
                  height: "120px",
                  //    //marginLeft: 0 - (85/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "16x16") {
              $('#print-main').animate({
                  width: "116px",
                  height: "116px",
                  //    //marginLeft: 0 - (116/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "12x24") {
              $('#print-main').animate({
                  width: "87px",
                  height: "173px",
                  //    //marginLeft: 0 - (87/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "20x16") {
              $('#print-main').animate({
                  width: "144px",
                  height: "116px",
                  //    //marginLeft: 0 - (144/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "a2") {
              $('#print-main').animate({
                  width: "120px",
                  height: "169px",
                  //    //marginLeft: 0 - (120/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "24x16") {
              $('#print-main').animate({
                  width: "173px",
                  height: "116px",
                  //    //marginLeft: 0 - (173/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "20x20") {
              $('#print-main').animate({
                  width: "144px",
                  height: "144px",
                  //    //marginLeft: 0 - (144/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "12x36") {
              $('#print-main').animate({
                  width: "87px",
                  height: "173px",
                  //    //marginLeft: 0 - (87/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "poster") {
              $('#print-main').animate({
                  width: "199px",
                  height: "142px",
                  //  //marginLeft: 0 - (199/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "20x30") {
              $('#print-main').animate({
                  width: "144px",
                  height: "216px",
                  //marginLeft: 0 - ($('#print-main').outerWidth()/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "a1") {
              $('#print-main').animate({
                  width: "169px",
                  height: "238px",
                  //marginLeft: 0 - ($('#print-main').outerWidth()/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });
          } else if (e.value === "24x36") {
              $('#print-main').animate({
                  width: "173px",
                  height: "260px",
                  //marginLeft: 0 - ($('#print-main').outerWidth()/2)
              }, function() {
                  $('#print-main').animate({
                      marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                  }, 200);
              });

          }
      }

      else if ($(window).width() >= 1000 && $(window).width() <= 1600) {

            if (e.value === "select") {
                $('#print-main').animate({
                    width: "140px",
                    height: "211px",
                    //marginLeft: 0 - (173/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "6x4") {
                $('#print-main').animate({
                    width: "34px",
                    height: "24px",
                    //marginLeft: 0 - (51/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "7x5") {
                $('#print-main').animate({
                    width: "41px",
                    height: "29px",
                    //marginLeft: 0 - (51/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "a5") {
                $('#print-main').animate({
                    width: "34px",
                    height: "49px",
                    //marginLeft: 0 - (42/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "8x8") {
                $('#print-main').animate({
                    width: "47px",
                    height: "47px",
                    //marginLeft: 0 - (58/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "6x12") {
                $('#print-main').animate({
                    width: "35px",
                    height: "70px",
                    //marginLeft: 0 - (44/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "10x8") {
                $('#print-main').animate({
                    width: "58px",
                    height: "47px",
                    //marginLeft: 0 - (72/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "12x8") {
                $('#print-main').animate({
                    width: "70px",
                    height: "47px",
                    //marginLeft: 0 - (87/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "a4") {
                $('#print-main').animate({
                    width: "49px",
                    height: "69px",
                    //marginLeft: 0 - (60/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "6x18") {
                $('#print-main').animate({
                    width: "36px",
                    height: "105px",
                    //marginLeft: 0 - (44/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "8x16") {
                $('#print-main').animate({
                    width: "47px",
                    height: "94px",
                    //marginLeft: 0 - (58/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "12x12") {
                $('#print-main').animate({
                    width: "70px",
                    height: "70px",
                    //      //marginLeft: 0 - (87/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "14x11") {
                $('#print-main').animate({
                    width: "82px",
                    height: "65px",
                    //      //marginLeft: 0 - (101/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "8x24") {
                $('#print-main').animate({
                    width: "47px",
                    height: "140px",
                    //    //marginLeft: 0 - (58/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "16x12") {
                $('#print-main').animate({
                    width: "94px",
                    height: "70px",
                    //    //marginLeft: 0 - (116/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "a3") {
                $('#print-main').animate({
                    width: "69px",
                    height: "97px",
                    //    //marginLeft: 0 - (85/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "16x16") {
                $('#print-main').animate({
                    width: "94px",
                    height: "94px",
                    //    //marginLeft: 0 - (116/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "12x24") {
                $('#print-main').animate({
                    width: "70px",
                    height: "140px",
                    //    //marginLeft: 0 - (87/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "20x16") {
                $('#print-main').animate({
                    width: "116px",
                    height: "94px",
                    //    //marginLeft: 0 - (144/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "a2") {
                $('#print-main').animate({
                    width: "97px",
                    height: "137px",
                    //    //marginLeft: 0 - (120/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "24x16") {
                $('#print-main').animate({
                    width: "140px",
                    height: "94px",
                    //    //marginLeft: 0 - (173/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "20x20") {
                $('#print-main').animate({
                    width: "116px",
                    height: "116px",
                    //    //marginLeft: 0 - (144/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "12x36") {
                $('#print-main').animate({
                    width: "70px",
                    height: "140px",
                    //    //marginLeft: 0 - (87/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "poster") {
                $('#print-main').animate({
                    width: "161px",
                    height: "115px",
                    //  //marginLeft: 0 - (199/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "20x30") {
                $('#print-main').animate({
                    width: "116px",
                    height: "175px",
                    //marginLeft: 0 - ($('#print-main').outerWidth()/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "a1") {
                $('#print-main').animate({
                    width: "137px",
                    height: "192px",
                    //marginLeft: 0 - ($('#print-main').outerWidth()/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });
            } else if (e.value === "24x36") {
                $('#print-main').animate({
                    width: "140px",
                    height: "211px",
                    //marginLeft: 0 - ($('#print-main').outerWidth()/2)
                }, function() {
                    $('#print-main').animate({
                        marginLeft: 0 - ($('#print-main').outerWidth() / 2)
                    }, 200);
                });

            }
        }
    }
};

var attachPrintFrame = function(e) {

    if ($(window).width() >= 1000) {
        var wideFrame = false;
        if (e.value === "select") {
            $('#print-main').css("border", "none");
            $('#print-main').css("padding", "0");
            $('#print-main').css("margin-left", m_left);
        } else if (e.value === "black1") {
            $('#print-main').css("border", "7px solid #000");
        } else if (e.value === "black2") {
            $('#print-main').css("border", "10px solid #000");
        } else if (e.value === "oak1") {
            $('#print-main').css("border-style", "solid");
            $('#print-main').css("border-width", "7px");
            $('#print-main').css("border-image", 'url("images/pattern/35oak-large-img.jpg") 7 round');
        } else if (e.value === "oak2") {
            $('#print-main').css("border-style", "solid");
            $('#print-main').css("border-width", "10px");
            $('#print-main').css("border-image", 'url("images/pattern/35oak-large-img.jpg") 10 round');
            //$('#print-main').css("margin-left", m_left2 - 10);
        } else if (e.value === "b-black1") {
            $('#print-main').css("border-style", "solid");
            $('#print-main').css("border-width", "7px");
            $('#print-main').css("border-image", 'url("images/pattern/35black-large-img.jpg") 7 round');
            //$('#print-main').css("margin-left", m_left2 - 7);
        } else if (e.value === "b-black2") {
            $('#print-main').css("border-style", "solid");
            $('#print-main').css("border-width", "10px");
            $('#print-main').css("border-image", 'url("images/pattern/35black-large-img.jpg") 10 round');
            //$('#print-main').css("margin-left", m_left2 - 10);
        } else if (e.value === "grey1") {
            $('#print-main').css("border-style", "solid");
            $('#print-main').css("border-width", "7px");
            $('#print-main').css("border-image", 'url("images/pattern/35grey-large-img.jpg") 7 round');
            //$('#print-main').css("margin-left", m_left2 - 7);
        } else if (e.value === "grey2") {
            $('#print-main').css("border-style", "solid");
            $('#print-main').css("border-width", "10px");
            $('#print-main').css("border-image", 'url("images/pattern/35grey-large-img.jpg") 10 round');
            //$('#print-main').css("margin-left", m_left2 - 10);
        } else if (e.value === "p-grey1") {
            $('#print-main').css("border-style", "solid");
            $('#print-main').css("border-width", "7px");
            $('#print-main').css("border-image", 'url("images/pattern/35palegrey-large-img.jpg") 7 round');
            //$('#print-main').css("margin-left", m_left2 - 7);
        } else if (e.value === "p-grey2") {
            $('#print-main').css("border-style", "solid");
            $('#print-main').css("border-width", "10px");
            $('#print-main').css("border-image", 'url("images/pattern/35palegrey-large-img.jpg") 10 round');
            //$('#print-main').css("margin-left", m_left2 - 10);
        } else if (e.value === "white1") {
            $('#print-main').css("border-style", "solid");
            $('#print-main').css("border-width", "7px");
            $('#print-main').css("border-image", 'url("images/pattern/35white-large-img.jpg") 7 round');
            //$('#print-main').css("margin-left", m_left2 - 7);
        } else if (e.value === "white2") {
            $('#print-main').css("border-style", "solid");
            $('#print-main').css("border-width", "10px");
            $('#print-main').css("border-image", 'url("images/pattern/35white-large-img.jpg") 10 round');
            //$('#print-main').css("margin-left", m_left2 - 10);
        } else if (e.value === "ivory1") {
            $('#print-main').css("border-style", "solid");
            $('#print-main').css("border-width", "7px");
            $('#print-main').css("border-image", 'url("images/pattern/35ivory-large-img.jpg") 7 round');
            //$('#print-main').css("margin-left", m_left2 - 7);
        } else if (e.value === "ivory2") {
            $('#print-main').css("border-style", "solid");
            $('#print-main').css("border-width", "10px");
            $('#print-main').css("border-image", 'url("images/pattern/35ivory-large-img.jpg") 10 round');
            //$('#print-main').css("margin-left", m_left2 - 10);
        } else if (e.value === "walnut1") {
            $('#print-main').css("border-style", "solid");
            $('#print-main').css("border-width", "7px");
            $('#print-main').css("border-image", 'url("images/pattern/35walnut-large-img.jpg") 7 round');
            //$('#print-main').css("margin-left", m_left2 - 7);
        } else if (e.value === "walnut2") {
            $('#print-main').css("border-style", "solid");
            $('#print-main').css("border-width", "10px");
            $('#print-main').css("border-image", 'url("images/pattern/35walnut-large-img.jpg") 10 round');
            //$('#print-main').css("margin-left", m_left2 - 10);
        }
        $('#print-main').animate({
            marginLeft: 0 - ($('#print-main').outerWidth() / 2)
        }, 200);
    }
};

var resizeArtPrintPage = function() {
  if ($(".print-medium-selected").length) {
    if ($(window).width() < 1000) {
      $('#indv-print-container').css("background", "linear-gradient( #eeebeb, #f9f9f9)");
      $('#print-main').hide();
      $('#print-main-small').show();
    }
    else if ($(window).width() >= 1000) {
      $('#indv-print-container').css("background", "url('images/print-view.png') no-repeat center center / 100% 100%");
      $('#print-main').show();
      $('#print-main-small').hide();
    }
  }
};

var removeWLItem = function(e) {
  $(e).closest ('tr').remove();

  if (!$('#wishlist-table tr').length) {
    $('#empty-wl').show();
    $('.cart-items thead').hide();
  }
};

// ---------- this method is used by product search
var showSearchWl = function() {
    if ($(".view-products-search").length) {
        $(".column-4.box-product3").mouseover(function() {
            $(this).find(".my-product-cat-buttons-wrapper").show();
        });
        $(".column-4.box-product3").mouseout(function() {
            $(this).find(".my-product-cat-buttons-wrapper").hide();
        });
    }
};
// ---------- this method is used by product search
var showSearchWlMobile = function() {
    if ($(".view-products-search").length) {
        if ($(window).width() <= 1000) {
            $(".column-4.box-product3").find(".my-product-cat-buttons-wrapper").show();
            $(".column-4.box-product3").off('mouseout');
        } else if ($(window).width() > 1000) {
            $(".column-4.box-product3").find(".my-product-cat-buttons-wrapper").hide();
            $(".column-4.box-product3").mouseout(function() {
                $(".column-4.box-product3").find(".my-product-cat-buttons-wrapper").hide();
            });
        }
    }
};
var showSearchWlMsg = function() {
    if ($('.product-wishlist-btn').length) {
        $('.product-wishlist-btn').mouseover(function() {
            $(this).parent().parent().find(".edit-notification").show();
        });
        $('.product-wishlist-btn').mouseout(function() {
            $(this).parent().parent().find(".edit-notification").hide();
        });
    }
};
var ccSpinner = function() {
    if ($('#cc-year').length) {
        var spinner = $("#cc-year").spinner({
            min: new Date().getFullYear(),
            max: new Date().getFullYear() + 100
        });
    }
};
var changePayMethod = function() {
  $("input[name=pay-methods]").on( "change", function() {
    var pay_type = $(this).val();
    if (pay_type == "Credit card") {
      $('#pp-method').hide();
      $('#cc-method').show();
    }
    else if (pay_type == "PayPal") {
      $('#pp-method').show();
      $('#cc-method').hide();
    }
  });
};

var showSupInfo = function(e) {
    var id = e.id;
    id = id.replace("supp_", "");
    $(".supporter-box").each(function() {
        if ($(this).attr("id") != $("#suppbox_" + id)) {
            $(this).hide();
        }
    });
    $("#suppbox_" + id).parent().show();
    $("#suppbox_" + id).show();


};
var hideSuppBox = function(e) {
    $(e).parent().hide();
    $(e).parent().parent().hide();
    $('body').css('overflow', 'auto');
    if ($(window).width() < 1000) {
        $('body').css('overflow-y', 'visible');
    }
};

var changeSupportersView = function(e) {
	var view = document.getElementById("select-supporters-view").value;
	if (view === "Supporters" ) {

	  $('.view-follow-supporters').show();
      $('.view-follow-graphs').hide();
      calcViewFollowsHeight();
	}
	else if (view === "Graphs" ) {
	  $('.view-follow-graphs').show();
      $('.view-follow-supporters').hide();
      $('#world-map').vectorMap('get', 'mapObject').updateSize();

	}
};

var changeSuppTimeQuarter = function() {
	var qval = document.getElementById("graphsSuppTimeQ").value;
	if (qval === "Q1" ) {
	  $('#q1').show();
    $('#q2').hide();
    $('#q3').hide();
    $('#q4').hide();
	}
	else if (qval === "Q2" ) {
    $('#q1').hide();
    $('#q2').show();
    $('#q3').hide();
    $('#q4').hide();
	}
  else if (qval === "Q3" ) {
    $('#q1').hide();
    $('#q2').hide();
    $('#q3').show();
    $('#q4').hide();
	}
  else if (qval === "Q4" ) {
    $('#q1').hide();
    $('#q2').hide();
    $('#q3').hide();
    $('#q4').show();
	}
};

var changeSuppViewQuarter = function() {
	var qval = document.getElementById("suppViewsQ").value;
  if (qval === "Q1" ) {
	  $('#qv1').show();
    $('#qv2').hide();
    $('#qv3').hide();
    $('#qv4').hide();
	}
	else if (qval === "Q2" ) {
    $('#qv1').hide();
    $('#qv2').show();
    $('#qv3').hide();
    $('#qv4').hide();
	}
  else if (qval === "Q3" ) {
    $('#qv1').hide();
    $('#qv2').hide();
    $('#qv3').show();
    $('#qv4').hide();
	}
  else if (qval === "Q4" ) {
    $('#qv1').hide();
    $('#qv2').hide();
    $('#qv3').hide();
    $('#qv4').show();
	}
};

var changeSuppSpendQuarter = function() {
	var qval = document.getElementById("suppSpendQ").value;
  if (qval === "Q1" ) {
    $('#qs1').show();
    $('#qs2').hide();
    $('#qs3').hide();
    $('#qs4').hide();
	}
	else if (qval === "Q2" ) {
    $('#qs1').hide();
    $('#qs2').show();
    $('#qs3').hide();
    $('#qs4').hide();
	}
  else if (qval === "Q3" ) {
    $('#qs1').hide();
    $('#qs2').hide();
    $('#qs3').show();
    $('#qs4').hide();
	}
  else if (qval === "Q4" ) {
    $('#qs1').hide();
    $('#qs2').hide();
    $('#qs3').hide();
    $('#qs4').show();
	}
};

var countries = ["RU", "US", "AU", "NG", "ZA"];

var generateMap = function() {

  if ($('#world-map').length) {

  var cvalues = {};
  jQuery.each(countries, function(idx, value){
      cvalues[value] = "#e74c3c";
  })

  $('#world-map').vectorMap({map: 'world_mill', backgroundColor:  "#FFFFFF", zoomButtons : false, zoomOnScroll: false, regionStyle: {
    initial: {
      fill: 'white',
      "fill-opacity": 1,
      stroke: '#000',
      "stroke-width": 0.5,
      "stroke-opacity": 1
    },
    hover: {
      "fill-opacity": 1,
      cursor: 'pointer'
    },
    selected: {

    },
    selectedHover: {
    }
  },
  series: {
      regions: [{
          values: cvalues,
          attribute: 'fill'
    }]}});
  }
};

var colorSuppMap = function() {
  if ($('#world-map').length) {
    var map = $('#world-map').vectorMap('get', 'mapObject');
    var countryList = [];
    var cvalues = [];
    jQuery.each(countries, function(idx, value){
        countryList.push(map.getRegionName(value));
    });
    jQuery.each(countryList, function(idx, value){
      $( "#topCountryList" ).append( '<li><div class="countryDot"></div><p>' + value + '</p></li>' );
    });
  }
};



var showShipOptions = function(e) {
    var id = e.id;
    id = id.replace("shipbutt_", "");
    $(".shipmtd-box").each(function() {
        if ($(this).attr("id") != $("#shipbox_" + id)) {
            $(this).hide();
        }
    });
    $("#shipbox_" + id).parent().show();
    $("#shipbox_" + id).show();


};

var selectShipOption = function(e) {
	var id = e.id;
    id = id.replace("slcship_", "");
	
	var shipBtn = $("#shipbutt_" + id);
	shipBtn.parent().find('.selected-shipping').remove();
	var options = $(e).parent().parent().find("input[name*='ship']:checked");
	
	options.each(function(){   
		
		var valsplit = $(this).val().split(' - ');
		console.log(valsplit);
		shipBtn.parent().prepend('<p class="selected-shipping" style="float: left;"><b>' + valsplit[0] + '</b> - ' + valsplit[1] + '</p>');
		
     });
    shipBtn.html("Change");  
	shipBtn.removeClass("bfr-tgle");
	$(e).parent().parent().hide();
    $(e).parent().parent().parent().hide();
    $('body').css('overflow', 'auto');
    if ($(window).width() < 1000) {
        $('body').css('overflow-y', 'visible');
    }
}

var hideShipbox = function(e) {   
    $(e).parent().hide();
    $(e).parent().parent().hide();
    $('body').css('overflow', 'auto');
    if ($(window).width() < 1000) {
        $('body').css('overflow-y', 'visible');
    }
};

var editProdTitle = function(e) {

	$(e).parent().find(".product-title-edit").attr('contentEditable', true).focus();
	$(e).parent().find(".product-title-edit").css("padding-left", "10px");
	$(e).parent().find(".product-title-edit").css("padding-right", "10px");
	$(e).parent().find(".product-title-edit").css("cursor", "text");
	$(e).parent().find(".title-edit-save").css("display", "inline-block");
	$(e).hide();

};

var saveProdTitle = function(e) {

	$(e).parent().find(".product-title-edit").attr('contentEditable', false)
	$(e).parent().find(".product-title-edit").css("padding", "0");
	$(e).parent().find(".product-title-edit").css("cursor", "default");
	$(e).parent().find(".title-edit-btn").show();
	$(e).hide();

};

var editProdDesc = function(e) {

	$(e).parent().find(".product-about-text").attr('contentEditable', true).focus();
	$(e).parent().find(".product-about-text").css("padding", "10px");
	$(e).parent().find(".product-about-text").css("cursor", "text");
	$(e).parent().find(".desc-edit-save").css("display", "inline-block");
	$(e).hide();

};
var saveProdDesc = function(e) {

	$(e).parent().find(".product-about-text").attr('contentEditable', false)
	$(e).parent().find(".product-about-text").css("padding", "0");
	$(e).parent().find(".product-about-text").css("cursor", "default");
	$(e).parent().find(".desc-edit-btn").show();
	$(e).hide();

};

var pswpElement2 = $('.pswp')[0];
var openLightBoxMyInd = function(e) {
	console.log(pswpElement2);
    var $pic = $(e).parent().parent().find(".my-ind-oga-full"),
        getItems = function() {
            var items = [];
            $pic.each(function() {
                var $href = $(this).attr('src'),
                    $width = $(this).width(),
                    $height = $(this).height();
                var item = {
                    src: $href,
                    w: $width,
                    h: $height
                };
                items.push(item);
            });
            return items;
        };
		console.log($pic);
    var items = getItems();
    var options = {
        index: 1,
        bgOpacity: 0.7,
        shareEl: false,
        fullscreenEl: false,
        showHideOpacity: true
    };

    var lightBox = new PhotoSwipe(pswpElement2, PhotoSwipeUI_Default, items, options);
    lightBox.init();
    return lightBox;
	console.log("hee44546");
};
var reorderProduct = function(e) {
    $(e).parent().parent().find('.cart-msg').fadeIn().delay(2000).fadeOut();
};