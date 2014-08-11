(function () {

    var customersFactory = function ($http, $q) {

        var serviceBase = '/api/Customer/',
            factory = {};

        factory.newCustomer = function () {
            return $q.when({ id: 0 });
        };

        factory.getCustomer = function (id) {
            return $http.get(serviceBase + id).then(function (results) {
                return results.data;
            });
        };

        return factory;
    };

    customersFactory.$inject = ['$http', '$q'];

    angular.module('customersApp').factory('customersService', customersFactory);

}());