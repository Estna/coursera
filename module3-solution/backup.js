(function(){
'use strict';
angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/");


//MenuSearchService.$inject['$http', 'ApiBasePath'];
NarrowItDownController.$inject = ['MenuSearchService'];
console.log("here");


function NarrowItDownController(MenuSearchService){
var narrowDownCtrl = this;
narrowDownCtrl.SearchTerm = "";
//narrowDownCtrl.found = MenuSearchService.getItems();

narrowDownCtrl.NarrowDown = function(){
//narrowDownCtrl.found = [];
//narrowDownCtrl.found = MenuSearchService.getMatchedMenuItems(narrowDownCtrl.SearchTerm);
narrowDownCtrl.prom = MenuSearchService.getMatchedMenuItems(narrowDownCtrl.SearchTerm);
//).then(function(result){
  //console.log(result);
narrowDownCtrl.prom.then(function (result) {
console.log(result);
     }, function (errorResponse) {
         console.log(errorResponse.message);
       });

narrowDownCtrl.smth = function(){
  console.log("aaa");
}
//narrowDownCtrl.found =  MenuSearchService.getMatchedMenuItems(narrowDownCtrl.SearchTerm);
 }

//narrowDownCtrl.found = MenuSearchService.getMatchedMenuItems(narrowDownCtrl.SearchTerm);
console.log(narrowDownCtrl.found);
//narrowDownCtrl.found = "";
console.log("aaa");
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];

function MenuSearchService($http, ApiBasePath){
var service = this;

service.getMatchedMenuItems =  function(searchTerm, myList){
return $http({
  method: "GET",
  url: (ApiBasePath + 'menu_items.json')
}).then(
  function (response){
    service.foundItems = [];
for (var i = 0; i < response.data.menu_items.length; i++)
{
  if (response.data.menu_items[i].description.indexOf(searchTerm)=== -1)
  {
    continue;
  }
  else {
/*var item = {
    name: response.data.menu_items[i].name,
    shortName: response.data.menu_items[i].short_name,
    description: response.data.menu_items[i].description
  };
    service.foundItems.push(item);
  }
  */
  service.foundItems.push(response.data.menu_items[i]);
}
}
return service.foundItems;
}
);
//myList = service.foundItems;

}

}

})();
