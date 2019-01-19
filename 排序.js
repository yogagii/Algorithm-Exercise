//时间复杂度：n+k:计数     nlogn:归并，快速，堆     n^1.3希尔     n^2插入，选择，冒泡
//最好情况：n:冒泡，插入，希尔
//最坏情况：nlogn:堆，归并
//空间复杂度：O1:冒泡，选择，插入，希尔，堆      Ologn:快速     On:归并    Ok:计数
//不额外空间：冒泡，选择，插入，希尔，堆，快速
//稳定：冒泡，插入，归并，计数

//1.冒泡排序
//比较相邻的两个元素，如果前一个比后一个大，则交换位置。第一轮的时候最后一个元素应该是最大的一个。
//时间复杂度: O(n^2)  最好O(n)  最坏O(n^2)
//空间复杂度: O(1) 不占用额外内存
//稳定性: 稳定

function bubbleSort(arr) {
　　var len = arr.length;
　　for (var i = 0; i < len; i++) {
　　　　for (var j = 0; j < len - 1 - i; j++) {
　　　　　　if (arr[j] > arr[j+1]) { //相邻元素两两对比
　　　　　　　　var temp = arr[j+1]; //元素交换
　　　　　　　　arr[j+1] = arr[j];
　　　　　　　　arr[j] = temp;
　　　　　　}
　　　　}
　　}
　　return arr;
}
function bubble2(arr) {　　
	console.time('改进冒泡排序耗时');
	var pos=arr.length-1
	var pos2=0
	for(var i=0;i<arr.length;i++){
		pos2=0
		for(var j=0;j<pos;j++){
			if(arr[j]>arr[j+1]){
				var temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
				pos2=j
			}
		}
		pos=pos2
	}
	console.timeEnd('改进冒泡排序耗时');
	return arr
}
function bubbleSort2(arr) {
　　console.time('改进后冒泡排序耗时');
　　var i = arr.length-1; //初始时,最后位置保持不变　　
　　while ( i> 0) {
　　　　var pos= 0; //每趟开始时,无记录交换
　　　　for (var j= 0; j< i; j++){
　　　　　　if (arr[j]> arr[j+1]) {
　　　　　　　　pos= j; //记录交换的位置
　　　　　　　　var tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
　　　　　　}
　　　　}
　　　　i= pos; //为下一趟排序作准备
　　}
　　console.timeEnd('改进后冒泡排序耗时');
　　return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort2(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50] ；

//2.选择排序
//依次选出最小的数，第二小的数...放在最前面
//时间复杂度: O(n^2)  最好O(n^2)  最坏O(n^2)
//空间复杂度: O(1) 不占用额外内存
//稳定性: 不稳定

function selectionSort(arr) {
　　var len = arr.length;
　　var minIndex, temp;
　　console.time('选择排序耗时');
　　for (var i = 0; i < len - 1; i++) {
　　　　minIndex = i;
　　　　for (var j = i + 1; j < len; j++) {
　　　　　　if (arr[j] < arr[minIndex]) { //寻找最小的数
　　　　　　　　minIndex = j; //将最小数的索引保存
　　　　　　}
　　　　}
　　　　temp = arr[i];
　　　　arr[i] = arr[minIndex];
　　　　arr[minIndex] = temp;
　　}
　　console.timeEnd('选择排序耗时');
　　return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(selectionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]；

//3.插入排序
//取出下一个元素，在已经排序的元素序列中从后向前扫描；如果该元素（已排序）大于新元素，将该元素移到下一位置；
//时间复杂度: O(n^2)  最好O(n)  最坏O(n^2)
//空间复杂度: O(1) 不占用额外内存
//稳定性: 稳定

function insertionSort(array) {
　　console.time('插入排序耗时：');
　　for (var i = 1; i < array.length; i++) {
　　　　var key = array[i];
　　　　var j = i - 1;
　　　　while ( array[j] > key) {
　　　　　　array[j + 1] = array[j];
　　　　　    j--;
　　　　}
　　　　array[j + 1] = key;
　　}
　　console.timeEnd('插入排序耗时：');
　　return array;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(insertionSort(arr));

//4.希尔排序
//分组插入,初次取序列的一半为增量，以后每次减半，直到增量为1。
//时间复杂度: O(n^1.3)  最好O(n)  最坏O(n^2)
//空间复杂度: O(1) 不占用额外内存
//稳定性: 不稳定

function shellSort(arr) {
　　var len = arr.length,
　　temp,
　　gap = 1;
　　console.time('希尔排序耗时:');
　　while(gap < len/5) { //动态定义间隔序列
　　　　gap =gap*5+1;
　　}
　　for (gap; gap > 0; gap = Math.floor(gap/5)) {
　　　　for (var i = gap; i < len; i++) {
　　　　　　temp = arr[i];
　　　　　　for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
　　　　　　　　arr[j+gap] = arr[j];
　　　　　　}
　　　　　　arr[j+gap] = temp;
　　　　}
　　}
　　console.timeEnd('希尔排序耗时:');
　　return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(shellSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]；

//5.归并排序
//分治策略:将问题分成一些小的问题然后递归求解，而治的阶段则将分的阶段得到的各答案"修补"在一起，即分而治之
//时间复杂度: O(nlogn)  最好O(nlogn)  最坏O(nlogn)
//空间复杂度: O(n) 占用额外内存
//稳定性: 稳定

function mergeSort(arr) { //采用自上而下的递归方法
　　var len = arr.length;
　　if(len < 2) {
　　　　return arr;
　　}
　　var middle = Math.floor(len / 2),
　　left = arr.slice(0, middle),
　　right = arr.slice(middle);
　　return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right){
　　var result = [];
　　console.time('归并排序耗时');
　　while (left.length && right.length) {
　　　　if (left[0] <= right[0]) {
　　　　　　result.push(left.shift());
　　　　} else {
　　　　　　result.push(right.shift());
　　　　}
　　}
 
　　while (left.length){
　　　　result.push(left.shift());
　　}
　　while (right.length){
　　　　result.push(right.shift());
　　}
　　console.timeEnd('归并排序耗时');
　　return result;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(mergeSort(arr));

//6.快速排序
//选择中中间数作为基数进行比较，然后再遍历比较，把比中间值小的放在left数组，把比中间值大的放在right数组中
//时间复杂度: O(nlogn)  最好O(nlogn)  最坏O(n^2)
//空间复杂度: O(logn) 不占用额外内存
//稳定性: 不稳定

var quickSort2 = function(arr) {
　　console.time('2.快速排序耗时');
　　if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　console.log(pivot)
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　console.timeEnd('2.快速排序耗时');
　　return quickSort2(left).concat([pivot], quickSort2(right));
};
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(quickSort2(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]；

//7.堆排序
//按原始序列排出金字塔式的结构，把最大值一层层往上冒，冒到金字塔最顶端的时候把它踢出来
//时间复杂度: O(nlogn)  最好O(nlogn)  最坏O(nlogn)
//空间复杂度: O(1) 不占用额外内存
//稳定性: 不稳定

function heapSort(array) {
　　console.time('堆排序耗时');
　　//建堆
　　var heapSize = array.length, temp;
　　for (var i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {　　
　　　　heapify(array, i, heapSize);
　　}
　　//堆排序
　　for (var j = heapSize - 1; j >= 1; j--) {
　　　　temp = array[0];
　　　　array[0] = array[j];
　　　　array[j] = temp;
　　　　console.log(array)
　　　　heapify(array, 0, --heapSize);
　　}
　　console.timeEnd('堆排序耗时');
　　return array;
}
function heapify(arr, x, len) {
　　var l = 2 * x + 1, r = 2 * x + 2, largest = x, temp;
　　if (l < len && arr[l] > arr[largest]) {
　　　　largest = l;
　　}
　　if (r < len && arr[r] > arr[largest]) {
　　　　largest = r;
　　}
　　if (largest != x) {
　　　　temp = arr[x];
　　　　arr[x] = arr[largest];
　　　　arr[largest] = temp;
　　　　console.log(arr)
　　　　heapify(arr, largest, len);
　　}
}
var arr=[91,60,96,13,35,65,46,65,10,30,20,31,77,81,22];
console.log(heapSort(arr));//[10, 13, 20, 22, 30, 31, 35, 46, 60, 65, 65, 77, 81, 91, 96]；

//8.计数排序
//利用下标存数据
//时间复杂度: O(n+k)  最好O(n+k)  最坏O(n+k)
//空间复杂度: O(k) 占用额外内存
//稳定性: 稳定

function countingSort(array) {　　
	var len = array.length,
		　　B = [],
		　　C = [],
		　　min = max = array[0];　　
	console.time('计数排序耗时');　　
	for(var i = 0; i < len; i++) {　　　　
		min = min <= array[i] ? min : array[i];　　　　
		max = max >= array[i] ? max : array[i];　　　　
		C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;　　
	}　　
	for(var k = min; k < max; k++) {　　　　
		var length = C[k];
		for(var m = 0; m < length; m++) {　　　　　　
			B.push(k);　　　　
		}　　
	}　　
	console.timeEnd('计数排序耗时');　　
	return B;
}
var arr = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
console.log(countingSort(arr)); //[1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 6, 7, 7, 8, 8, 9, 9]；