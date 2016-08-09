var myApp = angular
    .module("myModule", [])
    .controller("redColorCtlr", function($scope, $rootScope) {
        $scope.redColor = "I am Red Color";
        $rootScope.rootScopeColor = "I am Root Scope Color";
    })
    .controller("greenColorCtlr", function($scope) {
        $scope.greenColor = "I am Green Color";
    });