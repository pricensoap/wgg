(function(){
	var app = angular.module('WGG', []);
	app.controller('WGGController', function(){
		$('.ui-content').append('<table class="mainTable"></table>');
		var gameData = new hfc();
		gameData.init();
	});
	ss
})();