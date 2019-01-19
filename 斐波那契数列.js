function pow(x, y) {
	if(y == 1) {
		return x
	} else {
		if(y % 2 == 0) {
			var temp = pow(x, y / 2)
			return temp * temp
		} else {
			var temp = pow(x, (y - 1) / 2)
			return temp * temp * x
		}
	}
}

//递归
function fibonacci1(n) {
	if(n <= 2) {
		return 1
	} else {
		return fibonacci1(n - 1) + fibonacci1(n - 2)
	}
}

//递归改进
var arr = new Array()
function fibonacci2(n) {
	if(n <= 2) {
		return 1
	} else {
		if(arr[n]) {
			return arr[n]
		} else {
			arr[n] = fibonacci2(n - 1) + fibonacci2(n - 2)
			return arr[n]
		}
	}
}

//迭代
function fibonacci3(n) {
	var res1 = 1;
	var res2 = 1;
	var sum = res2;
	var i = 3
	while(i <= n) {
		sum = res1 + res2;
		res1 = res2;
		res2 = sum;
		i++;
	}
	return sum;
}

//阶乘
function fibonacci4(n) {
	var c = new Array()
	c[0] = new Array()
	c[1] = new Array()
	c[0][0] = 1
	c[0][1] = 1
	c[1][0] = 1
	c[1][1] = 0
	var p = power(c, n - 2)
	return p[0][0] + p[0][1]
}

function multiply(C1, C2) {
	var a = new Array()
	a[0] = []
	a[1] = []
	a[0][0] = C1[0][0] * C2[0][0] + C1[0][1] * C2[1][0]
	a[0][1] = C1[0][0] * C2[0][1] + C1[0][1] * C2[1][1]
	a[1][0] = C1[1][0] * C2[0][0] + C1[1][1] * C2[1][0]
	a[1][1] = C1[1][0] * C2[0][1] + C1[1][1] * C2[1][1]
	return a
}

function power(C, n) {
	if(n == 1) {
		return C
	} else {
		if(n % 2 == 0) {
			var temp = power(C, n / 2)
			return multiply(temp, temp)
		} else {
			var temp = power(C, (n - 1) / 2)
			return multiply(multiply(temp, temp), C)
		}
	}
}

function testFunctionTime(fn) {　　
	var start = new Date().getTime();　　
	if(fn) fn();　　
	var end = new Date().getTime();　　
	console.log(end - start);
}

var number = 10

var start1 = new Date().getTime();
console.log(fibonacci4(number))
var start2 = new Date().getTime();
console.log("阶乘法: " + (start2 - start1))
console.log(fibonacci3(number))
var start3 = new Date().getTime();
console.log("迭代法: " + (start3 - start2))
console.log(fibonacci2(number))
var start4 = new Date().getTime();
console.log("递归改良法: " + (start4 - start3))
console.log(fibonacci1(number))
var end = new Date().getTime();
console.log("递归法: "+(end-start4))

//一次跳1,2级,共n级
//斐波那契额数列
function jumpFloor(number) {
	if(number == 1) {
		return 1
	}
	var res1 = 1;
	var res2 = 2;
	var sum = res2;
	var i = 3
	while(i <= number) {
		sum = res1 + res2;
		res1 = res2;
		res2 = sum;
		i++;
	}
	return sum;
}

//一次跳1,2...n级,共n级
//2^n
function jumpFloorII(number) {
	if(number == 1 || number == 0) {
		return 1
	} else {
		return 2 * jumpFloorII(number - 1);
	}
}

//一次跳1,2...n级,共m级
//前n级2^n，之后斐波那契数列
function jumpFloorIII(n, m) {
	if(m == 0) {
		return 1
	} else if(m <= n) {
		return Math.pow(2, m - 1)
	} else {
		var r = 0
		for(var i = m - 1; i >= m - n; i--) {
			r += jumpFloorIII(n, i)
		}
		return r
	}
}

console.log(jumpFloorIII(4, 4))

//用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形
function rectCover(number)
{
    var res1 = 1
    var res2 = 2
    var r = 0
    if(number==1){return res1}
    else if(number==2){return res2}
    else{
        for(var i=3;i<=number;i++){
            r = res1+res2
            res1 = res2
            res2 = r
        }
        return r
    }
}
console.log(rectCover(3))
