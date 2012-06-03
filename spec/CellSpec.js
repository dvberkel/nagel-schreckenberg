describe("Cell Model", function(){
    var cell;

    beforeEach(function(){
	cell = SumOfUs.Cell();
    });

    it("should be identical by name", function(){
	var aCell = cell("a");
	var otherCell = cell("a");

	expect(aCell === otherCell).toBe(true);
    });
});