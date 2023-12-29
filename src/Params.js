import { useParams, useSearchParams } from "react-router-dom";

function Params(){
// const [search,setsearch] =useSearchParams()
 const {num}=useParams()
//  const ans=search.get('filter')==='active';
 
    return(
        <div>
            <h2>hello bro</h2>
            {/* <button onClick={()=>setsearch({filter:'active'})}>Users</button>
            <button onClick={()=>setsearch({})}>Non Users</button> */}
        <h2>Number:{num}</h2>
            {/* {
                ans?(<p>All Users</p>):(<p>No Users</p>)
            } */}
        </div>

    )
}
export default Params;