(function() {
  'use strict'

  angular.module('app')
    .component('pager', {
      bindings: {
        posts: '='
      },
      controller: controller,
      templateUrl: './js/pager/pager.html'
    })

  controller.$inject = ['pagerService']
  function controller(pagerService) {
    const vm = this
    vm.$onInit = onInit
    vm.pager = {}
    vm.setPage = setPage

    function onInit() {
      vm.setPage(1)
    }

    function setPage(page) {

      if (page < 1 || page > vm.pager.totalPages) return;

      // get pager object from service
      vm.pager = pagerService.getPager(vm.posts.length, page);

      // get current page of items
      vm.items = vm.posts.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
    }
  }
}())
