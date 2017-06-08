/* Image DPI */
var dpi = 300;
/* Proportion of print */
var containerProportion = 3;
/* Print container area width inch */
var containerWidthInch = 2.93;
/* Print container area height inch */
var containerHeightInch = 6.1;
/* Print container area width px */
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
    $("#printer").width(containerWidthProp);
    $("#printer").height(containerHeightProp);
    $("#printer").css("margin-left", -(containerWidthProp/2)+ "px");
    previewImg();
    mouseControl();
//    changePrint();
    $("#max-size").click(function() {
        $("#print").width($("#slider").slider("option", "max"));
        $("#print").height('auto');
        $(".ui-wrapper").width($("#print").width());
        $(".ui-wrapper").height($("#print").height());

        $("#slider").slider('value', $("#slider").slider("option", "max"));
        centerImg();
    });
    $("#center-image").click(function() {
        centerImg();
    });
});
var mouseControl = function() {
    $("#printer")
        .mouseenter(function() {
            $('.draggable').mousedown();
            $("#printer").css('background', 'rgba(0, 0, 0, 0.3)');
            $(".ui-wrapper").css('border', '1px dashed #4affff');
        })
        .mouseleave(function() {
            $('.draggable').mouseup();
            $("#printer").css('background', 'rgba(0, 0, 0, 0.0)');
            $(".ui-wrapper").css('border', '0px dashed #4affff');
        });
}
var centerImg = function() {
    var parentTop = $("#printer").height() / 2;
    var parentLeft = $("#printer").width() / 2;
    var childTop = parentTop - ($("#print").height() / 2);
    var childLeft = parentLeft - ($("#print").width() / 2);
    if($(".ui-wrapper").length){
       $(".ui-wrapper").css('top', childTop + 'px');
       $(".ui-wrapper").css('left', childLeft + 'px');
    }else{
       $("#print").css('top', childTop + 'px');
       $("#print").css('left', childLeft + 'px');
    }
    console.log($("#print").width() + ' - ' + $("#printer").width() + ' - ' + childLeft);
}
var previewImg = function() {
    $("#art-input").change(function() {

        //Get count of selected files
        var countFiles = $(this)[0].files.length;
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var imgSize = Math.round(($(this)[0].files[0].size / 1024) / 1024);

        var image_holder = $("#printer");
        image_holder.empty();

        if (imgSize > 10) {
            $('#size-error').show();
            $('#art-input').val('');
            return false;
        }

        if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof(FileReader) != "undefined") {
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles; i++) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                      binImg = e.target.result;
                      input = document.getElementById('art-input');
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
                                    "id": "print",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoaded();
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
                                    "id": "print",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoaded();
                            } else {
                                console.log(3);
                                $("<img />", {
                                    "src": binImg,
                                    "id": "print",
                                    "class": "draggable resizable"
                                }).appendTo(image_holder);
                                imageLoaded();
                            }
                        });
                    };
                    image_holder.show();
                    reader.readAsDataURL($(this)[0].files[i]);
                    showImgControls();
                }
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            $('#ext-error').show();
        }
    });
}

var showImgControls = function() {
  $(".plus").show();
  $(".minus").show();
  $("#max-size").show();
  $("#center-image").show();
  $('#slider').show();
}

var hideImgControls = function() {
  $(".plus").hide();
  $(".minus").hide();
  $("#max-size").hide();
  $("#center-image").hide();
}

var imageLoaded = function() {
    $("#print").load(function() {
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
        slideFunc(sliderMax, sliderPos);
        $("#print").width(sliderPos);
        centerImg();

        $(".resizable").resizable({
                scroll: true,
                handles: "se, sw, nw, ne",
                resize: function(e, ui) {
                  $("#max-image-size").hide();
                  $("#slider").slider({orientation: "vertical", value: ui.size.width});
                  console.log("ui.size.width is " + ui.size.width);
                  console.log("sliderMax is " + sliderMax);
                   if (ui.size.width >= sliderMax) {
                  //  $("#dialog").dialog();
                    $('#max-image-size').show();
                   }
                },
                stop: function(e, ui) {

                },
                maxWidth: sliderMax,
                minWidth: 10,
                aspectRatio: true
          });

        $(".ui-wrapper").draggable({
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
var slideFunc = function(m, v) {

    $("#slider").slider({
        orientation: "vertical",
        range: "min",
        value: v,
        min: 10,
        max: m,
        //this gets a live reading of the value and prints it on the page
        slide: function(event, ui) {
            $("#max-image-size").hide();
            $("#print").width(ui.value);
            $("#print").height('auto');
            $(".ui-wrapper").width(ui.value);
            $(".ui-wrapper").height($("#print").height());
            console.log("m is " + m);
            console.log("ui.value is " + ui.value);
            if (ui.value >= m) {
            //    $("#dialog").dialog();
                $('#max-image-size').show();
            }
        },
        //this updates the value of your hidden field when user stops dragging
        change: function(event, ui) {

        }
    });
  }

  var closeIcon = $("#close-max-image-size");
  closeIcon.click(function() {
      $("#max-image-size").hide();
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
$('#download').click(function(e) {
    if ($.trim($("#print").attr("src")) != "") {
        var color = '#ffffff';
        var front_parent_width = $('#printer').width();
        var front_parent_height = $('#printer').height();
        var front_print_width = $('#print').width() + 16;
        var front_print_height = $('#print').height() + 14;
        var positionX =  ($('.ui-wrapper').position().left);
        var positionY = ($('.ui-wrapper').position().top);
        c = document.getElementById("cloner");
        c.width = $('#full-mask').width() + 16;
        c.height = $('#full-mask').height() + 14;
        ctx = c.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, $('#full-mask').width(), $('#full-mask').height());
      //  var shirt = document.getElementById("fake");
        var poster = document.getElementById("print");

      //  if($('#selp').val() == 'sp'){
      //      var mask = document.getElementById("mask");
    //    }else{
            var mask = document.getElementById("full-mask");
      //  }

    //    ctx.drawImage(shirt, 0, 0);
        ctx.drawImage(poster, positionX, positionY, front_print_width, front_print_height);
        ctx.drawImage(mask, 0, 0);
          console.log("started!");
        if (c.msToBlob) { //for IE
            var blob = c.msToBlob();
            saveAs(blob, "phone-case.png");
            ctx.clearRect(0, 0, c.width, c.height);
        } else {
            //other browsers
            c.toBlob(function(blob) {
                saveAs(blob, "phone-case.png");
                ctx.clearRect(0, 0, c.width, c.height);
            });
        }
        console.log("done!");
    }
});

var removePhoneArt = function() {
  $('#printer').html("");
  $('#slider').hide();
  $('#art-input').val('');
  hideImgControls();
}
