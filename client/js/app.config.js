(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true)
    $stateProvider
      .state('layout', {
        name: 'layout',
        abstract: true,
        component: 'layout',
      })
      .state('headr', {
        name: 'headr',
        url: '/',
        parent: 'layout',
        component: 'headr',
      })
      .state('navbar', {
        name: 'navbar',
        url: '/',
        component: 'navbar',
      })
      .state('content', {
        name: 'content',
        url: '/',
        parent: 'layout',
        component: 'content',
      })
      .state('splash', {
        name: 'content.splash',
        url: '/',
        component: 'splash',
      })
      .state('footr', {
        name: 'footr',
        url: '/',
        parent: 'layout',
        component: 'footr',
      })


  }

}());
