(function(){
'use strict';
angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

// CategoriesController.$inject=['MenuDataService'];
CategoriesController.$inject = ['items'];

function CategoriesController(items) {
var cat = this;
cat.list = items;
//

}

})();
