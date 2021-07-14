export default function Post({item,fnFather}){

    return(
        <div>
            'userId:'{item.userId}-'id:'{item.id}-{item.body}-
            <button onClick={()=>fnFather(item.userId)}>click me</button>

        </div>
    )
}