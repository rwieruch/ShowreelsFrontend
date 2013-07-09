'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', '$strap.directives']).
  config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  	$routeProvider.when('/signup', {templateUrl: 'partials/signup.html', controller: 'SignupCtrl'});
    $routeProvider.when('/showreels', {templateUrl: 'partials/showreels.html', controller: 'ShowreelCtrl'});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'});
    $routeProvider.when('/impressum', {templateUrl: 'partials/impressum.html'});
    $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactCtrl'});
    $routeProvider.otherwise({redirectTo: '/showreels'});
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }])
  // Redirection for no session.
  .run( function($rootScope, $location, Session) {
    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if (!Session.isLogged) {
        // no logged user, we should be going to #login
        if ( next.templateUrl == "partials/signup.html" ) {
          // already going to #login, no redirect needed
        } else {
          // not going to #login, we should redirect now
          $location.path( "/signup" );
        }
      }         
    });
 });