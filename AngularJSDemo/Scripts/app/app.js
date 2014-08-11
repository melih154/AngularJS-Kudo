var customersApp = angular.module('customersApp', ['ngRoute']);

customersApp.factory('customerService', function ($http) {
    var factory = {};

    factory.getCustomers = function () {
        //var customers = [];

        $http({ method: 'GET', url: 'api/Customer/GetAllCustomers' })
            .success(function (data, status, headers, config) {
                return data;
            });

        //return $http.get('api/Customer').then(
        //        function (results) {
        //            results.data.forEach(function (customer) {
        //                customers.push(customer);
        //            });
        //            return customers;
        //        });


        //$http({ method: 'GET', url: 'api/Customer' })
        //    .success(function (data, status, headers, config) {
        //        return data;
                //setCustomerData(data);
            //});
    }

    return factory;
});

//customersApp.filter('checkmark', function () {
//    return function (input) {
//        return input ? '\u2713' : '\u2718';
//    };
//});

customersApp.config(function ($routeProvider) {
    var viewBase = '/Scripts/app/views/';

    $routeProvider
        .when('/customers',
        {
            controller: 'CustomersController',
            templateUrl: viewBase + 'customers/customers.html'
        })
        .when('/customeredit/:customerId', {
            controller: 'CustomerEditController',
            templateUrl: viewBase + 'customers/customerEdit.html',
            secure: true //This route requires an authenticated user
        })
        .otherwise({ redirectTo: '/customers' });
});

//var controllers = {};

//controllers.SimpleController = function ($scope, customerService, $http) {
    
//    //$scope.customers = [
//    //    { name: 'Shriva', city: 'London' },
//    //    { name: 'Dave', city: 'Bristol' },
//    //    { name: 'Napur', city: 'Manchester' },
//    //    { name: 'Heedy', city: 'Liverpool' }];
//    //$scope.customers = customerService.getCustomers();
//    //$scope.apply();


//    //$scope.customers = {};
//    init();

//    function init()
//    {
//        setCustomers();
//    }

//    function setCustomers()
//    {
//        //TODO: Change this with service call
//        $http.get('api/Customer').success(function (data) {
//            $scope.customers = data;
//        });


//        //var customersList = [];
//        //var customers = [];
//        //customersList = customerService.getCustomers();

//        //if (angular.isUndefinedOrNull(customersList)) {
//        //    customersList.forEach(function (customer) {
//        //        $scope.customers.push(customer);
//        //    });
//        //}

//        //$scope.customers = customers;
//    }

//    //$scope.addCustomer = simpleFactory.addCustomer($scope.newCustomer.name, $scope.newCustomer.city);
//    $scope.addCustomer = function () {
//        $scope.customers.push(
//            {
//                name: $scope.newCustomer.name,
//                city: $scope.newCustomer.city
//            }
//            );
//        //$scope.customers.apply();
//    };
//};

//demoApp.controller(controllers);