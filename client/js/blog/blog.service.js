(function() {
  'use strict'

  angular.module('app')
    .service('blogService', service)

  service.$inject = ['$http']
  function service($http) {
    const sv = this
    sv.getPosts = getPosts
    sv.addPost = addPost

    function getPosts(){
      return $http.get('/api/posts').then(posts => {
        return posts.data
      })
    }
    function addPost(data){
      return $http.post('/api/posts', data).then(post => {
        return post.data
      })
    }
  }
}())
