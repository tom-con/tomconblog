(function() {

  angular.module('app')
    .component('navbar', {
      controller: controller,
      templateUrl: './js/navbar/navbar.html'
    })

    controller.$inject = ['$state']
    function controller($state){
      const vm = this
      vm.$onInit = onInit

      function onInit(){
        console.log($state.$current.name);
      }

    }

}())
