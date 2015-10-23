/**
 * Angular controller for the Contact tab
 */
(function() {

    angular.module('contact', [])

        .controller('ContactCtrl', ['$http', '$scope', '$window', function($http, $scope, $window) {

            $scope.submitForm = function(contact) {

                $http({
                    url: '../sendMail.php',
                    method: 'POST',
                    params: contact
                }).then(
                    function(resp) {
                        $scope.contact = {};
                        $window.alert('Thank you for your submission, I will get back to you as soon as I can!.');
                    },
                    function(resp) {
                        $scope.contact = {};
                        $window.alert('Thank you for your submission, I will get back to you as soon as I can!.');
                    }
                );
            }

        }])

        .directive('contact', function() {
            return {
                restrict: 'E',
                templateUrl: 'contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contact'
            }
        });

})();