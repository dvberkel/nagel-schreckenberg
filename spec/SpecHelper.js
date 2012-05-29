beforeEach(function() {
    this.addMatchers({
	toBeGoing: function(expectedSpeed) {
	    var car = this.actual;
	    return car.get("current_speed") === expectedSpeed;
	}
    });
});
