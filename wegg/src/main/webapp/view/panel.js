(function(){

/**********************SAMPLE*****************************DATA*****************************************************************************/
	/* Sample JSON Data to be fetched via service request */
	 var data = [
	      { "id"	: "HFCGame1", "name" : "Football"  },
	      {  "id"  : "HFCGame2", "name" : "Cricket" },
	      {  "id" : "HFCGame3",  "name" : "Basketball" }
	 ];
/**********************SAMPLE*****************************DATA*****************************************************************************/
	 var self = this;
	 this.GameData = {};
	 /**
	  * @name _initialize
	  * Initializes the panel control on document  ready  
	  */
	 var _initialize = function(){
		 var panel = $("#myPanel");
		 var model = data;
		 panel.append('<table class="panelList"></table>');
		 $('.panelList').append('<th class="tableHeader">Select</th>');
		 var i;
		 for( i = 0; i< model.length ; i++){
			 $('.panelList').append('<tr><td class="' + model[i].id +'  tableRows"> </td></tr>');
			 $('.'+ model[i].id).append('<button type="button" class="tableContent">'+ model[i].name +'</button>');
			 var gameButton = $('.'+ model[i].id).children()[0];
			 gameButton.addEventListener("click", _handleClick);

		 }
	 };
	
	/**
	 * @name _handleClick
	 * Used for handling the click event on panel items.
	 */
	var _handleClick = function(e){
		$('#myPanel').panel("close"); //close the panel
		var gName = e.srcElement.innerText; //get id of button clicked
		self.GameData.init(gName); //loads data on main ui accordingly
	};
	
	$(document).ready(function(){ 
		_initialize();
		self.GameData = new hfc();
		self.GameData.init();
//		self.games = gameData.getData();
	});
})();
