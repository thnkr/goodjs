var App = window.App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
});

 App.Router.map(function () {
     this.route("application", {path: "/"});
 });

App.ApplicationRoute = Ember.Route.extend({
	model: function () {
		var data = ['item', 'item', 'item'];
		return data;
	}
});

App.ApplicationController = Ember.Controller.extend({

	aProperty: "GoodJS and EmberJS",

	stock: null,

	aPropertyObserver: function() {
		var controller = this;
			aProperty = controller.get('aProperty'),
			aPropertyWords = aProperty.split(' ');

	    return aPropertyWords.length;

	}.property('aProperty'),

	aPropertyStock: function(){
		var controller = this,
			aProperty = controller.get('aProperty'),
			url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20('" + aProperty + "')%20order%20by%20MarketCapitalization&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

	    var stocks = $.ajax({
        	type: 'GET',
        	url: url,
    	}).done(function (data) {
    		console.log(data);

    		controller.set('stock', data.query.results.quote.Ask);
        	
    	});

	}.observes('aProperty'),

	init: function (){
		console.log('Controller intialized.');
	},

	action: {
		aTestAction: function () {
			//Does something
		}
	}

});