/**
 * Angular controller for the Resume tab
 */
(function() {

    angular.module('resume', [])

        .controller('ResumeCtrl', ['$http', function($http) {

            var me = this;

            me.data = [];

            $http.get('../resources/data/Resume.json').success(function(resp) {
                me.data = resp[0];
            });

        }])

        .directive('resume', function() {
            return {
                restrict: 'E',
                templateUrl: 'resume.html',
                controller: 'ResumeCtrl',
                controllerAs: 'resume'
            }
        });

})();