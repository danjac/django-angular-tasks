'use strict';

/* Controllers */

angular.module('todolists.controllers', []).
  controller('TodoListCtrl', [
      '$scope', 
      '$log',
      '$route',
      'Todo',
      function($scope, $log, $route, Todo) {

        Todo.getAll().then(function(response){
          $scope.todos = response.data;
        });

        $scope.markDone = function(todo){
          Todo.markDone(todo).success(function(response){
              todo.is_done = true;  
          });
        };

        $scope.createTodo = function(){
          Todo.createTodo($scope.newTodo).success(function(response){
            $scope.todos.push(response);
            $scope.newTodo = null;
          });
        };

  }]);
