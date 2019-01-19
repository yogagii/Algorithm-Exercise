function Graph(v) {
	this.vertices = v; //顶点数
	this.edges = 0; //边数
	this.adj = []; //数组this.adj用来存放每个每个顶点的临接表
	this.visited = []; //深度度优先搜索的是否访问标志
	this.visited_2 = []; // 广度优先搜索的是否访问标志
	for(var i = 0; i < this.vertices; i++) {
		this.adj[i] = [];
		this.visited.push(false);
		this.visited_2.push(false);
	}
}
//存放方法
Graph.prototype = {
	addEdge: function(a, b) {
		// a、b为节点
		this.adj[a].push(b);
		this.adj[b].push(a);
		this.edges++; //把总边数增加1
	},
	deleteEdge:function(a,b){
		this.adj[a].forEach(function(n){
			if(n == b){
				n=0;
			}
		})
		this.adj[b].forEach(function(m){
			if(m == a){
				m=0;
			}
		})
		this.edges--;
	},
	showGraph: function() {
		for(var i = 0; i < this.vertices; i++) {
			console.log(i + '=>');
			for(var j = 0; j < this.vertices; j++) {
				if(this.adj[i][j]) {
					console.log(this.adj[i][j]);
				}
			}
		}
	},
	// 深度优先搜索
	dfs: function(vertice) {
		this.visited[vertice] = true;
		console.log(vertice);
		for(var i = 0; i < this.adj[vertice].length; i++) {
			var curVertice = this.adj[vertice][i];
			if(!this.visited[curVertice]) {
				this.dfs(curVertice);
			}
		}
	},
	//广度优先搜索
	bfs: function(vertice) {
		var that = this;
		var queue = [];
		queue.push(vertice);
		this.visited_2[vertice] = true;
		// 当队列不为空时，循环进行；
		while(queue.length > 0) {
			var curVertice = queue.shift();
			console.log(curVertice);
			this.adj[curVertice].forEach(function(item) {
				if(!that.visited_2[item]) {
					that.visited_2[item] = true;
					queue.push(item);
				}
			})
		}
	}
}