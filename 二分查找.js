//查找已排序数组 o()
//递归
function binarySearch(data, dest, start, end) {
	var end = end || data.length - 1,
		start = start || 0,
		m = Math.floor((start + end) / 2);
	if(data[m] == dest) {
		return m;
	}
	if(dest < data[m]) {
		return binarySearch(data, dest, 0, m - 1);
	} else {
		return binarySearch(data, dest, m + 1, end);
	}
	return false;
}
var arr = [-34, 1, 3, 4, 5, 8, 34, 45, 65, 87];

//非递归
function binarySearch(data, dest) {
	var h = data.length - 1,
		l = 0;
	while(l <= h) {
		var m = Math.floor((h + l) / 2);
		if(data[m] == dest) {
			return m;
		}
		if(dest > data[m]) {
			l = m + 1;
		} else {
			h = m - 1;
		}
	}
	return false;
}
var arr = [-34, 1, 3, 4, 5, 8, 34, 45, 65, 87];

binarySearch(arr, 4);  //3

//把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 
//输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 
//例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。

function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length==0){return 0}
    var low = 0;
    var high = rotateArray.length-1;
    while(low<high-1){
        var mid = Math.floor((low+high)/2)
        if(rotateArray[low]>rotateArray[mid]){
            high = mid
        }else{
            low = mid
        }
    }
    if(rotateArray[low]>rotateArray[high]){
        return rotateArray[high]
    }else{
        return rotateArray[low]
    }
    
}