(function() {

  angular.module('app')
    .component('headr', {
      controller: controller,
      templateUrl: './js/headr/headr.html'
    })

    function controller(){
      const vm = this
      console.log("got me");
    }

}())
