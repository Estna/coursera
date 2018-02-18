(function(){
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

// CategoriesController.$inject=['MenuDataService'];
CategoriesController.$inject = ['catItems'];

function CategoriesController(catItems) {
var cat = this;
cat.list = catItems;
//

}

})();
