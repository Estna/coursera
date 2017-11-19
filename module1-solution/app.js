(function(){
angular.module('LunchCheck', [ ])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.items="";
  $scope.result="";
  $scope.test = "aaa";

$scope.Check = function(){
    $scope.cnt = 0;
var food = $scope.items.split(',');
for (var i = 0; i<food.length; i++)
{

  if (food[i].trim()!="")
  {
    $scope.cnt++;;
  }

}
if (  $scope.cnt ===0)
{
  $scope.result="Please enter data first!";
}
else if (  $scope.cnt>3)
{
    $scope.result= "Too much!"
}
else {
    $scope.result= "Enjoy!"
}

};


}
})();
