var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

    // configure our routes
    myApp.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'pages/main.html',
                controller  : 'mainController'
            })
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })
            .when('/user', {
                templateUrl : 'pages/user.html',
                controller  : 'userController'
            })
            .when('/formbasic', {
                templateUrl : 'pages/formbasic.html',
                controller  : 'formbasicController'
            });
    });

    myApp.controller('mainController', function($scope) {
        $scope.message = 'Everyone come and see how good I look!';
    });

    myApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

