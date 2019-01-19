function arrUniq(arr) {
   var resArr = [];
   var flag = true;
     
   for(var i=0;i<arr.length;i++){
       if(resArr.indexOf(arr[i]) == -1){
           if(arr[i] != arr[i]){   // NaN
              if(flag){
                   resArr.push(arr[i]);
                   flag = false;
              }
           }else{
                resArr.push(arr[i]);
           }
       }
   }
    return resArr;
}

console.log(arrUniq([false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]))

//[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']