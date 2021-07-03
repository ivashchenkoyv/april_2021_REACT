export default function Post({item,fnFather}){

    return(
        <div>
            {item.userId}-{item.body}-
            <button onClick={()=>fnFather(item.userId)}>click me</button>

        </div>
    )
}