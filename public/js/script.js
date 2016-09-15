$(document).ready(function() {
  $('#tb1').addClass('zoomIn');

  $("#button").click(function() {
    $('html, body').animate({
      scrollTop: $("#myDiv").offset().top
    }, 2000);
  });
  
  $(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#tb2').position().top){
        $('#tb2').addClass('lightSpeedIn');
        $('#tb2').removeClass('disNone');
      }
    if($(this).scrollTop()>=$('#tb3').position().top){
        $('#tb3').addClass('fadeInLeftBig');
        $('#tb3').removeClass('disNone');
      }
    if($(this).scrollTop()>=$('#tb4').position().top){
        $('#tb4').addClass('flipInY');
        $('#tb4').removeClass('disNone');
      }
    if($(this).scrollTop()>=$('#tb5').position().top){
        $('#tb5').addClass('rotateInUpRight');
        $('#tb5').removeClass('disNone');
      }           
    })
})