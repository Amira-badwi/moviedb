
import "./movie.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { deleteFromarray, Favacounter, Favarray} from "../store/action";
import reducer from "../store/reducer";
function Movieitem(props){

    const countstar=useSelector((palod)=>palod.favcount);
    const dispatch=useDispatch();
    const arraystar=useSelector((palod)=>palod.arrayoffav);
           
 const changestar=(e ,data)=>{
                dispatch(Favacounter(countstar+1));
                if(e.target.className==="fa-solid fa-star fs-5 text-warning"||props.moviedate.isfire===true )
                {
                    dispatch( Favacounter(countstar-1));
                  e.target.className="fa-solid fa-star fs-5 text-dark"
                  data.isfire=false;
                  dispatch( deleteFromarray(data));
                }
               else{
e.target.className="fa-solid fa-star fs-5 text-warning";
  dispatch(Favarray(props.moviedate));
}               
}
    return(
      <>
       <div className="cardbody border border-warning my-2">
       <img  src={`https://image.tmdb.org/t/p/w500${props.moviedate.poster_path}?api_key=9b743af1d4fde1d65af33c40dcccce87`} className="cardimg p-1 " alt="..."/>
<Link className="link" to={`/carddetailes/${props.moviedate.id}`}>  
    <h6 className=" cardtitle">{props.moviedate.title}</h6>
</Link>
<i  className={`fa-solid fa-star fs-5 ${props.moviedate.isfire===true ?"text-warning":"text-dark"} `}   onClick={(e)=>changestar(e,props.moviedate) } > </i>

      <p   className="text-danger">rate: {props.moviedate.vote_average} </p>
      <p className="bg-danger m-0"><small className=" text-warning">{props.moviedate.release_date}</small></p>
  
       </div>
      </>
         )
}
export default Movieitem;

