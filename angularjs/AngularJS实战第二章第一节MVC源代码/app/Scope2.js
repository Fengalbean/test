function EventController($scope) {
	$scope.count = 0;
	$scope.$on('MyEvent', function() {
		$scope.count++;
	});
}
<<<<<<< HEAD

=======
>>>>>>> 8232e5381d45fdf6bb27b48685c03dceb1a6bbf0
