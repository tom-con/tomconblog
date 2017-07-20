(function() {

  angular.module('app')
    .component('splash', {
      controller: controller,
      templateUrl: './js/splash/splash.html'
    })

    controller.$inject = ['splashService']
    function controller(splashService){
      const vm = this
      vm.$onInit = onInit


      function onInit(){
        getProjects()
      }


      function getProjects() {
        splashService.getProjects().then(projects => {
          vm.projects = projects
        })
      }
    }

}())
