(function(){
  'use strict';
  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBase', 'https://davids-restaurant.herokuapp.com/');

MenuDataService.$inject = ['$http', 'ApiBase'];

function MenuDataService($http, ApiBase) {
var service = this;

service.getAllCategories = function() {
return $http({
  method: "GET",
  url: (ApiBase + "/categories.json")
})
.then(
  function (response){
    service.items = [];
for (var i = 0; i < response.data.length; i++)
{

  service.items.push(response.data[i].name);

}
return service.items;
}
);
 }

 service.getItemsForCategory = function(categoryShortName) {
   return $http({
     method: "GET",
     url: (ApiBase + "/menu_items.json"),
     params: {
       category: categoryShortName
     }
   });
 }


}



})();
