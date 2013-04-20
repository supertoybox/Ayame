require.config({
    paths: {
        
        jquery: '../components/jquery/jquery',
        underscore: '../components/underscore/underscore',
        backbone: '../components/backbone/backbone',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        backbone: {
            deps:['underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },        
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap'], function (App, $) {
    'use strict';


//    // Google login
//    (function () {
//        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
//        po.src = 'https://apis.google.com/js/client:plusone.js';
//        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
//    })();
//    
//    function signinCallback(authResult) {
//        console.log(authResult);
//    
//      if (authResult['access_token']) {
//        // Successfully authorized
//        // Hide the sign-in button now that the user is authorized, for example:
//    
//        document.getElementById('signinButtonContainer').setAttribute('style', 'display: none');
//        getUserName();
//        $('.input-append').show();			
//      } else if (authResult['error']) {
//        // There was an error.
//        // Possible error codes:
//        //   "access_denied" - User denied access to your app
//        //   "immediate_failed" - Could not automatially log in the user
//        console.log('There was an error: ' + authResult['error']);
//      }
//    }
//    
//    var getUserName = function (){
//      gapi.client.load('plus', 'v1', function() {
//          var request = gapi.client.plus.people.get({'userId': 'me'});
//          request.execute(function(resp) {
//            localStorage.setItem('userFullName', resp.displayName);
//            });
//        });
//    };



    // use app here
    console.log(App);
    console.log('Running jQuery %s', $().jquery);
    
    App.initalize();
});




//// Google login
//(function () {
//	var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
//	po.src = 'https://apis.google.com/js/client:plusone.js';
//	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
//})();
//
//function signinCallback(authResult) {
//	console.log(authResult);
//
//  if (authResult['access_token']) {
//    // Successfully authorized
//    // Hide the sign-in button now that the user is authorized, for example:
//
//    document.getElementById('signinButtonContainer').setAttribute('style', 'display: none');
//	getUserName();
//	$('.input-append').show();			
//  } else if (authResult['error']) {
//    // There was an error.
//    // Possible error codes:
//    //   "access_denied" - User denied access to your app
//    //   "immediate_failed" - Could not automatially log in the user
//    console.log('There was an error: ' + authResult['error']);
//  }
//}
//
//var getUserName = function (){
//  gapi.client.load('plus', 'v1', function() {
//      var request = gapi.client.plus.people.get({'userId': 'me'});
//      request.execute(function(resp) {
//		localStorage.setItem('userFullName', resp.displayName);
//        });
//    });
//};
//
//// GUID Creation
//var s4 = function () {
//	return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//};
//
//var guid = function () {
//	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
//};
//
//(function($){
//	// Data from Parse
//	Parse.initialize("GSXVxLPboXN0LbWzsYSIfhD82B7nkAQWVqOqKVj3", "ENLhVs7N1zbuAPJ4KYVItow6qdj53NqrYSVI2TCu");
//	var ParseNote = Parse.Object.extend({
//		className: "Notes",
//
//		defaults: {
//			name: 'Anonymous',
//			text: '',
//			dateString: 'March 1, 2013',
//			messageId: '0'
//		}		
//	});
//
//	var ParseNotesColllection = Parse.Collection.extend({
//		model: ParseNote
//	});	
//
//	// Backbone JS
//	Backbone.sync = function(method, model, success, error){
//		success();
//	}
//	
//	var AppRouter = Backbone.Router.extend({
//		routes: {
//			"message/:id" : "getMessage",
//			"*actions" : "defaultRoute"
//		}
//	});
//
//	var appRouter = new AppRouter;
//	appRouter.bind("route:defaultRoute", function (actions){
//		var uuid = guid();
//		console.log(uuid);
//		localStorage.setItem('messageGUID', uuid);
//	});
//
//	appRouter.on("route:getMessage", function (id){
//		console.log(id);
//		messageUUID = "";
//		localStorage.removeItem('messageGUID');
//		localStorage.setItem('messageGUID', id);
//		fetchMessageForMessageUUID(id);		
//	});
//	
//	Backbone.history.start();
//
//	var Message = Backbone.Model.extend({
//		defaults: {
//			name: 'Drew Vergara',
//			text: 'This is a text',
//			date: 'March 1, 2013',
//			messageId: '0'			
//		}
//	});
//
//	var MessageCollection = Backbone.Collection.extend({
//		model: Message
//	});
//
//	var ListView = Backbone.View.extend({
//		el: $('.hero-unit'),
//
//		initialize: function (){
//			_.bindAll(this, 'render', 'addMessage', 'appendMessage', 'clearMessages');
//
//			this.collection = new ParseNotesColllection();			
//			this.collection.bind('add', this.appendMessage);
//			
//			this.render();
//		},
//		
//		render: function (){
//			_(this.collection.models).each(function (item){
//				console.log(item);
//				self.appendMessage(item);
//			}, this);
//		},
//		
//		addMessage: function (){			
//			if (userName === ""){
//				userName = localStorage.getItem('userFullName');
//			}
//			
//			if (messageUUID === ""){
//				messageUUID = localStorage.getItem('messageGUID');
//			}
//
//			var newMessageString = $('input').val();
//			
//			var date = new Date();		
//			var messageTimestammp = Math.round((date).getTime() / 1000);						
//			var message = new ParseNote({name: userName, text: newMessageString, dateString: date.format("mmmm dd, yyyy"), timestamp: messageTimestammp, messageId:messageUUID});
//
//			// Create method automatically calls "add"
//			this.collection.create(message);
//		},
//		
//		appendMessage: function (item){
//			$(this.el).append('<div class="list-view-container"><p class="user-name">' + item.get('name') + '</p><p class="message-date">' + item.get('dateString') + '</p><p>' + item.get('text') + '</p></div>');
//			$('input').val("");
//		},
//		
//		clearMessages: function (){
//			$('.list-view-container').remove();
//		}
//	});
//
//	// jQuery Methods
//	$('button#go-btn').click(function (e){
//		listView.addMessage();
//	});
//	
//	$('input').keypress(function (event){
//		if (event.keyCode == 13){
//			listView.addMessage();			
//		}
//	});	
//	
//	// Fetch data from server
//	function fetchMessageForMessageUUID (uuid){
//		if (listView != null) {
//			listView.clearMessages();
//		}
//
//		var notes = new ParseNotesColllection();
//
//	 	var query = new Parse.Query(ParseNote);
//		query.equalTo("messageId", uuid);
//		query.ascending("timestamp");
//				
//		notes.query = query;
//		notes.fetch({
//			success: function (results){
//				_(results.models).each(function(item){
//					listView.appendMessage(item);
//
//				}, this.listView);
//			}, error: function (error){
//				console.log(error);
//			}
//		});		
//	}
//	
//	var listView = new ListView();
//	var userName = "";
//	var messageUUID = "";
//	
//	// setInterval(function (){
//	// 	fetchMessageForMessageUUID(localStorage.getItem('messageGUID'));
//	// }, 1000);
//	
//})(jQuery);