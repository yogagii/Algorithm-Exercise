function getUrlParam(sUrl, sKey) {
	/*var url = sUrl.split('#')[0].substr(sUrl.indexOf("?") + 1)
	var strs = url.split("&");*/
	var reg = /([^?&=#]+)=([^?&=#]*)/g
	var strs = sUrl.match(reg)
	if(strs == undefined || strs == "") {
		return {};
	}
	if(sKey) {
		var keys = new Array();
		var key;
		//strs = url.split("&");
		for(var i = 0; i < strs.length; i++) {
			if(strs[i].split("=")[0] == sKey) {
				keys.push(strs[i].split("=")[1]);
			}
		}
		if(keys.length == 1) {
			key = keys[0]
			return key
		} else if(keys.length == 0) {
			return "";
		} else {
			return keys;
		}
	} else {
		var allkey = new Object()
			//strs = url.split("&");
		for(var i = 0; i < strs.length; i++) {
			var temp = strs[i].split("=")
			if(!(temp[0] in allkey)) {
				allkey[temp[0]] = new Array()
			}
			allkey[temp[0]].push(temp[1])
		}
		return allkey
	}

}

console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'))