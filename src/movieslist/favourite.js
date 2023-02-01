import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { deleteFromarray, Favacounter } from "../store/action";

function Favourite(){
    const dispatch=useDispatch();
    const countstar=useSelector((palod)=>palod.favcount);
   const arraystar=useSelector((palod)=>palod.arrayoffav);
    const deleteme=(e,data)=>{
        dispatch( deleteFromarray(data));
        dispatch( Favacounter(countstar-1));
       
    }
return(
    <>
     <div className="container row m-auto">
       { arraystar.map((data)=>{
    
    
            return(
                <>
                           <div key={data.id} className=" col-4 g-2 col-md-4 col-lg-3  text-center m-auto   "  >  
                <div className="cardbody  border border-warning my-2">
           <img   src={`https://image.tmdb.org/t/p/w500${data.poster_path}?api_key=9b743af1d4fde1d65af33c40dcccce87`} className="cardimg   " alt="..."/>
    <Link className="link" to={`/carddetailes/${data.id}`}>  
        <h6 className=" cardtitle">{data.title}</h6>
    </Link>
    <i className="fa-solid fa-trash fs-4" onClick={(e)=>deleteme(e,data)}></i>
          <p className="text-danger">rate: {data.vote_average}</p>
          <p className="bg-danger m-0"><small className=" text-warning">{data.release_date}</small></p>
      
           </div>
    </div>
                </>
            )
     
})
    }
    </div>
    </>
)


}
export default Favourite;