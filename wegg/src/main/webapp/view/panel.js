(function(){
 /* Sample JSON Data to be fetched via service request */
	 var data = [
	      {
	    	  "id"	: "HFCGame1",
	    	  "name" : "Football"
	      },
	      {
	    	  "id"  : "HFCGame2",
	    	  "name" : "Cricket"
	      },
	      {
	    	  "id" : "HFCGame3",
	    	  "name" : "Basketball"
	      }
	 ];
	 /* Sample data ends */
	 
	 var _initialize = function(){
		 var panel = $("#myPanel");
		 var model = data;
		 panel.append('<table class="panelList"></table>');
		 $('.panelList').append('<th class="tableHeader">Select</th>');
		 for( var i = 0; i< model.length ; i++){
			 $('.panelList').append('<tr><td class="' + model[i].id +'  tableRows"> </td></tr>');
			 $('.'+ model[i].id).append('<button type="button" class="tableContent">'+ model[i].name +'</button>');
		 }
	 };
	 
	$(document).ready(function(){ 
		_initialize();
	});
})();
