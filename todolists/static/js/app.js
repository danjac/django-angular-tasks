'use strict';


// Declare app level module which depends on filters, and services
angular.module('todolists', [
  'todolists.filters', 
  'todolists.services', 
  'todolists.directives', 
  'todolists.controllers']).
  config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'static/partials/list.html',
        controller: 'TodoListCtrl',
        activetab: 'home'
    }).when('/about', {
        templateUrl: 'static/partials/about.html',
        activetab: 'about'
    }).when('/contact', {
        templateUrl: 'static/partials/contact.html',
        activetab: 'contact'
    }).otherwise({ redirectTo: '/' });
  }).run(['$rootScope', '$route', '$log', function($rootScope, $route, $log){
      var getActiveTab = function() { 
        return $route.current? $route.current.activetab : 'home'; 
      };
      $rootScope.$watch(getActiveTab, function(newVal, oldVal){
        $rootScope.activetab = newVal;
      });
}]);
