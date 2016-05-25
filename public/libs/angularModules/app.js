var app = angular.module('bundesligaergebnisse', ['ngRoute','controllers'])
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/strassenschaden/', {
            templateUrl: '../../basicstrassenschaedenliste.html',
            controller: 'StraßenschaedenController'
        }).otherwise({
            redirectTo: '/',
            templateUrl: '../../basic.html'

        });
    }]);