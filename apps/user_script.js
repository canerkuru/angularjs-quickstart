// https://reqres.in/api/users?per_page=12
// data/users.json

    myApp.controller('userController', function($scope,$http) {
        $scope.message = 'Look! This is an user page';
		$http.get("data/users.json").then(function(response) {
        $scope.myData = response.data.data;
		});
    });