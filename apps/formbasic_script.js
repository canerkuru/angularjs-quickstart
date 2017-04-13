    myApp.controller('formbasicController', function($scope) {
        $scope.message = 'Look! I am a form basic page.';
		$scope.user = 'John Doe';
		$scope.email = 'john.doe@gmail.com';
		$scope.master = {firstName: "John", lastName: "Doe", email: "caner.kuru@yahoo.com"};
		$scope.reset = function() {
        $scope.user = angular.copy($scope.master);
		};
		$scope.reset();
    });