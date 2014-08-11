(function () {

    var CustomerEditController = function ($rootScope, $scope, $timeout, $routeParams, customersService) {

        console.log('CustomerEditController controllers loaded');

        var customerId = ($routeParams.customerId) ? parseInt($routeParams.customerId) : 0,
           timer,
           onRouteChangeOff;

        $scope.customer = {};
        $scope.title = (customerId > 0) ? 'Edit' : 'Add';
        $scope.buttonText = (customerId > 0) ? 'Update' : 'Add';
        $scope.updateStatus = false;
        $scope.errorMessage = '';

        init();

        function init() {
            if (customerId > 0) {
                customersService.getCustomer(customerId).then(function (customer) {
                    $scope.customer = customer;
                }, processError);
            } else {
                customersService.newCustomer().then(function (customer) {
                    $scope.customer = customer;
                });

            }
        }

        function processError(error) {
            $scope.errorMessage = error.message;
            startTimer();
        }

        function startTimer() {
            timer = $timeout(function () {
                $timeout.cancel(timer);
                $scope.errorMessage = '';
                $scope.updateStatus = false;
            }, 3000);
        }

    };


    CustomerEditController.$inject = ['$rootScope', '$scope', '$timeout', '$routeParams', 'customersService'];
    angular.module('customersApp').controller('CustomerEditController', CustomerEditController);
}());