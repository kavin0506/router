import { useParams } from "react-router-dom";

const Veg=()=>{

    const {id}=useParams()

    return(
        <div>
            <p>Number:{id}</p>
        </div>
    )
}

export default Veg;