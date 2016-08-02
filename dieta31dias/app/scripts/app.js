'use strict';

/**
 * @ngdoc overview
 * @name dieta31diasApp
 * @description
 * # dieta31diasApp
 *
 * Main module of the application.
 */
angular
  .module('dieta31diasApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/intro', {
        templateUrl: 'views/intro.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/1consulta', {
        templateUrl: 'views/1consulta/1consulta.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/balanca', {
        templateUrl: 'views/1consulta/balanca.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/fitametrica', {
        templateUrl: 'views/1consulta/fitametrica.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/maquinafotografica', {
        templateUrl: 'views/1consulta/maquinafotografica.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/alimentospermitidos', {
        templateUrl: 'views/1consulta/alimentospermitidos.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/alimentospermitidossemlimite', {
        templateUrl: 'views/1consulta/alimentospermitidossemlimite.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/alimentosproibidos', {
        templateUrl: 'views/1consulta/alimentosproibidos.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/maximizarresultados', {
        templateUrl: 'views/1consulta/maximizarresultados.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/12conselhos', {
        templateUrl: 'views/1consulta/12conselhos.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/alimentospermitidos2', {
        templateUrl: 'views/2consulta/alimentospermitidos.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/alimentospermitidossemlimite2', {
        templateUrl: 'views/2consulta/alimentospermitidossemlimite.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/alimentosproibidos2', {
        templateUrl: 'views/2consulta/alimentosproibidos.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/dietahospital', {
        templateUrl: 'views/dietaHospital.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/horario', {
        templateUrl: 'views/horario.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/:id', {
        templateUrl: 'views/diaDetails.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
