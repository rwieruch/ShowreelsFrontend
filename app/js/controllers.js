'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('ShowreelCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.showreels = [
	    {"id":"campus_navigator",
	     "imageUrl":"img/showreels/campus_navigator.0.png",
	     "name": "Campus Navigator",
	     "text": "Eine Windows Phone 7.5 sowie Windows Phone 8 App zur Navigation auf dem Universitätscampus der TU Dresden und TU Berlin. Die Entwicklung erforderte die Programmierung in C# und dem Designen in XAML sowie den Umgang mit Windows Phone Komponenten und der Bing API. Dabei wurde sich so weit es ging an die Modern UI Designprinzipien von Microsoft gehalten, welche die GUI sehr minimalistisch erscheinen lässt. Die App ermöglicht eine schnelle Navigation zwischen zwei Campusstandorten oder vom aktuellen Standort aus. Des Weiteren bietet sie die Möglichkeit eigene Standorte zu erstellen und ausgewählte Standorte in einer Favoritenlisten zu verwalten. Abschließend können Standorte über soziale Kommunikationswege geteilt und beispielsweise durch eigene Bilder individualisiert werden.",
	     "contributors": "André Lorenz",
	     "projectUrl":"http://www.windowsphone.com/de-de/store/app/campus-navigator/820e89ff-88f9-4cf2-92e6-6144453fb199",
	     "tags": "#C# #WindowsPhone7.5 #WindowsPhone8 #XAML #BingAPI",
	 	 "date":new Date('03/10/2013')},

	 	{"id":"ones park_mobile",
	     "imageUrl":"img/showreels/onespark_mobile.0.png",
	     "name": "One Spark Mobile",
	     "text": "Eine Cross-Platform App entwickelt mit JS, CSS, HTML und PhoneGap. Die App ermöglicht die kollaborative Projektverwaltung mit mehreren Mitarbeitern. Nutzer können neue Projekte anlegen und Aufgaben mit variierenden Deadlines und Prioritäten an Mitarbeiter verteilen. Im Vorderung stand hierbei die Entwicklung mit plattformunabhängigen Technologien. Dafür eigneten sich das MVC Framework Ember.js und die Datenerweiterung Ember-data.js. Die App wurde schließlich durch PhoneGap auf iOS, Android und Windows Phone 7.5 portiert.",
	     "contributors": "Sebastian Fröstl, Maximilian Rudolph, Christian Schäfer, Joachim Fröstl, Robert Muschner",
	     "projectUrl":"https://github.com/sfroestl/onespark_webapp",
	     "tags": "#HTML #JavaScript #CSS #Cross-Platform #PhoneGap #ember.js #REST",
	 	 "date":new Date('02/10/2013')},

	 	{"id":"realtime_data_visualization",
	     "imageUrl":"img/showreels/realtime_data_visualization.0.png",
	     "name": "Nessee - Realtime Data Visualization (Grid)",
	     "text": "Das Ziel des Nessee Projekts, entwickelt von der TU Dresden und Citrix Online, ist die Entwicklung einer Plattform, die die reproduzierbare Emulation von Netzwerk- und Anwendungsverhalten innerhalb von verteilten Systemen ermöglicht. Das WebFrontend besteht aus einer ASP.NET Anwendung. Zur Visualisierung großer Datenmengen in Echtzeit sollte eine Grid Komponente verwendet werden. Dieses wurde hier mit dem JavaScript Framework Dojo.js umgesetzt. Ein Long Polling Mechanismus zwischen Frontend und Backend ermöglicht die Aktualisierung des Datensatzes in Echtzeit.",
	     "contributors": "",
	     "projectUrl":"http://www.inf.tu-dresden.de/index.php?node_id=578&refer_id=573&ID=125&ln=de",
	     "tags": "#JavaScript #dojo.js #REST",
	 	 "date":new Date('06/29/2013')},

	 	 {"id":"augmented_reality",
	     "imageUrl":"img/showreels/augmented_reality.0.png",
	     "name": "Augmented Reality App",
	     "text": "",
	     "contributors": "",
	     "projectUrl":"",
	     "tags": "",
	 	 "date":""},

	 	 {"id":"twitter_data_visualization",
	     "imageUrl":"img/showreels/twitter_data_visualization.0.png",
	     "name": "Twitter Data Visualization",
	     "text": "",
	     "contributors": "",
	     "projectUrl":"",
	     "tags": "",
	 	 "date":""}
	  ];

	//$http.get('showreels/showreels.json').success(function(data) {
    //  $scope.showreels = data;
    //});

	$scope.orderProp = '-date';

    $scope.addShowreel = function(){
    	var showreel = {name:$scope.name, text:$scope.text};
	    console.log(showreel);
	    $scope.showreels.push(showreel);

	    $scope.name = '';
	    $scope.text = '';
    }
  }])
  .controller('AboutCtrl', ['$scope', function($scope) {
	$scope.authuser = 
	    {"id":"1",
	     "email":"robin.wieruch@gmx.de",
	     "name":"Robin Wieruch",
	     "xing":"https://www.xing.com/profile/Robin_Wieruch",
	     "github":"https://github.com/wrobin",
	     "beschreibung": "Aufgewachsen in Berlin und Umgebung, absolvierte ich meinen Bachelor in Medieninformatik an der Technischen Universität Dresden. Zur Zeit mache ich dort auch meinen Master. In meinem Studium hat es mir vor allem die Entwicklung mit neuen, innovativen Technologien angetan. Streng gesehen sehe ich mich weder als puren Frontend- oder Backend-Entwickler. Ich entwickle gern auf beiden Seiten, um möglichst viele Einblicke zu erhalten. Die Schnittstelle zwischen beiden Komponenten durch die REST Paradigmen liegt mir daher nicht fern.",
	     "imageUrl": "img/user/IMG_3960_a.png"
	 	};
  }])
  .controller('SignupCtrl', ['$scope', '$http', 'UserService', function($scope, $http, UserService) {
    $scope.addUser = function(){
    	var user = {name:$scope.newUser.username, email:$scope.newUser.email, password:$scope.newUser.password1};
	    console.log(user);

		//$http.defaults.useXDomain = true;
	    user = UserService.create(user);
	        

	    //$scope.showreels.push(showreel);

	    $scope.newUser.username = '';
	    $scope.newUser.email = '';
	    $scope.newUser.password1 = '';
	    $scope.newUser.password2 = '';
	};
  }])
  .controller('ContactCtrl', [function() {

  }])
  // Meta Session for app.
  .controller('SessionCtrl', ['$scope', 'Session', function($scope, Session) {
	$scope.Session = Session;
  }])
	.controller('LoginLogoutCtrl', ['$scope', '$http', '$location', 'SessionInService', 'SessionOutService', 'Session', function($scope, $http, $location, SessionInService, SessionOutService, Session) {
	$scope.loginUser = function(){
		var session = {email:$scope.user.email, password:$scope.user.password};
	    console.log(session);

	    SessionInService.create(session, function(data){
		  //$scope.name = data.name;
		  //$scope.children = data.children;

		  // succefull login
		  console.log(data.token);
		  Session.isLogged = true;
		  Session.token = data.token;

		  console.log(Session);

	  	  $scope.user.email = '';
		  $scope.user.password = '';

		  $location.path( '/showreels.html' );
		});

	    //session = SessionService.create(session);
	    //console.log(session);
	};
	$scope.logoutUser = function(){
		$http.defaults.headers.common['token'] = Session.token;

		SessionOutService.create(function(data){
		  Session.isLogged = false;
		  Session.token = "";

		  console.log(Session);

		  $location.path( '/signup.html' );
		});
	};
	}]);