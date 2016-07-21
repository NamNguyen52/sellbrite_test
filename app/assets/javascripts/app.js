var app = angular.module('wikiTitles', ['ui.router','templates'])

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'WikiCtrl'
    });

  $urlRouterProvider.otherwise('home');
}])
