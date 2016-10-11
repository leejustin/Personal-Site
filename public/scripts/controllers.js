	//Contains the controllers that are used for the templates

	myApp.controller('headerController', function($scope, $location) {
		//Control the navigation
		$scope.navHome = function() {
			$location.path('/');
		};
		$scope.navBlog = function() {
			$location.path('/blog');
		};
		$scope.navProjects = function() {
			$location.path('/projects');
		};
		$scope.navPhotography = function() {
			console.log("hi");
			$location.path('/photography');
		};
	});

	myApp.controller('mainController', function($scope) {
		$scope.message = 'Testing still';
	});

	myApp.controller('blogController', function($scope) {
		$scope.message = 'Hello test';
	});

	myApp.controller('projectsController', function($scope) {
		$scope.message = 'Hello test';
	});

	myApp.controller('photographyController', function($scope) {
		$scope.message = 'Hello test';
	});
