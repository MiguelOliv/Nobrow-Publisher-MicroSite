angular.module('myPageApp').config([
	'$routeProvider',
	'$locationProvider',
	function ($routeProvider, $locationProvider) {

		$routeProvider
			.when('/', {
				template: '<homepage></homepage>'
			})
			.when('/contact', {
				template: '<contact></contact>'
			})
			.otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode(true);
	}
]);