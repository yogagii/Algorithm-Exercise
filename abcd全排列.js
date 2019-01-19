var s = 'abcd'
var result = new Array()

//将字母w插入字符串ss的不同位置，返回所有字符串组成的数组
function insertLetter(ss, w) {
	var r = new Array();
	r.push(w.concat(ss));
	for(var i = 1; i < ss.length; i++) {
		r.push(((ss.slice(0, i)).concat(w)).concat(ss.slice(i)))
	}
	r.push(ss.concat(w))
	return r;
}
result[0] = s[0];
//先放入字母a，再挨个将bcd插入
for(var i = 1; i < s.length; i++) {
	var temparr = new Array()
	//将结果数组中的每项分别插入下一个字母
	result.forEach(function(n) {
		//将返回的数组全部加进临时数组
		temparr = temparr.concat(insertLetter(n, s[i]))
	})
	//console.log(temparr)
	//清空结果数组，替换为临时数组
	for(var j = 0; j < temparr.length; j++) {
		result[j] = temparr[j]
	}
	//console.log(result)
}
console.log(result)