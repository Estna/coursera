(function(){
  'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject =['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){

  var buyersList = this;
  buyersList.listOfToBuy = ShoppingListCheckOffService.toBuy;
  buyersList.moveToBoughtList = function(itemIndex){
      ShoppingListCheckOffService.moveToBoughtList(itemIndex);
      buyersList.msg = "Everything is bought!";
}

}

function AlreadyBoughtController(ShoppingListCheckOffService){
var buyersBoughtList = this;
buyersBoughtList.boughtItemsList = ShoppingListCheckOffService.bought;
buyersBoughtList.msg = "Nothing bought yet.";
}

function ShoppingListCheckOffService(){
  var service = this;

  service.toBuy = [{
    name: 'cookies',
    quantity: '1 pack'
  },{
    name: 'tomatoes',
    quantity: '1 kg'
  },{
    name: 'bread',
    quantity: '1'
  },{
    name: 'orange juice',
    quantity: '1 bottle'
  },{
    name: 'butter',
    quantity: '1 pack'
  }];
  service.bought = [];

  service.moveToBoughtList = function(itemIndex){
    var item = {name: service.toBuy[itemIndex].name,
      quantity: service.toBuy[itemIndex].quantity
    };
      service.bought.push(item);
      service.toBuy.splice(itemIndex, 1);
    }
}



})();
