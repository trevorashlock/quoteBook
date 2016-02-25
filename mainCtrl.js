var app = angular.module("quoteBook")
app.controller("mainCtrl", function($scope, dataService) {

$scope.quotes = dataService.getData();

$scope.adding = false;
$scope.removing = false;
$scope.filtering = false;

$scope.addQuote = function() {
	dataService.addData($scope.newQuote);
}
$scope.removeQ = function() {
	dataService.removeData($scope.remove.text)
}

});