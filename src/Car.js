(function(_, Backbone, undefined){
    var CarModel = Backbone.Model.extend({
	defaults : {
	    "maximum_speed" : 5,
	    "current_speed" : 0,
	},

	increaseSpeed : function(){
	    var last_speed = this.get("current_speed");
	    var maximum_speed = this.get("maximum_speed");
	    this.set({ "current_speed" : Math.min(last_speed + 1, maximum_speed) });
	}
    });

    window.Car = CarModel;
})(_, Backbone);