angular.module('myPageApp').controller('BookController', [
	'$interval',
	'$http',
	function BookController($interval, $http) {
		var self = this;
		var ready = false;
		var polling;

		this.hasBooks = false;

		function getBooksList () {
			$http.get('https://api.myjson.com/bins/fpag5').then(
				function onSuccess(response) {
					self.hasBooks = true;
					self.featureBooks = response.data;
				},
				function onError() {
					console.log('json failed');
				}
			).finally(function () {
				self.ready = true;
			});
		}

		this.$onInit = function () {
			getBooksList ();

			polling = $interval(function () {
				getBooksList();
			}, 5000);
		}	

		this.$onDestroy = function () {
			$interval.cancel(polling);
		}

		// ao clicar no buy o nome do(s) livro(s) fica armazenado 
		this.bookBuyList = [];
		this.buyBook = function ($index) {

			this.bookBuyList.push(this.featureBooks.name);

			console.log('o livro na posição ' + $index + ' foi adicionado');
			console.log(this.bookBuyList);

		}
	}
]);