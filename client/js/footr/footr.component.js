(function() {

  angular.module('app')
    .component('footr', {
      controller: controller,
      templateUrl: './js/footr/footr.html'
    })

    function controller(){
      const vm = this
      console.log("got me");
    }

}())
