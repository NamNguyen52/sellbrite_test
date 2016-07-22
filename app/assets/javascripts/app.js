// Angular app setup

var app = angular.module('wikiTitles', ['ui.router','templates'])

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html'
    });

  $urlRouterProvider.otherwise('home');
}])
