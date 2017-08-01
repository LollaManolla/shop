// Gloabl variable added for controlling draggable functionality where needed
var draggableAxis;

! function(e) {
    e.extend({
        uploadPreview: function(l) {
            var i = e.extend({
                input_field: ".image-input",
                preview_box: ".image-preview",
                label_field: ".image-label",
                label_default: "Choose File",
                label_selected: "Change File",
                no_label: !1,
                success_callback: null
            }, l);
            return window.File && window.FileList && window.FileReader ? void(void 0 !== e(i.input_field) && null !== e(i.input_field) && e(i.input_field).change(function() {
                var l = this.files;
                if (l.length > 0) {
                    var a = l[0],
                        o = new FileReader;
                    o.addEventListener("load", function(l) {
                        var o = l.target;
                        // code added by Milos Krasic to keep sort out image sizing in cover photo for edit profiles
                        if (a.type.match("image")) {
                          var image = new Image();
                            image.src = o.result;
                            image.onload = function() {
                              var imgWidth = image.width;
                              var imgHeight = image.height;

                              if (e(i.preview_box).hasClass("profile-cover_inner")) {
                                // reset draggable image container position to 0
                                e(i.preview_box).css("top",0);
                                e(i.preview_box).css("left",0);
                                var boxWidth =   e(i.preview_box).parent().css("width");
                                var boxHeight =   e(i.preview_box).parent().css("height");
                                boxWidth = boxWidth.replace(/\D/g,'');
                                boxHeight = boxHeight.replace(/\D/g,'');
                                if ((imgHeight > imgWidth) || (imgHeight == imgWidth) ) {
                                  // setting value of draggable axis to y for vertically oriented images
                                  draggableAxis = "y";
                                  if (boxWidth > imgWidth) {
                                    var proportion = boxWidth/imgWidth;
                                  }
                                  else {
                                    var proportion = imgWidth/boxWidth;
                                  }
                                  e(i.preview_box).css("height", boxHeight*proportion);
                                  e(i.preview_box).css("width", boxWidth);
                                }
                                else if (imgWidth > imgHeight) {
                                  // setting value of draggable axis to x for horizontally oriented images
                                  draggableAxis = "x";
                                  if (boxWidth > imgWidth) {
                                    var proportion = boxWidth/imgWidth;
                                  }
                                  else {
                                    var proportion = imgWidth/boxWidth;
                                  }
                                  e(i.preview_box).css("width", boxWidth*proportion);
                                  e(i.preview_box).css("height", boxHeight);
                                }
                              }
                            };
                        }
                        a.type.match("image") ? (e(i.preview_box).css("background-image", "url(" + o.result + ")"), e(i.preview_box).css("background-size", "cover"), e(i.preview_box).css("background-position", "center center")) : a.type.match("audio") ? e(i.preview_box).html("<audio controls><source src='" + o.result + "' type='" + a.type + "' />Your browser does not support the audio element.</audio>") : alert("This file type is not supported yet.")
                    }), 0 == i.no_label && e(i.label_field).html(i.label_selected), o.readAsDataURL(a), i.success_callback || i.success_callback()
                } else 0 == i.no_label && e(i.label_field).html(i.label_default), e(i.preview_box).css("background-image", "none"), e(i.preview_box + " audio").remove()
            })) : (alert("You need a browser with file reader support, to use this form properly."), !1)
        }
    })
}(jQuery);
