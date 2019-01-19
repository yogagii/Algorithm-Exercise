//给定一个字符串，找出不含有重复字符的 最长子串 的长度。

const map = {};
var left = 0;

return s.split('').reduce((max, v, i) => {
	left = map[v] >= left ? map[v] + 1 : left;
	map[v] = i;
	return Math.max(max, i - left + 1);
}, 0);

/*const map = {};
var left = 0;

var max = 0;
for(var i = 0; i < s.length; i++) {
	var v = s[i];
	if(map[v] >= left) //一开始map[v]不存在，undefined，式子值为false
	{
		left = map[v] + 1;
	}
	map[v] = i;
	if(max < i - left + 1) {
		max = i - left + 1;
	}
}
return max;*/