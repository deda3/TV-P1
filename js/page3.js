
var JSON_Storage = {
	getItem: function(key){
		if(!localStorage.getItem(key)) return false;

		return JSON.parse(localStorage.getItem(key));
	},

	setEmptyItem: function(key){
		localStorage.setItem(key, "");
	},

	setItem: function(key, data){
		localStorage.setItem(key, JSON.stringify(data));
	},

	removeItem: function(key){
		localStorage.removeItem(key);
	},

	addItemToList: function(key, data){
		if(!JSON_Storage.getItem(key)) var list = [];
		else var list = JSON_Storage.getItem(key);

		list.push(data);

		JSON_Storage.setItem(key, list);
	},

	deleteItemFromList: function(key, name){},

	loadItem: function(key, data){
		JSON_Storage.setItem(key, data);
	}
};

var TrailerList = {
	getTrailerList: function(){
		return JSON_Storage.getItem('trailers');
	},

	showTrailerList: function(){
		Layout.createTrailerList(TrailerList.getTrailerList());
	},

	loadTrailerList: function(){console.log(movies);
		JSON_Storage.loadItem('trailers', movies);
	}
};

var TrailerElement = {
	setTrailerElement: function(key, data){
		JSON_Storage.addItemToList(key, data);
	},

	getTrailerElement: function(name){
		var list = TrailerList.getTrailerList();

		for (var i = 0; i < list.length; i++) {
			if(list[i].name === name){
				return list[i];
			}
		}
	}
};

var Broadcast = {
	showVideo: function(){
		Layout.showBroadcastVideo();
	}
};

var Online = {
	showVideo: function(path){
		Layout.showTrailerVideo(path);
	}
};

var Layout = {
	createTrailerOverview: function(trailer, order){
		var overview = document.createElement('div');
		overview.className = 'video-overview';
		overview.setAttribute('tabindex', order);
		if (order == 0) {
			overview.focus();
		}

		var mini = document.createElement('img');
		mini.className = 'video-mini';
		mini.src = trailer.thumbnail;

		var info = document.createElement('div');
		info.className = 'video-info';

		var name = document.createElement('h2');
		name.innerHTML = trailer.name;

		var director = document.createElement('h3');
		director.innerHTML = trailer.director;

		overview.appendChild(mini);
		overview.appendChild(info);

		info.appendChild(name);
		info.appendChild(director);

		return overview;
	},

	createTrailerList: function(info){
		var list = document.getElementById('videos-container');

		for(var i = 0; i < info.length; i++){
			var overview = Layout.createTrailerOverview(info[i], i);

			list.appendChild(overview);
		}
	},

	showBroadcastVideo: function(){
		var online = document.getElementById('online');
		online.style.display = 'none';

		var broadcast = document.getElementById('broadcast');
		broadcast.style.display = 'inline';
		broadcast.bindToCurrentChannel();
	},

	showTrailerVideo: function(path){
		var broadcast = document.getElementById('broadcast');
		broadcast.style.display = 'none';
		
		var online = document.getElementById('online');
		online.src = path;
		online.style.display = 'inline';
	}
};
