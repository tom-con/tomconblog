(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true)
    $stateProvider
      .state({
        name: 'layout',
        abstract: true,
        component: 'layout',
      })
      .state({
        name: 'header',
        url: '/',
        parent: 'layout',
        component: 'header',
      })
  }

}());
