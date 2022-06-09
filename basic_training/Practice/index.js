let title = "blah blah blah"
let body = "coding coding coding"
// let id = `${id}`

//${id} goes into 4.
fetch(`https://jsonplaceholder.typicode.com/posts/4`,{
    method: "PATCH",
    body: JSON.stringify(
        {
            id: 4,
            title: title,
            body: body
        }
    )
})
.then(res=>{
    console.log(res.status)
    return res.json()})
.then(res=>{
    console.log(res)
})
