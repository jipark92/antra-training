const arr = [
    {
        name: "john",
        age: 25,
        location: "Virginia"
    },
    {
        name: "sarah",
        age: 20,
        location: "Virginia"
    },
    {
        name: "steven",
        age: 12,
        location: "California"
    },
    {
        name: "chris",
        age: 8,
        location: "California"
    },
]

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

let result = arr.MyFilter(item => {
    if(item.location === "Virginia" ){
        return item
    }
})
console.log(result);