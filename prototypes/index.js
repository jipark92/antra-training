//RANDOM ARRAY
const arr = [5,55,12,129,595]


//MY FILTER METHOD
Array.prototype.MyFilter = function(cbf){
    const filteredArray = [];
    for (let i = 0; i < this.length; i++){
        if(cbf(this[i], i, this)){
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
}
const filteredResult = arr.MyFilter(item => item < 50)
console.log(filteredResult); // 5,12


//MY REDUCE METHOD
Array.prototype.MyReduce = function(cbf) {
    let temp = 0;
    for (let i =0 ; i< this.length;i++){
        cbf(temp = temp + this[i]);
    }
    return temp;
}
const reduceResult = arr.MyReduce((temp,item)=>item + temp);
console.log(reduceResult);// 796 total


//MY SOME METHOD
Array.prototype.MySome = function(cbf) {
    for (let i = 0 ; i < this.length; i++ ){
        if( typeof(this[i]),i, this ) {
            return true
        }
    }
    return false
}
const someResult = arr.MySome(arr > 5 )
console.log(someResult) // true