(function(_, Backbone, undefined){
    var CarModel = Backbone.Model.extend({
	defaults : {
	    "maximum_speed" : 5
	}
    });

    window.Car = CarModel;
})(_, Backbone);