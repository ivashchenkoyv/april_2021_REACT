import Post from "../post/Post";

export default function Posts({items,appFn}){

    return(

        <div>
            {
                items.map((value)=> <Post key={value.userId} item={value} fnFather={appFn}/>)
            }

        </div>

    )

}