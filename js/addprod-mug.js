/* Image DPI */
var dpi = 300;
/* Proportion of print */
var containerProportion = 5;
/* Print container area width inch */
var containerWidthInch = 9;
var containerWidthInch_lr = 4.5;
/* Print container area height inch */
var containerHeightInch = 3.8;
/* Print container area width px */
var containerWidthPx = containerWidthInch * dpi;
var containerWidthPx_lr = containerWidthInch_lr * dpi;
/* Print container area height px */
var containerHeightPx = containerHeightInch * dpi;
/* Print container area proportion width px */
var containerWidthProp = containerWidthPx / containerProportion;
var containerWidthProp_lr = containerWidthPx_lr / containerProportion;
/* Print container area proportion height px */
var containerHeightProp = containerHeightPx / containerProportion;
/* Initialize global variables */
var imgWidth, imgHeight, imgWidthInch, imgHeightInch, imgWidthProp, imgHeightProp;
var sliderMax = 100,
    sliderPos = 0;
/* Page fully loaded */
$(function() {
    $("#printer-center").width(containerWidthProp);
    $("#printer-center").height(containerHeightProp);

    $("#printer-left").width(containerWidthProp_lr);
    $("#printer-left").height(containerHeightProp);

    $("#printer-right").width(containerWidthProp_lr);
    $("#printer-right").height(containerHeightProp);

    stylePrinterDiv();
  //  $("#printer").css("margin-left", -(containerWidthProp/2)+ "px");
    previewImgCenter();
    previewImgLeft();
    previewImgRight();

    mouseControlCenter();
    mouseControlLeft();
    mouseControlRight();

//    changePrint();
    $("#max-size-mug-center").click(function() {
        $("#print-center").width($("#slider-center").slider("option", "max"));
        $("#print-center").height('auto');
        $("#printer-center > .ui-wrapper").width($("#print-center").width());
        $("#printer-center > .ui-wrapper").height($("#print-center").height());

        $("#slider-center").slider('value', $("#slider-center").slider("option", "max"));
        centerImgMugCenter();
    });

    $("#max-size-mug-left").click(function() {
      $("#print-left").width($("#slider-left").slider("option", "max"));
      $("#print-left").height('auto');
      $("#printer-left > .ui-wrapper").width($("#print-left").width());
      $("#printer-left > .ui-wrapper").height($("#print-left").height());

      $("#slider-left").slider('value', $("#slider-left").slider("option", "max"));
      centerImgMugLeft();
    });

    $("#max-size-mug-right").click(function() {
      $("#print-right").width($("#slider-right").slider("option", "max"));
      $("#print-right").height('auto');
      $("#printer-right > .ui-wrapper").width($("#print-right").width());
      $("#printer-right > .ui-wrapper").height($("#print-right").height());

      $("#slider-right").slider('value', $("#slider-right").slider("option", "max"));
      centerImgMugRight();
    });

    $("#center-image-mug-center").click(function() {
        centerImgMugCenter();
    });

    $("#center-image-mug-left").click(function() {
        centerImgMugLeft();
    });

    $("#center-image-mug-right").click(function() {
        centerImgMugRight();
    });
});

$(window).resize(function() {
  stylePrinterDiv();
});
var stylePrinterDiv = function() {
  if ($(window).width() >= 1600 ) {
    $("#printer-center").css("margin-left", -(containerWidthProp/2)+ "px");
    $("#printer-center").css("left", "50%");
    $("#printer-right").css("margin-left", "270px");
  }
  else if ($(window).width() < 1600 ) {
    $("#printer-center").css("margin-left", "0");
    $("#printer-center").css("left", "0");
    $("#printer-right").css("margin-left", "270px");
  }
}
var mouseControlCenter = function() {
    $("#printer-center")
        .mouseenter(function() {
            $('#print-center').mousedown();
            $("#printer-center").css('background', 'rgba(0, 0, 0, 0.3)');
            $("#printer-center > .ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('#print-center').mouseup();
            $("#printer-center").css('background', 'rgba(0, 0, 0, 0.0)');
            $("#printer-center > .ui-wrapper").css('border', '0px dashed #4affff');
        });
}

var mouseControlLeft = function() {
    $("#printer-left")
        .mouseenter(function() {
            $('#print-left').mousedown();
            $("#printer-left").css('background', 'rgba(0, 0, 0, 0.3)');
            $("#printer-left > .ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('#print-left').mouseup();
            $("#printer-left").css('background', 'rgba(0, 0, 0, 0.0)');
            $("#printer-left > .ui-wrapper").css('border', '0px dashed #4affff');
        });
}

var mouseControlRight = function() {
    $("#printer-right")
        .mouseenter(function() {
            $('#print-right').mousedown();
            $("#printer-right").css('background', 'rgba(0, 0, 0, 0.3)');
            $("#printer-right > .ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('#print-right').mouseup();
            $("#printer-right").css('background', 'rgba(0, 0, 0, 0.0)');
            $("#printer-right > .ui-wrapper").css('border', '0px dashed #4affff');
        });
}

var centerImgMugCenter = function() {
    var parentTop = $("#printer-center").height() / 2;
    var parentLeft = $("#printer-center").width() / 2;
    var childTop = parentTop - ($("#print-center").height() / 2);
    var childLeft = parentLeft - ($("#print-center").width() / 2);
    if($("#printer-center > .ui-wrapper").length){
       $("#printer-center > .ui-wrapper").css('top', childTop + 'px');
       $("#printer-center > .ui-wrapper").css('left', childLeft + 'px');
    }else{
       $("#print-center").css('top', childTop + 'px');
       $("#print-center").css('left', childLeft + 'px');
    }
    console.log($("#print-center").width() + ' - ' + $("#printer").width() + ' - ' + childLeft);
}

var centerImgMugLeft = function() {
    var parentTop = $("#printer-left").height() / 2;
    var parentLeft = $("#printer-left").width() / 2;
    var childTop = parentTop - ($("#print-left").height() / 2);
    var childLeft = parentLeft - ($("#print-left").width() / 2);
    if($("#printer-left > .ui-wrapper").length){
       $("#printer-left > .ui-wrapper").css('top', childTop + 'px');
       $("#printer-left > .ui-wrapper").css('left', childLeft + 'px');
    }else{
       $("#print-left").css('top', childTop + 'px');
       $("#print-left").css('left', childLeft + 'px');
    }
    console.log($("#print-left").width() + ' - ' + $("#printer").width() + ' - ' + childLeft);
}

var centerImgMugRight = function() {
    var parentTop = $("#printer-right").height() / 2;
    var parentLeft = $("#printer-right").width() / 2;
    var childTop = parentTop - ($("#print-right").height() / 2);
    var childLeft = parentLeft - ($("#print-right").width() / 2);
    if($("#printer-right > .ui-wrapper").length){
       $("#printer-right > .ui-wrapper").css('top', childTop + 'px');
       $("#printer-right > .ui-wrapper").css('left', childLeft + 'px');
    }else{
       $("#print-right").css('top', childTop + 'px');
       $("#print-right").css('left', childLeft + 'px');
    }
    console.log($("#print-right").width() + ' - ' + $("#printer").width() + ' - ' + childLeft);
}

var previewImgCenter = function() {
    $("#mug-input-center").change(function() {

        //Get count of selected files
        var countFiles = $(this)[0].files.length;
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var imgSize = Math.round(($(this)[0].files[0].size / 1024) / 1024);

        var image_holder = $("#printer-center");
        image_holder.empty();

        if (imgSize > 10) {
            $('#size-error').show();
            $('#art-input').val('');
            return false;
        }

        if (extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof(FileReader) != "undefined") {
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles; i++) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                      binImg = e.target.result;
                      input = document.getElementById('mug-input-center');
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
                                    "id": "print-center",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedCenter();
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
                                    "id": "print-center",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedCenter();
                            } else {
                                console.log(3);
                                $("<img />", {
                                    "src": binImg,
                                    "id": "print-center",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedCenter();
                            }
                        });
                    };
                    $('#full-mask-mug-center').hide();
                    $('#print-area-mug-center').show();
                    image_holder.show();
                    reader.readAsDataURL($(this)[0].files[i]);
                    showImgControlsCenter();

                }
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            $('#ext-error').show();
        }
    });
}

var previewImgLeft = function() {
    $("#mug-input-left").change(function() {

        //Get count of selected files
        var countFiles = $(this)[0].files.length;
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var imgSize = Math.round(($(this)[0].files[0].size / 1024) / 1024);

        var image_holder = $("#printer-left");
        image_holder.empty();

        if (imgSize > 10) {
            $('#size-error').show();
            $('#art-input').val('');
            return false;
        }

        if (extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof(FileReader) != "undefined") {
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles; i++) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                      binImg = e.target.result;
                      input = document.getElementById('mug-input-left');
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
                                    "id": "print-left",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedLeft();
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
                                    "id": "print-left",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedLeft();
                            } else {
                                console.log(3);
                                $("<img />", {
                                    "src": binImg,
                                    "id": "print-left",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedLeft();
                            }
                        });
                    };
                    $('#full-mask-mug-left').hide();
                    $('#print-area-mug-left').show();
                    image_holder.show();
                    reader.readAsDataURL($(this)[0].files[i]);
                    showImgControlsLeft();

                }
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            $('#ext-error').show();
        }
    });
}

var previewImgRight = function() {
    $("#mug-input-right").change(function() {

        //Get count of selected files
        var countFiles = $(this)[0].files.length;
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var imgSize = Math.round(($(this)[0].files[0].size / 1024) / 1024);

        var image_holder = $("#printer-right");
        image_holder.empty();

        if (imgSize > 10) {
            $('#size-error').show();
            $('#art-input').val('');
            return false;
        }

        if (extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof(FileReader) != "undefined") {
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles; i++) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                      binImg = e.target.result;
                      input = document.getElementById('mug-input-right');
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
                                    "id": "print-right",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedRight();
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
                                    "id": "print-right",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedRight();
                            } else {
                                console.log(3);
                                $("<img />", {
                                    "src": binImg,
                                    "id": "print-right",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoadedRight();
                            }
                        });
                    };
                    $('#full-mask-mug-right').hide();
                    $('#print-area-mug-right').show();
                    image_holder.show();
                    reader.readAsDataURL($(this)[0].files[i]);
                    showImgControlsRight();

                }
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            $('#ext-error').show();
        }
    });
}

var showImgControlsCenter = function() {
  $("#mug-center-plus").show();
  $("#mug-center-minus").show();
  $("#max-size-mug-center").show();
  $("#center-image-mug-center").show();
  $('#slider-center').show();
}

var hideImgControlsCenter = function() {
  $("#mug-center-plus").hide();
  $("#mug-center-minus").hide();
  $("#max-size-mug-center").hide();
  $("#center-image-mug-center").hide();
  $('#full-mask-mug-center').show();
  $('#print-area-mug-center').hide();
}

var showImgControlsLeft = function() {
  $("#mug-left-plus").show();
  $("#mug-left-minus").show();
  $("#max-size-mug-left").show();
  $("#center-image-mug-left").show();
  $('#slider-left').show();
}

var hideImgControlsLeft = function() {
  $("#mug-left-plus").hide();
  $("#mug-left-minus").hide();
  $("#max-size-mug-left").hide();
  $("#center-image-mug-left").hide();
  $('#full-mask-mug-left').show();
  $('#print-area-mug-left').hide();
}

var showImgControlsRight = function() {
  $("#mug-right-plus").show();
  $("#mug-right-minus").show();
  $("#max-size-mug-right").show();
  $("#center-image-mug-right").show();
  $('#slider-right').show();
}

var hideImgControlsRight = function() {
  $("#mug-right-plus").hide();
  $("#mug-right-minus").hide();
  $("#max-size-mug-right").hide();
  $("#center-image-mug-right").hide();
  $('#full-mask-mug-right').show();
  $('#print-area-mug-right').hide();
}

var imageLoadedCenter = function() {
    $("#print-center").load(function() {
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
        slideFuncCenter(sliderMax, sliderPos);
        $("#print-center").width(sliderPos);
        centerImgMugCenter();

        $(".resizable").resizable({
                scroll: true,
                handles: "se, sw, nw, ne",
                resize: function(e, ui) {
                  $("#max-image-size-center").hide();
                  $("#slider-center").slider({orientation: "vertical", value: ui.size.width});

                   if (ui.size.width >= sliderMax) {
                  //  $("#dialog").dialog();
                    $('#max-image-size-center').show();
                   }
                },
                stop: function(e, ui) {

                },
                maxWidth: sliderMax,
                minWidth: 10,
                aspectRatio: true
          });

        $("#printer-center > .ui-wrapper").draggable({
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
    removeMugArtLeft();
    removeMugArtRight();
}

var imageLoadedLeft = function() {
    $("#print-left").load(function() {
        imgWidth = parseInt($(this).css('width'));
        imgHeight = parseInt($(this).css('height'));
        imgWidthInch = Math.round(imgWidth / dpi);
        imgHeightInch = Math.round(imgHeight / dpi);
        imgWidthProp = Math.round(imgWidth / containerProportion);
        imgHeightProp = imgHeight / containerProportion;
        sliderMax = imgWidthProp;
        if (sliderMax > containerWidthProp_lr) {
            sliderPos = containerWidthProp_lr;
        } else {
            sliderPos = imgWidthProp;
        }
        slideFuncLeft(sliderMax, sliderPos);
        $("#print-left").width(sliderPos);
        centerImgMugLeft();

        $("#print-left").resizable({
                scroll: true,
                handles: "se, sw, nw, ne",
                resize: function(e, ui) {
                  $("#max-image-size-left").hide();
                  $("#slider-left").slider({orientation: "vertical", value: ui.size.width});

                   if (ui.size.width >= sliderMax) {
                  //  $("#dialog").dialog();
                    $('#max-image-size-left').show();
                   }
                },
                stop: function(e, ui) {

                },
                maxWidth: sliderMax,
                minWidth: 10,
                aspectRatio: true
          });


        $("#printer-left > .ui-wrapper").draggable({
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
    removeMugArtCenter();
}

var imageLoadedRight = function() {
    $("#print-right").load(function() {
        imgWidth = parseInt($(this).css('width'));
        imgHeight = parseInt($(this).css('height'));
        imgWidthInch = Math.round(imgWidth / dpi);
        imgHeightInch = Math.round(imgHeight / dpi);
        imgWidthProp = Math.round(imgWidth / containerProportion);
        imgHeightProp = imgHeight / containerProportion;
        sliderMax = imgWidthProp;
        if (sliderMax > containerWidthProp_lr) {
            sliderPos = containerWidthProp_lr;
        } else {
            sliderPos = imgWidthProp;
        }
        slideFuncRight(sliderMax, sliderPos);
        $("#print-right").width(sliderPos);
        centerImgMugRight();

        $("#print-right").resizable({
                scroll: true,
                handles: "se, sw, nw, ne",
                resize: function(e, ui) {
                  $("#max-image-size-right").hide();
                  $("#slider-right").slider({orientation: "vertical", value: ui.size.width});

                   if (ui.size.width >= sliderMax) {
                  //  $("#dialog").dialog();
                    $('#max-image-size-right').show();
                   }
                },
                stop: function(e, ui) {

                },
                maxWidth: sliderMax,
                minWidth: 10,
                aspectRatio: true
          });

        $("#printer-right > .ui-wrapper").draggable({
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
    removeMugArtCenter();
}

var slideFuncCenter = function(m, v) {

    $("#slider-center").slider({
        orientation: "vertical",
        range: "min",
        value: v,
        min: 10,
        max: m,
        //this gets a live reading of the value and prints it on the page
        slide: function(event, ui) {
            $("#max-image-size-center").hide();
            $("#print-center").width(ui.value);
            $("#print-center").height('auto');
            $("#printer-center > .ui-wrapper").width(ui.value);
            $("#printer-center > .ui-wrapper").height($("#print-center").height());

            if (ui.value >= m) {
            //    $("#dialog").dialog();
                $('#max-image-size-center').show();
            }
        },
        //this updates the value of your hidden field when user stops dragging
        change: function(event, ui) {

        }
    });
  }

var slideFuncLeft = function(m, v) {

    $("#slider-left").slider({
        orientation: "vertical",
        range: "min",
        value: v,
        min: 10,
        max: m,
        //this gets a live reading of the value and prints it on the page
        slide: function(event, ui) {
            $("#max-image-size-left").hide();
            $("#print-left").width(ui.value);
            $("#print-left").height('auto');
            $("#printer-left > .ui-wrapper").width(ui.value);
            $("#printer-left > .ui-wrapper").height($("#print-left").height());

            if (ui.value >= m) {
            //    $("#dialog").dialog();
                $('#max-image-size-left').show();
            }
        },
        //this updates the value of your hidden field when user stops dragging
        change: function(event, ui) {

        }
    });
  }

var slideFuncRight = function(m, v) {

    $("#slider-right").slider({
        orientation: "vertical",
        range: "min",
        value: v,
        min: 10,
        max: m,
        //this gets a live reading of the value and prints it on the page
        slide: function(event, ui) {
            $("#max-image-size-right").hide();
            $("#print-right").width(ui.value);
            $("#print-right").height('auto');
            $("#printer-right > .ui-wrapper").width(ui.value);
            $("#printer-right > .ui-wrapper").height($("#print-right").height());

            if (ui.value >= m) {
            //    $("#dialog").dialog();
                $('#max-image-size-right').show();
            }
        },
        //this updates the value of your hidden field when user stops dragging
        change: function(event, ui) {

        }
    });
  }

var closeIconCenter = $("#close-max-image-size-center");
  closeIconCenter.click(function() {
      $("#max-image-size-center").hide();
  });

var closeIconLeft = $("#close-max-image-size-left");
closeIconLeft.click(function() {
    $("#max-image-size-left").hide();
});

var closeIconRight = $("#close-max-image-size-right");
closeIconRight.click(function() {
    $("#max-image-size-right").hide();
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



/********** download the image***********/
$('#download-mug-center').click(function(e) {

    if ($.trim($("#print-center").attr("src")) != "") {
        var color = '#ffffff';
        var front_parent_width = $('#printer-center').width();
        var front_parent_height = $('#printer-center').height();
        var front_print_width = $('#print-center').width();
        var front_print_height = $('#print-center').height();
        var positionX =  ($('#printer-center > .ui-wrapper').position().left);
        var positionY = ($('#printer-center > .ui-wrapper').position().top);
        var mug_print_width = $('#download-mug-backing-left').width() + $('#download-mug-backing-center').width() + $('#download-mug-backing-right').width();

        // load print
        var tri = document.getElementById("trisect");
        tri.width = front_parent_width;
        tri.height = front_parent_height;
        ctx_tri = tri.getContext("2d");
        //ctx_tri.fillStyle = color;
        ctx_tri.fillStyle = "rgba(255, 255, 255, 0.0)";
        ctx_tri.fillRect(0, 0, front_parent_width, front_parent_height);
        var poster = document.getElementById("print-center");
        ctx_tri.drawImage(poster, positionX, positionY, front_print_width, front_print_height);
        var url = tri.toDataURL();
        $("#img-trid").attr("src", url);

        $("#img-trid").unbind("load").bind('load', function() {
          c = document.getElementById("cloner");
          c.width = mug_print_width;
          c.height = $('#download-mug-backing-center').height();
          ctx = c.getContext("2d");
          ctx.fillStyle = color;
          ctx.fillRect(0, 0, mug_print_width, $('#printer-center').height());

          var backing1 = document.getElementById("download-mug-backing-left");
          var backing2 = document.getElementById("download-mug-backing-center");
          var backing3 = document.getElementById("download-mug-backing-right");

          var mask1 = document.getElementById("download-mug-mask-left");
          var mask2 = document.getElementById("download-mug-mask-center");
          var mask3 = document.getElementById("download-mug-mask-right");

          var design = document.getElementById("img-trid");

      //    ctx.drawImage(poster, positionX, positionY, front_print_width, front_print_height);
          ctx.drawImage(backing1, 0, 0);
          ctx.drawImage(backing2, parseInt($('#download-mug-backing-left').width()), 0);
          ctx.drawImage(backing3, parseInt($('#download-mug-backing-left').width()) + parseInt($('#download-mug-backing-center').width()), 0);

          ctx.drawImage(design, 0, 0, 190, 228, 105, 35, 190, 228);
          ctx.drawImage(design, 180, 0, 195, 228, 348, 35, 195, 228);
          ctx.drawImage(design, 345, 0, 195, 228, 583, 35, 195, 228);

          ctx.drawImage(mask1, 0, 0);
          ctx.drawImage(mask2, parseInt($('#download-mug-mask-left').width()), 0);
          ctx.drawImage(mask3, parseInt($('#download-mug-mask-left').width()) + parseInt($('#download-mug-mask-center').width()), 0);

            console.log("started!");
          if (c.msToBlob) { //for IE
              var blob = c.msToBlob();
              saveAs(blob, "mug-design-front.png");
              ctx.clearRect(0, 0, c.width, c.height);
          } else {
              //other browsers
              c.toBlob(function(blob) {
                  saveAs(blob, "mug-design-front.png");
                  ctx.clearRect(0, 0, c.width, c.height);
              });
          }
          console.log("done!");
        });
    }
});

/********** download the image***********/
$('#download-mug-left').click(function(e) {

    if ($.trim($("#print-left").attr("src")) != "") {
        var color = '#ffffff';
        var front_parent_width = $('#printer-left').width();
        var front_parent_height = $('#printer-left').height();
        var front_print_width = $('#print-left').width();
        var front_print_height = $('#print-left').height();
        var positionX =  ($('#printer-left > .ui-wrapper').position().left);
        var positionY = ($('#printer-left > .ui-wrapper').position().top);
        var mug_print_width = $('#download-mug-backing-left').width() + $('#download-mug-backing-center').width();

        // load print
        var tri = document.getElementById("trisect");
        tri.width = front_parent_width;
        tri.height = front_parent_height;
        ctx_tri = tri.getContext("2d");
        //ctx_tri.fillStyle = color;
        ctx_tri.fillStyle = "rgba(255, 255, 255, 0.0)";
        ctx_tri.fillRect(0, 0, front_parent_width, front_parent_height);
        var poster = document.getElementById("print-left");
        ctx_tri.drawImage(poster, positionX, positionY, front_print_width, front_print_height);
        var url = tri.toDataURL();
        $("#img-trid").attr("src", url);

        $("#img-trid").unbind("load").bind('load', function() {
          c = document.getElementById("cloner");
          c.width = mug_print_width;
          c.height = $('#download-mug-backing-left').height();
          ctx = c.getContext("2d");
          ctx.fillStyle = color;
          ctx.fillRect(0, 0, mug_print_width, $('#printer-left').height());

          var backing1 = document.getElementById("download-mug-backing-left");
          var backing2 = document.getElementById("download-mug-backing-center");

          var mask1 = document.getElementById("download-mug-mask-left");
          var mask2 = document.getElementById("download-mug-mask-center");

          var design = document.getElementById("img-trid");

      //    ctx.drawImage(poster, positionX, positionY, front_print_width, front_print_height);
          ctx.drawImage(backing1, 0, 0);
          ctx.drawImage(backing2, parseInt($('#download-mug-backing-left').width()), 0);

          ctx.drawImage(design, 0, 0, 190, 228, 105, 35, 190, 228);
          ctx.drawImage(design, 175, 0, 95, 228, 348, 35, 95, 228);

          ctx.drawImage(mask1, 0, 0);
          ctx.drawImage(mask2, parseInt($('#download-mug-mask-left').width()), 0);

            console.log("started!");
          if (c.msToBlob) { //for IE
              var blob = c.msToBlob();
              saveAs(blob, "mug-design-left.png");
              ctx.clearRect(0, 0, c.width, c.height);
          } else {
              //other browsers
              c.toBlob(function(blob) {
                  saveAs(blob, "mug-design-left.png");
                  ctx.clearRect(0, 0, c.width, c.height);
              });
          }
          console.log("done!");
        });
    }
});

/********** download the image***********/
$('#download-mug-right').click(function(e) {

    if ($.trim($("#print-right").attr("src")) != "") {
        var color = '#ffffff';
        var front_parent_width = $('#printer-right').width();
        var front_parent_height = $('#printer-right').height();
        var front_print_width = $('#print-right').width();
        var front_print_height = $('#print-right').height();
        var positionX =  ($('#printer-right > .ui-wrapper').position().left);
        var positionY = ($('#printer-right > .ui-wrapper').position().top);
        var mug_print_width = $('#download-mug-backing-center').width() + $('#download-mug-backing-right').width();

        // load print
        var tri = document.getElementById("trisect");
        tri.width = front_parent_width;
        tri.height = front_parent_height;
        ctx_tri = tri.getContext("2d");
        //ctx_tri.fillStyle = color;
        ctx_tri.fillStyle = "rgba(255, 255, 255, 0.0)";
        ctx_tri.fillRect(0, 0, front_parent_width, front_parent_height);
        var poster = document.getElementById("print-right");
        ctx_tri.drawImage(poster, positionX, positionY, front_print_width, front_print_height);
        var url = tri.toDataURL();
        $("#img-trid").attr("src", url);

        $("#img-trid").unbind("load").bind('load', function() {
          c = document.getElementById("cloner");
          c.width = mug_print_width;
          c.height = $('#download-mug-backing-right').height();
          ctx = c.getContext("2d");
          ctx.fillStyle = color;
          ctx.fillRect(0, 0, mug_print_width, $('#printer-right').height());

          var backing1 = document.getElementById("download-mug-backing-center");
          var backing2 = document.getElementById("download-mug-backing-right");

          var mask1 = document.getElementById("download-mug-mask-center");
          var mask2 = document.getElementById("download-mug-mask-right");

          var design = document.getElementById("img-trid");

      //    ctx.drawImage(poster, positionX, positionY, front_print_width, front_print_height);
          ctx.drawImage(backing1, 0, 0);
          ctx.drawImage(backing2, parseInt($('#download-mug-backing-center').width()), 0);

          ctx.drawImage(design, 0, 0, 90, 228, 148, 35, 90, 228);
          ctx.drawImage(design, 80, 0, 190, 228, 280, 35, 195, 228);

          ctx.drawImage(mask1, 0, 0);
          ctx.drawImage(mask2, parseInt($('#download-mug-mask-center').width()), 0);

            console.log("started!");
          if (c.msToBlob) { //for IE
              var blob = c.msToBlob();
              saveAs(blob, "mug-design-right.png");
              ctx.clearRect(0, 0, c.width, c.height);
          } else {
              //other browsers
              c.toBlob(function(blob) {
                  saveAs(blob, "mug-design-right.png");
                  ctx.clearRect(0, 0, c.width, c.height);
              });
          }
          console.log("done!");
        });
    }
});

var removeMugArtCenter = function() {
  $('#printer-center').html("").hide();
  $('#slider-center').hide();
  $('#mug-input-center').val('');
  hideImgControlsCenter();
}
var removeMugArtLeft = function() {
  $('#printer-left').html("").hide();
  $('#slider-left').hide();
  $('#mug-input-left').val('');
  hideImgControlsLeft();
}
var removeMugArtRight = function() {
  $('#printer-right').html("").hide();
  $('#slider-right').hide();
  $('#mug-input-right').val('');
  hideImgControlsRight();
}
/********** switch between square pillow front and back design views***********/
var switch_mug_perspective = function(e) {
  if (!$(e).hasClass("active")) {
    $(e).addClass("active");
  }

  if ($(e).hasClass("mug-left-i")) {
    $(".mug-wrapper.mug-left-i").addClass("active");
    $(".mug-wrapper.mug-center-i").removeClass("active");
    $(".mug-wrapper.mug-right-i").removeClass("active");
    $('#mug-left').show();
    $('#mug-center').hide();
    $('#mug-right').hide();
    $('#add-mug-left-form').show();
    $('#add-mug-center-form').hide();
    $('#add-mug-right-form').hide();
    $("#max-image-size-left").hide();
  }
  else if ($(e).hasClass("mug-center-i")) {
    $(".mug-wrapper.mug-left-i").removeClass("active");
    $(".mug-wrapper.mug-center-i").addClass("active");
    $(".mug-wrapper.mug-right-i").removeClass("active");
    $('#mug-left').hide();
    $('#mug-center').show();
    $('#mug-right').hide();
    $('#add-mug-left-form').hide();
    $('#add-mug-center-form').show();
    $('#add-mug-right-form').hide();
    $("#max-image-size-center").hide();
  }
  else if ($(e).hasClass("mug-right-i")) {
    $(".mug-wrapper.mug-left-i").removeClass("active");
    $(".mug-wrapper.mug-center-i").removeClass("active");
    $(".mug-wrapper.mug-right-i").addClass("active");
    $('#mug-left').hide();
    $('#mug-center').hide();
    $('#mug-right').show();
    $('#add-mug-left-form').hide();
    $('#add-mug-center-form').hide();
    $('#add-mug-right-form').show();
    $("#max-image-size-right").hide();
  }
}
