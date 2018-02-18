(function(){
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
templateUrl: "src/templates/categories.template.html",
//controller: 'CategoriesComponentController',
bindings: {
  catItems: '<'
}
  }
);
/*
function CategoriesComponentController(){
  var $ctrl = this;
  $ctrl.categories = [];

}
*/
}
)();
