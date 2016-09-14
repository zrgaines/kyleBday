$(document).ready(function() {
  $('#tb1').addClass('zoomIn');
  
$(document).on('scroll', function() {
  if($(this).scrollTop()>=$('#tb2').position().top){
      $('#tb2').addClass('zoomIn');
      $('#tb2').removeClass('disNone');
    }
  if($(this).scrollTop()>=$('#tb3').position().top){
      $('#tb3').addClass('zoomIn');
      $('#tb3').removeClass('disNone');
    }
  if($(this).scrollTop()>=$('#tb4').position().top){
      $('#tb4').addClass('zoomIn');
      $('#tb4').removeClass('disNone');
    }      
  })
})