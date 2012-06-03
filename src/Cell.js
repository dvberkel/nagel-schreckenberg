(function(_, Backbone, SumOfUs, undefined){
    SumOfUs = SumOfUs || {};

    var CellModel = Backbone.Model.extend({});

    SumOfUs.Cell = function(){
	var repository = {};

	var CellFactory = function(name) {
	    if (! repository.hasOwnProperty(name)) {
		repository[name] = new CellModel({
		    name : name
		});
	    }
	    return repository[name];
	};

	return CellFactory;	
    };
})(_, Backbone, SumOfUs);