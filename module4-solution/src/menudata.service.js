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
var item =  {name: response.data[i].name
, shortname: response.data[i].short_name };
  service.items.push(item);

}
return service.items;
}
);
};

 service.getItemsForCategory = function(categoryShortName) {
   return $http({
     method: "GET",
     url: (ApiBase + "/menu_items.json"),
     params: {
       category: categoryShortName
     }
   })
   .then(
     function (response){
       service.menuItems = [];
       console.log("response");
       console.log(response);
       for (var i = 0; i < response.data.menu_items.length; i++)
       {


  var itm = {
    name: response.data.menu_items[i].name,
    shortname : response.data.menu_items[i].short_name
  }
  service.menuItems.push(itm);

       }
       return service.menuItems;
     }
   );
 };


}



})();
