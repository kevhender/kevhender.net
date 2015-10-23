/**
 * Angular controller for the Overview tab
 */
(function() {

    angular.module('overview', [])

        .controller('OverviewCtrl', ['$http', function($http) {

            var me = this;

            me.data = [];

            $http.get('../resources/data/Overview.json').success(function(resp) {
                me.data = resp[0];
            });

        }])

        .directive('overview', function() {
            return {
                restrict: 'E',
                templateUrl: 'overview.html',
                controller: 'OverviewCtrl',
                controllerAs: 'overview'
            }
        });

})();