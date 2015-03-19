var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
        restrict: 'E',
<<<<<<< HEAD
        template: '<div class="container"><h2>Hi everyone!</h2></div> ',
=======
        template: '<div>Hi everyone!</div>',
>>>>>>> 8232e5381d45fdf6bb27b48685c03dceb1a6bbf0
        replace: true
    }
});