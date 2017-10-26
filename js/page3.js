
var JSON_Storage = {
	getItem: function(key){
		if(!localStorage.getItem(key)) return false;

		return JSON.parse(localStorage.getItem(key));
	}

	setEmptyItem: function(key){
		localStorage.setItem(key, "");
	}

	setItem: function(key, data){
		localStorage.setItem(key, JSON.stringify(data));
	}

	removeItem: function(key){
		localStorage.removeItem(key);
	}

	addItemToList: function(key, data){
		if(!JSON_Storage.getItem(key)) var list = [];
		else var list = JSON_Storage.getItem(key);

		list.push(data);

		JSON_Storage.setItem(key, list);
	}

	deleteItemFromList: function(key, name){}
};

var TrailerList = {
	getTrailerList: function(){
		return JSON_Storage.getItem('trailers');
	}

	showTrailerList: function(){}

	setTrailerList: function(){}
};

var TrailerElement = {
	setTrailerElement: function(key, data){
		JSON_Storage.addItemToList(key, data);
	}

	getTrailerElement: function(name){
		var list = TrailerList.getTrailerList();

		for (var i = 0; i < list.length; i++) {
			if(list[i].name === name){
				return list[i];
			}
		}
	}
};