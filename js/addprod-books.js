
$(function() {

  //-------switch between rectangular and square pillow design templates-------//
    $("input[name=booktype]").on( "change", function() {
      var book_type = $(this).val();
      if (book_type == "paper") {
        $('#ebook-main-area').hide();
        $('#paper-book-main-area').show();
        $('#ebook-form').hide();
        $('#paper-book-form').show();
        for(i = 7; i < 13; i++) {
          $('#book-page-' + i).css("background-image", "");
          $('#book-input-' + i).val('');
        }
        $("#ebook-form").find("input[type=text], select").val("");
      }
      else if (book_type == "ebook") {
        $('#ebook-main-area').show();
        $('#paper-book-main-area').hide();
        $('#ebook-form').show();
        $('#paper-book-form').hide();
        for(i = 1; i < 7; i++) {
          $('#book-page-' + i).css("background-image", "");
          $('#book-input-' + i).val('');
        }
        $("#paper-book-form").find("input[type=text], select").val("");
      }

    } );

    $("#paperbook-radio").prop('checked', true);
    $("#ebook-radio").prop('checked', false);
});




function showBookPage(fileInput) {
    if (fileInput.files && fileInput.files[0]) {

        var input_id = $(fileInput).attr('id').replace(/[A-Za-z$-]/g, "");


        // DODAO Zoran za proveru velicine i extenzije slike START
        var imgSize = Math.round((fileInput.files[0].size / 1024) / 1024);
        var imgExtSplit = fileInput.files[0].type.split("/");
        var imgExt = imgExtSplit[1];
        if (imgExt === 'jpeg') {
            imgExt = 'jpg';
        }
        if (imgSize > 10) {
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
            input = document.getElementById('book-input-' + input_id);
            getOrientation(input.files[0], function(orientation) {

                if ([5, 6, 7, 8].indexOf(orientation) > -1 && [5, 6, 7, 8].indexOf(orientation) !== 3) {
                    $('#original-art-rotator').attr('src', binImg);
                    var c = document.getElementById("original-art-slice");
                    c.width = $('#original-art-rotator').height();
                    c.height = $('#original-art-rotator').width();
                    var ctx = c.getContext("2d");
                    ctx.transform(0, 1, -1, 0, $('#original-art-rotator').height(), 0);
                    ctx.drawImage(document.getElementById('#original-art-rotator'), 0, 0);
                    urlRot = c.toDataURL();
                    // set Base64 string in src of positioner
                    $('#book-page-' + input_id).css("background-image", "url(" + urlRot + ")");

                } else if ([5, 6, 7, 8].indexOf(orientation) === 3) {

                    $('#original-art-rotator').attr('src', binImg);
                    var c2 = document.getElementById("original-art-slice");
                    c2.width = $('#original-art-rotator').height();
                    c2.height = $('#original-art-rotator').width();
                    var ctx2 = c2.getContext("2d");
                    ctx2.transform(0, 1, -1, 0, $('#original-art-rotator').height(), 0);
                    ctx2.rotate(Math.PI);
                    ctx2.translate(-parseInt(c2.height), -parseInt(c2.width));
                    ctx2.drawImage(document.getElementById('original-art-rotator'), 0, 0);
                    urlRot2 = c2.toDataURL();
                    $('#book-page-' + input_id).css("background-image", "url(" + urlRot2 + ")");
                } else {
                    // set Base64 string in src of positioner
                    $('#book-page-' + input_id).css("background-image", "url(" + binImg + ")");
                }
                $('#book-page-' + input_id).find(".add-page-desc").css("opacity", 0);
                $('#book-page-' + input_id).find(".errorMsg").hide();
            });
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}


function removeBookImg(fileInput) {
  var input_id = $(fileInput).attr('id').replace(/[A-Za-z$-]/g, "");
  $('#book-page-' + input_id).css("background-image", "");
  $('#book-page-' + input_id).find(".add-page-desc").css("opacity", 1);
  $('#book-input-' + input_id).val('');
  
}

function showBookMsg(fileInput) {
  if (fileInput.files && fileInput.files[0]) {

      var imgSize = Math.round((fileInput.files[0].size / 1024) / 1024);
      var imgExtSplit = fileInput.files[0].name.split(".");
      var imgExt = imgExtSplit[1];


      if (imgSize > 60) {
          $('#book-size-error').show();
          $('#' + fileInput.id).val('');
          return false;
      }
      if (imgExt !== 'pdf' && imgExt !== 'epub') {
          $('#book-ext-error').show();
          $('#' + fileInput.id).val('');
          return false;
      }
      var reader = new FileReader();
      reader.onload = function(e) {

        $("#book-added-msg").html('<div class="errorIcon"></div>' + fileInput.files[0].name + ' was succesfully added');
        $(".book-added-msg-wrapper").show();
      };

      reader.readAsDataURL(fileInput.files[0]);
  }
}

function showBookPreviewMsg(fileInput) {
  if (fileInput.files && fileInput.files[0]) {
      var input_id = $(fileInput).attr('id');
      var imgSize = Math.round((fileInput.files[0].size / 1024) / 1024);

      if (fileInput.files[0].type !== 'application/pdf') {
          $('#book-preview-ext-error').show();
          $('#' + fileInput.id).val('');
          return false;
      }

      if (imgSize > 10) {
          $('#size-error').show();
          $('#' + fileInput.id).val('');
          return false;
      }

      var reader = new FileReader();
    //  reader.onload = function(e) {




        reader.readAsText(fileInput.files[0]);
                reader.onloadend = function () {
                  var count = reader.result.match(/\/Type[\s]*\/Page[^s]/g).length;
                  if (count <= 10) {
                    if (input_id.includes("paper")) {
                      $("#paper-book-preview-added-msg").html('<img src="images/icons/error.png" class="errorImg"><div class="book-preview-upload-msg">' + fileInput.files[0].name + ' was succesfully added</div>');
                      $("#paper-book-preview-added-msg").css("opacity", 1);
                    }
                    else if (input_id.includes("ebook")) {
                      $("#ebook-preview-added-msg").html('<img src="images/icons/error.png" class="errorImg"><div class="book-preview-upload-msg">' + fileInput.files[0].name + ' was succesfully added</div>');
                      $("#ebook-preview-added-msg").css("opacity", 1);
                    }

                  }
                  else if (count > 10) {
                    $('#book-preview-pages-error').show();
                    $('#' + fileInput.id).val('');
                    return false;
                  }
                }

  }
}

function hideBookSizeError() {
  $('#book-size-error').hide();
}

/*---------- hide extension error in add product when click on cancel in error------------*/
function hideBookExtError() {
  $('#book-ext-error').hide();
}
function hideBookPreviewExtError() {
  $('#book-preview-ext-error').hide();
}
function hideBookPreviewPagesError() {
  $('#book-preview-pages-error').hide();
}
