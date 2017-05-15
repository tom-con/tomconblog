(function() {
  'use strict'

  angular.module('app')
    .service('blogService', service)

  service.$inject = ['$http']
  function service($http) {
    const sv = this
    sv.getPosts = getPosts

    function getPosts(){
      return $http.get('/api/posts').then(posts => {
        console.log(posts);
        return posts.data
      })
    }

  }
}())
