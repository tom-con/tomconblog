(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'ngQuillConfigProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider, ngQuillConfigProvider) {
    console.log(ngQuillConfigProvider);
    function imageHandler(image){
      console.log("hi");
      console.log(image);
    }
    ngQuillConfigProvider.set({placeholder: 'Hello this is new', imageHandler: imageHandler})
    console.log(ngQuillConfigProvider);


    $locationProvider.html5Mode(true)
    $stateProvider
      .state('layout', {
        name: 'layout',
        abstract: true,
        component: 'layout',
      })
      .state('headr', {
        name: 'headr',
        abstract:true,
        parent: 'layout',
        component: 'headr',
      })
      .state('navbar', {
        name: 'navbar',
        abstract:true,
        parent:'headr',
        component: 'navbar',
      })
      .state('content', {
        name: 'content',
        abstract:true,
        parent: 'layout',
        component: 'content',
      })
      .state('splash', {
        name: 'splash',
        url: '/',
        parent:'content',
        component: 'splash',
      })
      .state('blog', {
        name: 'blog',
        url: '/blog',
        parent:'content',
        component: 'blog',
      })
      .state('projects', {
        name: 'projects',
        url: '/projects',
        parent:'content',
        component: 'projects',
      })
      .state('quill', {
        name: 'quill',
        url: '/newPost',
        parent:'content',
        component: 'quill',
      })
      .state('footr', {
        name: 'footr',
        abstract:true,
        parent: 'layout',
        component: 'footr',
      })


  }

}());
