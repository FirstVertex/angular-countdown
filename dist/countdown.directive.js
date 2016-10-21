(function() {
    'use strict';

    angular
        .module('app')
        .directive('countdown', countdown);

    countdown.$inject = [];
    
    function countdown () {
        // Usage:
        //     <countdown></countdown>
        // Creates:
        // 
        return {
            restrict: 'E',
            templateUrl: '/dist/countdown.html',
            controller: 'countdownController',
            controllerAs: 'vm',
            scope: {
                targetDate: '=',
                countdownTitle: '@',
                countdownId: '@'
            },
            bindToController: true
        };
    }

})();