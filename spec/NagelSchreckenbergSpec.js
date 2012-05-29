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
});