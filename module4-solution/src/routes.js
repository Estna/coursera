(function(){
  'use strict';

angular.module('MenuApp')
.config(AppConfig);

AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function AppConfig($stateProvider, $urlRouterProvider) {


$urlRouterProvider.otherwise('/home');

$stateProvider.state('home', {
  url: '/home',
  templateUrl: 'src/templates/home.template.html'
})

.state('categories', {

 url: '/categories',
 templateUrl: 'src/templates/main-categories.template.html',
 controller: 'CategoriesController as cat',
 resolve: {
   items: ['MenuDataService', function (MenuDataService) {
  return MenuDataService.getAllCategories();
   }]
 }

})

.state('items', {
  url: '/items',
  templateUrl: 'src/items.template.html'
});

}
})();
