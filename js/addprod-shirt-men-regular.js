/* Image DPI */
var dpi = 150;

/********************** vars for shirts *********************/
/* Proportion of shirt print */
var containerProportion = 8;
/* Print container area height inch for shirt */
var containerHeightInch = 16;
/* Print container area width inch for shirt */
var containerWidthInch = 12;
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

    $("#printer_front_men").width(containerWidthProp - 2);
    $("#printer_front_men").height(containerHeightProp - 2);
    $("#printer_front_men").css("margin-left", -(containerWidthProp/2)+ "px");

    $("#printer_back_men").width(containerWidthProp - 2);
    $("#printer_back_men").height(containerHeightProp - 2);
    $("#printer_back_men").css("margin-left", -(containerWidthProp/2)+ "px");

    $("#genderm").prop('checked', true);
    $("#genderw").prop('checked', false);


    previewImgMenFront();
    previewImgMenBack();

    mouseControlMenFront();
    mouseControlMenBack();

//    changePrint();

//-------switch between all-over and regular design templates-------//
  $("input[name=gender]").on( "change", function() {
    var gender_type = $(this).val();
    if (gender_type == "men") {
      $("#shirt-men-controls-wrapper").show();
      $("#shirt-women-controls-wrapper").hide();
      $("#men-templates-wrapper").show();
      $("#women-templates-wrapper").hide();
      removeShirtArt_front_women();
      removeShirtArt_back_women();
      $('.bootstrap-tagsinput').find('span').remove();
      $("#shirt-icons-men .shirt-front").addClass("active");
      $("#shirt-icons-men .shirt-back").removeClass("active");
      $('#men-shirt-front').show();
      $('#men-shirt-back').hide();
      $('#men-shirt-bottom-front').show();
      $('#men-shirt-bottom-back').hide();
      $('#women-shirt-bottom-front').hide();
      $('#women-shirt-bottom-back').hide();
    }
    else if (gender_type == "women") {
      $("#shirt-men-controls-wrapper").hide();
      $("#shirt-women-controls-wrapper").show();
      $("#men-templates-wrapper").hide();
      $("#women-templates-wrapper").show();
      removeShirtArt_front_men();
      removeShirtArt_back_men();
      $('.bootstrap-tagsinput').find('span').remove();
      $("#shirt-icons-women .shirt-front").addClass("active");
      $("#shirt-icons-women .shirt-back").removeClass("active");
      $('#women-shirt-front').show();
      $('#women-shirt-back').hide();
      $('#men-shirt-bottom-front').hide();
      $('#men-shirt-bottom-back').hide();
      $('#women-shirt-bottom-front').show();
      $('#women-shirt-bottom-back').hide();
    }

  } );


    //-------max-size image for men's shirt - front-------//
    $("#max-size-men-front").click(function() {
        $("#print-men-front").width($("#slider-front-men").slider("option", "max"));
        $("#print-men-front").height('auto');
        $("#printer_front_men > .ui-wrapper").width($("#print-men-front").width());
        $("#printer_front_men > .ui-wrapper").height($("#print-men-front").height());
        $("#slider-front-men").slider('value', $("#slider-front-men").slider("option", "max"));
        centerImgMenFront();
    });
    //-------max-size image for men's shirt - back-------//
    $("#max-size-men-back").click(function() {
        $("#print-men-back").width($("#slider-back-men").slider("option", "max"));
        $("#print-men-back").height('auto');
        $("#printer_back_men > .ui-wrapper").width($("#print-men-back").width());
        $("#printer_back_men > .ui-wrapper").height($("#print-men-back").height());
        $("#slider-back-men").slider('value', $("#slider-back-men").slider("option", "max"));
        centerImgMenBack();
    });


    $("#center-image-men-front").click(function() {
        centerImgMenFront();
    });

    $("#center-image-men-back").click(function() {
        centerImgMenBack();
    });
});
//-------mouse control drag for men shirt - front-------//
var mouseControlMenFront = function() {
    $("#printer_front_men")
        .mouseenter(function() {
            $('#print-men-front').mousedown();
            $("#printer_front_men").css('background', 'rgba(0, 0, 0, 0.3)');
            $("#printer_front_men > .ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('#print-men-front').mouseup();
            $("#printer_front_men").css('background', 'rgba(0, 0, 0, 0.0)');
            $("#printer_front_men > .ui-wrapper").css('border', '0px dashed #4affff');
        });

}
//-------mouse control drag for men shirt - back-------//
var mouseControlMenBack = function() {

  $("#printer_back_men")
        .mouseenter(function() {
            $('#print-men-back').mousedown();
            $("#printer_back_men").css('background', 'rgba(0, 0, 0, 0.3)');
            $("#printer_back_men > .ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('#print-men-back').mouseup();
            $("#printer_back_men").css('background', 'rgba(0, 0, 0, 0.0)');
            $("#printer_back_men > .ui-wrapper").css('border', '0px dashed #4affff');
        });
}
//-------center image for men shirt - front-------//
var centerImgMenFront = function() {
    var parentTop = $("#printer_front_men").height() / 2;
    var parentLeft = $("#printer_front_men").width() / 2;
    var childTop = parentTop - ($("#print-men-front").height() / 2);
    var childLeft = parentLeft - ($("#print-men-front").width() / 2);

    if($("#printer_front_men > .ui-wrapper").length){
       $("#printer_front_men > .ui-wrapper").css('top', childTop + 'px');
       $("#printer_front_men > .ui-wrapper").css('left', childLeft + 'px');
    }else{
       $("#print-men-front").css('top', childTop + 'px');
       $("#print-men-front").css('left', childLeft + 'px');
    }
}
//-------center image for men shirt - back-------//
var centerImgMenBack = function() {
  var parentTop = $("#printer_back_men").height() / 2;
  var parentLeft = $("#printer_back_men").width() / 2;
  var childTop = parentTop - ($("#print-men-back").height() / 2);
  var childLeft = parentLeft - ($("#print-men-back").width() / 2);

  if($("#printer_back_men > .ui-wrapper").length){
     $("#printer_back_men > .ui-wrapper").css('top', childTop + 'px');
     $("#printer_back_men > .ui-wrapper").css('left', childLeft + 'px');
  }else{
     $("#print-men-back").css('top', childTop + 'px');
     $("#print-men-back").css('left', childLeft + 'px');
  }
}


//-------preview image for men shirt- front-------//
var previewImgMenFront = function() {
    $("#art-input-men-front").change(function() {

        //Get count of selected files
        var countFiles = $(this)[0].files.length;
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var imgSize = Math.round(($(this)[0].files[0].size / 1024) / 1024);

        var image_holder = $("#printer_front_men");
        image_holder.empty();

        if (imgSize > 10) {
            $('#size-error').show();
            $('#art-input-men-front').val('');
            return false;
        }

        if (extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof(FileReader) != "undefined") {
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles; i++) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                      binImg = e.target.result;
                      input = document.getElementById('art-input-men-front');
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
                                    "id": "print-men-front",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedMenFront();
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
                                    "id": "print-men-front",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedMenFront();
                            } else {
                                console.log(3);
                                $("<img />", {
                                    "src": binImg,
                                    "id": "print-men-front",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedMenFront();
                            }
                        });
                    };



                    image_holder.show();
                    reader.readAsDataURL($(this)[0].files[i]);
                    showImgControlsMenFront();
                }
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            $('#ext-error').show();
        }
    });
}




//-------preview image for men shirt - back-------//
var previewImgMenBack = function() {
    $("#art-input-men-back").change(function() {

        //Get count of selected files
        var countFiles = $(this)[0].files.length;
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var imgSize = Math.round(($(this)[0].files[0].size / 1024) / 1024);

        var image_holder = $("#printer_back_men");
        image_holder.empty();

        if (imgSize > 10) {
            $('#size-error').show();
            $('#art-input-men-back').val('');
            return false;
        }

        if (extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof(FileReader) != "undefined") {
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles; i++) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                      binImg = e.target.result;
                      input = document.getElementById('art-input-men-back');
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
                                    "id": "print-men-back",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedMenBack();
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
                                    "id": "print-men-back",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedMenBack();
                            } else {
                                console.log(3);
                                $("<img />", {
                                    "src": binImg,
                                    "id": "print-men-back",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedMenBack();
                            }
                        });
                    };



                    image_holder.show();
                    reader.readAsDataURL($(this)[0].files[i]);
                    showImgControlsMenBack();
                }
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            $('#ext-error').show();
        }
    });
}



//-------show image controls (slider, +, - etc) for men shirt - front-------//
var showImgControlsMenFront = function() {
  $("#plus-men-front").show();
  $("#minus-men-front").show();
  $("#max-size-men-front").show();
  $("#center-image-men-front").show();
  console.log("showin!")
  $('#slider-front-men').show();
}
//-------show image controls (slider, +, - etc) for men shirt - back-------//
var showImgControlsMenBack = function() {
  $("#plus-men-back").show();
  $("#minus-men-back").show();
  $("#max-size-men-back").show();
  $("#center-image-men-back").show();
  $('#slider-back-men').show();
}
//-------hide image controls (slider, +, - etc) for men shirt  - front-------//
var hideImgControlsMenFront = function() {
  $("#plus-men-front").hide();
  $("#minus-men-front").hide();
  $("#max-size-men-front").hide();
  $("#center-image-men-front").hide();

}
//-------hide image controls (slider, +, - etc) for men shirt  - back-------//
var hideImgControlsMenBack = function() {
  $("#plus-men-back").hide();
  $("#minus-men-back").hide();
  $("#max-size-men-back").hide();
  $("#center-image-men-back").hide();

}
//-------load image to print for men shirt - front-------//
var imageLoadedMenFront = function() {
    $("#print-men-front").load(function() {
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
        slideFuncMenFront(sliderMax, sliderPos);
        $("#print-men-front").width(sliderPos);
        centerImgMenFront();

        $(".resizable").resizable({
                scroll: true,
                handles: "se, sw, nw, ne",
                resize: function(e, ui) {
                  $("#max-image-size-men-front").hide();
                  $("#slider-front-men").slider({orientation: "vertical", value: ui.size.width});

                   if (ui.size.width >= sliderMax) {
                  //  $("#dialog").dialog();
                    $('#max-image-size-men-front').show();
                   }
                },
                stop: function(e, ui) {

                },
                maxWidth: sliderMax,
                minWidth: 10,
                aspectRatio: true
          });

        $("#printer_front_men > .ui-wrapper").draggable({
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


//-------load image to print for men shirt - back-------//
var imageLoadedMenBack = function() {
    $("#print-men-back").load(function() {
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
        slideFuncMenBack(sliderMax, sliderPos);
        $("#print-men-back").width(sliderPos);
        centerImgMenBack();

        $(".resizable").resizable({
                scroll: true,
                handles: "se, sw, nw, ne",
                resize: function(e, ui) {
                  $("#max-image-size-men-back").hide();
                  $("#slider-back-men").slider({orientation: "vertical", value: ui.size.width});

                   if (ui.size.width >= sliderMax) {
                  //  $("#dialog").dialog();
                    $('#max-image-size-men-back').show();
                   }
                },
                stop: function(e, ui) {

                },
                maxWidth: sliderMax,
                minWidth: 10,
                aspectRatio: true
          });

        $("#printer_back_men > .ui-wrapper").draggable({
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

//-------enable slider for men shirt - front-------//
var slideFuncMenFront = function(m, v) {

    $("#slider-front-men").slider({
        orientation: "vertical",
        range: "min",
        value: v,
        min: 10,
        max: m,
        //this gets a live reading of the value and prints it on the page
        slide: function(event, ui) {
            $("#max-image-size-men-front").hide();
            $("#print-men-front").width(ui.value);
            $("#print-men-front").height('auto');
            $("#printer_front_men > .ui-wrapper").width(ui.value);
            $("#printer_front_men > .ui-wrapper").height($("#print-men-front").height());
            console.log("m is " + m);
            console.log("ui.value is " + ui.value);
            if (ui.value >= m) {
            //    $("#dialog").dialog();
                $('#max-image-size-men-front').show();
            }
        },
        //this updates the value of your hidden field when user stops dragging
        change: function(event, ui) {

        }
    });
  }

  //-------enable slider for men shirt - back-------//
  var slideFuncMenBack = function(m, v) {

      $("#slider-back-men").slider({
          orientation: "vertical",
          range: "min",
          value: v,
          min: 10,
          max: m,
          //this gets a live reading of the value and prints it on the page
          slide: function(event, ui) {
              $("#max-image-size-men-back").hide();
              $("#print-men-back").width(ui.value);
              $("#print-men-back").height('auto');
              $("#printer_back_men > .ui-wrapper").width(ui.value);
              $("#printer_back_men > .ui-wrapper").height($("#print-men-back").height());
              console.log("m is " + m);
              console.log("ui.value is " + ui.value);
              if (ui.value >= m) {
              //    $("#dialog").dialog();
                  $('#max-image-size-men-back').show();
              }
          },
          //this updates the value of your hidden field when user stops dragging
          change: function(event, ui) {

          }
      });
    }

  var closeIconShirtFront = $("#close-max-image-size-men-front");
  closeIconShirtFront.click(function() {
      $("#max-image-size-men-front").hide();
  });

  var closeIconShirtBack = $("#close-max-image-size-men-back");
  closeIconShirtBack.click(function() {
      $("#max-image-size-men-back").hide();
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
            "img/full_mask.png",
            "img/mask.png",
            "img/mask2.png",
            "img/shirt.png",
            "img/shirt2.png"
        )
    }
    /* Preload all images */
//imagePreloader();

/********** download the image for men shirt***********/
$('#download-shirt-men-front').click(function(e) {

  /********** create image for men shirt front ***********/
  if ($.trim($("#print-men-front").attr("src")) != "" || $.trim($("#print-men-back").attr("src")) != "") {

      var color = $(".men-shirt-backing-color").css("background-color");

      var front_parent_width = $('.shirt-men-bg').width();
      var front_parent_height = $('.shirt-men-bg').height();

      if ($.trim($("#print-men-front").attr("src")) != "") {
        var front_print_width = $('#print-men-front').width();
        var front_print_height = $('#print-men-front').height();

        var positionX =  $('#printer_front_men > .ui-wrapper').position().left + 162.5;
        var positionY = $('#printer_front_men > .ui-wrapper').position().top + 87;
        var poster_front = document.getElementById("print-men-front");
      }

      var positionXback = parseInt($('#print-men-back').parent().css("left")) + 162.5;
      var positionYback = parseInt($('#print-men-back').parent().css("top"))  + 40;

      var back_print_width = $('#print-men-back').width();
      var back_print_height = $('#print-men-back').parent().height();

      var men_bg_img_front = document.getElementById("men-bg-front");
      var men_bg_img_back = document.getElementById("men-bg-back");

      var poster_front = document.getElementById("print-men-front");
      var poster_back = document.getElementById("print-men-back");

      cm = document.getElementById("cloner_mask");
      cm.width = $('.shirt-men-bg').width();
      cm.height = $('.shirt-men-bg').height();
      ctx_m = cm.getContext("2d");
      ctx_m.fillStyle = color;
      ctx_m.fillRect(0, 0, $('.shirt-men-bg').width(), $('.shirt-men-bg').height());
      ctx_m.beginPath();
      ctx_m.drawImage(men_bg_img_front, 0, 0);
      ctx_m.closePath();
      ctx_m.clearRect(162.5,87,225,300);

      c = document.getElementById("cloner_front");
      c.width = $('.shirt-men-bg').width();
      c.height = $('.shirt-men-bg').height();
      ctx = c.getContext("2d");
      ctx.fillStyle = color;

      ctx.fillRect(0, 0, $('.shirt-men-bg').width(), $('.shirt-men-bg').height());

      ctx.drawImage(men_bg_img_front, 0, 0);
      if ($.trim($("#print-men-front").attr("src")) !== "") {
          ctx.drawImage(poster_front, positionX, positionY, front_print_width, front_print_height);
      }
      ctx.drawImage(cm, 0, 0);
      ctx.drawImage(men_bg_img_front, 0, 0);

      cm2 = document.getElementById("cloner_mask");
      cm2.width = $('.shirt-men-bg').width();
      cm2.height = $('.shirt-men-bg').height();
      ctx_m2 = cm2.getContext("2d");
      ctx_m2.fillStyle = color;
      ctx_m2.fillRect(0, 0, $('.shirt-men-bg').width(), $('.shirt-men-bg').height());
      ctx_m.beginPath();
      ctx_m2.drawImage(men_bg_img_back, 0, 0);
      ctx_m.closePath();
      ctx_m2.clearRect(162.5,40,225,300);

      c2 = document.getElementById("cloner_back");
      c2.width = $('.shirt-men-bg').width();
      c2.height = $('.shirt-men-bg').height();
      ctx2 = c2.getContext("2d");
      ctx2.fillStyle = color;
      ctx2.fillRect(0, 0, $('.shirt-men-bg').width(), $('.shirt-men-bg').height());

      ctx2.drawImage(men_bg_img_back, 0, 0);
      if ($.trim($("#print-men-back").attr("src")) !== "") {
          ctx2.drawImage(poster_back, positionXback, positionYback, back_print_width, back_print_height);
      }
      ctx2.drawImage(cm2, 0, 0);
      ctx2.drawImage(men_bg_img_back, 0, 0);

      c3 = document.getElementById("cloner_final");
      c3.width = $('.shirt-men-bg').width() * 2 + 90;
      c3.height = $('.shirt-men-bg').height() + 60;
      ctx3 = c3.getContext("2d");
      ctx3.fillStyle = "#fff";
      ctx3.fillRect(0, 0, c3.width, c3.height);
      ctx3.drawImage(c, 40, 30);
      ctx3.drawImage(c2, parseInt($('.shirt-men-bg').width()) + 50, 30);

      if (c3.msToBlob) { //for IE
          var blob = c3.msToBlob();
          saveAs(blob, "Regular-shirt-men-design.png");
          ctx3.clearRect(0, 0, c3.width, c3.height);
      } else {
          //other browsers
          c3.toBlob(function(blob) {
              saveAs(blob, "Regular-shirt-men-design.png");
              ctx3.clearRect(0, 0, c3.width, c3.height);
          });
      }
  }
});

/********** download the image for men shirt***********/
$('#download-shirt-men-back').click(function(e) {

  /********** create image for aa pillow back ***********/
  if ($.trim($("#print-men-back").attr("src")) != "" || $.trim($("#print-men-front").attr("src")) != "") {

      var color = $(".men-shirt-backing-color").css("background-color");
      var front_parent_width = $('#printer_front_men').width();
      var front_parent_height = $('#printer_front_men').height();
      var front_print_width = $('#print-men-front').width();
      var front_print_height = $('#print-men-front').parent().height();
      var positionX = parseInt($('#print-men-front').parent().css("left")) + 162.5;
      var positionY = parseInt($('#print-men-front').parent().css("top")) + 87;
      console.log(positionX);
      if ($.trim($("#print-men-back").attr("src")) != "") {
        var back_print_width = $('#print-men-back').width();
        var back_print_height = $('#print-men-back').height();
        var positionXback =  ($('#printer_back_men > .ui-wrapper').position().left) + 162.5;
        var positionYback = ($('#printer_back_men > .ui-wrapper').position().top) + 40;
      }

      var men_bg_img_front = document.getElementById("men-bg-front");
      var men_bg_img_back = document.getElementById("men-bg-back");
      var poster_front = document.getElementById("print-men-front");
      var poster_back = document.getElementById("print-men-back");

      cm = document.getElementById("cloner_mask");
      cm.width = $('.shirt-men-bg').width();
      cm.height = $('.shirt-men-bg').height();
      ctx_m = cm.getContext("2d");
      ctx_m.fillStyle = color;
      ctx_m.fillRect(0, 0, $('.shirt-men-bg').width(), $('.shirt-men-bg').height());
      ctx_m.beginPath();
      ctx_m.drawImage(men_bg_img_front, 0, 0);
      ctx_m.closePath();
      ctx_m.clearRect(162.5,87,225,300);

      c = document.getElementById("cloner_front");
      c.width = $('.shirt-men-bg').width();
      c.height = $('.shirt-men-bg').height();
      ctx = c.getContext("2d");
      ctx.fillStyle = color;

      ctx.fillRect(0, 0, $('.shirt-men-bg').width(), $('.shirt-men-bg').height());

      ctx.drawImage(men_bg_img_front, 0, 0);
      if ($.trim($("#print-men-front").attr("src")) !== "") {
          ctx.drawImage(poster_front, positionX, positionY, front_print_width, front_print_height);
      }
      ctx.drawImage(cm, 0, 0);
      ctx.drawImage(men_bg_img_front, 0, 0);

      cm2 = document.getElementById("cloner_mask");
      cm2.width = $('.shirt-men-bg').width();
      cm2.height = $('.shirt-men-bg').height();
      ctx_m2 = cm2.getContext("2d");
      ctx_m2.fillStyle = color;
      ctx_m2.fillRect(0, 0, $('.shirt-men-bg').width(), $('.shirt-men-bg').height());
      ctx_m.beginPath();
      ctx_m2.drawImage(men_bg_img_back, 0, 0);
      ctx_m.closePath();
      ctx_m2.clearRect(162.5,40,225,300);

      c2 = document.getElementById("cloner_back");
      c2.width = $('.shirt-men-bg').width();
      c2.height = $('.shirt-men-bg').height();
      ctx2 = c2.getContext("2d");
      ctx2.fillStyle = color;
      ctx2.fillRect(0, 0, $('.shirt-men-bg').width(), $('.shirt-men-bg').height());

      ctx2.drawImage(men_bg_img_back, 0, 0);
      if ($.trim($("#print-men-back").attr("src")) !== "") {
          ctx2.drawImage(poster_back, positionXback, positionYback, back_print_width, back_print_height);
      }
      ctx2.drawImage(cm2, 0, 0);
      ctx2.drawImage(men_bg_img_back, 0, 0);

      c3 = document.getElementById("cloner_final");
      c3.width = $('.shirt-men-bg').width() * 2 + 90;
      c3.height = $('.shirt-men-bg').height() + 60;
      ctx3 = c3.getContext("2d");
      ctx3.fillStyle = "#fff";
      ctx3.fillRect(0, 0, c3.width, c3.height);
      ctx3.drawImage(c, 40, 30);
      ctx3.drawImage(c2, parseInt($('.shirt-men-bg').width()) + 50, 30);

      if (c3.msToBlob) { //for IE
          var blob = c3.msToBlob();
          saveAs(blob, "Regular-shirt-men-design.png");
          ctx3.clearRect(0, 0, c3.width, c3.height);
      } else {
          //other browsers
          c3.toBlob(function(blob) {
              saveAs(blob, "Regular-shirt-men-design.png");
              ctx3.clearRect(0, 0, c3.width, c3.height);
          });
      }
  }
});




/********** when click on remove art for men shirt front***********/
var removeShirtArt_front_men = function() {
  $('#printer_front_men').html("").hide();
  $('#slider-front-men').hide();
  $('#art-input-men-front').val('');
  hideImgControlsMenFront();
}

/********** when click on remove art for men shirt back***********/
var removeShirtArt_back_men = function() {
  $('#printer_back_men').html("").hide();
  $('#slider-back-men').hide();
  $('#art-input-men-back').val('');
  hideImgControlsMenBack();
}

/********** switch between men shirt front and back design views***********/
var switch_front_back_men = function(e) {
  if (!$(e).hasClass("active")) {
    $(e).addClass("active");
  }
  if ($(e).hasClass("shirt-front")) {
    $("#shirt-icons-men .shirt-front").addClass("active");
    $("#shirt-icons-men .shirt-back").removeClass("active");
    $('#men-shirt-front').show();
    $('#men-shirt-back').hide();
    $('#men-shirt-bottom-front').show();
    $('#men-shirt-bottom-back').hide();
    $("#max-image-size-men-front").hide();
  }
  else if ($(e).hasClass("shirt-back")) {
    $("#shirt-icons-men .shirt-front").removeClass("active");
    $("#shirt-icons-men .shirt-back").addClass("active");
    $('#men-shirt-front').hide();
    $('#men-shirt-back').show();
    $('#men-shirt-bottom-front').hide();
    $('#men-shirt-bottom-back').show();
    $("#max-image-size-men-back").hide();
  }
}



var switch_men_shirt_color = function(e) {
  var color = $(e).css("background-color");
  $(".men-shirt-backing-color").css("background-color", color)
}
