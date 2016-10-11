//Set up the module called myApp
var myApp = angular.module('myApp', ['ngRoute']);

//Set up the routing that will handle the templates
myApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        .when('/blog', {
            templateUrl : 'pages/blog.html',
            controller  : 'blogController'
        })

        .when('/projects', {
            templateUrl : 'pages/projects.html',
            controller  : 'projectsController'
        })

        .when('/photography', {
            templateUrl : 'pages/photography.html',
            controller  : 'photographyController'
        });

});









