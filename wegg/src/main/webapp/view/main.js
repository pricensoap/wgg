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
				{ id: "HFClub1", type : "Football" ,name: "Holiday Football Club"	, maxPlayers: "12", availSlots : "3" },
				{ id: "HFClub2", type : "Football" , name: "Aditi Soccer Club"	, maxPlayers: "14", availSlots : "5" },
				{ id: "HFClub3", type : "Football", name: "SAP Football Club"	, maxPlayers: "10", availSlots : "1" },
				{ id: "HFCRic1", type : "Cricket" ,name: "Holiday Cricket Club"	, maxPlayers: "22", availSlots : "5" },
				{ id: "HFCric2", type : "Cricket" , name: "Aditi Cricket Club"	, maxPlayers: "14", availSlots : "2" }
			];
			var clubData = {
					id: "HFClub1", 					type : "Football",			name: "Holiday Football Club",
					logo : "/wegg/resources/images/logo.jpg", 	about : "Relax & Pass", 	location: "Baby Mona Ground",
					foundationDate: "12/04/2014", 	Members : ["JK", "Rohan", "Mohneesh"]
			};
/**********************SAMPLE*****************************DATA***********************ENDS**************************************************/

			
		if(object !== undefined)
			this.name = object.name;
		else this.name = "default_name";
		this.model = [];
		/**
		 * @method init
		 * loads football ui by default. unless others options clicked from panel
		 */
		this.init = function(type){
			this.setData(type);
			_loadAvailgames(this.getData());
			//load Football Page by default
		};
		
		this.getData = function(){
			return this.model;
		};
		
		this.setData = function(type){
			this.model = [];
			if(type === undefined)
				type = "Football";
			for(var i = 0; i<data.length; i++){
				if(data[i].type === type){
					this.model.push(data[i]);
				}
			}
		};
		/**
		 * @method getNames
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
		var _loadAvailgames = function(games){
			var i;
			$(".mainTable").empty();
			if(games !== undefined && games.length !== 0){
				$('.mainTable').append('<tr class= "mainTableHeader"></tr>');
				$('.mainTableHeader').append('<td class="clubNameHeader"> Club Name </td>');
				$('.mainTableHeader').append('<td class="maxPlayersHeader"> Max Players </td>');
				$('.mainTableHeader').append('<td class="availSlotsHeader"> Available Slots </td>');
				
				for( i = 0; i< games.length ; i++){ 
					$('.mainTable').append('<tr class="' + games[i].id +'"></tr>');
					$('.'+ games[i].id).append('<td class="clubName">' +  games[i].name +'</td>');
					$('.'+ games[i].id).append('<td class="maxPlayers">' + games[i].maxPlayers + '</td>');
					$('.'+ games[i].id).append('<td class="availSlots">' + games[i].availSlots +'</td>');
					$('.'+ games[i].id).append('<td class="Apply"><button type="button" class="tableContent">View</button></td>');
					
					var enterGameButton = $($('.'+ games[i].id).children()[3]).children()[0];
					enterGameButton.addEventListener("click", _loadClubData);
					$('.mainTable').append('<tr class="collapseAll collapse' + games[i].id +'"><td><div class"ClubForm"><form>' +
												+ '<img class="imageSrc" src="/wegg/resources/images/logo.jpg" alt="ClubLogo" height="42" width="42">' +
												 
												+ '</form></div></td></tr');
/*	<form name="myForm" action="demo_form.asp"
		onsubmit="return validateForm()" method="post">
		Name: <input type="text" name="fname">
		<input type="submit" value="Submit">
		</form>	*/				
					$(".collapse" + games[i].id ).hide();
				}
			}
			else 
				$('.mainTable').append('<tr><td><div>No Games Available</div></td></tr>');

		};
		
		var _loadClubData = function(event){
			var clubId = $(event.srcElement).parent().parent()[0].className;
			var clubName = $(event.srcElement).parent().siblings()[0].innerText;
			$(".collapseAll").hide();
					
			$(".collapse" + clubId ).show();
		};
			 
};
