function checkAllChecked() {
  checked = $('.boxes:checked').length;
  total = $('.boxes').length
  if (checked == total) {
    $('#nogo').hide();
    $('#go').show();
    $('html').css('background-color', 'green');
  } else {
    $('#nogo').show();
    $('#go').hide();
    $('html').css('background-color', 'red');
  }
};


$('.boxes').each(function(){
  this.addEventListener('click', checkAllChecked, false);
});