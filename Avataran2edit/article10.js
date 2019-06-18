var app = angular.module("myApp", []);
app.controller('check', function ($scope) {
    $scope.counter = 0;
    $scope.count = function (inc) {
        $scope.counter += inc;
    };
    $scope.class = "";
    $scope.changeClass = function(){
      if ($scope.class === "")
        $scope.class = "active";
    };
    $scope.isDisabled = false;
    $scope.disableClick = function() {
        $scope.isDisabled = true;
        return false;
    };
});