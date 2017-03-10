/**
 * Created by husha_000 on 2017/2/22.
 */
var portfolio = angular.module('portfolio', []);

portfolio.controller('portfolioController', function ($scope,$http) {
    $http.get("portfolio.json").then(function (response) {
        $scope.details = response.data;
    });
});