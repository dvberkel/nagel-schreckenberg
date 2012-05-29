(function(_, Backbone, undefined){
    var CarModel = Backbone.Model.extend({
	defaults : {
	    "maximum_speed" : 5,
	    "current_speed" : 0,
	},

	increaseSpeed : function(){
	    this.changeSpeedBy(+1);
	},

	changeSpeedBy : function(delta){
	    var last_speed = this.get("current_speed");
	    this.setSpeedTo(last_speed + delta);
	},

	setSpeedTo : function(target){
	    var minimum = 0;
	    var maximum = this.get("maximum_speed");
	    this.set({ "current_speed" : Math.min(Math.max(target, minimum), maximum) })
	},
	
	decreaseSpeed : function(){
	    this.changeSpeedBy(-1);
	}
    });

    window.Car = CarModel;
})(_, Backbone);