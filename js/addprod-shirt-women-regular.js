/* Image DPI */
var dpiW = 150;

/********************** vars for shirts *********************/
/* Proportion of shirt print */
var containerProportionW = 7;
/* Print container area height inch for shirt */
var containerHeightInchW = 12;
/* Print container area width inch for shirt */
var containerWidthInchW = 10;
/* Print container area height px */
var containerWidthPxW = containerWidthInchW * dpiW;
/* Print container area height px */
var containerHeightPxW = containerHeightInchW * dpiW;
/* Print container area proportion width px */
var containerWidthPropW = containerWidthPxW / containerProportionW;
/* Print container area proportion height px */
var containerHeightPropW = containerHeightPxW / containerProportionW;

/* Initialize global variables */
var imgWidth, imgHeight, imgWidthInch, imgHeightInch, imgWidthProp, imgHeightProp;
var sliderMax = 100,
    sliderPos = 0;
/* Page fully loaded */
$(function() {

    $("#printer_front_women").width(Math.round(containerWidthPropW - 3));
    $("#printer_front_women").height(Math.round(containerHeightPropW - 3));
    $("#printer_front_women").css("margin-left", -(Math.round(containerWidthPropW - 3)/2) + "px");

    $("#printer_back_women").width(Math.round(containerWidthPropW - 3));
    $("#printer_back_women").height(Math.round(containerHeightPropW - 3));
    $("#printer_back_women").css("margin-left", -(Math.round(containerWidthPropW - 3)/2)+ "px");



    previewImgWomenFront();
    previewImgWomenBack();

    mouseControlWomenFront();
    mouseControlWomenBack();

//    changePrint();

//-------switch between all-over and regular design templates-------//



    //-------max-size image for women's shirt - front-------//
    $("#max-size-women-front").click(function() {
        $("#print-women-front").width($("#slider-front-women").slider("option", "max"));
        $("#print-women-front").height('auto');
        $("#printer_front_women > .ui-wrapper").width($("#print-women-front").width());
        $("#printer_front_women > .ui-wrapper").height($("#print-women-front").height());
        $("#slider-front-women").slider('value', $("#slider-front-women").slider("option", "max"));
        centerImgWomenFront();
    });
    //-------max-size image for women's shirt - back-------//
    $("#max-size-women-back").click(function() {
        $("#print-women-back").width($("#slider-back-women").slider("option", "max"));
        $("#print-women-back").height('auto');
        $("#printer_back_women > .ui-wrapper").width($("#print-women-back").width());
        $("#printer_back_women > .ui-wrapper").height($("#print-women-back").height());
        $("#slider-back-women").slider('value', $("#slider-back-women").slider("option", "max"));
        centerImgWomenBack();
    });


    $("#center-image-women-front").click(function() {
        centerImgWomenFront();
    });

    $("#center-image-women-back").click(function() {
        centerImgWomenBack();
    });
});
//-------mouse control drag for women shirt - front-------//
var mouseControlWomenFront = function() {
    $("#printer_front_women")
        .mouseenter(function() {
            $('#print-women-front').mousedown();
            $("#printer_front_women").css('background', 'rgba(0, 0, 0, 0.3)');
            $("#printer_front_women > .ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('#print-women-front').mouseup();
            $("#printer_front_women").css('background', 'rgba(0, 0, 0, 0.0)');
            $("#printer_front_women > .ui-wrapper").css('border', '0px dashed #4affff');
        });

}
//-------mouse control drag for women shirt - back-------//
var mouseControlWomenBack = function() {

  $("#printer_back_women")
        .mouseenter(function() {
            $('#print-women-back').mousedown();
            $("#printer_back_women").css('background', 'rgba(0, 0, 0, 0.3)');
            $("#printer_back_women > .ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('#print-women-back').mouseup();
            $("#printer_back_women").css('background', 'rgba(0, 0, 0, 0.0)');
            $("#printer_back_women > .ui-wrapper").css('border', '0px dashed #4affff');
        });
}
//-------center image for women shirt - front-------//
var centerImgWomenFront = function() {
    var parentTop = $("#printer_front_women").height() / 2;
    var parentLeft = $("#printer_front_women").width() / 2;
    var childTop = parentTop - ($("#print-women-front").height() / 2);
    var childLeft = parentLeft - ($("#print-women-front").width() / 2);

    if($("#printer_front_women > .ui-wrapper").length){
       $("#printer_front_women > .ui-wrapper").css('top', childTop + 'px');
       $("#printer_front_women > .ui-wrapper").css('left', childLeft + 'px');
    }else{
       $("#print-women-front").css('top', childTop + 'px');
       $("#print-women-front").css('left', childLeft + 'px');
    }
}
//-------center image for women shirt - back-------//
var centerImgWomenBack = function() {
  var parentTop = $("#printer_back_women").height() / 2;
  var parentLeft = $("#printer_back_women").width() / 2;
  var childTop = parentTop - ($("#print-women-back").height() / 2);
  var childLeft = parentLeft - ($("#print-women-back").width() / 2);

  if($("#printer_back_women > .ui-wrapper").length){
     $("#printer_back_women > .ui-wrapper").css('top', childTop + 'px');
     $("#printer_back_women > .ui-wrapper").css('left', childLeft + 'px');
  }else{
     $("#print-women-back").css('top', childTop + 'px');
     $("#print-women-back").css('left', childLeft + 'px');
  }
}


//-------preview image for women shirt- front-------//
var previewImgWomenFront = function() {
    $("#art-input-women-front").change(function() {

        //Get count of selected files
        var countFiles = $(this)[0].files.length;
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var imgSize = Math.round(($(this)[0].files[0].size / 1024) / 1024);

        var image_holder = $("#printer_front_women");
        image_holder.empty();

        if (imgSize > 10) {
            $('#size-error').show();
            $('#art-input-women-front').val('');
            return false;
        }

        if (extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof(FileReader) != "undefined") {
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles; i++) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                      binImg = e.target.result;
                      input = document.getElementById('art-input-women-front');
                      getOrientation(input.files[0], function(orientation) {
                        if ([5, 6, 7, 8].indexOf(orientation) > -1 && [5, 6, 7, 8].indexOf(orientation) !== 3) {
                          console.log(1);
                          $('#img-rotator').attr('src', binImg);
                          var c = document.getElementById("img-slice");
                          c.width = $('#img-rotator').height();
                          c.height = $('#img-rotator').width();
                          var ctx = c.getContext("2d");
                          ctx.transform(0, 1, -1, 0, $('#img-rotator').height(), 0);
                                ctx.drawImage(document.getElementById('img-rotator'), 0, 0);
                                urlRot = c.toDataURL();
                                $("<img />", {
                                    "src": urlRot,
                                    "id": "print-women-front",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedWomenFront();
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
                                $("<img />", {
                                    "src": urlRot2,
                                    "id": "print-women-front",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedWomenFront();
                            } else {
                                console.log(3);
                                $("<img />", {
                                    "src": binImg,
                                    "id": "print-women-front",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedWomenFront();
                            }
                        });
                    };



                    image_holder.show();
                    reader.readAsDataURL($(this)[0].files[i]);
                    showImgControlsWomenFront();
                }
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            $('#ext-error').show();
        }
    });
}




//-------preview image for women shirt - back-------//
var previewImgWomenBack = function() {
    $("#art-input-women-back").change(function() {

        //Get count of selected files
        var countFiles = $(this)[0].files.length;
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var imgSize = Math.round(($(this)[0].files[0].size / 1024) / 1024);

        var image_holder = $("#printer_back_women");
        image_holder.empty();

        if (imgSize > 10) {
            $('#size-error').show();
            $('#art-input-women-back').val('');
            return false;
        }

        if (extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof(FileReader) != "undefined") {
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles; i++) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                      binImg = e.target.result;
                      input = document.getElementById('art-input-women-back');
                      getOrientation(input.files[0], function(orientation) {
                        if ([5, 6, 7, 8].indexOf(orientation) > -1 && [5, 6, 7, 8].indexOf(orientation) !== 3) {
                          console.log(1);
                          $('#img-rotator').attr('src', binImg);
                          var c = document.getElementById("img-slice");
                          c.width = $('#img-rotator').height();
                          c.height = $('#img-rotator').width();
                          var ctx = c.getContext("2d");
                          ctx.transform(0, 1, -1, 0, $('#img-rotator').height(), 0);
                                ctx.drawImage(document.getElementById('img-rotator'), 0, 0);
                                urlRot = c.toDataURL();
                                $("<img />", {
                                    "src": urlRot,
                                    "id": "print-women-back",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedWomenBack();
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
                                $("<img />", {
                                    "src": urlRot2,
                                    "id": "print-women-back",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedWomenBack();
                            } else {
                                console.log(3);
                                $("<img />", {
                                    "src": binImg,
                                    "id": "print-women-back",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedWomenBack();
                            }
                        });
                    };



                    image_holder.show();
                    reader.readAsDataURL($(this)[0].files[i]);
                    showImgControlsWomenBack();
                }
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            $('#ext-error').show();
        }
    });
}



//-------show image controls (slider, +, - etc) for women shirt - front-------//
var showImgControlsWomenFront = function() {
  $("#plus-women-front").show();
  $("#minus-women-front").show();
  $("#max-size-women-front").show();
  $("#center-image-women-front").show();
  $('#slider-front-women').show();
}
//-------show image controls (slider, +, - etc) for women shirt - back-------//
var showImgControlsWomenBack = function() {
  $("#plus-women-back").show();
  $("#minus-women-back").show();
  $("#max-size-women-back").show();
  $("#center-image-women-back").show();
  $('#slider-back-women').show();
}
//-------hide image controls (slider, +, - etc) for women shirt  - front-------//
var hideImgControlsWomenFront = function() {
  $("#plus-women-front").hide();
  $("#minus-women-front").hide();
  $("#max-size-women-front").hide();
  $("#center-image-women-front").hide();

}
//-------hide image controls (slider, +, - etc) for women shirt  - back-------//
var hideImgControlsWomenBack = function() {
  $("#plus-women-back").hide();
  $("#minus-women-back").hide();
  $("#max-size-women-back").hide();
  $("#center-image-women-back").hide();

}
//-------load image to print for women shirt - front-------//
var imageLoadedWomenFront = function() {
    $("#print-women-front").load(function() {
        imgWidth = parseInt($(this).css('width'));
        imgHeight = parseInt($(this).css('height'));
        imgWidthInch = Math.round(imgWidth / dpi);
        imgHeightInch = Math.round(imgHeight / dpi);
        imgWidthProp = Math.round(imgWidth / containerProportionW);
        imgHeightProp = imgHeight / containerProportionW;
        sliderMax = imgWidthProp;
        if (sliderMax > containerWidthPropW) {
            sliderPos = containerWidthPropW;
        } else {
            sliderPos = imgWidthProp;
        }
        slideFuncWomenFront(sliderMax, sliderPos);
        $("#print-women-front").width(sliderPos);
        centerImgWomenFront();

        $(".resizable").resizable({
                scroll: true,
                handles: "se, sw, nw, ne",
                resize: function(e, ui) {
                  $("#max-image-size-women-front").hide();
                  $("#slider-front-women").slider({orientation: "vertical", value: ui.size.width});

                   if (ui.size.width >= sliderMax) {
                  //  $("#dialog").dialog();
                    $('#max-image-size-women-front').show();
                   }
                },
                stop: function(e, ui) {

                },
                maxWidth: sliderMax,
                minWidth: 10,
                aspectRatio: true
          });

        $("#printer_front_women > .ui-wrapper").draggable({
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


//-------load image to print for women shirt - back-------//
var imageLoadedWomenBack = function() {
    $("#print-women-back").load(function() {
        imgWidth = parseInt($(this).css('width'));
        imgHeight = parseInt($(this).css('height'));
        imgWidthInch = Math.round(imgWidth / dpi);
        imgHeightInch = Math.round(imgHeight / dpi);
        imgWidthProp = Math.round(imgWidth / containerProportionW);
        imgHeightProp = imgHeight / containerProportionW;
        sliderMax = imgWidthProp;
        if (sliderMax > containerWidthPropW) {
            sliderPos = containerWidthPropW;
        } else {
            sliderPos = imgWidthProp;
        }
        slideFuncWomenBack(sliderMax, sliderPos);
        $("#print-women-back").width(sliderPos);
        centerImgWomenBack();

        $(".resizable").resizable({
                scroll: true,
                handles: "se, sw, nw, ne",
                resize: function(e, ui) {
                  $("#max-image-size-women-back").hide();
                  $("#slider-back-women").slider({orientation: "vertical", value: ui.size.width});

                   if (ui.size.width >= sliderMax) {
                  //  $("#dialog").dialog();
                    $('#max-image-size-women-back').show();
                   }
                },
                stop: function(e, ui) {

                },
                maxWidth: sliderMax,
                minWidth: 10,
                aspectRatio: true
          });

        $("#printer_back_women > .ui-wrapper").draggable({
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

//-------enable slider for women shirt - front-------//
var slideFuncWomenFront = function(m, v) {

    $("#slider-front-women").slider({
        orientation: "vertical",
        range: "min",
        value: v,
        min: 10,
        max: m,
        //this gets a live reading of the value and prints it on the page
        slide: function(event, ui) {
            $("#max-image-size-women-front").hide();
            $("#print-women-front").width(ui.value);
            $("#print-women-front").height('auto');
            $("#printer_front_women > .ui-wrapper").width(ui.value);
            $("#printer_front_women > .ui-wrapper").height($("#print-women-front").height());
            console.log("m is " + m);
            console.log("ui.value is " + ui.value);
            if (ui.value >= m) {
            //    $("#dialog").dialog();
                $('#max-image-size-women-front').show();
            }
        },
        //this updates the value of your hidden field when user stops dragging
        change: function(event, ui) {

        }
    });
  }

  //-------enable slider for women shirt - back-------//
  var slideFuncWomenBack = function(m, v) {

      $("#slider-back-women").slider({
          orientation: "vertical",
          range: "min",
          value: v,
          min: 10,
          max: m,
          //this gets a live reading of the value and prints it on the page
          slide: function(event, ui) {
              $("#max-image-size-women-back").hide();
              $("#print-women-back").width(ui.value);
              $("#print-women-back").height('auto');
              $("#printer_back_women > .ui-wrapper").width(ui.value);
              $("#printer_back_women > .ui-wrapper").height($("#print-women-back").height());
              console.log("m is " + m);
              console.log("ui.value is " + ui.value);
              if (ui.value >= m) {
              //    $("#dialog").dialog();
                  $('#max-image-size-women-back').show();
              }
          },
          //this updates the value of your hidden field when user stops dragging
          change: function(event, ui) {

          }
      });
    }

  var closeIconShirtFront = $("#close-max-image-size-women-front");
  closeIconShirtFront.click(function() {
      $("#max-image-size-women-front").hide();
  });

  var closeIconShirtBack = $("#close-max-image-size-women-back");
  closeIconShirtBack.click(function() {
      $("#max-image-size-women-back").hide();
  });

  var changePrint = function() {
    $("#selp").change(function() {
        if ($(this).val() == 'sp') {
            $("#full-mask").hide();
            $("#printer").attr('class', 'print1');
            $("#printer").width(containerWidthPropW);
            $("#printer").height(containerHeightPropW);
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
            for (var i = 0; i < preload.arguwoments.length; i++) {
                images[i] = new Image()
                images[i].src = preload.arguwoments[i]
            }
        }
        preload(
            "img/full_mask.png",
            "img/mask.png",
            "img/mask2.png",
            "img/shirt.png",
            "img/shirt2.png"
        )
    }
    /* Preload all images */
//imagePreloader();

/********** download the image for women shirt***********/
$('#download-shirt-women-front').click(function(e) {

  /********** create image for women shirt front ***********/
  if ($.trim($("#print-women-front").attr("src")) != "" || $.trim($("#print-women-back").attr("src")) != "") {

      var color = $(".women-shirt-backing-color").css("background-color");

      var front_parent_width = $('.shirt-women-bg').width();
      var front_parent_height = $('.shirt-women-bg').height();

      if ($.trim($("#print-women-front").attr("src")) != "") {
        var front_print_width = $('#print-women-front').width();
        var front_print_height = $('#print-women-front').height();

        var positionX =  $('#printer_front_women > .ui-wrapper').position().left + 144.5;
        var positionY = $('#printer_front_women > .ui-wrapper').position().top + 90;
        var poster_front = document.getElementById("print-women-front");
      }

      var positionXback = parseInt($('#print-women-back').parent().css("left")) + 144.5;
      var positionYback = parseInt($('#print-women-back').parent().css("top"))  + 45;

      var back_print_width = $('#print-women-back').width();
      var back_print_height = $('#print-women-back').parent().height();

      var men_bg_img_front = document.getElementById("women-bg-front");
      var men_bg_img_back = document.getElementById("women-bg-back");

      var poster_front = document.getElementById("print-women-front");
      var poster_back = document.getElementById("print-women-back");

      cm = document.getElementById("cloner_mask");
      cm.width = $('.shirt-women-bg').width();
      cm.height = $('.shirt-women-bg').height();
      ctx_m = cm.getContext("2d");
      ctx_m.fillStyle = color;
      ctx_m.fillRect(0, 0, $('.shirt-women-bg').width(), $('.shirt-women-bg').height());
      ctx_m.beginPath();
      ctx_m.drawImage(men_bg_img_front, 0, 0);
      ctx_m.closePath();
      ctx_m.clearRect(144.5,90,213,256);

      c = document.getElementById("cloner_front");
      c.width = $('.shirt-women-bg').width();
      c.height = $('.shirt-women-bg').height();
      ctx = c.getContext("2d");
      ctx.fillStyle = color;

      ctx.fillRect(0, 0, $('.shirt-women-bg').width(), $('.shirt-women-bg').height());

      ctx.drawImage(men_bg_img_front, 0, 0);
      if ($.trim($("#print-women-front").attr("src")) !== "") {
          ctx.drawImage(poster_front, positionX, positionY, front_print_width, front_print_height);
      }
      ctx.drawImage(cm, 0, 0);
      ctx.drawImage(men_bg_img_front, 0, 0);

      cm2 = document.getElementById("cloner_mask");
      cm2.width = $('.shirt-women-bg').width();
      cm2.height = $('.shirt-women-bg').height();
      ctx_m2 = cm2.getContext("2d");
      ctx_m2.fillStyle = color;
      ctx_m2.fillRect(0, 0, $('.shirt-women-bg').width(), $('.shirt-women-bg').height());
      ctx_m.beginPath();
      ctx_m2.drawImage(men_bg_img_back, 0, 0);
      ctx_m.closePath();
      ctx_m2.clearRect(144.5,45,213,256);

      c2 = document.getElementById("cloner_back");
      c2.width = $('.shirt-women-bg').width();
      c2.height = $('.shirt-women-bg').height();
      ctx2 = c2.getContext("2d");
      ctx2.fillStyle = color;
      ctx2.fillRect(0, 0, $('.shirt-women-bg').width(), $('.shirt-women-bg').height());

      ctx2.drawImage(men_bg_img_back, 0, 0);
      if ($.trim($("#print-women-back").attr("src")) !== "") {
          ctx2.drawImage(poster_back, positionXback, positionYback, back_print_width, back_print_height);
      }
      ctx2.drawImage(cm2, 0, 0);
      ctx2.drawImage(men_bg_img_back, 0, 0);

      c3 = document.getElementById("cloner_final");
      c3.width = $('.shirt-women-bg').width() * 2 + 90;
      c3.height = $('.shirt-women-bg').height() + 60;
      ctx3 = c3.getContext("2d");
      ctx3.fillStyle = "#fff";
      ctx3.fillRect(0, 0, c3.width, c3.height);
      ctx3.drawImage(c, 40, 30);
      ctx3.drawImage(c2, parseInt($('.shirt-women-bg').width()) + 50, 30);

      if (c3.msToBlob) { //for IE
          var blob = c3.msToBlob();
          saveAs(blob, "Regular-shirt-women-design.png");
          ctx3.clearRect(0, 0, c3.width, c3.height);
      } else {
          //other browsers
          c3.toBlob(function(blob) {
              saveAs(blob, "Regular-shirt-women-design.png");
              ctx3.clearRect(0, 0, c3.width, c3.height);
          });
      }
  }
});

/********** download the image for women shirt***********/
$('#download-shirt-women-back').click(function(e) {

  /********** create image for aa pillow back ***********/
  if ($.trim($("#print-women-back").attr("src")) != "" || $.trim($("#print-women-front").attr("src")) != "") {

      var color = $(".women-shirt-backing-color").css("background-color");
      var front_parent_width = $('#printer_front_women').width();
      var front_parent_height = $('#printer_front_women').height();
      var front_print_width = $('#print-women-front').width();
      var front_print_height = $('#print-women-front').parent().height();
      var positionX = parseInt($('#print-women-front').parent().css("left")) + 144.5;
      var positionY = parseInt($('#print-women-front').parent().css("top")) + 90;
      console.log(positionX);
      if ($.trim($("#print-women-back").attr("src")) != "") {
        var back_print_width = $('#print-women-back').width();
        var back_print_height = $('#print-women-back').height();
        var positionXback =  ($('#printer_back_women > .ui-wrapper').position().left) + 144.5;
        var positionYback = ($('#printer_back_women > .ui-wrapper').position().top) + 45;
      }

      var men_bg_img_front = document.getElementById("women-bg-front");
      var men_bg_img_back = document.getElementById("women-bg-back");
      var poster_front = document.getElementById("print-women-front");
      var poster_back = document.getElementById("print-women-back");

      cm = document.getElementById("cloner_mask");
      cm.width = $('.shirt-women-bg').width();
      cm.height = $('.shirt-women-bg').height();
      ctx_m = cm.getContext("2d");
      ctx_m.fillStyle = color;
      ctx_m.fillRect(0, 0, $('.shirt-women-bg').width(), $('.shirt-women-bg').height());
      ctx_m.beginPath();
      ctx_m.drawImage(men_bg_img_front, 0, 0);
      ctx_m.closePath();
      ctx_m.clearRect(144.5,90,213,256);

      c = document.getElementById("cloner_front");
      c.width = $('.shirt-women-bg').width();
      c.height = $('.shirt-women-bg').height();
      ctx = c.getContext("2d");
      ctx.fillStyle = color;

      ctx.fillRect(0, 0, $('.shirt-women-bg').width(), $('.shirt-women-bg').height());

      ctx.drawImage(men_bg_img_front, 0, 0);
      if ($.trim($("#print-women-front").attr("src")) !== "") {
          ctx.drawImage(poster_front, positionX, positionY, front_print_width, front_print_height);
      }
      ctx.drawImage(cm, 0, 0);
      ctx.drawImage(men_bg_img_front, 0, 0);

      cm2 = document.getElementById("cloner_mask");
      cm2.width = $('.shirt-women-bg').width();
      cm2.height = $('.shirt-women-bg').height();
      ctx_m2 = cm2.getContext("2d");
      ctx_m2.fillStyle = color;
      ctx_m2.fillRect(0, 0, $('.shirt-women-bg').width(), $('.shirt-women-bg').height());
      ctx_m.beginPath();
      ctx_m2.drawImage(men_bg_img_back, 0, 0);
      ctx_m.closePath();
      ctx_m2.clearRect(144.5,45,213,256);

      c2 = document.getElementById("cloner_back");
      c2.width = $('.shirt-women-bg').width();
      c2.height = $('.shirt-women-bg').height();
      ctx2 = c2.getContext("2d");
      ctx2.fillStyle = color;
      ctx2.fillRect(0, 0, $('.shirt-women-bg').width(), $('.shirt-women-bg').height());

      ctx2.drawImage(men_bg_img_back, 0, 0);
      if ($.trim($("#print-women-back").attr("src")) !== "") {
          ctx2.drawImage(poster_back, positionXback, positionYback, back_print_width, back_print_height);
      }
      ctx2.drawImage(cm2, 0, 0);
      ctx2.drawImage(men_bg_img_back, 0, 0);

      c3 = document.getElementById("cloner_final");
      c3.width = $('.shirt-women-bg').width() * 2 + 90;
      c3.height = $('.shirt-women-bg').height() + 60;
      ctx3 = c3.getContext("2d");
      ctx3.fillStyle = "#fff";
      ctx3.fillRect(0, 0, c3.width, c3.height);
      ctx3.drawImage(c, 40, 30);
      ctx3.drawImage(c2, parseInt($('.shirt-women-bg').width()) + 50, 30);

      if (c3.msToBlob) { //for IE
          var blob = c3.msToBlob();
          saveAs(blob, "Regular-shirt-women-design.png");
          ctx3.clearRect(0, 0, c3.width, c3.height);
      } else {
          //other browsers
          c3.toBlob(function(blob) {
              saveAs(blob, "Regular-shirt-women-design.png");
              ctx3.clearRect(0, 0, c3.width, c3.height);
          });
      }
  }
});




/********** when click on remove art for women shirt front***********/
var removeShirtArt_front_women = function() {
  $('#printer_front_women').html("").hide();
  $('#slider-front-women').hide();
  $('#art-input-women-front').val('');
  hideImgControlsWomenFront();
}

/********** when click on remove art for women shirt back***********/
var removeShirtArt_back_women = function() {
  $('#printer_back_women').html("").hide();
  $('#slider-back-women').hide();
  $('#art-input-women-back').val('');
  hideImgControlsWomenBack();
}

/********** switch between women shirt front and back design views***********/
var switch_front_back_women = function(e) {
  if (!$(e).hasClass("active")) {
    $(e).addClass("active");
  }
  if ($(e).hasClass("shirt-front")) {
    $("#shirt-women-controls-wrapper .shirt-front").addClass("active");
    $("#shirt-women-controls-wrapper .shirt-back").removeClass("active");
    $('#women-shirt-front').show();
    $('#women-shirt-back').hide();
    $('#women-shirt-bottom-front').show();
    $('#women-shirt-bottom-back').hide();
    $("#max-image-size-women-front").hide();
  }
  else if ($(e).hasClass("shirt-back")) {
    $("#shirt-women-controls-wrapper .shirt-front").removeClass("active");
    $("#shirt-women-controls-wrapper .shirt-back").addClass("active");
    $('#women-shirt-front').hide();
    $('#women-shirt-back').show();
    $('#women-shirt-bottom-front').hide();
    $('#women-shirt-bottom-back').show();
    $("#max-image-size-women-back").hide();
  }
}
var switch_women_shirt_color = function(e) {
  var color = $(e).css("background-color");
  $(".women-shirt-backing-color").css("background-color", color)
}
