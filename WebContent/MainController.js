var mainCtrl;
(function(){
	'use strict'
	var app = angular.module('mainController', ['chartController']);

	app.directive("mainDir", function(){
		return {
			restrict: "E",
			templateUrl: "Main.html"				
		};		
	});	
	
	app.controller('mainController', function($scope, cropHistoryService){
		mainCtrl = this;
		//0 =graph, 1 = new, 2 = share
		$scope.showView = 0;
		$scope.getShareURL = function(){
			if (cropHistorySrvc && cropHistorySrvc.cropHistory){
				return 'http://www.iceburgmodding.com/StardewShipmentTracker/index.html#' + cropHistorySrvc.cropHistory.key;
			}
			return 'http://www.iceburgmodding.com/StardewShipmentTracker/index.html#';
//			return window.location.href;
		}
		
		
		$scope.shareStats = function(){
			$scope.showView = 2;
//			$scope.selectText("shareURL");
//			window.prompt("Copy to clipboard: Ctrl+C, Enter", window.location.href);
		}
		$scope.loadFile = function(){
			console.log("Load File function");	
			$("#file_load").trigger('click');
			$('#file_load').change(function() {
				var input = document.getElementById('file_load').files[0];
				$scope.readInput(input);
			});
		}
		
		$scope.readInput = function(input){
			if (input != null){
//				console.log(input);
				var reader = new FileReader();
				reader.onload = function(e) {
					var contents = e.target.result;
//					console.log(contents);
					cropHistoryService.parseDataFile(contents);
				};
				reader.readAsText(input);
				  
			}
		}
		
		$scope.selectText = function(containerid) {
	        if (document.selection) {
	            var range = document.body.createTextRange();
	            range.moveToElementText(document.getElementById(containerid));
	            range.select();
	        } else if (window.getSelection) {
	            var range = document.createRange();
	            range.selectNode(document.getElementById(containerid));
	            window.getSelection().addRange(range);
	        }
	    }
		
		this.readInput = function(input){
			$scope.readInput(input);
		}
		
		createDragAndDrop();
		
	});
	function createDragAndDrop(){
		
		var dropZone = document.getElementById('shippingBin');
		dropZone.ondragover = function () {
				dropZone.className = "ship_bin_hovered";
				return false; 
			};
		dropZone.ondragend = function () { 
				dropZone.className = "ship_bin"; 
				return false; 
			};
		dropZone.ondrop = function (e) {
			e.preventDefault();
			   readfiles(e.dataTransfer.files);
		} 
		console.log("Created drag and drop");
	}
	function readfiles(files) {
	  for (var i = 0; i < files.length; i++) {
		  mainCtrl.readInput(files[i]);
	  }
	}
})();