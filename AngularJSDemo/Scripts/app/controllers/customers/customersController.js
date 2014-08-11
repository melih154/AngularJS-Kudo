(function () {

    var CustomersController = function ($scope, $http) {

        console.log('CustomersController controllers loaded');

        function init() {
            setCustomers();
        }

        function setCustomers() {
            //TODO: Change this with service call
            $http.get('api/customer').success(function (data) {
                $scope.customers = data;
            });
        }

        init();
    };

    CustomersController.$inject = ['$scope', '$http'];
    angular.module('customersApp').controller('CustomersController', CustomersController);
}());