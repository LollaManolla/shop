/* Image DPI */
var dpi = 300;

/********************** vars for postcards *********************/
/* Proportion of postcard print */
var containerProportion = 5;

/* Print container area height px */
var containerWidthPx = 2147;
/* Print container area height px */
var containerHeightPx = 1547;
/* Print container area proportion width px */
var containerWidthProp = containerWidthPx / containerProportion;
/* Print container area proportion height px */
var containerHeightProp = containerHeightPx / containerProportion;

/* Initialize global variables */
var imgWidth, imgHeight, imgWidthInch, imgHeightInch, imgWidthProp, imgHeightProp;
var sliderMax = 100,
    sliderPos = 0;
/* Page fully loaded */
$(function() {

    $("#printer_pcard1").width(containerWidthProp);
    $("#printer_pcard1").height(containerHeightProp);
    $("#printer_pcard1").css("margin-left", -(containerWidthProp/2)+ "px");

    $("#printer_pcard2").width(containerWidthProp);
    $("#printer_pcard2").height(containerHeightProp);
    $("#printer_pcard2").css("margin-left", -(containerWidthProp/2)+ "px");

    $("#printer_pcard3").width(containerWidthProp);
    $("#printer_pcard3").height(containerHeightProp);
    $("#printer_pcard3").css("margin-left", -(containerWidthProp/2)+ "px");

    $("#printer_pcard4").width(containerWidthProp);
    $("#printer_pcard4").height(containerHeightProp);
    $("#printer_pcard4").css("margin-left", -(containerWidthProp/2)+ "px");

    $("#orient-card1").val("landscape");
    $("#orient-card2").val("landscape");
    $("#orient-card3").val("landscape");
    $("#orient-card4").val("landscape");

    $("#postc").prop('checked', true);
    $("#greetc").prop('checked', false);

    $("#lso").prop('checked', true);
    $("#porto").prop('checked', false);

    mouseControlPostcard();


//-------switch between card design templates-------//
  $("input[name=cardtype]").on( "change", function() {
    var card_type = $(this).val();
    if (card_type == "postcard") {
      $("#controls-wrapper-pcard1").show();
      $("#outline-pcard1").show();
      $("#outline-pcard1").removeClass("portrait");
      $("#pcard-art > .add-product-buttons-wrapper").addClass("cards-button");
      $("#print-safe-area-pcard1").show();
      $("#print-safe-area-portrait-pcard1").hide();
      $("#print-back-pcard1").hide();
      $("#print-back-portrait-pcard1").hide();

      $( ".cards-icons-wrapper" ).not( document.getElementById( "controls-wrapper-pcard1") ).hide();
      $( ".postcard-outline" ).not( document.getElementById( "outline-pcard1") ).hide();
      $("#postcard-templates-wrapper").show();
      $("#greetingcard-templates-wrapper").hide();
      $('.bootstrap-tagsinput').find('span').remove();
      $("#controls-wrapper-pcard1 .postcard-landscape").addClass("active");
      $("#controls-wrapper-pcard1 .postcard-portrait").removeClass("active");
      clearGreetingcards();
      $("#orient-card1").val("landscape");
      $("#orient-card2").val("landscape");
      $("#orient-card3").val("landscape");
      $("#orient-card4").val("landscape");
    }
    else if (card_type == "greeting") {
      $("#controls-wrapper-gcard1").show();
      $("#outline-gcard1").show();
      $("#outline-gcard1").removeClass("portrait");
      $("#gcard-art > .add-product-buttons-wrapper").addClass("cards-button2");
      $("#print-safe-area-gcard1").show();
      $("#print-safe-area-portrait-gcard1").hide();
      $("#print-back-gcard1").hide();
      $("#print-back-portrait-gcard1").hide();

      $( ".cards-icons-wrapper" ).not( document.getElementById( "controls-wrapper-gcard1") ).hide();
      $( ".greetingcard-outline" ).not( document.getElementById( "outline-gcard1") ).hide();
      $("#postcard-templates-wrapper").hide();
      $("#greetingcard-templates-wrapper").show();
      $('.bootstrap-tagsinput').find('span').remove();
      $("#controls-wrapper-gcard1 .postcard-landscape").addClass("active");
      $("#controls-wrapper-gcard1 .postcard-portrait").removeClass("active");
      clearPostcards();
      $("#orient-card1").val("landscape");
      $("#orient-card2").val("landscape");
      $("#orient-card3").val("landscape");
      $("#orient-card4").val("landscape");
    }

  } );

});

var switchPrinterOrientation = function(o, eid) {
  if (o == "portrait") {
    $("#" + eid).width(containerHeightProp);
    $("#" + eid).height(containerWidthProp);
    $("#" + eid).css("margin-left", -(containerHeightProp/2)+ "px");
  }
  else if (o == "landscape") {
    $("#" + eid).width(containerWidthProp);
    $("#" + eid).height(containerHeightProp);
    $("#" + eid).css("margin-left", -(containerWidthProp/2)+ "px");
  }

}

//-------mouse control drag for postcards-------//
var mouseControlPostcard = function() {
    $("#printer_pcard1")
        .mouseenter(function() {
            $('#print-pcard1').mousedown();
            $("#printer_pcard1").css('background', 'rgba(0, 0, 0, 0.3)');
            $("#printer_pcard1 > .ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('#print-pcard1').mouseup();
            $("#printer_pcard1").css('background', 'rgba(0, 0, 0, 0.0)');
            $("#printer_pcard1 > .ui-wrapper").css('border', '0px dashed #4affff');
        });

        $("#printer_pcard2")
        .mouseenter(function() {
            $('#print-pcard2').mousedown();
            $("#printer_pcard2").css('background', 'rgba(0, 0, 0, 0.3)');
            $("#printer_pcard2 > .ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('#print-pcard2').mouseup();
            $("#printer_pcard2").css('background', 'rgba(0, 0, 0, 0.0)');
            $("#printer_pcard2 > .ui-wrapper").css('border', '0px dashed #4affff');
        });

        $("#printer_pcard3")
        .mouseenter(function() {
            $('#print-pcard3').mousedown();
            $("#printer_pcard3").css('background', 'rgba(0, 0, 0, 0.3)');
            $("#printer_pcard3 > .ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('#print-pcard3').mouseup();
            $("#printer_pcard3").css('background', 'rgba(0, 0, 0, 0.0)');
            $("#printer_pcard3 > .ui-wrapper").css('border', '0px dashed #4affff');
        });

        $("#printer_pcard4")
        .mouseenter(function() {
            $('#print-pcard4').mousedown();
            $("#printer_pcard4").css('background', 'rgba(0, 0, 0, 0.3)');
            $("#printer_pcard4 > .ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('#print-pcard4').mouseup();
            $("#printer_pcard4").css('background', 'rgba(0, 0, 0, 0.0)');
            $("#printer_pcard4 > .ui-wrapper").css('border', '0px dashed #4affff');
        });
}

var maxImgPostcard = function(e) {
  var eid = e.id;
  eid = eid.replace("max-size-", "");
  $("#print-" + eid).width($("#slider-" + eid).slider("option", "max"));
  $("#print-" + eid).height('auto');
  $("#printer_" + eid + " > .ui-wrapper").width($("#print-" + eid).width());
  $("#printer_" + eid + " > .ui-wrapper").height($("#print-" + eid).height());
  $("#slider-" + eid).slider('value', $("#slider-" + eid).slider("option", "max"));
  centerImgPostcard(document.getElementById("center-image-" + eid));
}

//-------center image for postcards-------//
var centerImgPostcard = function(e) {

    var eid = e.id;
    eid = eid.replace("center-image-", "");

    var parentTop = $("#printer_" + eid).height() / 2;
    var parentLeft = $("#printer_" + eid).width() / 2;
    var childTop = parentTop - ($("#print-" + eid).height() / 2);
    var childLeft = parentLeft - ($("#print-" + eid).width() / 2);

    if($("#printer_" + eid + " > .ui-wrapper").length){
       $("#printer_" + eid + " > .ui-wrapper").css('top', childTop + 'px');
       $("#printer_" + eid + " > .ui-wrapper").css('left', childLeft + 'px');
    }else{
       $("#print-" + eid).css('top', childTop + 'px');
       $("#print-" + eid).css('left', childLeft + 'px');
    }
}

//-------preview image for postcards-------//
var previewImgPostcard = function(e) {

        $(e).attr('onclick','switchPostCardImage(this)');
        var previewId = e.id;
        previewId = previewId.replace("preview-", "");
        var image_holder = $("#printer_"+ previewId);
        image_holder.empty();

        var imgSrc = $(e).css("background-image");
        imgSrc = imgSrc.substring(5);
        imgSrc = imgSrc.slice(0,-2)

        $("<img />", {
          "src": imgSrc,
          "id": "print-" + previewId,
          "class": "draggable resizable"
        }).appendTo(image_holder);
        imageLoadedPostcard(previewId);
        $("#controls-wrapper-" + previewId).show();
        $("#outline-" + previewId).show();
        $("#img-controls-" + previewId).show();
        $( ".cards-icons-wrapper" ).not( document.getElementById( "controls-wrapper-" + previewId ) ).hide();
        $( ".postcard-outline" ).not( document.getElementById( "outline-" + previewId ) ).hide();
        $( ".pcard-img-ctrls-wrapper" ).not( document.getElementById( "img-controls-" + previewId ) ).hide();

        image_holder.show();
        showImgControlsPostcard(previewId);

}


//-------show image controls (slider, +, - etc) for postcards-------//
var showImgControlsPostcard = function(e) {

  $("#img-controls-" + e).show();

  $(".pcard-img-ctrls-wrapper").each(function( index ) {
    if ($(this).attr('id') != "#img-controls-" + e) {

    }
  });

  $("#plus-" + e).show();
  $("#minus-" + e).show();
  $("#max-size-" + e).show();
  $("#center-image-" + e).show();
  $('#slider-' + e).show();
  $('#flip-' + e).show();
}

//-------hide image controls (slider, +, - etc) forpostcards-------//
var hideImgControlsPostcard = function(e) {
  $("#img-controls-" + e).hide();
}

//-------load image to print for postcards-------//
var imageLoadedPostcard = function(eid) {

    $("#print-" + eid).load(function() {
        imgWidth = parseInt($(this).css('width'));
        imgHeight = parseInt($(this).css('height'));



        imgWidthInch = Math.round(imgWidth / dpi);
        imgHeightInch = Math.round(imgHeight / dpi);
        imgWidthProp = Math.round(imgWidth / containerProportion);
        imgHeightProp = imgHeight / containerProportion;

        if (imgWidth > imgHeight) {
          sliderMax = imgWidthProp;
          if (sliderMax > containerWidthProp) {
              sliderPos = containerWidthProp;
          } else {
              sliderPos = imgWidthProp;
          }
          slideFuncPostcard(sliderMax, sliderPos, eid);
          $("#print-" + eid).width(sliderPos);
        }
        else if (imgWidth < imgHeight) {

          sliderMax = imgHeightProp;
          if (sliderMax > containerHeightProp) {
              sliderPos = containerHeightProp;
          } else {
              sliderPos = imgHeightProp;
          }
          slideFuncPostcard(sliderMax, sliderPos, eid);
          $("#print-" + eid).height(sliderPos);
        }
        else if (imgWidth = imgHeight) {

          sliderMax = imgHeightProp;
          if (sliderMax > containerHeightProp) {
              sliderPos = containerHeightProp;
          } else {
              sliderPos = imgHeightProp;
          }
          slideFuncPostcard(sliderMax, sliderPos, eid);
          $("#print-" + eid).height(sliderPos);
        }



    //    slideFuncPostcard(sliderMax, sliderPos, eid);
  //      $("#print-" + eid).width(sliderPos);
        centerImgPostcard(document.getElementById("center-image-" + eid));

        $(".resizable").resizable({
                scroll: true,
                handles: "se, sw, nw, ne",
                resize: function(e, ui) {
                  $("#max-image-size-" + eid).hide();
                  $("#slider-" + eid).slider({orientation: "vertical", value: ui.size.width});

                   if (ui.size.width >= sliderMax) {
                  //  $("#dialog").dialog();
                    $('#max-image-size-' + eid).show();
                   }
                },
                stop: function(e, ui) {

                },
                maxWidth: sliderMax,
                minWidth: 10,
                aspectRatio: true
          });

        $("#printer_" + eid + " > .ui-wrapper").draggable({
            scroll: false,
            cursor: "move",
            drag: function() {
                var pos = $(this).position();
                var xPos = pos.left;
                var yPos = pos.top;
                console.log('x: ' + xPos);
                console.log('y: ' + yPos);
            },
            stop: function() {
                var poss = $(this).position();
                var xPoss = poss.left;
                var yPoss = poss.top;
                console.log('xs: ' + xPoss);
                console.log('ys: ' + yPoss);
            }
        });

    });
}

//-------enable slider for men postcards-------//
var slideFuncPostcard = function(m, v, eid) {

    $("#slider-" + eid).slider({
        orientation: "vertical",
        range: "min",
        value: v,
        min: 10,
        max: m,
        //this gets a live reading of the value and prints it on the page
        slide: function(event, ui) {
            $("#max-image-size-" + eid).hide();
            $("#print-" + eid).width(ui.value);
            $("#print-" + eid).height('auto');
            $("#printer_" + eid + " > .ui-wrapper").width(ui.value);
            $("#printer_" + eid + " > .ui-wrapper").height($("#print-" + eid).height());
            console.log("m is " + m);
            console.log("ui.value is " + ui.value);
            if (ui.value >= m) {
            //    $("#dialog").dialog();
                $('#max-image-size-' + eid).show();
            }
        },
        //this updates the value of your hidden field when user stops dragging
        change: function(event, ui) {

        }
    });
  }

  var closeIcon1 = $("#close-max-image-size-pcard1");
  closeIcon1.click(function() {
      $("#max-image-size-pcard1").hide();
  });

  var closeIcon2 = $("#close-max-image-size-pcard2");
  closeIcon2.click(function() {
      $("#max-image-size-pcard2").hide();
  });

  var closeIcon3 = $("#close-max-image-size-pcard3");
  closeIcon3.click(function() {
      $("#max-image-size-pcard3").hide();
  });

  var closeIcon4 = $("#close-max-image-size-pcard4");
  closeIcon4.click(function() {
      $("#max-image-size-pcard4").hide();
  });

  var changePrint = function() {
    $("#selp").change(function() {
        if ($(this).val() == 'sp') {
            $("#full-mask").hide();
            $("#printer").attr('class', 'print1');
            $("#printer").width(containerWidthProp);
            $("#printer").height(containerHeightProp);
            centerImg();
        }
        if ($(this).val() == 'aop') {
            $("#full-mask").show();
            $("#printer").attr('class', 'print2');
            $("#printer").width(525);
            $("#printer").height(450);
            centerImg();
        }
    });
}
var imagePreloader = function() {
        var images = new Array()
        function preload() {
            for (var i = 0; i < preload.arguments.length; i++) {
                images[i] = new Image()
                images[i].src = preload.arguments[i]
            }
        }
        preload(

        )
    }
    /* Preload all images */
//imagePreloader();


/********** when click on remove art for postcards***********/
var remove_postcard_art = function() {

  $(".postcard-outline").each(function( index ) {
    if ($(this).css("display") != "none") {
      var id1 = this.id;
      id1= id1.replace("outline-", "");

      $(this).find(".print").html("").hide();
      $('#slider-front-men').hide();
      $('#preview-' + id1).css("background-image", "none");
      $('#preview-' + id1).attr( "onclick", "" );
      $('#preview-' + id1).css( "cursor", "auto" );
      $('#preview-' + id1).find(".add-art-btn2").show();
      $('#art-input-' + id1).val('');
      $('#slider-'  + id1).hide();
      hideImgControlsPostcard(id1);
    }
  });
}

/********** switch between postcard landscape and portrait design views***********/
var switch_postcard_orientation = function(e) {
  if (!$(e).hasClass("active")) {
    $(e).addClass("active");
  }

  var eid = $(e).parent().attr('id');
  eid = eid.replace("controls-wrapper-", "");
  $('#print-back-' + eid).hide();
  $('#print-back-portrait-' + eid).hide();

  if ($(e).hasClass("postcard-landscape")) {
    $("#controls-wrapper-" + eid +" .postcard-landscape").addClass("active");
    $("#controls-wrapper-" + eid +" .postcard-portrait").removeClass("active");
    $("#pcard-art > .add-product-buttons-wrapper").addClass("cards-button");
    $("#lso").prop('checked', true);
    $("#porto").prop('checked', false);
    $(".postcard-outline").each(function( index ) {
      if ($(this).css("display") != "none") {
        var id1 = this.id;
        id1= id1.replace("outline-", "");
        id1_o = id1.substring(1);
        console.log(id1_o);
        $("#orient-" + id1_o).val("landscape");
        $(this).removeClass("portrait");
        $(this).find(".print-safe-area-postcard").show();
        $(this).find(".print-safe-area-postcard-portrait").hide();
        var e_id = $(this).find(".print").attr("id");
        switchPrinterOrientation("landscape", e_id);
        imageLoadedPostcard(id1);
        centerImgPostcard(document.getElementById("center-image-" + id1));
      }
    });

  //  $("#max-image-size-men-front").hide();
  }
  else if ($(e).hasClass("postcard-portrait")) {
    $("#controls-wrapper-" + eid +" .postcard-landscape").removeClass("active");
    $("#controls-wrapper-" + eid +" .postcard-portrait").addClass("active");
    $("#pcard-art > .add-product-buttons-wrapper").removeClass("cards-button");
    $("#lso").prop('checked', false);
    $("#porto").prop('checked', true);
    $(".postcard-outline").each(function( index ) {
      if ($(this).css("display") != "none") {
        var id2 = this.id;
        id2= id2.replace("outline-", "");
        id2_o = id2.substring(1);
        console.log(id2_o);
        $("#orient-" + id2_o).val("portrait");
        $(this).addClass("portrait");
        $(this).find(".print-safe-area-postcard").hide();
        $(this).find(".print-safe-area-postcard-portrait").show();
        var e_id = $(this).find(".print").attr("id");
        switchPrinterOrientation("portrait", e_id);
        imageLoadedPostcard(id2);
        centerImgPostcard(document.getElementById("center-image-" + id2));
      }
    });
  }
}

/*---------- PREVIEW ART PRINT ON ADD ------------*/
function showPostcardThumb(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var inputNo = fileInput.id;
        inputNo = inputNo.replace("art-input-", "");
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
            input = document.getElementById(fileInput.id);
            getOrientation(input.files[0], function(orientation) {

              if ([5, 6, 7, 8].indexOf(orientation) > -1 && [5, 6, 7, 8].indexOf(orientation) !== 3) {
                  $('#img-rotator').attr('src', binImg);
                  var c = document.getElementById("img-slice");
                  c.width = $('#img-rotator').height();
                  c.height = $('#img-rotator').width();
                  var ctx = c.getContext("2d");
                  ctx.transform(0, 1, -1, 0, $('#img-rotator').height(), 0);
                  ctx.drawImage(document.getElementById('#img-rotator'), 0, 0);
                  urlRot = c.toDataURL();
                  // set Base64 string in src of positioner
                  $('#preview-' + inputNo).css("background-image", "url(" + urlRot + ")");


                } else if ([5, 6, 7, 8].indexOf(orientation) === 3) {
                              console.log(2);
                              $('#img-rotator').attr('src', binImg);
                              var c2 = document.getElementById("img-slice");
                              c2.width = $('#img-rotator').height();
                              c2.height = $('#img-rotator').width();
                              var ctx2 = c2.getContext("2d");
                              ctx2.transform(0, 1, -1, 0, $('#img-rotator').height(), 0);
                              ctx2.rotate(Math.PI);
                              ctx2.translate(-parseInt(c2.height), -parseInt(c2.width));
                              ctx2.drawImage(document.getElementById('img-rotator'), 0, 0);
                              urlRot2 = c2.toDataURL();
                              $('#preview-' + inputNo).css("background-image", "url(" + urlRot2 + ")");

              } else {
                  // set Base64 string in src of positioner
                  $('#preview-' + inputNo).css("background-image", "url(" + binImg + ")");
              }
            });
            $('#add-art-btn-' + inputNo).hide();
            $('#preview-' + inputNo).css("cursor", "pointer");
            $('#preview-' + inputNo).attr('onclick','previewImgPostcard(this)');

        };
        reader.readAsDataURL(fileInput.files[0]);

    }
}

var switchPostCardImage = function(e) {
  var eid = e.id;
  eid = eid.replace("preview-", "");
  $("#controls-wrapper-" + eid).show();
  $("#outline-" + eid).show();
  $("#img-controls-" + eid).show();
  $( ".cards-icons-wrapper" ).not( document.getElementById( "controls-wrapper-" + eid ) ).hide();
  $( ".postcard-outline" ).not( document.getElementById( "outline-" + eid ) ).hide();
  $( ".pcard-img-ctrls-wrapper" ).not( document.getElementById( "img-controls-" + eid ) ).hide();
}

var clearPostcards = function() {
  $(".postcard-outline").each(function( index ) {
      var id1 = this.id;
      id1= id1.replace("outline-", "");
      $(this).find(".print").html("").hide();
      $('#slider-front-men').hide();
      $('#preview-' + id1).css("background-image", "none");
      $('#preview-' + id1).attr('onclick','');
      $('#preview-' + id1).find(".add-art-btn2").show();
      $('#art-input-' + id1).val('');
      $('#slider-'  + id1).hide();
      hideImgControlsPostcard(id1);
  });
}


var toggleProductInfo = function() {
  if ($(".product-info-popup").hasClass("active")) {
    $(".product-info-popup").removeClass("active");
  }
  else {
    $(".product-info-popup").addClass("active");
  }
}

var flipImgPostcard  = function(e) {
  var id1 = e.id;
  id1= id1.replace("flip-", "");
  if ($('#print-safe-area-portrait-' + id1).is(":visible")) {
    $('#print-safe-area-portrait-' + id1).hide();
    $('#print-back-' + id1).hide();
    $('#printer-' + id1).css("opacity", "0");
    $('#print-back-portrait-' + id1).show();
    $("#slider-" + id1).slider({disabled: true});
    $("#printer_" + id1 + " > .ui-wrapper").draggable( 'disable' );
    $("#printer_" + id1 + " > .ui-wrapper").resizable( 'disable' );
  }
  else if ($('#print-safe-area-' + id1).is(":visible")) {
    $('#print-safe-area-' + id1).hide();
    $('#print-back-' + id1).show();
    $('#print-back-portrait-' + id1).hide();
    $('#printer-' + id1).css("opacity", "0");
    $("#slider-" + id1).slider({disabled: true});
    $("#printer_" + id1 + " > .ui-wrapper").draggable( 'disable' );
    $("#printer_" + id1 + " > .ui-wrapper").resizable( 'disable' );
  }
  else if ($('#print-back-portrait-' + id1).is(":visible")) {
    $('#print-safe-area-portrait-' + id1).show();
    $('#print-back-' + id1).hide();
    $('#printer-' + id1).css("opacity", "1");
    $('#print-back-portrait-' + id1).hide();
    $("#slider-" + id1).slider({disabled: false});
    $("#printer_" + id1 + " > .ui-wrapper").draggable( 'enable' );
    $("#printer_" + id1 + " > .ui-wrapper").resizable( 'enable' );
  }
  else if ($('#print-back-' + id1).is(":visible")) {
    $('#print-safe-area-' + id1).show();
    $('#print-back-' + id1).hide();
    $('#print-back-portrait-' + id1).hide();
    $('#printer-' + id1).css("opacity", "1");
    $("#slider-" + id1).slider({disabled: false});
    $("#printer_" + id1 + " > .ui-wrapper").draggable( 'enable' );
    $("#printer_" + id1 + " > .ui-wrapper").resizable( 'enable' );
  }

}
