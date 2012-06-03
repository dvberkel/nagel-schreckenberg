(function(_, Backbone, SumOfUs, undefined){
    SumOfUs = SumOfUs || {};
    
    var shortestPath = function(adjacency, from, to) {
	if (from === to) {
	    return {success : true, path : [to]};
	} else {
	    if (adjacency.hasOwnProperty(from)) {
 		var options = adjacency[from];
		for (var index = 0; index < options.length; index++){
		    var option = options[index];
		    var result = shortestPath(adjacency, option, to);
		    if (result.success) {
			return {success : true, path : [from].concat(result.path)};
		    }
		}
	    }
	    return {success : false};
	}
    };

    var TrackModel = Backbone.Model.extend({
	
	shortestPathFrom : function(start){
	    var adjacency = this.get("adjacency");
	    return {
		to : function(finish){
		    var result = shortestPath(adjacency, start, finish);
		    console.log(result);
		    if (result.success) {
			return result.path;
		    } else {
			return undefined;
		    }
		}
	    }
	}
    });

    SumOfUs.Track = TrackModel;
})(_, Backbone, SumOfUs);