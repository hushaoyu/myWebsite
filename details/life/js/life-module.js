/**
 * Created by husha_000 on 2017/3/13.
 */
var life = angular.module('life', []);

life.controller('lifeController', function ($scope, $http) {
    $http.get("life.json").then(function (response) {
        $scope.details = response.data;
    });
});