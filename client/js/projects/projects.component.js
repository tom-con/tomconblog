(function() {

  angular.module('app')
    .component('projects', {
      controller: controller,
      templateUrl: './js/projects/projects.html'
    })

  controller.$inject = ['projectsService']
  function controller(projectsService) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      getProjects()
    }

    function getProjects() {
      projectsService.getProjects().then(projects => {
        vm.projects = projects
      })
    }

  }

}())
