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

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

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

	findDuplicates: function (arr0) {
		var arr = arr0.sort();
		var results = [];

    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] == arr[i]) {
      	if(!results.includes(arr[i])){
        results.push(arr[i]);
        }
      }
    }

	    return results;
	},

	removeAndClone: function (arr, valueToRemove) {
		var newArray = arr.filter(function(item){
			return item !== valueToRemove
		});
		return newArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		var indexs = [];
		for (var i = 0; i < arr.length; i++){
			if (arr[i] === itemToFind){
				indexs.push(i);
			}
		}
		return indexs;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var evens = arr.filter(function(num){
			if(num % 2 == 0){
				return num;
			} 
		})
		var sum = 0;
		evens.forEach(function(number){
			sum += (number*number);
		})
		return sum;
	}

}

module.exports = arrayTasks
