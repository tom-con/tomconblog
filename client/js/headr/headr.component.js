(function() {

  angular.module('app')
    .component('headr', {
      controller: controller,
      templateUrl: './js/headr/headr.html'
    })

    function controller(){
      const vm = this


       function initio_parallax_animation() {
        $('.parallax').each( function(i, obj) {
          var speed = $(this).attr('parallax-speed');
          if( speed ) {
            let background_pos = '-' + (window.pageYOffset / speed) + "px";
            $(this).css( 'background-position', 'center ' + background_pos );
          }
        });
      }
      $(window).scroll(function() {
         initio_parallax_animation();
      });
    }

}())
