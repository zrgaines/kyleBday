$(document).ready(function() {
  $('#tb1').addClass('zoomIn');
  
  var waypoints = $('#tb2').waypoint({
    handler: function(direction) {
      alert(' hit')
    }
  })
})