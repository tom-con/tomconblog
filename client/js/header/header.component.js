(function() {

  angular.module('app')
    .component('header', {
      controller: controller,
      templateUrl: './js/header/header.html'
    })

    function controller(){
      const vm = this
      console.log("got me");
    }

}())
