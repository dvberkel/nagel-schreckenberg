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
	},
	
	decreaseSpeed : function(){
	    var last_speed = this.get("current_speed");
	    var minimum_speed = 0;
	    this.set({ "current_speed" : Math.max(last_speed - 1, 0) });
	}
    });

    window.Car = CarModel;
})(_, Backbone);