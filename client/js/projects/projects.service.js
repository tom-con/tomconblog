(function() {
  'use strict'

  angular.module('app')
    .service('projectsService', service)

  service.$inject = ['$http']
  function service($http) {
    const sv = this
    sv.getProjects = getProjects


    function getProjects(){
      return $http.get('/api/projects').then(projects => {
        return projects.data
      })
    }
  }


}())
