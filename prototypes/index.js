const arr = [5,55,12,129,595]

//my filter method
Array.prototype.MyFilter = function (cbf) {
    const filteredArray = []
    for (let i = 0; i < this.length; i++) {
        if(cbf(this[i], i, this)){
            filteredArray.push(this[i])
        }
    }
    return filteredArray
}

let filteredResult = arr.MyFilter(item => {
        return  item < 50
})
console.log(filteredResult); // 5,12

// my reduce method
Array.prototype.MyReduce = function (cbf) {
    let temp = 0;
    for (let i =0 ; i< this.length;i++){
        cbf(temp = temp+this[i])
    }
    return temp
}

let reduceResult = arr.MyReduce((temp,item)=>{
    return item + temp
},0)
console.log(reduceResult)

// // // my some method
// Array.prototype.MySome = function (cbf) {
//     for (let i = 0 ; i < this.lensgth; i++ ){
//         if (this[i] === this ){
//             return true
//         } 
//     }
//     return false
// }

// let someResult = arr.MySome(people=>{
//         return people.age === 25
// })
// // console.log(someResult)