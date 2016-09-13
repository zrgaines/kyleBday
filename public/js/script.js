$(document).ready(function() {
  $('#tb1').addClass('zoomIn');
  
$(document).on('scroll', function() {
  if($(this).scrollTop()>=$('#tb2').position().top){
      $('#tb2').addClass('zoomIn');
      $('#tb2').removeClass('disNone');
    }
  })
})