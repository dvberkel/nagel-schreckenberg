describe("Track Model", function(){
    var cell;

    beforeEach(function(){
	cell = SumOfUs.Cell();
    });

    it("should be able to determine path of length 1", function(){
	var adjacency = {};

	var track = new SumOfUs.Track({
	    adjacency : adjacency
	});

	var path = track.shortestPathFrom(cell("finish")).to(cell("finish"));
	
	expect(path).toBePath([cell("finish")]);
    });

    it("should be able to determine path of length 2", function(){
	var adjacency = {};
	adjacency[cell("start")] = [cell("finish")];

	var track = new SumOfUs.Track({
	    adjacency : adjacency
	});

	var path = track.shortestPathFrom(cell("start")).to(cell("finish"));
	
	expect(path).toBePath([cell("start"), cell("finish")]);
    });
});