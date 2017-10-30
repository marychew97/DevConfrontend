(function($){
  $(function(){
    $('.button-collapse').sideNav();
  });
})(jQuery);

$('.loadingscreen-fail').click(function(){
  $('.loadingscreen-fail').css('display', 'none');
})

$('#aboutclick').click(function(){
  $('.loadingscreen-fail').css('display', 'block');
})

function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#img1').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
    if (input.files && input.files[1]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#img2').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[1]);
    }
    if (input.files && input.files[2]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#img3').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[2]);
    }
    if (input.files && input.files[3]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#img4').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[3]);
    }

}

$('#uploadpictures').change(function(){
  file = document.getElementById('uploadpictures');
  if (file.files.length != 4){
    $(this).val('');
    Materialize.toast('Must 4 pictures only!', 4000);
    $('#rowpictures').slideUp(500);
    return;
  }
  readURL(this);
  $('#rowpictures').slideDown(500).delay(1000);
})
