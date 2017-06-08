/* Image DPI */
var dpi = 150;

/********************** vars for AA tote bags *********************/
/* Proportion of AA tote bag print */
var containerProportion = 8;
/* Print container area height inch for AA tote bag */
var containerHeightInch = 12;
/* Print container area width inch for AA tote bag */
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

    $("#printer_aa_front").width(containerWidthProp);
    $("#printer_aa_front").height(containerHeightProp);
    $("#printer_aa_front").css("margin-left", -(containerWidthProp/2)+ "px");

    $("#printer_aa_back").width(containerWidthProp);
    $("#printer_aa_back").height(containerHeightProp);
    $("#printer_aa_back").css("margin-left", -(containerWidthProp/2)+ "px");

    $("#aapparel_tote").prop('checked', true);
    $("#liberty_tote").prop('checked', false);


    previewImgAAFront();
    previewImgAABack();
    mouseControlAAFront();
    mouseControlAABack();
//    changePrint();

//-------switch between AA and Liberty tote bag design templates-------//
  $("input[name=totetype]").on( "change", function() {
    var tote_type = $(this).val();
    if (tote_type == "aapparel") {
      $("#tote-aa-controls-wrapper").show();
      $("#tote-liberty-controls-wrapper").hide();
      $("#tote-aa-templates-wrapper").show();
      $("#tote-liberty-templates-wrapper").hide();
      removeToteArt_Liberty_front();
      removeToteArt_Liberty_back();
      $('#tote-liberty-controls-wrapper > .bootstrap-tagsinput').find('span').remove();
      $("#tote-aa-controls-wrapper .tote-front").addClass("active");
      $("#tote-aa-controls-wrapper .tote-back").removeClass("active");
      $('#aa-tote-front').show();
      $('#aa-tote-back').hide();
      $('#tote-aa-bottom-front').show();
      $('#tote-aa-bottom-back').hide();
    }
    else if (tote_type == "liberty") {
      $("#tote-aa-controls-wrapper").hide();
      $("#tote-liberty-controls-wrapper").show();
      $("#tote-aa-templates-wrapper").hide();
      $("#tote-liberty-templates-wrapper").show();
      removeToteArt_AA_front();
      removeToteArt_AA_back();
      $('#tote-aa-controls-wrapper > .bootstrap-tagsinput').find('span').remove();
      $("#tote-liberty-controls-wrapper .tote-front").addClass("active");
      $("#tote-liberty-controls-wrapper .tote-back").removeClass("active");
      $('#liberty-tote-front').show();
      $('#liberty-tote-back').hide();
      $('#tote-liberty-bottom-back').hide();
      $('#tote-liberty-bottom-front').show();
    }

  } );


    //-------max-size image for AA tote - front-------//
    $("#max-size-aa-front").click(function() {
        $("#print-aa-front").width($("#slider-aa-front").slider("option", "max"));
        $("#print-aa-front").height('auto');
        $("#printer_aa_front > .ui-wrapper").width($("#print-aa-front").width());
        $("#printer_aa_front > .ui-wrapper").height($("#print-aa-front").height());
        $("#slider-aa-front").slider('value', $("#slider-aa-front").slider("option", "max"));
        centerImgAAFront();
    });
    //-------max-size image for AA tote - back-------//
    $("#max-size-aa-back").click(function() {
        $("#print-aa-back").width($("#slider-aa-back").slider("option", "max"));
        $("#print-aa-back").height('auto');
        $("#printer_aa_back > .ui-wrapper").width($("#print-aa-back").width());
        $("#printer_aa_back > .ui-wrapper").height($("#print-aa-back").height());
        $("#slider-aa-back").slider('value', $("#slider-aa-back").slider("option", "max"));
        centerImgAABack();
    });


    $("#center-image-aa-front").click(function() {
        centerImgAAFront();
    });

    $("#center-image-aa-back").click(function() {
        centerImgAABack();
    });
});
//-------mouse control drag for AA tote - front-------//
var mouseControlAAFront = function() {
    $("#printer_aa_front")
        .mouseenter(function() {
            $('#print-aa-front').mousedown();
            $("#printer_aa_front").css('background', 'rgba(0, 0, 0, 0.3)');
            $("#printer_aa_front > .ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('#print-aa-front').mouseup();
            $("#printer_aa_front").css('background', 'rgba(0, 0, 0, 0.0)');
            $("#printer_aa_front > .ui-wrapper").css('border', '0px dashed #4affff');
        });

}
//-------mouse control drag for AA tote - back-------//
var mouseControlAABack = function() {

  $("#printer_aa_back")
      .mouseenter(function() {
          $('#print-aa-back').mousedown();
          $("#printer_aa_back").css('background', 'rgba(0, 0, 0, 0.3)');
          $("#printer_aa_back > .ui-wrapper").css('border', '1px dashed #4affff');
      })
      .mouseleave(function() {
          $('#print-aa-back').mouseup();
          $("#printer_aa_back").css('background', 'rgba(0, 0, 0, 0.0)');
          $("#printer_aa_back > .ui-wrapper").css('border', '0px dashed #4affff');
      });
}
//-------center image for AA tote - front-------//
var centerImgAAFront = function() {
    var parentTop = $("#printer_aa_front").height() / 2;
    var parentLeft = $("#printer_aa_front").width() / 2;
    var childTop = parentTop - ($("#print-aa-front").height() / 2);
    var childLeft = parentLeft - ($("#print-aa-front").width() / 2);

    if($("#printer_aa_front > .ui-wrapper").length){
       $("#printer_aa_front > .ui-wrapper").css('top', childTop + 'px');
       $("#printer_aa_front > .ui-wrapper").css('left', childLeft + 'px');
    }else{
       $("#print-aa-front").css('top', childTop + 'px');
       $("#print-aa-front").css('left', childLeft + 'px');
    }
}
//-------center image for AA tote - back-------//
var centerImgAABack = function() {
    var parentTop = $("#printer_aa_back").height() / 2;
    var parentLeft = $("#printer_aa_back").width() / 2;
    var childTop = parentTop - ($("#print-aa-back").height() / 2);
    var childLeft = parentLeft - ($("#print-aa-back").width() / 2);

    if($("#printer_aa_back > .ui-wrapper").length){
       $("#printer_aa_back > .ui-wrapper").css('top', childTop + 'px');
       $("#printer_aa_back > .ui-wrapper").css('left', childLeft + 'px');
    }else{
       $("#print-aa-back").css('top', childTop + 'px');
       $("#print-aa-back").css('left', childLeft + 'px');
    }
}


//-------preview image for AA tote - front-------//
var previewImgAAFront = function() {
    $("#art-input-aa-front").change(function() {

        //Get count of selected files
        var countFiles = $(this)[0].files.length;
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var imgSize = Math.round(($(this)[0].files[0].size / 1024) / 1024);

        var image_holder = $("#printer_aa_front");
        image_holder.empty();

        if (imgSize > 10) {
            $('#size-error').show();
            $('#art-input-aa-front').val('');
            return false;
        }

        if (extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof(FileReader) != "undefined") {
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles; i++) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                      binImg = e.target.result;
                      input = document.getElementById('art-input-aa-front');
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
                                    "id": "print-aa-front",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedAAFront();
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
                                    "id": "print-aa-front",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedAAFront();
                            } else {
                                console.log(3);
                                $("<img />", {
                                    "src": binImg,
                                    "id": "print-aa-front",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedAAFront();
                            }
                        });
                    };



                    image_holder.show();
                    reader.readAsDataURL($(this)[0].files[i]);
                    showImgControlsAAFront();
                }
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            $('#ext-error').show();
        }
    });
}




//-------preview image for AA tote - back-------//
var previewImgAABack = function() {
    $("#art-input-aa-back").change(function() {

        //Get count of selected files
        var countFiles = $(this)[0].files.length;
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var imgSize = Math.round(($(this)[0].files[0].size / 1024) / 1024);

        var image_holder = $("#printer_aa_back");
        image_holder.empty();

        if (imgSize > 10) {
            $('#size-error').show();
            $('#art-input-aa-back').val('');
            return false;
        }

        if (extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof(FileReader) != "undefined") {
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles; i++) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                      binImg = e.target.result;
                      input = document.getElementById('art-input-aa-back');
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
                                    "id": "print-aa-back",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedAABack();
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
                                    "id": "print-aa-back",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedAABack();
                            } else {
                                console.log(3);
                                $("<img />", {
                                    "src": binImg,
                                    "id": "print-aa-back",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedAABack();
                            }
                        });
                    };



                    image_holder.show();
                    reader.readAsDataURL($(this)[0].files[i]);
                    showImgControlsAABack();
                }
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            $('#ext-error').show();
        }
    });
}



//-------show image controls (slider, +, - etc) for AA tote - front-------//
var showImgControlsAAFront = function() {
  $("#plus-aa-front").show();
  $("#minus-aa-front").show();
  $("#max-size-aa-front").show();
  $("#center-image-aa-front").show();
  $('#slider-aa-front').show();
}
//-------show image controls (slider, +, - etc) for AA tote - back-------//
var showImgControlsAABack = function() {
  $("#plus-aa-back").show();
  $("#minus-aa-back").show();
  $("#max-size-aa-back").show();
  $("#center-image-aa-back").show();
  $('#slider-aa-back').show();
}
//-------hide image controls (slider, +, - etc) for AA tote  - front-------//
var hideImgControlsAAFront = function() {
  $("#plus-aa-front").hide();
  $("#minus-aa-front").hide();
  $("#max-size-aa-front").hide();
  $("#center-image-aa-front").hide();

}
//-------hide image controls (slider, +, - etc) for AA tote  - back-------//
var hideImgControlsAABack = function() {
  $("#plus-aa-back").hide();
  $("#minus-aa-back").hide();
  $("#max-size-aa-back").hide();
  $("#center-image-aa-back").hide();

}
//-------load image to print for aa tote - front-------//
var imageLoadedAAFront = function() {
    $("#print-aa-front").load(function() {
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
        slideFuncAAFront(sliderMax, sliderPos);
        $("#print-aa-front").width(sliderPos);
        centerImgAAFront();

        $(".resizable").resizable({
                scroll: true,
                handles: "se, sw, nw, ne",
                resize: function(e, ui) {
                  $("#max-image-size-aa-front").hide();
                  $("#slider-aa-front").slider({orientation: "vertical", value: ui.size.width});
                  console.log("ui.size.width is " + ui.size.width);
                  console.log("sliderMax is " + sliderMax);
                   if (ui.size.width >= sliderMax) {
                  //  $("#dialog").dialog();
                    $('#max-image-size-aa-front').show();
                   }
                },
                stop: function(e, ui) {

                },
                maxWidth: sliderMax,
                minWidth: 10,
                aspectRatio: true
          });

        $("#printer_aa_front > .ui-wrapper").draggable({
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


//-------load image to print for aa tote - back-------//
var imageLoadedAABack = function() {
    $("#print-aa-back").load(function() {
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
        slideFuncAABack(sliderMax, sliderPos);
        $("#print-aa-back").width(sliderPos);
        centerImgAABack();

        $(".resizable").resizable({
                scroll: true,
                handles: "se, sw, nw, ne",
                resize: function(e, ui) {
                  $("#max-image-size-aa-back").hide();
                  $("#slider-aa-back").slider({orientation: "vertical", value: ui.size.width});
                  console.log("ui.size.width is " + ui.size.width);
                  console.log("sliderMax is " + sliderMax);
                   if (ui.size.width >= sliderMax) {
                  //  $("#dialog").dialog();
                    $('#max-image-size-aa-back').show();
                   }
                },
                stop: function(e, ui) {

                },
                maxWidth: sliderMax,
                minWidth: 10,
                aspectRatio: true
          });

        $("#printer_aa_back > .ui-wrapper").draggable({
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


//-------enable slider for aa tote - front-------//
var slideFuncAAFront = function(m, v) {

    $("#slider-aa-front").slider({
        orientation: "vertical",
        range: "min",
        value: v,
        min: 10,
        max: m,
        //this gets a live reading of the value and prints it on the page
        slide: function(event, ui) {
            $("#max-image-size-aa-front").hide();
            $("#print-aa-front").width(ui.value);
            $("#print-aa-front").height('auto');
            $("#printer_aa_front > .ui-wrapper").width(ui.value);
            $("#printer_aa_front > .ui-wrapper").height($("#print-aa-front").height());
            console.log("m is " + m);
            console.log("ui.value is " + ui.value);
            if (ui.value >= m) {
            //    $("#dialog").dialog();
                $('#max-image-size-aa-front').show();
            }
        },
        //this updates the value of your hidden field when user stops dragging
        change: function(event, ui) {

        }
    });
  }
  //-------enable slider for aa tote - back-------//
  var slideFuncAABack = function(m, v) {

      $("#slider-aa-back").slider({
          orientation: "vertical",
          range: "min",
          value: v,
          min: 10,
          max: m,
          //this gets a live reading of the value and prints it on the page
          slide: function(event, ui) {
              $("#max-image-size-aa-back").hide();
              $("#print-aa-back").width(ui.value);
              $("#print-aa-back").height('auto');
              $("#printer_aa_back > .ui-wrapper").width(ui.value);
              $("#printer_aa_back > .ui-wrapper").height($("#print-aa-back").height());
              console.log("m is " + m);
              console.log("ui.value is " + ui.value);
              if (ui.value >= m) {
              //    $("#dialog").dialog();
                  $('#max-image-size-aa-back').show();
              }
          },
          //this updates the value of your hidden field when user stops dragging
          change: function(event, ui) {

          }
      });
    }

  var closeIconAAFront = $("#close-max-image-size-aa-front");
  closeIconAAFront.click(function() {
      $("#max-image-size-aa-front").hide();
  });

  var closeIconAABack = $("#close-max-image-size-aa-back");
  closeIconAABack.click(function() {
      $("#max-image-size-aa-back").hide();
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

/********** download the image for aa tote***********/
$('#download-tote-aa-front').click(function(e) {

  /********** create image for aa pillow front ***********/
  if ($.trim($("#print-aa-front").attr("src")) != "" || $.trim($("#print-aa-back").attr("src")) != "") {

      var color = '#e3daca';

      var front_parent_width = $('#printer_aa_front').width();
      var front_parent_height = $('#printer_aa_front').height();

      if ($.trim($("#print-aa-front").attr("src")) != "") {
        var front_print_width = $('#print-aa-front').width();
        var front_print_height = $('#print-aa-front').height();

  //      var front_print_width = front_parent_width;
  //      var front_print_height = front_parent_height;

        var positionX =  ($('#printer_aa_front > .ui-wrapper').position().left + 41.25);
        var positionY = ($('#printer_aa_front > .ui-wrapper').position().top + 237);
        var poster_front = document.getElementById("print-aa-front");
      }

      var positionXback = parseInt($('#print-aa-back').parent().css("left")) + 41.25;
      var positionYback = parseInt($('#print-aa-back').parent().css("top"))  + 237;

      var back_print_width = $('#print-aa-back').width();
      var back_print_height = $('#print-aa-back').parent().height();

    //  var back_print_width = front_parent_width;
    //  var back_print_height = front_parent_height;

      c = document.getElementById("cloner_front");
      c.width = $('.tote-aa-backing-color').width();
      c.height = $('.tote-aa-backing-color').height();
      ctx = c.getContext("2d");
      ctx.fillStyle = color;

      ctx.fillRect(0, 0, $('.tote-aa-backing-color').width(), $('.tote-aa-backing-color').height());

      var tote_bg_img = document.getElementById("tote-aa-bg-front");
      var tote_mask = document.getElementById("tote-aa-mask");
      var poster_front = document.getElementById("print-aa-front");
      var poster_back = document.getElementById("print-aa-back");


      ctx.drawImage(tote_bg_img, 0, 0);
      if ($.trim($("#print-aa-front").attr("src")) !== "") {
          ctx.drawImage(poster_front, positionX, positionY, front_print_width, front_print_height);
      }
      ctx.drawImage(tote_mask, 0, 0);

      c2 = document.getElementById("cloner_back");
      c2.width = $('.tote-aa-backing-color').width();
      c2.height = $('.tote-aa-backing-color').height();
      ctx2 = c2.getContext("2d");
      ctx2.fillStyle = color;
      ctx2.fillRect(0, 0, $('.tote-aa-backing-color').width(), $('.tote-aa-backing-color').height());

      ctx2.drawImage(tote_bg_img, 0, 0);
      if ($.trim($("#print-aa-back").attr("src")) !== "") {
          ctx2.drawImage(poster_back, positionXback, positionYback, back_print_width, back_print_height);
      }
      ctx2.drawImage(tote_mask, 0, 0);

      c3 = document.getElementById("cloner_final");
      c3.width = $('.tote-aa-backing-color').width() * 2 + 90;
      c3.height = $('.tote-aa-backing-color').height() + 60;
      ctx3 = c3.getContext("2d");
      ctx3.fillStyle = "#fff";
      ctx3.fillRect(0, 0, c3.width, c3.height);
      ctx3.drawImage(c, 40, 30);
      ctx3.drawImage(c2, parseInt($('.tote-aa-backing-color').width()) + 50, 30);

      if (c3.msToBlob) { //for IE
          var blob = c3.msToBlob();
          saveAs(blob, "American-Apparel-tote-design.png");
          ctx3.clearRect(0, 0, c3.width, c3.height);
      } else {
          //other browsers
          c3.toBlob(function(blob) {
              saveAs(blob, "American-Apparel-tote-design.png");
              ctx3.clearRect(0, 0, c3.width, c3.height);
          });
      }
  }
});

/********** download the image for aa tote***********/
$('#download-tote-aa-back').click(function(e) {

  /********** create image for aa pillow back ***********/
  if ($.trim($("#print-aa-back").attr("src")) != "" || $.trim($("#print-aa-front").attr("src")) != "") {

      var color = '#e3daca';
      var front_parent_width = $('#printer_aa_front').width();
      var front_parent_height = $('#printer_aa_front').height();
      var front_print_width = $('#print-aa-front').width();
      var front_print_height = $('#print-aa-front').parent().height();
      var positionX = parseInt($('#print-aa-front').parent().css("left")) + 41.25;
      var positionY = parseInt($('#print-aa-front').parent().css("top")) + 237;

      if ($.trim($("#print-aa-back").attr("src")) != "") {
        var back_print_width = $('#print-aa-back').width();
        var back_print_height = $('#print-aa-back').height();
        var positionXback =  ($('#printer_aa_back > .ui-wrapper').position().left) + 41.25;
        var positionYback = ($('#printer_aa_back > .ui-wrapper').position().top) + 237;
      }



      c = document.getElementById("cloner_front");
      c.width = $('#tote-outline-aa-back').width();
      c.height = $('#tote-outline-aa-back').height();
      ctx = c.getContext("2d");
      ctx.fillStyle = color;

      ctx.fillRect(0, 0, $('#tote-outline-aa-back').width(), $('#tote-outline-aa-back').height());

      var tote_bg_img = document.getElementById("tote-aa-bg-back");
      var tote_mask = document.getElementById("tote-aa-mask");
      var poster_front = document.getElementById("print-aa-front");
      var poster_back = document.getElementById("print-aa-back");

      ctx.drawImage(tote_bg_img, 0, 0);
      if ($.trim($("#print-aa-front").attr("src")) !== "") {
          ctx.drawImage(poster_front, positionX, positionY, front_print_width, front_print_height);
      }
      ctx.drawImage(tote_mask, 0, 0);

      c2 = document.getElementById("cloner_back");
      c2.width = $('#tote-outline-aa-back').width();
      c2.height = $('#tote-outline-aa-back').height();
      ctx2 = c2.getContext("2d");
      ctx2.fillStyle = color;
      ctx2.fillRect(0, 0, $('#tote-outline-aa-back').width(), $('#tote-outline-aa-back').height());

      ctx2.drawImage(tote_bg_img, 0, 0);
      if ($.trim($("#print-aa-back").attr("src")) !== "") {
          ctx2.drawImage(poster_back, positionXback, positionYback, back_print_width, back_print_height);
      }
      ctx2.drawImage(tote_mask, 0, 0);

      c3 = document.getElementById("cloner_final");
      c3.width = $('#tote-outline-aa-back').width() * 2 + 90;
      c3.height = $('#tote-outline-aa-back').height() + 60;
      ctx3 = c3.getContext("2d");
      ctx3.fillStyle = "#fff";
      ctx3.fillRect(0, 0, c3.width, c3.height);
      ctx3.drawImage(c, 40, 30);
      ctx3.drawImage(c2, parseInt($('#tote-outline-aa-back').width()) + 50, 30);

      if (c3.msToBlob) { //for IE
          var blob = c3.msToBlob();
          saveAs(blob, "American-Apparel-tote-design.png");
          ctx3.clearRect(0, 0, c3.width, c3.height);
      } else {
          //other browsers
          c3.toBlob(function(blob) {
              saveAs(blob, "American-Apparel-tote-design.png");
              ctx3.clearRect(0, 0, c3.width, c3.height);
          });
      }
  }
});




/********** when click on remove art for aa tote front***********/
var removeToteArt_AA_front = function() {
  $('#printer_aa_front').html("").hide();
  $('#slider-aa-front').hide();
  $('#art-input-aa-front').val('');
  hideImgControlsAAFront();
}

/********** when click on remove art for aa tote back***********/
var removeToteArt_AA_back = function() {
  $('#printer_aa_back').html("").hide();
  $('#slider-aa-back').hide();
  $('#art-input-aa-back').val('');
  hideImgControlsAABack();
}

/********** switch between AA tote front and back design views***********/
var switch_front_back_aa = function(e) {
  if (!$(e).hasClass("active")) {
    $(e).addClass("active");
  }

  if ($(e).hasClass("tote-front")) {

    $("#tote-aa-controls-wrapper .tote-front").addClass("active");
    $("#tote-aa-controls-wrapper .tote-back").removeClass("active");
    $('#aa-tote-front').show();
    $('#aa-tote-back').hide();
    $('#tote-aa-bottom-front').show();
    $('#tote-aa-bottom-back').hide();
    $("#max-image-size-aa-front").hide();
  }
  else if ($(e).hasClass("tote-back")) {
    $("#tote-aa-controls-wrapper .tote-front").removeClass("active");
    $("#tote-aa-controls-wrapper .tote-back").addClass("active");
    $('#aa-tote-front').hide();
    $('#aa-tote-back').show();
    $('#tote-aa-bottom-front').hide();
    $('#tote-aa-bottom-back').show();
    $("#max-image-size-aa-back").hide();
  }
}
