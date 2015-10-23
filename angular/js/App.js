/**
 * Main index file for Angular app
 */
(function() {

    var app = angular.module('KevHender', ['overview', 'resume', 'gallery']);

    app.controller('TabCtrl', function() {

        var me = this;

        me.activeTab = 1;

        me.isSet = function(checkTab) {
            return this.activeTab === checkTab;
        };

        me.setTab = function(activeTab) {
            this.activeTab = activeTab;
        };

    });

})();
