'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
//angular.module('myApp.services', []).
//  value('version', '0.1');

angular.module('myApp.services', ['ngResource']).
   factory('UserService', function($resource) {
    return $resource(
        'http://localhost:9000\:9000/register.json',
        {},
        //{id: '@id'},                    // default values
        {
            create: {method: 'POST'}//,
            //update: {method: 'PUT'}
        }
    );
   })
   .factory('SessionInService', function($resource) {
	    var resource = $resource(
	        'http://localhost:9000\:9000/login.json',
	        {},
	        //{id: '@id'},                    // default values
	        {
	            create: {method: 'POST'},
	            //update: {method: 'PUT'}
	        }
	    );

	    return resource;
   })
   .factory('SessionOutService', ['$resource', 'Session', function($resource, Session) {
	    var resource = $resource(
	        'http://localhost:9000\:9000/logout.json',
	        {},
	        //{id: '@id'},                    // default values
	        {
	            create: {method: 'POST'}//,
	            //headers:{'token': Session.token} 
	            //update: {method: 'PUT'}
	        }
	    );

	    //resource = Session.wrapActions( resource, ["headers", "create"] );

	    return resource;
   }])
   .factory('Session', function() {
		var session = {
			isLogged: false,
			token: ''
		};
		
	    // wrap given actions of a resource to send auth token with every
	    // request
	    /*session.wrapActions = function( resource, actions ) {
	      // copy original resource
	      var wrappedResource = resource;
	      for (var i=0; i < actions.length; i++) {
	        sessionWrapper( wrappedResource, actions[i] );
	      };
	      // return modified copy of resource
	      return wrappedResource;
	    };

	    // wraps resource action to send request with auth token
	    var sessionWrapper = function( resource, action ) {
	      // copy original action
	      resource['_' + action]  = resource[action];
	      // create new action wrapping the original and sending token
	      resource[action] = function( data, success, error){
	        return resource['_' + action](
	          angular.extend({}, data || {}, {token: session.token}),
	          success,
	          error
	        );
	      };
	    };*/

	    return session;

	});


