export default function Post({item,fnFather}){

    return(
        <div>
            <h3>userId: {item.userId}- id:{item.id}</h3>
            <p>{item.body}</p>
            <button onClick={()=>fnFather(item.userId)}>click me</button>
            <hr/>
        </div>
    )
}