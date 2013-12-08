'use strict';

window.Jsonp = function(url){

	if(!url){
		throw new Error('url is mandatory');
	}

	if(url.indexOf('?callback=') != -1){
		throw new Error('illegal url');
	}


	(function(){
		var _url = url.concat('?callback=callback');
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');

		script.src = _url;

		head.appendChild(script);
	})();

	this.callback = function(callback){
		window.callback = callback;
	};
};