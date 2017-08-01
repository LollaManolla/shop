/* Image DPI */
var dpi = 150;

/********************** vars for square pillows *********************/
/* Proportion of square pillow print */
var containerProportion_Square = 7;
/* Print container area height/width inch for square pillow */
var containerInch_square = 18;
/* Print container area width px */
var containerPx_square = containerInch_square * dpi;
/* Print container area proportion width px */
var containerWidthProp_square = containerPx_square / containerProportion_Square;

/* Initialize global variables */
var imgWidth, imgHeight, imgWidthInch, imgHeightInch, imgWidthProp, imgHeightProp;
var sliderMax = 100,
    sliderPos = 0;
/* Page fully loaded */
$(function() {

    $("#printer_square_front").width(containerWidthProp_square);
    $("#printer_square_front").height(containerWidthProp_square);
    $("#printer_square_front").css("margin-left", -(containerWidthProp_square/2)+ "px");

    $("#printer_square_back").width(containerWidthProp_square);
    $("#printer_square_back").height(containerWidthProp_square);
    $("#printer_square_back").css("margin-left", -(containerWidthProp_square/2)+ "px");

  //  squarePillow

    $("#squarePillow").prop('checked', true);
    $("#rectanglePillow").prop('checked', false);

    previewImgSquareFront();
    previewImgSquareBack();
    mouseControlSquareFront();
    mouseControlSquareBack();


//    changePrint();

  //-------switch between rectangular and square pillow design templates-------//
    $("input[name=pillowtype]").on( "change", function() {
      var pillow_type = $(this).val();
      if (pillow_type == "square") {
        $("#pillow-square-controls-wrapper").show();
        $("#pillow-rectangle-controls-wrapper").hide();
        $("#square-pillow-templates-wrapper").show();
        $("#rectangle-pillow-templates-wrapper").hide();
        removePillowArt_rectangle_front();
        removePillowArt_rectangle_back();
        $('#add-pillow-bottom-rectangle-front > .bootstrap-tagsinput').find('span').remove();
        $('#add-pillow-bottom-rectangle-back > .bootstrap-tagsinput').find('span').remove();
        $("#pillow-square-controls-wrapper .pillow-front").addClass("active");
        $("#pillow-square-controls-wrapper .pillow-back").removeClass("active");
        $('#square-pillow-front').show();
        $('#square-pillow-back').hide();
        $('#add-pillow-bottom-square-front').show();
        $('#add-pillow-bottom-square-back').hide();
      }
      else if (pillow_type == "rectangle") {
        $("#pillow-square-controls-wrapper").hide();
        $("#pillow-rectangle-controls-wrapper").show();
        $("#square-pillow-templates-wrapper").hide();
        $("#rectangle-pillow-templates-wrapper").show();
        removePillowArt_Square_back();
        removePillowArt_Square_front();
        $('#add-pillow-bottom-square-front > .bootstrap-tagsinput').find('span').remove();
        $('#add-pillow-bottom-square-back > .bootstrap-tagsinput').find('span').remove();
        $("#pillow-rectangle-controls-wrapper .pillow-front").addClass("active");
        $("#pillow-rectangle-controls-wrapper .pillow-back").removeClass("active");
        $('#rectangle-pillow-front').show();
        $('#rectangle-pillow-back').hide();
        $('#add-pillow-bottom-rectangle-front').show();
        $('#add-pillow-bottom-rectangle-back').hide();
      }

    } );

    //-------max-size image for square pillow - front-------//
    $("#max-size-square-front").click(function() {
        $("#print-square-front").width($("#slider-square-front").slider("option", "max"));
        $("#print-square-front").height('auto');
        $("#printer_square_front > .ui-wrapper").width($("#print-square-front").width());
        $("#printer_square_front > .ui-wrapper").height($("#print-square-front").height());
        $("#slider-square-front").slider('value', $("#slider-square-front").slider("option", "max"));
        centerImgSquareFront();

    });
    //-------max-size image for square pillow - back-------//
    $("#max-size-square-back").click(function() {
        $("#print-square-back").width($("#slider-square-back").slider("option", "max"));
        $("#print-square-back").height('auto');
        $("#printer_square_back > .ui-wrapper").width($("#print-square-back").width());
        $("#printer_square_back > .ui-wrapper").height($("#print-square-back").height());
        $("#slider-square-back").slider('value', $("#slider-square-back").slider("option", "max"));
        centerImgSquareBack();

    });


    $("#center-image-square-front").click(function() {
        centerImgSquareFront();
    });

    $("#center-image-square-back").click(function() {
        centerImgSquareBack();
    });
});
//-------mouse control drag for square pillow - front-------//
var mouseControlSquareFront = function() {
    $("#printer_square_front")
        .mouseenter(function() {
            $('#print-square-front').mousedown();
            $("#printer_square_front").css('background', 'rgba(0, 0, 0, 0.3)');
            $("#printer_square_front > .ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('#print-square-front').mouseup();
            $("#printer_square_front").css('background', 'rgba(0, 0, 0, 0.0)');
            $("#printer_square_front > .ui-wrapper").css('border', '0px dashed #4affff');
        });

    }
    //-------mouse control drag for square pillow - back-------//
    var mouseControlSquareBack = function() {

        $("#printer_square_back")
            .mouseenter(function() {
                $('#print-square-back').mousedown();
                $("#printer_square_back").css('background', 'rgba(0, 0, 0, 0.3)');
                $("#printer_square_back > .ui-wrapper").css('border', '1px dashed #4affff');
            })
            .mouseleave(function() {
                $('#print-square-back').mouseup();
                $("#printer_square_back").css('background', 'rgba(0, 0, 0, 0.0)');
                $("#printer_square_back > .ui-wrapper").css('border', '0px dashed #4affff');
            });
}
//-------center image for square pillow - front-------//
var centerImgSquareFront = function() {
    var parentTop = $("#printer_square_front").height() / 2;
    var parentLeft = $("#printer_square_front").width() / 2;
    var childTop = parentTop - ($("#print-square-front").height() / 2);
    var childLeft = parentLeft - ($("#print-square-front").width() / 2);

    if($("#printer_square_front > .ui-wrapper").length){
       $("#printer_square_front > .ui-wrapper").css('top', childTop + 'px');
       $("#printer_square_front > .ui-wrapper").css('left', childLeft + 'px');
    }else{
       $("#print-square-front").css('top', childTop + 'px');
       $("#print-square-front").css('left', childLeft + 'px');
    }
}
//-------center image for square pillow - back-------//
var centerImgSquareBack = function() {
    var parentTop = $("#printer_square_back").height() / 2;
    var parentLeft = $("#printer_square_back").width() / 2;
    var childTop = parentTop - ($("#print-square-back").height() / 2);
    var childLeft = parentLeft - ($("#print-square-back").width() / 2);

    if($("#printer_square_back > .ui-wrapper").length){
       $("#printer_square_back > .ui-wrapper").css('top', childTop + 'px');
       $("#printer_square_back > .ui-wrapper").css('left', childLeft + 'px');
    }else{
       $("#print-square-back").css('top', childTop + 'px');
       $("#print-square-back").css('left', childLeft + 'px');
    }
}


//-------preview image for square pillow - front-------//
var previewImgSquareFront = function() {
    $("#art-input-square-front").change(function() {

        //Get count of selected files
        var countFiles = $(this)[0].files.length;
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var imgSize = Math.round(($(this)[0].files[0].size / 1024) / 1024);

        var image_holder = $("#printer_square_front");
        image_holder.empty();

        if (imgSize > 10) {
            $('#size-error').show();
            $('#art-input-square-front').val('');
            return false;
        }

        if (extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof(FileReader) != "undefined") {
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles; i++) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        $("<img />", {
                            "src": e.target.result,
                            "id": "print-square-front",
                            "class": "draggable resizable"
                        }).appendTo(image_holder);
                        imageLoadedSquareFront();
                    }
                    $('#pillow-mask-square-front').hide();
                    $('#print-safe-area-square-front').show();
                //    $('#pillow-outline-square-front').addClass("active");
                //    $('#pillow-safe-area-square-front').addClass("active");
                    image_holder.show();
                    reader.readAsDataURL($(this)[0].files[i]);
                    showImgControlsSquareFront();


                }
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            $('#ext-error').show();
        }
    });
}

//-------preview image for square pillow - back-------//
var previewImgSquareBack = function() {
    $("#art-input-square-back").change(function() {

        //Get count of selected files
        var countFiles = $(this)[0].files.length;
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var imgSize = Math.round(($(this)[0].files[0].size / 1024) / 1024);

        var image_holder = $("#printer_square_back");
        image_holder.empty();

        if (imgSize > 10) {
            $('#size-error').show();
            $('#art-input-square-back').val('');
            return false;
        }

        if (extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof(FileReader) != "undefined") {
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles; i++) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        $("<img />", {
                            "src": e.target.result,
                            "id": "print-square-back",
                            "class": "draggable resizable"
                        }).appendTo(image_holder);
                        imageLoadedSquareBack();
                    }
                    $('#pillow-mask-square-back').hide();
                    $('#print-safe-area-square-back').show();
                //    $('#pillow-outline-square-back').addClass("active");
                //    $('#pillow-safe-area-square-back').addClass("active");
                    image_holder.show();
                    reader.readAsDataURL($(this)[0].files[i]);
                    showImgControlsSquareBack();

                }
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            $('#ext-error').show();
        }
    });
}

//-------show image controls (slider, +, - etc) for square pillow - back-------//
var showImgControlsSquareFront = function() {
  $("#plus-square-front").show();
  $("#minus-square-front").show();
  $("#max-size-square-front").show();
  $("#center-image-square-front").show();
  $('#slider-square-front').show();
}
//-------show image controls (slider, +, - etc) for square pillow - front-------//
var showImgControlsSquareBack = function() {
  $("#plus-square-back").show();
  $("#minus-square-back").show();
  $("#max-size-square-back").show();
  $("#center-image-square-back").show();
  $('#slider-square-back').show();
}
//-------hide image controls (slider, +, - etc) for square pillow - front-------//
var hideImgControlsSquareFront = function() {
  $("#plus-square-front").hide();
  $("#minus-square-front").hide();
  $("#max-size-square-front").hide();
  $("#center-image-square-front").hide();
  $('#pillow-mask-square-front').show();
  $('#print-safe-area-square-front').hide();
}
//-------hide image controls (slider, +, - etc) for square pillow - back-------//
var hideImgControlsSquareBack = function() {
  $("#plus-square-back").hide();
  $("#minus-square-back").hide();
  $("#max-size-square-back").hide();
  $("#center-image-square-back").hide();
  $('#pillow-mask-square-back').show();
  $('#print-safe-area-square-back').hide();
}

//-------load image to print for square pillow - front-------//
var imageLoadedSquareFront = function() {
    $("#print-square-front").load(function() {
        imgWidth = parseInt($(this).css('width'));
        imgHeight = parseInt($(this).css('height'));
        imgWidthInch = Math.round(imgWidth / dpi);
        imgHeightInch = Math.round(imgHeight / dpi);
        imgWidthProp = Math.round(imgWidth / containerProportion_Square);
        imgHeightProp = imgHeight / containerProportion_Square;
        sliderMax = imgWidthProp;
        if (sliderMax > containerWidthProp_square) {
            sliderPos = containerWidthProp_square;
        } else {
            sliderPos = imgWidthProp;
        }
        slideFuncSquareFront(sliderMax, sliderPos);
        $("#print-square-front").width(sliderPos);
        centerImgSquareFront();

        $(".resizable").resizable({
                scroll: true,
                handles: "se, sw, nw, ne",
                resize: function(e, ui) {
                  $("#max-image-size-square-front").hide();
                  $("#slider-square-front").slider({orientation: "vertical", value: ui.size.width});
                  console.log("ui.size.width is " + ui.size.width);
                  console.log("sliderMax is " + sliderMax);

                   if (ui.size.width >= sliderMax) {
                  //  $("#dialog").dialog();
                    $('#max-image-size-square-front').show();
                   }
                },
                stop: function(e, ui) {

                },
                maxWidth: sliderMax,
                minWidth: 10,
                aspectRatio: true
          });

        $("#printer_square_front > .ui-wrapper").draggable({
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

//-------load image to print for square pillow - back-------//
var imageLoadedSquareBack = function() {
    $("#print-square-back").load(function() {
        imgWidth = parseInt($(this).css('width'));
        imgHeight = parseInt($(this).css('height'));
        imgWidthInch = Math.round(imgWidth / dpi);
        imgHeightInch = Math.round(imgHeight / dpi);
        imgWidthProp = Math.round(imgWidth / containerProportion_Square);
        imgHeightProp = imgHeight / containerProportion_Square;
        sliderMax = imgWidthProp;
        if (sliderMax > containerWidthProp_square) {
            sliderPos = containerWidthProp_square;
        } else {
            sliderPos = imgWidthProp;
        }
        slideFuncSquareBack(sliderMax, sliderPos);
        $("#print-square-back").width(sliderPos);
        centerImgSquareBack();

        $(".resizable").resizable({
                scroll: true,
                handles: "se, sw, nw, ne",
                resize: function(e, ui) {
                  $("#max-image-size-square-back").hide();
                  $("#slider-square-back").slider({orientation: "vertical", value: ui.size.width});
                  console.log("ui.size.width is " + ui.size.width);
                  console.log("sliderMax is " + sliderMax);
                   if (ui.size.width >= sliderMax) {
                  //  $("#dialog").dialog();
                    $('#max-image-size-square-back').show();
                   }
                },
                stop: function(e, ui) {

                },
                maxWidth: sliderMax,
                minWidth: 10,
                aspectRatio: true
          });

        $("#printer_square_back > .ui-wrapper").draggable({
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

//-------enable slider for square pillow - front-------//
var slideFuncSquareFront = function(m, v) {

    $("#slider-square-front").slider({
        orientation: "vertical",
        range: "min",
        value: v,
        min: 10,
        max: m,
        //this gets a live reading of the value and prints it on the page
        slide: function(event, ui) {
            $("#max-image-size-square-front").hide();
            $("#print-square-front").width(ui.value);
            $("#print-square-front").height('auto');
            $("#printer_square_front > .ui-wrapper").width(ui.value);
            $("#printer_square_front > .ui-wrapper").height($("#print-square-front").height());
            console.log("m is " + m);
            console.log("ui.value is " + ui.value);
            if (ui.value >= m) {
            //    $("#dialog").dialog();
                $('#max-image-size-square-front').show();
            }

        },
        //this updates the value of your hidden field when user stops dragging
        change: function(event, ui) {

        }
    });
  }
  //-------enable slider for square pillow - back-------//
  var slideFuncSquareBack = function(m, v) {

      $("#slider-square-back").slider({
          orientation: "vertical",
          range: "min",
          value: v,
          min: 10,
          max: m,
          //this gets a live reading of the value and prints it on the page
          slide: function(event, ui) {
              $("#max-image-size-square-back").hide();
              $("#print-square-back").width(ui.value);
              $("#print-square-back").height('auto');
              $("#printer_square_back > .ui-wrapper").width(ui.value);
              $("#printer_square_back > .ui-wrapper").height($("#print-square-back").height());
              console.log("m is " + m);
              console.log("ui.value is " + ui.value);
              if (ui.value >= m) {
              //    $("#dialog").dialog();
                  $('#max-image-size-square-back').show();
              }

          },
          //this updates the value of your hidden field when user stops dragging
          change: function(event, ui) {

          }
      });
    }

  var closeIconSquareFront = $("#close-max-image-size-square-front");
  closeIconSquareFront.click(function() {
      $("#max-image-size-square-front").hide();
  });

  var closeIconSquareBack = $("#close-max-image-size-square-back");
  closeIconSquareBack.click(function() {
      $("#max-image-size-square-back").hide();
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

/********** download the image for square pillow***********/
$('#download-square-front').click(function(e) {

  /********** create image for square pillow front ***********/
  if ($.trim($("#print-square-front").attr("src")) != "" || $.trim($("#print-square-back").attr("src")) != "") {

      var color = '#ffffff';

      var front_parent_width = $('#printer_square_front').width();
      var front_parent_height = $('#printer_square_front').height();

      if ($.trim($("#print-square-front").attr("src")) != "") {
        var front_print_width = $('#print-square-front').width();
        var front_print_height = $('#print-square-front').height();
        var positionX =  ($('#printer_square_front > .ui-wrapper').position().left);
        var positionY = ($('#printer_square_front > .ui-wrapper').position().top);
        var poster_front = document.getElementById("print-square-front");
      }

/*
      var positionXback =  parseInt($('#printer_square_back > .ui-wrapper').css("left"));
      var positionYback = ($('#printer_square_front').height() + parseInt($('#printer_square_back > .ui-wrapper').css("top")));
      var back_print_width = $('#print-square-back').width();
      var back_print_height = $('#print-square-back').parent().height();
*/

      var positionXback = parseInt($('#print-square-back').parent().css("left"));
      var positionYback = parseInt($('#printer_square_front').height()) + parseInt($('#print-square-back').parent().css("top"));
      var back_print_width = $('#print-square-back').width();
      var back_print_height = $('#print-square-back').parent().height();



    //  var back_print_height = $('#printer_square_front').position().top;
      c = document.getElementById("cloner_square_front");
      c.width = $('#printer_square_front').width();
      c.height = $('#printer_square_front').height() * 2;
      ctx = c.getContext("2d");
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, $('#printer_square_front').width(), $('#printer_square_front').height());
      var pillow_backing = document.getElementById("download-pillow-square-back");

      var poster_back = document.getElementById("print-square-back");
      var mask = document.getElementById("download-pillow-square-cover");

      ctx.drawImage(pillow_backing, 0, 0);
      if ($.trim($("#print-square-front").attr("src")) != "") {
        ctx.drawImage(poster_front, positionX, positionY, front_print_width, front_print_height);
      }

      ctx.drawImage(pillow_backing, 0, $('#printer_square_front').height());
      if ($.trim($("#print-square-back").attr("src")) != "") {


        var printBack = document.getElementById('print-square-back');
        var slice = printBack.getBoundingClientRect();
        var sliceTop = slice.top;
        var sliceBottom = slice.bottom;
        var sliceLeft = slice.left;
        var sliceRight = slice.right;



        ctx.drawImage(poster_back, positionXback, positionYback, back_print_width, back_print_height);
      }
      ctx.drawImage(mask, 0, 0);
      ctx.drawImage(mask, 0, $('#printer_square_front').height());

      if (c.msToBlob) { //for IE
          var blob = c.msToBlob();
          saveAs(blob, "pillow-square-design.png");
          ctx.clearRect(0, 0, c.width, c.height);
      } else {
          //other browsers
          c.toBlob(function(blob) {
              saveAs(blob, "pillow-square-design.png");
              ctx.clearRect(0, 0, c.width, c.height);
          });
      }
  }
});
/********** download the image for square pillow***********/
$('#download-square-back').click(function(e) {

  /********** create image for square pillow front ***********/
  if ($.trim($("#print-square-back").attr("src")) != "" || $.trim($("#print-square-front").attr("src")) != "") {

      var color = '#ffffff';
      var front_parent_width = $('#printer_square_front').width();
      var front_parent_height = $('#printer_square_front').height();
      var front_print_width = $('#print-square-front').width();
      var front_print_height = $('#print-square-front').parent().height();

/*
      var positionX =  parseInt($('#printer_square_front > .ui-wrapper').css("left"));
      var positionY = parseInt($('#printer_square_front > .ui-wrapper').css("top"));
*/
      var positionX = parseInt($('#print-square-front').parent().css("left"));
      var positionY = parseInt($('#print-square-front').parent().css("top"));

      if ($.trim($("#print-square-back").attr("src")) != "") {
        var positionXback =  ($('#printer_square_back > .ui-wrapper').position().left);
        var positionYback = ($('#printer_square_back > .ui-wrapper').position().top + $('#printer_square_front').height());
        var back_print_width = $('#print-square-back').width();
        var back_print_height = $('#print-square-back').height();
      }

      c = document.getElementById("cloner_square_back");
      c.width = $('#printer_square_front').width();
      c.height = $('#printer_square_front').height() * 2;
      ctx = c.getContext("2d");
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, $('#printer_square_front').width(), $('#printer_square_front').height());
      var pillow_backing = document.getElementById("download-pillow-square-back");
      var poster_front = document.getElementById("print-square-front");
      var poster_back = document.getElementById("print-square-back");
      var mask = document.getElementById("download-pillow-square-cover");

      ctx.drawImage(pillow_backing, 0, 0);
      if ($.trim($("#print-square-front").attr("src")) != "") {
        ctx.drawImage(poster_front, positionX, positionY, front_print_width, front_print_height);
      }

      ctx.drawImage(pillow_backing, 0, $('#printer_square_front').height());
      if ($.trim($("#print-square-back").attr("src")) != "") {

        var printBack = document.getElementById('print-square-back');
        var slice = printBack.getBoundingClientRect();
        var sliceTop = slice.top;
        var sliceBottom = slice.bottom;
        var sliceLeft = slice.left;
        var sliceRight = slice.right;

        ctx.drawImage(poster_back, positionXback, positionYback, back_print_width, back_print_height);
      }
      ctx.drawImage(mask, 0, 0);
      ctx.drawImage(mask, 0, $('#printer_square_front').height());

      if (c.msToBlob) { //for IE
          var blob = c.msToBlob();
          saveAs(blob, "pillow-square-design.png");
          ctx.clearRect(0, 0, c.width, c.height);
      } else {
          //other browsers
          c.toBlob(function(blob) {
              saveAs(blob, "pillow-square-design.png");
              ctx.clearRect(0, 0, c.width, c.height);
          });
      }
  }
});

/********** when click on remove art for square pillow front***********/
var removePillowArt_Square_front = function() {
  $('#printer_square_front').html("");
  $('#slider-square-front').hide();
  $('#art-input-square-front').val('');
  hideImgControlsSquareFront();
}

/********** when click on remove art for square pillow back***********/
var removePillowArt_Square_back = function() {
  $('#printer_square_back').html("");
  $('#slider-square-back').hide();
  $('#art-input-square-back').val('');
  hideImgControlsSquareBack();
}

/********** switch between square pillow front and back design views***********/
var switch_front_back_square = function(e) {
  if (!$(e).hasClass("active")) {
    $(e).addClass("active");
  }

  if ($(e).hasClass("pillow-front")) {
    $("#pillow-square-controls-wrapper .pillow-front").addClass("active");
    $("#pillow-square-controls-wrapper .pillow-back").removeClass("active");
    $('#square-pillow-front').show();
    $('#square-pillow-back').hide();
    $('#add-pillow-bottom-square-front').show();
    $('#add-pillow-bottom-square-back').hide();
    $("#max-image-size-square-front").hide();
  }
  else if ($(e).hasClass("pillow-back")) {
    $("#pillow-square-controls-wrapper .pillow-front").removeClass("active");
    $("#pillow-square-controls-wrapper .pillow-back").addClass("active");
    $('#square-pillow-front').hide();
    $('#square-pillow-back').show();
    $('#add-pillow-bottom-square-front').hide();
    $('#add-pillow-bottom-square-back').show();
    $("#max-image-size-square-back").hide();
  }
}
