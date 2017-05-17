(function() {

  angular.module('app')
    .component('quill', {
      controller: controller,
      templateUrl: './js/quill/quill.html'
    })

  controller.$inject = ['blogService', '$state']
  function controller(blogService, $state) {
    const vm = this
    vm.$onInit = onInit
    vm.addPost = addPost

    function onInit() {
      vm.post = {}
    }

    function addPost() {
      blogService.addPost(vm.post).then((post) => {
        $state.go(`/blog/${post.id}`)
      })
    }
  }

}())
