(function() {
  'use strict'

  angular.module('app')
    .component('blog', {
      controller: controller,
      templateUrl: './js/blog/blog.html'
    })

  controller.$inject = ['blogService']
  function controller(blogService) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      getPosts()
    }

    function getPosts() {
      blogService.getPosts().then(posts => {
        vm.posts = posts
      })
    }
  }
}())
