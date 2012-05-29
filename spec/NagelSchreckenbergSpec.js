describe("Car Model", function(){
    var car;

    beforeEach(function(){
	car = new Car();
    });
    
    it("should be able to be instantiated", function(){
	var instantiate = function(){
	    new Car();
	};
	expect(instantiate).not.toThrow();
    });

    it("should have a test instance available", function(){
	expect(car).not.toBeNull();
    });

    it("should have a default maximum speed of 5", function(){
	expect(car.get("maximum_speed")).toBe(5);
    });

    it("should have a default current speed of 0", function(){
	expect(car).toBeGoing(0);
    });
    
    describe("speed increase", function(){
    	it("should go from 0 to 1", function(){
	    car.increaseSpeed();
	    
	    expect(car).toBeGoing(1);
	});
    
    	it("should go from 4 to 5", function(){
	    car.set({ "current_speed" : 4 });

	    car.increaseSpeed();
	    
	    expect(car).toBeGoing(5);
	});
    	
	it("should not go beyond maximum speed", function(){
	    var maximum = car.get("maximum_speed");
	    car.set({ "current_speed" : maximum });

	    car.increaseSpeed();
	    
	    expect(car).toBeGoing(maximum);
	});    
    });
});