/* Image DPI */
var dpi = 150;

/********************** vars for rectangular pillows *********************/
/* Proportion of rectangle pillow print */
var containerProportion_Rectangle = 6;
/* Print container area height inch for rectangle pillow */
var containerHeightInch_rect = 12;
/* Print container area width inch for rectangle pillow */
var containerWidthInch_rect = 20;
/* Print container area height px */
var containerWidthPx_rect = containerWidthInch_rect * dpi;
/* Print container area height px */
var containerHeightPx_rect = containerHeightInch_rect * dpi;
/* Print container area proportion width px */
var containerWidthProp_rect = containerWidthPx_rect / containerProportion_Rectangle;
/* Print container area proportion height px */
var containerHeightProp_rect = containerHeightPx_rect / containerProportion_Rectangle;

/* Initialize global variables */
var imgWidth, imgHeight, imgWidthInch, imgHeightInch, imgWidthProp, imgHeightProp;
var sliderMax = 100,
    sliderPos = 0;
/* Page fully loaded */
$(function() {

    $("#printer_rectangle_front").width(containerWidthProp_rect);
    $("#printer_rectangle_front").height(containerHeightProp_rect);
    $("#printer_rectangle_front").css("margin-left", -(containerWidthProp_rect/2)+ "px");

    $("#printer_rectangle_back").width(containerWidthProp_rect);
    $("#printer_rectangle_back").height(containerHeightProp_rect);
    $("#printer_rectangle_back").css("margin-left", -(containerWidthProp_rect/2)+ "px");

    previewImgrectangleFront();
    previewImgrectangleBack();
    mouseControlrectangleFront();
    mouseControlrectangleBack();
//    changePrint();

    //-------max-size image for rectangle pillow - front-------//
    $("#max-size-rectangle-front").click(function() {
        $("#print-rectangle-front").width($("#slider-rectangle-front").slider("option", "max"));
        $("#print-rectangle-front").height('auto');
        $("#printer_rectangle_front > .ui-wrapper").width($("#print-rectangle-front").width());
        $("#printer_rectangle_front > .ui-wrapper").height($("#print-rectangle-front").height());
        $("#slider-rectangle-front").slider('value', $("#slider-rectangle-front").slider("option", "max"));
        centerImgrectangleFront();
    });
    //-------max-size image for rectangle pillow - back-------//
    $("#max-size-rectangle-back").click(function() {
        $("#print-rectangle-back").width($("#slider-rectangle-back").slider("option", "max"));
        $("#print-rectangle-back").height('auto');
        $("#printer_rectangle_back > .ui-wrapper").width($("#print-rectangle-back").width());
        $("#printer_rectangle_back > .ui-wrapper").height($("#print-rectangle-back").height());
        $("#slider-rectangle-back").slider('value', $("#slider-rectangle-back").slider("option", "max"));
        centerImgrectangleBack();
    });


    $("#center-image-rectangle-front").click(function() {
        centerImgrectangleFront();
    });

    $("#center-image-rectangle-back").click(function() {
        centerImgrectangleBack();
    });
});
//-------mouse control drag for rectangle pillow - front-------//
var mouseControlrectangleFront = function() {
    $("#printer_rectangle_front")
        .mouseenter(function() {
            $('#print-rectangle-front').mousedown();
            $("#printer_rectangle_front").css('background', 'rgba(0, 0, 0, 0.3)');
            $("#printer_rectangle_front > .ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('#print-rectangle-front').mouseup();
            $("#printer_rectangle_front").css('background', 'rgba(0, 0, 0, 0.0)');
            $("#printer_rectangle_front > .ui-wrapper").css('border', '0px dashed #4affff');
        });

}
//-------mouse control drag for rectangle pillow - back-------//
var mouseControlrectangleBack = function() {

        $("#printer_rectangle_back")
            .mouseenter(function() {
                $('#print-rectangle-back').mousedown();
                $("#printer_rectangle_back").css('background', 'rgba(0, 0, 0, 0.3)');
                $("#printer_rectangle_back > .ui-wrapper").css('border', '1px dashed #4affff');
            })
            .mouseleave(function() {
                $('#print-rectangle-back').mouseup();
                $("#printer_rectangle_back").css('background', 'rgba(0, 0, 0, 0.0)');
                $("#printer_rectangle_back > .ui-wrapper").css('border', '0px dashed #4affff');
            });
}
//-------center image for rectangle pillow - front-------//
var centerImgrectangleFront = function() {
    var parentTop = $("#printer_rectangle_front").height() / 2;
    var parentLeft = $("#printer_rectangle_front").width() / 2;
    var childTop = parentTop - ($("#print-rectangle-front").height() / 2);
    var childLeft = parentLeft - ($("#print-rectangle-front").width() / 2);

    if($("#printer_rectangle_front > .ui-wrapper").length){
       $("#printer_rectangle_front > .ui-wrapper").css('top', childTop + 'px');
       $("#printer_rectangle_front > .ui-wrapper").css('left', childLeft + 'px');
    }else{
       $("#print-rectangle-front").css('top', childTop + 'px');
       $("#print-rectangle-front").css('left', childLeft + 'px');
    }
}
//-------center image for rectangle pillow - back-------//
var centerImgrectangleBack = function() {
    var parentTop = $("#printer_rectangle_back").height() / 2;
    var parentLeft = $("#printer_rectangle_back").width() / 2;
    var childTop = parentTop - ($("#print-rectangle-back").height() / 2);
    var childLeft = parentLeft - ($("#print-rectangle-back").width() / 2);

    if($("#printer_rectangle_back > .ui-wrapper").length){
       $("#printer_rectangle_back > .ui-wrapper").css('top', childTop + 'px');
       $("#printer_rectangle_back > .ui-wrapper").css('left', childLeft + 'px');
    }else{
       $("#print-rectangle-back").css('top', childTop + 'px');
       $("#print-rectangle-back").css('left', childLeft + 'px');
    }
}


//-------preview image for rectangle pillow - front-------//
var previewImgrectangleFront = function() {
    $("#art-input-rectangle-front").change(function() {

        //Get count of selected files
        var countFiles = $(this)[0].files.length;
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var imgSize = Math.round(($(this)[0].files[0].size / 1024) / 1024);

        var image_holder = $("#printer_rectangle_front");
        image_holder.empty();

        if (imgSize > 10) {
            $('#size-error').show();
            $('#art-input-rectangle-front').val('');
            return false;
        }

        if (extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof(FileReader) != "undefined") {
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles; i++) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                      binImg = e.target.result;
                      input = document.getElementById('art-input-rectangle-front');
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
                                    "id": "print-rectangle-front",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedrectangleFront();
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
                                    "id": "print-rectangle-front",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedrectangleFront();
                            } else {
                                console.log(3);
                                $("<img />", {
                                    "src": binImg,
                                    "id": "print-rectangle-front",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedrectangleFront();
                            }
                        });
                    };
                    $('#pillow-mask-rectangle-front').hide();
                    $('#print-safe-area-rectangle-front').show();
                //    $('#pillow-outline-rectangle-front').addClass("active");
                //    $('#pillow-safe-area-rectangle-front').addClass("active");
                    image_holder.show();
                    reader.readAsDataURL($(this)[0].files[i]);
                    showImgControlsrectangleFront();
                }
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            $('#ext-error').show();
        }
    });
}


//-------preview image for rectangle pillow - back-------//
var previewImgrectangleBack = function() {
    $("#art-input-rectangle-back").change(function() {

        //Get count of selected files
        var countFiles = $(this)[0].files.length;
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var imgSize = Math.round(($(this)[0].files[0].size / 1024) / 1024);

        var image_holder = $("#printer_rectangle_back");
        image_holder.empty();

        if (imgSize > 10) {
            $('#size-error').show();
            $('#art-input-rectangle-back').val('');
            return false;
        }

        if (extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof(FileReader) != "undefined") {
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles; i++) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                      binImg = e.target.result;
                      input = document.getElementById('art-input-rectangle-back');
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
                                    "id": "print-rectangle-back",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedrectangleBack();
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
                                    "id": "print-rectangle-back",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedrectangleBack();
                            } else {
                                console.log(3);
                                $("<img />", {
                                    "src": binImg,
                                    "id": "print-rectangle-back",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedrectangleBack();
                            }
                        });
                    };
                    $('#pillow-mask-rectangle-back').hide();
                    $('#print-safe-area-rectangle-back').show();
                //    $('#pillow-outline-rectangle-back').addClass("active");
                //    $('#pillow-safe-area-rectangle-back').addClass("active");
                    image_holder.show();
                    reader.readAsDataURL($(this)[0].files[i]);
                    showImgControlsrectangleBack();
                }
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            $('#ext-error').show();
        }
    });
}

//-------show image controls (slider, +, - etc) for rectangle pillow - back-------//
var showImgControlsrectangleFront = function() {
  $("#plus-rectangle-front").show();
  $("#minus-rectangle-front").show();
  $("#max-size-rectangle-front").show();
  $("#center-image-rectangle-front").show();
  $('#slider-rectangle-front').show();
}
//-------show image controls (slider, +, - etc) for rectangle pillow - front-------//
var showImgControlsrectangleBack = function() {
  $("#plus-rectangle-back").show();
  $("#minus-rectangle-back").show();
  $("#max-size-rectangle-back").show();
  $("#center-image-rectangle-back").show();
  $('#slider-rectangle-back').show();
}
//-------hide image controls (slider, +, - etc) for rectangle pillow - front-------//
var hideImgControlsrectangleFront = function() {
  $("#plus-rectangle-front").hide();
  $("#minus-rectangle-front").hide();
  $("#max-size-rectangle-front").hide();
  $("#center-image-rectangle-front").hide();
  $('#pillow-mask-rectangle-front').show();
  $('#print-safe-area-rectangle-front').hide();
}
//-------hide image controls (slider, +, - etc) for rectangle pillow - back-------//
var hideImgControlsrectangleBack = function() {
  $("#plus-rectangle-back").hide();
  $("#minus-rectangle-back").hide();
  $("#max-size-rectangle-back").hide();
  $("#center-image-rectangle-back").hide();
  $('#pillow-mask-rectangle-back').show();
  $('#print-safe-area-rectangle-back').hide();
}

//-------load image to print for rectangle pillow - front-------//
var imageLoadedrectangleFront = function() {
    $("#print-rectangle-front").load(function() {
        imgWidth = parseInt($(this).css('width'));
        imgHeight = parseInt($(this).css('height'));
        imgWidthInch = Math.round(imgWidth / dpi);
        imgHeightInch = Math.round(imgHeight / dpi);
        imgWidthProp = Math.round(imgWidth / containerProportion_Rectangle);
        imgHeightProp = imgHeight / containerProportion_Rectangle;
        sliderMax = imgWidthProp;
        if (sliderMax > containerWidthProp_rect) {
            sliderPos = containerWidthProp_rect;
        } else {
            sliderPos = imgWidthProp;
        }
        slideFuncrectangleFront(sliderMax, sliderPos);
        $("#print-rectangle-front").width(sliderPos);
        centerImgrectangleFront();

        $(".resizable").resizable({
                scroll: true,
                handles: "se, sw, nw, ne",
                resize: function(e, ui) {
                  $("#max-image-size-rectangle-front").hide();
                  $("#slider-rectangle-front").slider({orientation: "vertical", value: ui.size.width});
                  console.log("ui.size.width is " + ui.size.width);
                  console.log("sliderMax is " + sliderMax);
                   if (ui.size.width >= sliderMax) {
                  //  $("#dialog").dialog();
                    $('#max-image-size-rectangle-front').show();
                   }
                },
                stop: function(e, ui) {

                },
                maxWidth: sliderMax,
                minWidth: 10,
                aspectRatio: true
          });

        $("#printer_rectangle_front > .ui-wrapper").draggable({
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

//-------load image to print for rectangle pillow - back-------//
var imageLoadedrectangleBack = function() {
    $("#print-rectangle-back").load(function() {
        imgWidth = parseInt($(this).css('width'));
        imgHeight = parseInt($(this).css('height'));
        imgWidthInch = Math.round(imgWidth / dpi);
        imgHeightInch = Math.round(imgHeight / dpi);
        imgWidthProp = Math.round(imgWidth / containerProportion_Rectangle);
        imgHeightProp = imgHeight / containerProportion_Rectangle;
        sliderMax = imgWidthProp;
        if (sliderMax > containerWidthProp_rect) {
            sliderPos = containerWidthProp_rect;
        } else {
            sliderPos = imgWidthProp;
        }
        slideFuncrectangleBack(sliderMax, sliderPos);
        $("#print-rectangle-back").width(sliderPos);
        centerImgrectangleBack();

        $(".resizable").resizable({
                scroll: true,
                handles: "se, sw, nw, ne",
                resize: function(e, ui) {
                  $("#max-image-size-rectangle-back").hide();
                  $("#slider-rectangle-back").slider({orientation: "vertical", value: ui.size.width});
                  console.log("ui.size.width is " + ui.size.width);
                  console.log("sliderMax is " + sliderMax);
                   if (ui.size.width >= sliderMax) {
                  //  $("#dialog").dialog();
                    $('#max-image-size-rectangle-back').show();
                   }
                },
                stop: function(e, ui) {

                },
                maxWidth: sliderMax,
                minWidth: 10,
                aspectRatio: true
          });

        $("#printer_rectangle_back > .ui-wrapper").draggable({
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

//-------enable slider for rectangle pillow - front-------//
var slideFuncrectangleFront = function(m, v) {

    $("#slider-rectangle-front").slider({
        orientation: "vertical",
        range: "min",
        value: v,
        min: 10,
        max: m,
        //this gets a live reading of the value and prints it on the page
        slide: function(event, ui) {
            $("#max-image-size-rectangle-front").hide();
            $("#print-rectangle-front").width(ui.value);
            $("#print-rectangle-front").height('auto');
            $("#printer_rectangle_front > .ui-wrapper").width(ui.value);
            $("#printer_rectangle_front > .ui-wrapper").height($("#print-rectangle-front").height());
            console.log("m is " + m);
            console.log("ui.value is " + ui.value);
            if (ui.value >= m) {
            //    $("#dialog").dialog();
                $('#max-image-size-rectangle-front').show();
            }
        },
        //this updates the value of your hidden field when user stops dragging
        change: function(event, ui) {

        }
    });
  }
  //-------enable slider for rectangle pillow - back-------//
  var slideFuncrectangleBack = function(m, v) {

      $("#slider-rectangle-back").slider({
          orientation: "vertical",
          range: "min",
          value: v,
          min: 10,
          max: m,
          //this gets a live reading of the value and prints it on the page
          slide: function(event, ui) {
              $("#max-image-size-rectangle-back").hide();
              $("#print-rectangle-back").width(ui.value);
              $("#print-rectangle-back").height('auto');
              $("#printer_rectangle_back > .ui-wrapper").width(ui.value);
              $("#printer_rectangle_back > .ui-wrapper").height($("#print-rectangle-back").height());
              console.log("m is " + m);
              console.log("ui.value is " + ui.value);
              if (ui.value >= m) {
              //    $("#dialog").dialog();
                  $('#max-image-size-rectangle-back').show();
              }
          },
          //this updates the value of your hidden field when user stops dragging
          change: function(event, ui) {

          }
      });
    }

  var closeIconrectangleFront = $("#close-max-image-size-rectangle-front");
  closeIconrectangleFront.click(function() {
      $("#max-image-size-rectangle-front").hide();
  });

  var closeIconrectangleBack = $("#close-max-image-size-rectangle-back");
  closeIconrectangleBack.click(function() {
      $("#max-image-size-rectangle-back").hide();
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

/********** download the image for rectangle pillow***********/
$('#download-rectangle-front').click(function(e) {

  /********** create image for rectangle pillow front ***********/
  if ($.trim($("#print-rectangle-front").attr("src")) != "" || $.trim($("#print-rectangle-back").attr("src")) != "") {

      var color = '#ffffff';

      var front_parent_width = $('#printer_rectangle_front').width();
      var front_parent_height = $('#printer_rectangle_front').height();

      if ($.trim($("#print-rectangle-front").attr("src")) != "") {
        var front_print_width = $('#print-rectangle-front').width();
        var front_print_height = $('#print-rectangle-front').height();
        var positionX =  ($('#printer_rectangle_front > .ui-wrapper').position().left);
        var positionY = ($('#printer_rectangle_front > .ui-wrapper').position().top);
        var poster_front = document.getElementById("print-rectangle-front");
      }

      var positionXback = parseInt($('#print-rectangle-back').parent().css("left"));
      var positionYback = parseInt($('#print-rectangle-back').parent().css("top"));
      var back_print_width = $('#print-rectangle-back').width();
      var back_print_height = $('#print-rectangle-back').parent().height();

      c = document.getElementById("cloner_front");
      c.width = $('#printer_rectangle_front').width();
      c.height = $('#printer_rectangle_front').height();
      ctx = c.getContext("2d");
      ctx.fillStyle = color;

      ctx.fillRect(0, 0, $('#printer_rectangle_front').width(), $('#printer_rectangle_front').height());
      var pillow_backing = document.getElementById("download-pillow-rectangle-back");
      var poster_front = document.getElementById("print-rectangle-front");
      var poster_back = document.getElementById("print-rectangle-back");
      var mask = document.getElementById("download-pillow-rectangle-cover");


      ctx.drawImage(pillow_backing, 0, 0);
      if ($.trim($("#print-rectangle-front").attr("src")) !== "") {
          ctx.drawImage(poster_front, positionX, positionY, front_print_width, front_print_height);
      }
      ctx.drawImage(mask, 0, 0);


      c2 = document.getElementById("cloner_back");
      c2.width = $('#printer_rectangle_front').width();
      c2.height = $('#printer_rectangle_front').height();
      ctx2 = c2.getContext("2d");
      ctx2.fillStyle = color;

      ctx2.drawImage(pillow_backing, 0, 0);
      if ($.trim($("#print-rectangle-back").attr("src")) !== "") {
          ctx2.drawImage(poster_back, positionXback, positionYback, back_print_width, back_print_height);
      }
      ctx2.drawImage(mask, 0, 0);


      c3 = document.getElementById("cloner_final");
      c3.width = $('#printer_rectangle_front').width();
      c3.height = $('#printer_rectangle_front').height() * 2;
      ctx3 = c3.getContext("2d");
      ctx3.fillStyle = color;
      ctx3.drawImage(c, 0, 0);
      ctx3.drawImage(c2, 0, parseInt($('#printer_rectangle_front').height()));

      if (c3.msToBlob) { //for IE
          var blob = c3.msToBlob();
          saveAs(blob, "pillow-rectangle-design.png");
          ctx3.clearRect(0, 0, c3.width, c3.height);
      } else {
          //other browsers
          c3.toBlob(function(blob) {
              saveAs(blob, "pillow-rectangle-design.png");
              ctx3.clearRect(0, 0, c3.width, c3.height);
          });
      }
  }
});
/********** download the image for rectangle pillow***********/
$('#download-rectangle-back').click(function(e) {

    /********** create image for rectangle pillow front ***********/
    if ($.trim($("#print-rectangle-back").attr("src")) !== "" || $.trim($("#print-rectangle-front").attr("src")) !== "") {

        var color = '#ffffff';
        var front_parent_width = $('#printer_rectangle_front').width();
        var front_parent_height = $('#printer_rectangle_front').height();
        var front_print_width = $('#print-rectangle-front').width();

        var front_print_height = $('#print-rectangle-front').parent().height();

        var positionX = parseInt($('#print-rectangle-front').parent().css("left"));
        var positionY = parseInt($('#print-rectangle-front').parent().css("top"));

        if ($.trim($("#print-rectangle-back").attr("src")) !== "") {
            var positionXback = $('#printer_rectangle_back > .ui-wrapper').position().left;
            var positionYback = $('#printer_rectangle_back > .ui-wrapper').position().top;
            var back_print_width = $('#print-rectangle-back').width();
            var back_print_height = $('#print-rectangle-back').height();
        }

        c = document.getElementById("cloner_front");
        c.width = $('#printer_rectangle_front').width();
        c.height = $('#printer_rectangle_front').height();
        ctx = c.getContext("2d");
        ctx.fillStyle = color;

        ctx.fillRect(0, 0, $('#printer_rectangle_front').width(), $('#printer_rectangle_front').height());
        var pillow_backing = document.getElementById("download-pillow-rectangle-back");
        var poster_front = document.getElementById("print-rectangle-front");
        var poster_back = document.getElementById("print-rectangle-back");
        var mask = document.getElementById("download-pillow-rectangle-cover");


        ctx.drawImage(pillow_backing, 0, 0);
        if ($.trim($("#print-rectangle-front").attr("src")) !== "") {
            ctx.drawImage(poster_front, positionX, positionY, front_print_width, front_print_height);
        }
        ctx.drawImage(mask, 0, 0);


        c2 = document.getElementById("cloner_back");
        c2.width = $('#printer_rectangle_front').width();
        c2.height = $('#printer_rectangle_front').height();
        ctx2 = c2.getContext("2d");
        ctx2.fillStyle = color;

        ctx2.drawImage(pillow_backing, 0, 0);
        if ($.trim($("#print-rectangle-back").attr("src")) !== "") {
            ctx2.drawImage(poster_back, positionXback, positionYback, back_print_width, back_print_height);
        }
        ctx2.drawImage(mask, 0, 0);


        c3 = document.getElementById("cloner_final");
        c3.width = $('#printer_rectangle_front').width();
        c3.height = $('#printer_rectangle_front').height() * 2;
        ctx3 = c3.getContext("2d");
        ctx3.fillStyle = color;
        ctx3.drawImage(c, 0, 0);
        ctx3.drawImage(c2, 0, parseInt($('#printer_rectangle_front').height()));

        if (c3.msToBlob) { //for IE
            var blob = c3.msToBlob();
            saveAs(blob, "pillow-rectangle-design.png");
            ctx3.clearRect(0, 0, c3.width, c3.height);
        } else {
            //other browsers
            c3.toBlob(function(blob) {
                saveAs(blob, "pillow-rectangle-design.png");
                ctx3.clearRect(0, 0, c3.width, c3.height);
            });
        }
    }
});
/********** when click on remove art for rectangle pillow front***********/
var removePillowArt_rectangle_front = function() {
  $('#printer_rectangle_front').html("").hide();
  $('#slider-rectangle-front').hide();
  $('#art-input-rectangle-front').val('');
  hideImgControlsrectangleFront();
}

/********** when click on remove art for rectangle pillow back***********/
var removePillowArt_rectangle_back = function() {
  $('#printer_rectangle_back').html("").hide();
  $('#slider-rectangle-back').hide();
  $('#art-input-rectangle-back').val('');
  hideImgControlsrectangleBack();
}

/********** switch between rectangle pillow front and back design views***********/
var switch_front_back_rectangle = function(e) {
  if (!$(e).hasClass("active")) {
    $(e).addClass("active");
  }

  if ($(e).hasClass("pillow-front")) {
    console.log($("#pillow-rectangle-controls-wrapper .pillow-front"));
    $("#pillow-rectangle-controls-wrapper .pillow-front").addClass("active");
    $("#pillow-rectangle-controls-wrapper .pillow-back").removeClass("active");
    $('#rectangle-pillow-front').show();
    $('#rectangle-pillow-back').hide();
    $('#add-pillow-bottom-rectangle-front').show();
    $('#add-pillow-bottom-rectangle-back').hide();
    $("#max-image-size-rectangle-front").hide();
  }
  else if ($(e).hasClass("pillow-back")) {
    $("#pillow-rectangle-controls-wrapper .pillow-front").removeClass("active");
    $("#pillow-rectangle-controls-wrapper .pillow-back").addClass("active");
    $('#rectangle-pillow-front').hide();
    $('#rectangle-pillow-back').show();
    $('#add-pillow-bottom-rectangle-front').hide();
    $('#add-pillow-bottom-rectangle-back').show();
    $("#max-image-size-rectangle-back").hide();
  }
}
