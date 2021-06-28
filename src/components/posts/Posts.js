
export default function Posts(){

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(response=>{
        console.log(response)
    })


    return(<div>

        here will be posts

    </div>)
}