beforeEach(function() {
    this.addMatchers({
	toBeGoing: function(expectedSpeed) {
	    var car = this.actual;
	    return car.get("current_speed") === expectedSpeed;
	},
	
	toBePath: function(expectedPath) {
	    var actualPath = this.actual;
	    if (actualPath.length == expectedPath.length) {
		for (var index = 0; index < actualPath.length; index++) {
		    if (!(actualPath[index] === expectedPath[index])) {
			return false;
		    }
		}
		return true;
	    } else {
		return false;
	    }
	}
    });
});
