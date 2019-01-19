// 本题为考试多行输入输出规范示例，无需提交，不计分。
var n = parseInt(readline());
var g = [];
g[0] = 0;
for(var i = 1; i <= n; i++) {
	lines = readline().split(" ")
	g[i] = new Array()
	for(var j = 0; j < lines.length; j++) {
		g[i].push(lines[j]);
	}
}
var gg = []
gg[0] = new Array()
for(var i = 1; i <= n; i++) {
	gg[i] = new Array()
}
for(var i = 1; i <= n; i++) {
	for(var j = 0; j < g[i].length; j++) {
		gg[i].push(g[i][j])
		gg[g[i][j]].push(i)
	}
}

function dfs_m(vertice) {
	visited[vertice] = true;
	//console.log(vertice);
	for(var j = 0; j < gg[vertice].length; j++) {
		var curVertice = gg[vertice][j];
		if(!visited[curVertice] && curVertice != 0) {
			tuandui[count]++;
			dfs_m(curVertice);
		}
	}
}

var visited = new Array()
for(var i = 1; i <= n; i++) {
	visited[i] = false;
}
var tuandui = new Array()
var count = 0
for(var i = 1; i <= n; i++) {
	//console.log('&&&&&&&&&&&&&&&&&&&&&&&')
	if(!visited[i]) {
		tuandui[count] = 1;
		dfs_m(i);
		count++;
	}
}
print(tuandui)
print(tuandui.length)