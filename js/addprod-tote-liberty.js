/* Image DPI */
var dpi = 150;

/********************** vars for liberty tote *********************/
/* Proportion of liberty tote print */
var containerProportion = 8;
/* Print container area height inch for liberty tote */
var containerHeightInch = 12;
/* Print container area width inch for liberty tote */
var containerWidthInch = 10;
/* Print container area height px */
var containerWidthPx = containerWidthInch * dpi;
/* Print container area height px */
var containerHeightPx = containerHeightInch * dpi;
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

    $("#printer_liberty_front").width(containerWidthProp);
    $("#printer_liberty_front").height(containerHeightProp);
    $("#printer_liberty_front").css("margin-left", -(containerWidthProp/2)+ "px");

    $("#printer_liberty_back").width(containerWidthProp);
    $("#printer_liberty_back").height(containerHeightProp);
    $("#printer_liberty_back").css("margin-left", -(containerWidthProp/2)+ "px");

    previewImgLibertyFront();
    previewImgLibertyBack();
    mouseControlLibertyFront();
    mouseControlLibertyBack();
//    changePrint();

    //-------max-size image for Liberty tote - front-------//
    $("#max-size-liberty-front").click(function() {
        $("#print-liberty-front").width($("#slider-liberty-front").slider("option", "max"));
        $("#print-liberty-front").height('auto');
        $("#printer_liberty_front > .ui-wrapper").width($("#print-liberty-front").width());
        $("#printer_liberty_front > .ui-wrapper").height($("#print-liberty-front").height());
        $("#slider-liberty-front").slider('value', $("#slider-liberty-front").slider("option", "max"));
        centerImgLibertyFront();
    });
    //-------max-size image for Liberty tote - back-------//
    $("#max-size-liberty-back").click(function() {
        $("#print-liberty-back").width($("#slider-liberty-back").slider("option", "max"));
        $("#print-liberty-back").height('auto');
        $("#printer_liberty_back > .ui-wrapper").width($("#print-liberty-back").width());
        $("#printer_liberty_back > .ui-wrapper").height($("#print-liberty-back").height());
        $("#slider-liberty-back").slider('value', $("#slider-liberty-back").slider("option", "max"));
        centerImgLibertyBack();
    });


    $("#center-image-liberty-front").click(function() {
        centerImgLibertyFront();
    });

    $("#center-image-liberty-back").click(function() {
        centerImgLibertyBack();
    });
});
//-------mouse control drag for Liberty tote - front-------//
var mouseControlLibertyFront = function() {
    $("#printer_liberty_front")
        .mouseenter(function() {
            $('#print-liberty-front').mousedown();
            $("#printer_liberty_front").css('background', 'rgba(0, 0, 0, 0.3)');
            $("#printer_liberty_front > .ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('#print-liberty-front').mouseup();
            $("#printer_liberty_front").css('background', 'rgba(0, 0, 0, 0.0)');
            $("#printer_liberty_front > .ui-wrapper").css('border', '0px dashed #4affff');
        });

}
//-------mouse control drag for Liberty tote - back-------//
var mouseControlLibertyBack = function() {

  $("#printer_liberty_back")
      .mouseenter(function() {
          $('#print-liberty-back').mousedown();
          $("#printer_liberty_back").css('background', 'rgba(0, 0, 0, 0.3)');
          $("#printer_liberty_back > .ui-wrapper").css('border', '1px dashed #4affff');
      })
      .mouseleave(function() {
          $('#print-liberty-back').mouseup();
          $("#printer_liberty_back").css('background', 'rgba(0, 0, 0, 0.0)');
          $("#printer_liberty_back > .ui-wrapper").css('border', '0px dashed #4affff');
      });
}
//-------center image for Liberty tote - front-------//
var centerImgLibertyFront = function() {
    var parentTop = $("#printer_liberty_front").height() / 2;
    var parentLeft = $("#printer_liberty_front").width() / 2;
    var childTop = parentTop - ($("#print-liberty-front").height() / 2);
    var childLeft = parentLeft - ($("#print-liberty-front").width() / 2);

    if($("#printer_liberty_front > .ui-wrapper").length){
       $("#printer_liberty_front > .ui-wrapper").css('top', childTop + 'px');
       $("#printer_liberty_front > .ui-wrapper").css('left', childLeft + 'px');
    }else{
       $("#print-liberty-front").css('top', childTop + 'px');
       $("#print-liberty-front").css('left', childLeft + 'px');
    }
}
//-------center image for Liberty tote - back-------//
var centerImgLibertyBack = function() {
    var parentTop = $("#printer_liberty_back").height() / 2;
    var parentLeft = $("#printer_liberty_back").width() / 2;
    var childTop = parentTop - ($("#print-liberty-back").height() / 2);
    var childLeft = parentLeft - ($("#print-liberty-back").width() / 2);

    if($("#printer_liberty_back > .ui-wrapper").length){
       $("#printer_liberty_back > .ui-wrapper").css('top', childTop + 'px');
       $("#printer_liberty_back > .ui-wrapper").css('left', childLeft + 'px');
    }else{
       $("#print-liberty-back").css('top', childTop + 'px');
       $("#print-liberty-back").css('left', childLeft + 'px');
    }
}


//-------preview image for Liberty tote - front-------//
var previewImgLibertyFront = function() {
    $("#art-input-liberty-front").change(function() {

        //Get count of selected files
        var countFiles = $(this)[0].files.length;
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var imgSize = Math.round(($(this)[0].files[0].size / 1024) / 1024);

        var image_holder = $("#printer_liberty_front");
        image_holder.empty();

        if (imgSize > 10) {
            $('#size-error').show();
            $('#art-input-liberty-front').val('');
            return false;
        }

        if (extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof(FileReader) != "undefined") {
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles; i++) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                      binImg = e.target.result;
                      input = document.getElementById('art-input-liberty-front');
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
                                    "id": "print-liberty-front",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedLibertyFront();
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
                                    "id": "print-liberty-front",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedLibertyFront();
                            } else {
                                console.log(3);
                                $("<img />", {
                                    "src": binImg,
                                    "id": "print-liberty-front",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedLibertyFront();
                            }
                        });
                    };



                    image_holder.show();
                    reader.readAsDataURL($(this)[0].files[i]);
                    showImgControlsLibertyFront();
                }
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            $('#ext-error').show();
        }
    });
}




//-------preview image for Liberty tote - back-------//
var previewImgLibertyBack = function() {
    $("#art-input-liberty-back").change(function() {

        //Get count of selected files
        var countFiles = $(this)[0].files.length;
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var imgSize = Math.round(($(this)[0].files[0].size / 1024) / 1024);

        var image_holder = $("#printer_liberty_back");
        image_holder.empty();

        if (imgSize > 10) {
            $('#size-error').show();
            $('#art-input-liberty-back').val('');
            return false;
        }

        if (extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof(FileReader) != "undefined") {
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles; i++) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                      binImg = e.target.result;
                      input = document.getElementById('art-input-liberty-back');
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
                                    "id": "print-liberty-back",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedLibertyBack();
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
                                    "id": "print-liberty-back",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedLibertyBack();
                            } else {
                                console.log(3);
                                $("<img />", {
                                    "src": binImg,
                                    "id": "print-liberty-back",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedLibertyBack();
                            }
                        });
                    };



                    image_holder.show();
                    reader.readAsDataURL($(this)[0].files[i]);
                    showImgControlsLibertyBack();
                }
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            $('#ext-error').show();
        }
    });
}



//-------show image controls (slider, +, - etc) for Liberty tote - front-------//
var showImgControlsLibertyFront = function() {
  $("#plus-liberty-front").show();
  $("#minus-liberty-front").show();
  $("#max-size-liberty-front").show();
  $("#center-image-liberty-front").show();
  $('#slider-liberty-front').show();
}
//-------show image controls (slider, +, - etc) for Liberty tote - back-------//
var showImgControlsLibertyBack = function() {
  $("#plus-liberty-back").show();
  $("#minus-liberty-back").show();
  $("#max-size-liberty-back").show();
  $("#center-image-liberty-back").show();
  $('#slider-liberty-back').show();
}
//-------hide image controls (slider, +, - etc) for Liberty tote  - front-------//
var hideImgControlsLibertyFront = function() {
  $("#plus-liberty-front").hide();
  $("#minus-liberty-front").hide();
  $("#max-size-liberty-front").hide();
  $("#center-image-liberty-front").hide();
  $('#slider-liberty-front').hide();
}
//-------hide image controls (slider, +, - etc) for Liberty tote  - back-------//
var hideImgControlsLibertyBack = function() {
  $("#plus-liberty-back").hide();
  $("#minus-liberty-back").hide();
  $("#max-size-liberty-back").hide();
  $("#center-image-liberty-back").hide();
  $('#slider-liberty-back').hide();
}
//-------load image to print for liberty tote - front-------//
var imageLoadedLibertyFront = function() {
    $("#print-liberty-front").load(function() {
        imgWidth = parseInt($(this).css('width'));
        imgHeight = parseInt($(this).css('height'));
        imgWidthInch = Math.round(imgWidth / dpi);
        imgHeightInch = Math.round(imgHeight / dpi);
        imgWidthProp = Math.round(imgWidth / containerProportion);
        imgHeightProp = imgHeight / containerProportion;
        sliderMax = imgWidthProp;
        if (sliderMax > containerWidthProp) {
            sliderPos = containerWidthProp;
        } else {
            sliderPos = imgWidthProp;
        }
        slideFuncLibertyFront(sliderMax, sliderPos);
        $("#print-liberty-front").width(sliderPos);
        centerImgLibertyFront();

        $(".resizable").resizable({
                scroll: true,
                handles: "se, sw, nw, ne",
                resize: function(e, ui) {
                  $("#max-image-size-liberty-front").hide();
                  $("#slider-liberty-front").slider({orientation: "vertical", value: ui.size.width});
                  console.log("ui.size.width is " + ui.size.width);
                  console.log("sliderMax is " + sliderMax);
                   if (ui.size.width >= sliderMax) {
                  //  $("#dialog").dialog();
                    $('#max-image-size-liberty-front').show();
                   }
                },
                stop: function(e, ui) {

                },
                maxWidth: sliderMax,
                minWidth: 10,
                aspectRatio: true
          });

        $("#printer_liberty_front > .ui-wrapper").draggable({
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


//-------load image to print for liberty tote - back-------//
var imageLoadedLibertyBack = function() {
    $("#print-liberty-back").load(function() {
        imgWidth = parseInt($(this).css('width'));
        imgHeight = parseInt($(this).css('height'));
        imgWidthInch = Math.round(imgWidth / dpi);
        imgHeightInch = Math.round(imgHeight / dpi);
        imgWidthProp = Math.round(imgWidth / containerProportion);
        imgHeightProp = imgHeight / containerProportion;
        sliderMax = imgWidthProp;
        if (sliderMax > containerWidthProp) {
            sliderPos = containerWidthProp;
        } else {
            sliderPos = imgWidthProp;
        }
        slideFuncLibertyBack(sliderMax, sliderPos);
        $("#print-liberty-back").width(sliderPos);
        centerImgLibertyBack();

        $(".resizable").resizable({
                scroll: true,
                handles: "se, sw, nw, ne",
                resize: function(e, ui) {
                  $("#max-image-size-liberty-back").hide();
                  $("#slider-liberty-back").slider({orientation: "vertical", value: ui.size.width});
                  console.log("ui.size.width is " + ui.size.width);
                  console.log("sliderMax is " + sliderMax);
                   if (ui.size.width >= sliderMax) {
                  //  $("#dialog").dialog();
                    $('#max-image-size-liberty-back').show();
                   }
                },
                stop: function(e, ui) {

                },
                maxWidth: sliderMax,
                minWidth: 10,
                aspectRatio: true
          });

        $("#printer_liberty_back > .ui-wrapper").draggable({
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


//-------enable slider for liberty tote - front-------//
var slideFuncLibertyFront = function(m, v) {

    $("#slider-liberty-front").slider({
        orientation: "vertical",
        range: "min",
        value: v,
        min: 10,
        max: m,
        //this gets a live reading of the value and prints it on the page
        slide: function(event, ui) {
            $("#max-image-size-liberty-front").hide();
            $("#print-liberty-front").width(ui.value);
            $("#print-liberty-front").height('auto');
            $("#printer_liberty_front > .ui-wrapper").width(ui.value);
            $("#printer_liberty_front > .ui-wrapper").height($("#print-liberty-front").height());
            console.log("m is " + m);
            console.log("ui.value is " + ui.value);
            if (ui.value >= m) {
            //    $("#dialog").dialog();
                $('#max-image-size-liberty-front').show();
            }
        },
        //this updates the value of your hidden field when user stops dragging
        change: function(event, ui) {

        }
    });
  }
  //-------enable slider for liberty tote - back-------//
  var slideFuncLibertyBack = function(m, v) {

      $("#slider-liberty-back").slider({
          orientation: "vertical",
          range: "min",
          value: v,
          min: 10,
          max: m,
          //this gets a live reading of the value and prints it on the page
          slide: function(event, ui) {
              $("#max-image-size-liberty-back").hide();
              $("#print-liberty-back").width(ui.value);
              $("#print-liberty-back").height('auto');
              $("#printer_liberty_back > .ui-wrapper").width(ui.value);
              $("#printer_liberty_back > .ui-wrapper").height($("#print-liberty-back").height());
              console.log("m is " + m);
              console.log("ui.value is " + ui.value);
              if (ui.value >= m) {
              //    $("#dialog").dialog();
                  $('#max-image-size-liberty-back').show();
              }
          },
          //this updates the value of your hidden field when user stops dragging
          change: function(event, ui) {

          }
      });
    }

  var closeIconLibertyFront = $("#close-max-image-size-liberty-front");
  closeIconLibertyFront.click(function() {
      $("#max-image-size-liberty-front").hide();
  });

  var closeIconLibertyBack = $("#close-max-image-size-liberty-back");
  closeIconLibertyBack.click(function() {
      $("#max-image-size-liberty-back").hide();
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
            $("#printer").width(553);
            $("#printer").height(553);
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
            "img/full_mask.png",
            "img/mask.png",
            "img/mask2.png",
            "img/shirt.png",
            "img/shirt2.png"
        )
    }
    /* Preload all images */
//imagePreloader();

/********** download the image for liberty tote***********/
$('#download-tote-liberty-front').click(function(e) {

  /********** create image for liberty pillow front ***********/
  if ($.trim($("#print-liberty-front").attr("src")) != "" || $.trim($("#print-liberty-back").attr("src")) != "") {

      var color = '#fff';

      var front_parent_width = $('#printer_liberty_front').width();
      var front_parent_height = $('#printer_liberty_front').height();

      if ($.trim($("#print-liberty-front").attr("src")) != "") {
        var front_print_width = $('#print-liberty-front').width();
        var front_print_height = $('#print-liberty-front').height();

  //      var front_print_width = front_parent_width;
  //      var front_print_height = front_parent_height;

        var positionX =  ($('#printer_liberty_front > .ui-wrapper').position().left + 31.25);
        var positionY = ($('#printer_liberty_front > .ui-wrapper').position().top + 151);
        var poster_front = document.getElementById("print-liberty-front");
      }

      var positionXback = parseInt($('#print-liberty-back').parent().css("left")) + 31.25;
      var positionYback = parseInt($('#print-liberty-back').parent().css("top"))  + 151;

      var back_print_width = $('#print-liberty-back').width();
      var back_print_height = $('#print-liberty-back').parent().height();

    //  var back_print_width = front_parent_width;
    //  var back_print_height = front_parent_height;

      c = document.getElementById("cloner_front");
      c.width = $('.tote-liberty-bg').width();
      c.height = $('.tote-liberty-bg').height();
      ctx = c.getContext("2d");
      ctx.fillStyle = color;

      ctx.fillRect(0, 0, $('#tote-outline-liberty-front').width(), $('#tote-outline-liberty-front').height());
      if ($("#tote-liberty-bg-front-white").is(":visible")) {
        var tote_bg_img = document.getElementById("tote-liberty-bg-front-white");
        var tote_mask = document.getElementById("tote-liberty-mask-white");
      }
      else if ($("#tote-liberty-bg-front-black").is(":visible")) {
        var tote_bg_img = document.getElementById("tote-liberty-bg-front-black");
        var tote_mask = document.getElementById("tote-liberty-mask-black");
      }

      var poster_front = document.getElementById("print-liberty-front");
      var poster_back = document.getElementById("print-liberty-back");


      ctx.drawImage(tote_bg_img, 0, 0);
      if ($.trim($("#print-liberty-front").attr("src")) !== "") {
          ctx.drawImage(poster_front, positionX, positionY, front_print_width, front_print_height);
      }



      c2 = document.getElementById("cloner_back");
      c2.width = $('.tote-liberty-bg').width();
      c2.height = $('.tote-liberty-bg').height();
      ctx2 = c2.getContext("2d");
      ctx2.fillStyle = color;
      ctx2.fillRect(0, 0, $('.tote-liberty-bg').width(), $('.tote-liberty-bg').height());
      ctx2.drawImage(tote_bg_img, 0, 0);
      if ($.trim($("#print-liberty-back").attr("src")) !== "") {
          ctx2.drawImage(poster_back, positionXback, positionYback, back_print_width, back_print_height);
      }



      c3 = document.getElementById("cloner_final");
      c3.width = $('.tote-liberty-bg').width() * 2 + 90;
      c3.height = $('.tote-liberty-bg').height() + 60;
      ctx3 = c3.getContext("2d");
      ctx3.fillStyle = "#fff";
      ctx3.fillRect(0, 0, c3.width, c3.height);
      ctx3.drawImage(c, 40, 30);
      ctx3.drawImage(tote_mask, 40, 30);
      ctx3.drawImage(c2, parseInt($('.tote-liberty-bg').width()) + 50, 30);
      ctx3.drawImage(tote_mask, parseInt($('.tote-liberty-bg').width()) + 40, 30);

      if (c3.msToBlob) { //for IE
          var blob = c3.msToBlob();
          saveAs(blob, "Liberty-tote-design.png");
          ctx3.clearRect(0, 0, c3.width, c3.height);
      } else {
          //other browsers
          c3.toBlob(function(blob) {
              saveAs(blob, "Liberty-tote-design.png");
              ctx3.clearRect(0, 0, c3.width, c3.height);
          });
      }
  }
});

/********** download the image for liberty tote***********/
$('#download-tote-liberty-back').click(function(e) {

  /********** create image for liberty pillow back ***********/
  if ($.trim($("#print-liberty-back").attr("src")) != "" || $.trim($("#print-liberty-front").attr("src")) != "") {

      var color = '#fff';
      var front_parent_width = $('#printer_liberty_front').width();
      var front_parent_height = $('#printer_liberty_front').height();
      var front_print_width = $('#print-liberty-front').width();
      var front_print_height = $('#print-liberty-front').parent().height();
      var positionX = parseInt($('#print-liberty-front').parent().css("left")) + 31.25;
      var positionY = parseInt($('#print-liberty-front').parent().css("top")) + 151;

      if ($.trim($("#print-liberty-back").attr("src")) != "") {
        var back_print_width = $('#print-liberty-back').width();
        var back_print_height = $('#print-liberty-back').height();
        var positionXback =  ($('#printer_liberty_back > .ui-wrapper').position().left) + 31.25;
        var positionYback = ($('#printer_liberty_back > .ui-wrapper').position().top) + 151;
      }

      c = document.getElementById("cloner_front");
      c.width = $('.tote-liberty-bg').width();
      c.height = $('.tote-liberty-bg').height();
      ctx = c.getContext("2d");
      ctx.fillStyle = color;

      ctx.fillRect(0, 0, $('.tote-liberty-bg').width(), $('.tote-liberty-bg').height());



      if ($("#tote-liberty-bg-back-white").is(":visible")) {
        var tote_bg_img = document.getElementById("tote-liberty-bg-back-white");
        var tote_mask = document.getElementById("tote-liberty-mask-white");
      }
      else if ($("#tote-liberty-bg-back-black").is(":visible")) {
        var tote_bg_img = document.getElementById("tote-liberty-bg-back-black");
        var tote_mask = document.getElementById("tote-liberty-mask-black");
      }

      var poster_front = document.getElementById("print-liberty-front");
      var poster_back = document.getElementById("print-liberty-back");

      ctx.drawImage(tote_bg_img, 0, 0);
      if ($.trim($("#print-liberty-front").attr("src")) !== "") {
          ctx.drawImage(poster_front, positionX, positionY, front_print_width, front_print_height);
      }



      c2 = document.getElementById("cloner_back");
      c2.width = $('.tote-liberty-bg').width();
      c2.height = $('.tote-liberty-bg').height();
      ctx2 = c2.getContext("2d");
      ctx2.fillStyle = color;
      ctx2.fillRect(0, 0, $('.tote-liberty-bg').width(), $('.tote-liberty-bg').height());

      ctx2.drawImage(tote_bg_img, 0, 0);
      if ($.trim($("#print-liberty-back").attr("src")) !== "") {
          ctx2.drawImage(poster_back, positionXback, positionYback, back_print_width, back_print_height);
      }



      c3 = document.getElementById("cloner_final");
      c3.width = $('.tote-liberty-bg').width() * 2 + 90;
      c3.height = $('.tote-liberty-bg').height() + 60;
      ctx3 = c3.getContext("2d");
      ctx3.fillStyle = "#fff";
      ctx3.fillRect(0, 0, c3.width, c3.height);
      ctx3.drawImage(c, 40, 30);
      ctx3.drawImage(tote_mask, 40, 30);
      ctx3.drawImage(c2, parseInt($('.tote-liberty-bg').width()) + 50, 30);
      ctx3.drawImage(tote_mask, parseInt($('.tote-liberty-bg').width()) + 40, 30);

      if (c3.msToBlob) { //for IE
          var blob = c3.msToBlob();
          saveAs(blob, "Liberty-tote-design.png");
          ctx3.clearRect(0, 0, c3.width, c3.height);
      } else {
          //other browsers
          c3.toBlob(function(blob) {
              saveAs(blob, "Liberty-tote-design.png");
              ctx3.clearRect(0, 0, c3.width, c3.height);
          });
      }
  }
});




/********** when click on remove art for liberty tote front***********/
var removeToteArt_Liberty_front = function() {
  $('#printer_liberty_front').html("").hide();
  $('#slider-liberty-front').hide();
  $('#art-input-liberty-front').val('');
  hideImgControlsLibertyFront();
}

/********** when click on remove art for liberty tote back***********/
var removeToteArt_Liberty_back = function() {
  $('#printer_liberty_back').html("").hide();
  $('#slider-liberty-back').hide();
  $('#art-input-liberty-back').val('');
  hideImgControlsLibertyBack();
}

/********** switch between Liberty tote front and back design views***********/
var switch_front_back_liberty = function(e) {
  if (!$(e).hasClass("active")) {
    $(e).addClass("active");
  }

  if ($(e).hasClass("tote-front")) {

    $("#tote-liberty-controls-wrapper .tote-front").addClass("active");
    $("#tote-liberty-controls-wrapper .tote-back").removeClass("active");
    $('#liberty-tote-front').show();
    $('#liberty-tote-back').hide();
    $('#tote-liberty-bottom-front').show();
    $('#tote-liberty-bottom-back').hide();
    $("#max-image-size-liberty-front").hide();
  }
  else if ($(e).hasClass("tote-back")) {
    $("#tote-liberty-controls-wrapper .tote-front").removeClass("active");
    $("#tote-liberty-controls-wrapper .tote-back").addClass("active");
    $('#liberty-tote-front').hide();
    $('#liberty-tote-back').show();
    $('#tote-liberty-bottom-front').hide();
    $('#tote-liberty-bottom-back').show();
    $("#max-image-size-liberty-back").hide();
  }
}

var switch_tote_color = function(e) {
  if (e.id.includes("white")) {
    $("#tote-liberty-bg-front-white").show();
    $("#tote-liberty-bg-back-white").show();
    $("#tote-liberty-bg-front-black").hide();
    $("#tote-liberty-bg-back-black").hide();
    $("#liberty-color").val("white");
  }
  else if (e.id.includes("black")) {
    $("#tote-liberty-bg-front-white").hide();
    $("#tote-liberty-bg-back-white").hide();
    $("#tote-liberty-bg-front-black").show();
    $("#tote-liberty-bg-back-black").show();
    $("#liberty-color").val("black");
  }
}
