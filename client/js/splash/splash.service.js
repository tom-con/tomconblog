(function() {
  'use strict'

  angular.module('app')
    .service('splashService', service)

  service.$inject = ['$http']
  function service($http) {
    const sv = this
    sv.getProjects = getProjects


    function getProjects(){
      return $http.get('/api/projects', {params:{limit: 3}}).then(projects => {
        return projects.data
      })
    }
  }


}())
