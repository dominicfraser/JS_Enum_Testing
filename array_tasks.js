var arrayTasks = {

	concat: function (arr1, arr2) {
		var newArray = [];
		for (var item of arr1 ){
			newArray.push(item);
		}
		for (var item of arr2){
			newArray.push(item);
		}
		return newArray;
		// Array.prototype.push.apply(arr1, arr2);
		// return arr1;
	},

	// insertAt: function (arr, itemToAdd, index) {

	// },

	square: function (arr) {
		var newArray = [];
		for (var item of arr){
			newArray.push(item*item);
		}

		return newArray;
	},

	sum: function (arr) {
		var sum = 0;
		for (var item of arr){
			sum += item;
		}
		return sum;
	},

	// findDuplicates: function (arr) {
		
	// },

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
