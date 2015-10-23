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
                    data: $.param(contact),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(
                    function(resp) {
                        $scope.contact = {};
                        $window.alert('Thank you for your submission, I will get back to you as soon as I can!.');
                    },
                    function(resp) {
                        $scope.contact = {};
                        $window.alert('Sorry, there was an error submitting your message.  Please try again later.');
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