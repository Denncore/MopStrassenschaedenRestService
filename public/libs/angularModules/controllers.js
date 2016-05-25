var controllers = angular.module('controllers', []);

controllers.controller('StraßenschaedenController', function($scope, $http){
    $http.get('/strassenschaden/').then(function(strassenschaedenResponse) {
        $scope.strassenschaeden = strassenschaedenResponse.data;
    });
});
