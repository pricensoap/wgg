var hfc = {};
/**
 * @author Pravesh
 * @param object  
 * @returns {hfc}
 * when object passed to this function, with club data, new club is created. 
 */
hfc = function(object){

/**********************SAMPLE*****************************DATA*****************************************************************************/
			var data = [
				{ id: "HFClub1", name: "Holiday Football Club"	, maxPlayers: "12", availSlots : "3" },
				{ id: "HFClub2", name: "Aditi Soccer Club"	, maxPlayers: "14", availSlots : "5" },
				{ id: "HFClub3", name: "SAP Football Club"	, maxPlayers: "10", availSlots : "1" }
			];
/**********************SAMPLE*****************************DATA***********************ENDS******************************************************/

			
			if(object !== undefined)
				this.name = object.name;
			else this.name = "default_name";
			
			/**
			 * @method init
			 * loads football ui by default. unless others options clicked from panel
			 */
			this.init = function(){
				_loadFootball();
				//load Football Page by default
			};
			
			/**
			 * @method getName
			 * sample method for retrieving details
			 */
			this.getName = function(){
				return this.name;
			};
			/**
			 * @method _loadFootball
			 * @author Pravesh
			 * loads content on main page. 
			 */
			_loadFootball = function(){
				var i;
				var model = data; 
				$('.mainTable').append('<tr class= "mainTableHeader"></tr>');
				$('.mainTableHeader').append('<td class="clubNameHeader"> Club Name </td>');
				$('.mainTableHeader').append('<td class="maxPlayersHeader"> Max Players </td>');
				$('.mainTableHeader').append('<td class="availSlotsHeader"> Available Slots </td>');
				
				for( i = 0; i< model.length ; i++){ 
					$('.mainTable').append('<tr data-role="collapsible" class="' + model[i].id +'"></tr>');
					$('.'+ model[i].id).append('<td class="clubName">' +  model[i].name +'</td>');
					$('.'+ model[i].id).append('<td class="maxPlayers">' + model[i].maxPlayers + '</td>');
					$('.'+ model[i].id).append('<td class="availSlots">' + model[i].availSlots +'</td>');
				}

			};
			 
};
