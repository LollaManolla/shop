/*---------- PREVIEW IMAGE ON SELECT ------------*/
function showMyImage(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
             $('#cover-img').css('transform', 'translate3d(0px, 0px, 0px)');
            $('#cover-img').attr('src', e.target.result);
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

$(document).ready(function() {
  /*--------- DRAG IMAGE -----------*/
    Draggable.create("#cover-img", {
        type: "x,y",
        bounds: "#wrapper",
        edgeResistance: 0.0
    });
});
