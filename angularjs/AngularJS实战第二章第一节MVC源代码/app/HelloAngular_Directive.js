var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
        restrict: 'E',
        template: '<div class="container"><h2>Hi everyone!</h2></div> ',
        replace: true
    }
});