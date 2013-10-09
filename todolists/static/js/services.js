'use strict';

/* Services */



// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('todolists.services', [
  ]).
  service('Todo', function($http, $log){

    return {
      getAll : function(){
        return $http.get('/api/todos/');
      },
      markDone: function(todo){
        return $http.post('/api/todos/' + todo.id + '/mark_done/');      
      },
      createTodo: function(todo){
        return $http.post('/api/todos/', todo);
      }
    }

  }).
  value('version', '0.1');
