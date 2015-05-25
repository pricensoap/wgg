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
			$(".content").empty();
			if(games !== undefined && games.length !== 0){
				$('.content').append('<div class= "mainTableHeader tableRow"></div>');
				$('.mainTableHeader').append('<div class="clubNameHeader tableColumn"> Club Name </div>');
				$('.mainTableHeader').append('<div class="maxPlayersHeader tableColumn"> Max Players </div>');
				$('.mainTableHeader').append('<div class="availSlotsHeader tableColumn"> Available Slots </div>');
				
				for( i = 0; i< games.length ; i++){ 
					$('.content').append('<div class="' + games[i].id +' tableRow"></div>');
					$('.'+ games[i].id).append('<div class="clubName tableColumn">' +  games[i].name +'</div>');
					$('.'+ games[i].id).append('<div class="maxPlayers tableColumn">' + games[i].maxPlayers + '</div>');
					$('.'+ games[i].id).append('<div class="availSlots tableColumn">' + games[i].availSlots +'</div>');
					$('.'+ games[i].id).append('<div class="Apply  tableColumn"><button type="button" class="tableContent">Show</button></div>');
					
					var enterGameButton = $($('.'+ games[i].id).children()[3]).children()[0];
					enterGameButton.addEventListener("click", _loadClubData);
					$('.content').append('<div class="collapseAll collapse' + games[i].id +'"> <div class = "ClubForm ClubForm' + games[i].id +'"></div></div>' );
					
					$('.clubform' + games[i].id).append('<div class = "clubData clubData' + games[i].id +'"><div class="clubHeaderMain clubLogo' + games[i].id +'"></div></div>');
						$('.clubLogo' + games[i].id).append('<img height="135px" width="135px" class="logo' + games[i].id +'"></img>');
					$('.clubData'+ games[i].id).append('<div class="clubHeaderMain CHMainText clubHeaderMain' + games[i].id +'"></div>');
						$('.clubHeaderMain' + games[i].id).append('<div class="clubName' + games[i].id +'"></div>');
						$('.clubHeaderMain' + games[i].id).append('<div class="clubsubTitle' + games[i].id +'"></div>');
						$('.clubHeaderMain' + games[i].id).append('<div class="clubFDate' + games[i].id +'"></div>');
						$('.clubHeaderMain' + games[i].id).append('<div class="clubLocation' + games[i].id +'"></div>');
					$('.clubData'+ games[i].id).append('<div class="clubMain clubMain' + games[i].id +'"></div>');
						$('.clubMain' + games[i].id).append('<div style="margin-top: 4%; " class="gameDetails gameDetails' + games[i].id +'"> </div>');
							$('.gameDetails' + games[i].id).append('<div class="gameDetailsFormTitle">Game Details</div>');
							$('.gameDetails' + games[i].id).append('<div class="formMaxPlayers formMaxPlayers' + games[i].id +'"></div>');
							$('.gameDetails' + games[i].id).append('<div class="formAvailSlots formAvailSlots' + games[i].id +'"></div>');
						$('.clubMain' + games[i].id).append('<div style="margin-top: 4%;" class="memberDetails memberDetails' + games[i].id +'"></div>');
							$('.memberDetails'+ games[i].id).append('<div style="font-weight:bold;" class="membersFormTitle"> Members</div>');
							$('.memberDetails'+ games[i].id).append('<ul class="membersForm  membersForm' + games[i].id +'"></ul>');
					$(".collapse" + games[i].id ).hide();
				}
			}
			else 
				$('.content').append('<div> No Games Available</div>');
		};
		/**
		 * @method _loadClubData
		 * @private
		 * description : loads individual club data
		 */
		var _loadClubData = function(event){
			var clubId = $(event.srcElement).parent().parent()[0].className;
			var clubName = $(event.srcElement).parent().siblings()[0].innerText;
			var btnText = $(event.srcElement)[0].textContent;
			/********Ideally based on clubId should fire request to get clubData**********/
			var clubData = {
					id: "HFClub1", 					type : "Football",			name: "Holiday Football Club",
					logo : "/wegg/resources/images/logo.jpg", 	subtitle : "Relax & Pass", 	location: "Baby Mona Ground",
					foundationDate: "12/04/2014", 	Members : ["JK", "Rohan", "Mohneesh" ], maxPlayers: "12" ,
					availSlots : "3"	
					
			};
			/*****************************sample data ends*******************************/
			
			//fill data to the div of the club
			if(clubName === clubData.name && btnText === "Show"){
				$('.logo'  + clubId.split(' ')[0])[0].src = clubData.logo;
				$('.clubName'  + clubId.split(' ')[0]).text("Name: " + clubData.name);
				$('.clubsubTitle'  + clubId.split(' ')[0]).text(clubData.subtitle);
				$('.clubFDate'  + clubId.split(' ')[0]).text("Founded on: " + clubData.foundationDate);
				$('.clubLocation'  + clubId.split(' ')[0]).text("Location: " + clubData.location);
				$('.formMaxPlayers'  + clubId.split(' ')[0]).text("Maximum Players: " + clubData.maxPlayers);
				$('.formAvailSlots'  + clubId.split(' ')[0]).text("Available Slots: " + clubData.availSlots);
				var memberlist = $('.membersForm'  + clubId.split(' ')[0]);
				var j;
				memberlist.empty();
				for(j=0; j< clubData.Members.length; j++){
					memberlist.append('<li>' + clubData.Members[j]  + '</li>');
				}
				//open close div
				$(event.srcElement)[0].textContent = "Hide";
				$(".collapseAll").hide();
				$(".collapse" + clubId.split(' ')[0] ).show();
			}
			else {
				$(event.srcElement)[0].textContent = "Show";
				$(".collapseAll").hide();
			}
			
		};
			 
};
