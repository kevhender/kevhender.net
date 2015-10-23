/**
 * Angular controller for the Gallery tab
 */
(function() {

    angular.module('gallery', [])

        .controller('GalleryCtrl', ['$http', function($http) {

            var me = this;

            me.data = [];

            $http.get('../resources/data/Gallery.json').success(function(resp) {
                me.data = resp;
            });

        }])

        .directive('gallery', function() {
            return {
                restrict: 'E',
                templateUrl: 'gallery.html',
                controller: 'GalleryCtrl',
                controllerAs: 'gallery'
            }
        });

})();