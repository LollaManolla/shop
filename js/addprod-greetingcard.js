/* Image DPI */
var dpi = 300;

/********************** vars for greetingcards *********************/
/* Proportion of greetingcard print */
var containerProportionG = 4;

/* Print container area height px */
var containerWidthPxG = 1795;
/* Print container area height px */
var containerHeightPxG = 1264;
/* Print container area proportion width px */
var containerWidthPropG = containerWidthPxG / containerProportionG;
/* Print container area proportion height px */
var containerHeightPropG = containerHeightPxG / containerProportionG;

/* Initialize global variables */
var imgWidth, imgHeight, imgWidthInch, imgHeightInch, imgWidthProp, imgHeightProp;
var sliderMax = 100,
    sliderPos = 0;
/* Page fully loaded */
$(function() {

    $("#printer_gcard1").width(containerWidthPropG);
    $("#printer_gcard1").height(containerHeightPropG);
    $("#printer_gcard1").css("margin-left", -(containerWidthPropG/2)+ "px");

    $("#printer_gcard2").width(containerWidthPropG);
    $("#printer_gcard2").height(containerHeightPropG);
    $("#printer_gcard2").css("margin-left", -(containerWidthPropG/2)+ "px");

    $("#printer_gcard3").width(containerWidthPropG);
    $("#printer_gcard3").height(containerHeightPropG);
    $("#printer_gcard3").css("margin-left", -(containerWidthPropG/2)+ "px");

    $("#printer_gcard4").width(containerWidthPropG);
    $("#printer_gcard4").height(containerHeightPropG);
    $("#printer_gcard4").css("margin-left", -(containerWidthPropG/2)+ "px");


    mouseControlGreetingcard();

});

var switchPrinterOrientationGreeting = function(o, eid) {
  if (o == "portrait") {
    $("#" + eid).width(containerHeightPropG);
    $("#" + eid).height(containerWidthPropG);
    $("#" + eid).css("margin-left", -(containerHeightPropG/2)+ "px");
  }
  else if (o == "landscape") {
    $("#" + eid).width(containerWidthPropG);
    $("#" + eid).height(containerHeightPropG);
    $("#" + eid).css("margin-left", -(containerWidthPropG/2)+ "px");
  }

}

//-------mouse control drag for greetingcards-------//
var mouseControlGreetingcard = function() {
    $("#printer_gcard1")
        .mouseenter(function() {
            $('#print-gcard1').mousedown();
            $("#printer_gcard1").css('background', 'rgba(0, 0, 0, 0.3)');
            $("#printer_gcard1 > .ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('#print-gcard1').mouseup();
            $("#printer_gcard1").css('background', 'rgba(0, 0, 0, 0.0)');
            $("#printer_gcard1 > .ui-wrapper").css('border', '0px dashed #4affff');
        });

        $("#printer_gcard2")
        .mouseenter(function() {
            $('#print-gcard2').mousedown();
            $("#printer_gcard2").css('background', 'rgba(0, 0, 0, 0.3)');
            $("#printer_gcard2 > .ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('#print-gcard2').mouseup();
            $("#printer_gcard2").css('background', 'rgba(0, 0, 0, 0.0)');
            $("#printer_gcard2 > .ui-wrapper").css('border', '0px dashed #4affff');
        });

        $("#printer_gcard3")
        .mouseenter(function() {
            $('#print-gcard3').mousedown();
            $("#printer_gcard3").css('background', 'rgba(0, 0, 0, 0.3)');
            $("#printer_gcard3 > .ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('#print-gcard3').mouseup();
            $("#printer_gcard3").css('background', 'rgba(0, 0, 0, 0.0)');
            $("#printer_gcard3 > .ui-wrapper").css('border', '0px dashed #4affff');
        });

        $("#printer_gcard4")
        .mouseenter(function() {
            $('#print-gcard4').mousedown();
            $("#printer_gcard4").css('background', 'rgba(0, 0, 0, 0.3)');
            $("#printer_gcard4 > .ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('#print-gcard4').mouseup();
            $("#printer_gcard4").css('background', 'rgba(0, 0, 0, 0.0)');
            $("#printer_gcard4 > .ui-wrapper").css('border', '0px dashed #4affff');
        });
}

var maxImgGreetingcard = function(e) {
  var eid = e.id;
  eid = eid.replace("max-size-", "");
  $("#print-" + eid).width($("#slider-" + eid).slider("option", "max"));
  $("#print-" + eid).height('auto');
  $("#printer_" + eid + " > .ui-wrapper").width($("#print-" + eid).width());
  $("#printer_" + eid + " > .ui-wrapper").height($("#print-" + eid).height());
  $("#slider-" + eid).slider('value', $("#slider-" + eid).slider("option", "max"));
  centerImgGreetingcard(document.getElementById("center-image-" + eid));
}

//-------center image for greetingcards-------//
var centerImgGreetingcard = function(e) {

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

//-------preview image for greetingcards-------//
var previewImgGreetingcard = function(e) {

        $(e).attr('onclick','switchGreetingCardImage(this)');
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
        imageLoadedGreetingcard(previewId);
        $("#controls-wrapper-" + previewId).show();
        $("#outline-" + previewId).show();
        $("#img-controls-" + previewId).show();
        $( ".cards-icons-wrapper" ).not( document.getElementById( "controls-wrapper-" + previewId ) ).hide();
        $( ".greetingcard-outline" ).not( document.getElementById( "outline-" + previewId ) ).hide();
        $( ".gcard-img-ctrls-wrapper" ).not( document.getElementById( "img-controls-" + previewId ) ).hide();

        image_holder.show();
        showImgControlsGreetingcard(previewId);

}


//-------show image controls (slider, +, - etc) for greetingcards-------//
var showImgControlsGreetingcard = function(e) {

  $("#img-controls-" + e).show();

  $(".gcard-img-ctrls-wrapper").each(function( index ) {
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

//-------hide image controls (slider, +, - etc) for greetingcards-------//
var hideImgControlsGreetingcard = function(e) {
  $("#img-controls-" + e).hide();
}

//-------load image to print for greetingcards-------//
var imageLoadedGreetingcard = function(eid) {
    $("#print-" + eid).load(function() {
        imgWidth = parseInt($(this).css('width'));
        imgHeight = parseInt($(this).css('height'));
        imgWidthInch = Math.round(imgWidth / dpi);
        imgHeightInch = Math.round(imgHeight / dpi);
        imgWidthProp = Math.round(imgWidth / containerProportionG);
        imgHeightProp = imgHeight / containerProportionG;


        if (imgWidth > imgHeight) {
          sliderMax = imgWidthProp;
          if (sliderMax > containerWidthProp) {
              sliderPos = containerWidthProp;
          } else {
              sliderPos = imgWidthProp;
          }
          slideFuncGreetingcard(sliderMax, sliderPos, eid);
          $("#print-" + eid).width(sliderPos);
        }
        else if (imgWidth < imgHeight) {

          sliderMax = imgHeightProp;
          if (sliderMax > containerHeightProp) {
              sliderPos = containerHeightProp;
          } else {
              sliderPos = imgHeightProp;
          }
          slideFuncGreetingcard(sliderMax, sliderPos, eid);
          $("#print-" + eid).height(sliderPos);
        }
        else if (imgWidth = imgHeight) {

          sliderMax = imgHeightProp;
          if (sliderMax > containerHeightProp) {
              sliderPos = containerHeightProp;
          } else {
              sliderPos = imgHeightProp;
          }
          slideFuncGreetingcard(sliderMax, sliderPos, eid);
          $("#print-" + eid).height(sliderPos);
        }


        centerImgGreetingcard(document.getElementById("center-image-" + eid));

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

//-------enable slider for greetingcards ------//
var slideFuncGreetingcard = function(m, v, eid) {

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

  var closeIcon1 = $("#close-max-image-size-gcard1");
  closeIcon1.click(function() {
      $("#max-image-size-gcard1").hide();
  });

  var closeIcon2 = $("#close-max-image-size-gcard2");
  closeIcon2.click(function() {
      $("#max-image-size-gcard2").hide();
  });

  var closeIcon3 = $("#close-max-image-size-gcard3");
  closeIcon3.click(function() {
      $("#max-image-size-gcard3").hide();
  });

  var closeIcon4 = $("#close-max-image-size-gcard4");
  closeIcon4.click(function() {
      $("#max-image-size-gcard4").hide();
  });

  var changePrint = function() {
    $("#selp").change(function() {
        if ($(this).val() == 'sp') {
            $("#full-mask").hide();
            $("#printer").attr('class', 'print1');
            $("#printer").width(containerWidthPropG);
            $("#printer").height(containerHeightPropG);
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


/********** when click on remove art for greetingcards***********/
var remove_greetingcard_art = function() {

  $(".greetingcard-outline").each(function( index ) {
    if ($(this).css("display") != "none") {
      var id1 = this.id;
      id1= id1.replace("outline-", "");

      $(this).find(".print").html("").hide();
      $('#slider-front-men').hide();
      $('#preview-' + id1).css("background-image", "none");
      $('#preview-' + id1).attr('onclick','');
      $('#preview-' + id1).css( "cursor", "auto" );
      $('#preview-' + id1).find(".add-art-btn2").show();
      $('#art-input-' + id1).val('');
      $('#slider-'  + id1).hide();
      hideImgControlsGreetingcard(id1);
    }
  });
}

/********** switch between greetingcard landscape and portrait design views***********/
var switch_greetingcard_orientation = function(e) {
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
    $("#gcard-art > .add-product-buttons-wrapper").addClass("cards-button2");
    $("#lso").prop('checked', true);
    $("#porto").prop('checked', false);
    $(".greetingcard-outline").each(function( index ) {
      if ($(this).css("display") != "none") {
        var id1 = this.id;
        id1= id1.replace("outline-", "");
        id1_o = id1.substring(1);
        $("#orient-" + id1_o).val("landscape");
        $(this).removeClass("portrait");
        $(this).find(".print-safe-area-greetingcard").show();
        $(this).find(".print-safe-area-greetingcard-portrait").hide();
        var e_id = $(this).find(".print").attr("id");
        switchPrinterOrientationGreeting("landscape", e_id);
        centerImgGreetingcard(document.getElementById("center-image-" + id1));
      }
    });


  }
  else if ($(e).hasClass("postcard-portrait")) {
    $("#controls-wrapper-" + eid +" .postcard-landscape").removeClass("active");
    $("#controls-wrapper-" + eid +" .postcard-portrait").addClass("active");
    $("#gcard-art > .add-product-buttons-wrapper").removeClass("cards-button2");
    $("#lso").prop('checked', false);
    $("#porto").prop('checked', true);
    $(".greetingcard-outline").each(function( index ) {
      if ($(this).css("display") != "none") {
        var id2 = this.id;
        id2= id2.replace("outline-", "");
        id2_o = id2.substring(1);
        $("#orient-" + id2_o).val("portrait");
        $(this).addClass("portrait");
        $(this).find(".print-safe-area-greetingcard").hide();
        $(this).find(".print-safe-area-greetingcard-portrait").show();
        var e_id = $(this).find(".print").attr("id");
        switchPrinterOrientationGreeting("portrait", e_id);
        centerImgGreetingcard(document.getElementById("center-image-" + id2));
      }
    });
  }
}

/*---------- PREVIEW ART PRINT ON ADD ------------*/
function showGreetingcardThumb(fileInput) {
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
            $('#preview-' + inputNo).attr('onclick','previewImgGreetingcard(this)');

        };
        reader.readAsDataURL(fileInput.files[0]);

    }
}

var switchGreetingCardImage = function(e) {
  var eid = e.id;
  eid = eid.replace("preview-", "");
  $("#controls-wrapper-" + eid).show();
  $("#outline-" + eid).show();
  $("#img-controls-" + eid).show();
  $( ".cards-icons-wrapper" ).not( document.getElementById( "controls-wrapper-" + eid ) ).hide();
  $( ".greetingcard-outline" ).not( document.getElementById( "outline-" + eid ) ).hide();
  $( ".gcard-img-ctrls-wrapper" ).not( document.getElementById( "img-controls-" + eid ) ).hide();
}

var clearGreetingcards = function() {
  $(".greetingcard-outline").each(function( index ) {
      var id1 = this.id;
      id1= id1.replace("outline-", "");
      $(this).find(".print").html("").hide();
      $('#slider-front-men').hide();
      $('#preview-' + id1).css("background-image", "none");
      $('#preview-' + id1).attr('onclick','');
      $('#preview-' + id1).find(".add-art-btn2").show();
      $('#art-input-' + id1).val('');
      $('#slider-'  + id1).hide();
      hideImgControlsGreetingcard(id1);
  });
}
var flipImgGreetingcard  = function(e) {
  var id1 = e.id;
  id1= id1.replace("flip-", "");
  if ($('#print-safe-area-portrait-' + id1).is(":visible")) {
    $('#print-safe-area-portrait-' + id1).hide();
    $('#print-back-' + id1).hide();
    $('#print-back-portrait-' + id1).show();
    $("#slider-" + id1).slider({disabled: true});
    $("#printer_" + id1 + " > .ui-wrapper").draggable( 'disable' );
    $("#printer_" + id1 + " > .ui-wrapper").resizable( 'disable' );
  }
  else if ($('#print-safe-area-' + id1).is(":visible")) {
    $('#print-safe-area-' + id1).hide();
    $('#print-back-' + id1).show();
    $('#print-back-portrait-' + id1).hide();
    $("#slider-" + id1).slider({disabled: true});
    $("#printer_" + id1 + " > .ui-wrapper").draggable( 'disable' );
    $("#printer_" + id1 + " > .ui-wrapper").resizable( 'disable' );
//    $('#print-' + id1).hide();
  }
  else if ($('#print-back-portrait-' + id1).is(":visible")) {
    $('#print-safe-area-portrait-' + id1).show();
    $('#print-back-' + id1).hide();
    $('#print-' + id1).show();
    $('#print-back-portrait-' + id1).hide();
    $("#slider-" + id1).slider({disabled: false});
    $("#printer_" + id1 + " > .ui-wrapper").draggable( 'enable' );
    $("#printer_" + id1 + " > .ui-wrapper").resizable( 'enable' );
  }
  else if ($('#print-back-' + id1).is(":visible")) {
    $('#print-safe-area-' + id1).show();
    $('#print-back-' + id1).hide();
    $('#print-back-portrait-' + id1).hide();
    $('#print-' + id1).show();
    $("#slider-" + id1).slider({disabled: false});
    $("#printer_" + id1 + " > .ui-wrapper").draggable( 'enable' );
    $("#printer_" + id1 + " > .ui-wrapper").resizable( 'enable' );
  }

}
