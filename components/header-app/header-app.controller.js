angular.module('myPageApp').controller('HeaderAppController', [
	'HEADER_APP.CONFIG',
	function HeaderAppController (componentConfig) {
		
		this.mainMenu = componentConfig.mainMenuLinks;

		this.subscribeList = [];
		this.subscribeEmail;		
		this.subscribeClickOn = function () {			

			if (this.subscribeEmail.$valid) {
				this.subscribeList.push(this.subscribeEmail);
					
				console.log(this.subscribeList);
			}

			this.subscribeEmail = "";

		}
	}
]);