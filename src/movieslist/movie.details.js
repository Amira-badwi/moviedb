import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosInstance } from "../Network/axiosinstanceConfig";
function Carddatails(){

    const param =useParams();
const[carddetails ,setcarddetails]=useState([]);
useEffect(()=>{
    axiosInstance.get( `${param.id}?api_key=9b743af1d4fde1d65af33c40dcccce87` )
    .then((date)=>setcarddetails(date.data)).catch((error)=>console.log(error));

},[])

return(
    <>

<div className="card mb-3 m-auto my-4 bg-dark carddiatails ">
  <div className="row g-0">
    <div className="col-md-4">
    <img  src={`https://image.tmdb.org/t/p/w500${carddetails.poster_path}?api_key=9b743af1d4fde1d65af33c40dcccce87`} className="img-fluid rounded-start detailsimg w-100" alt="..."/>

    </div>
    <div className="col-md-8">
      <div className="card-body text-center">
        <h5 className="card-title text-warning">{carddetails.title}       </h5>

        <p className="card-text text-light">{carddetails.overview}</p>
    <p className="card-text "><small className="text-muted">{carddetails.release_date}</small></p>
    <p className="card-text "><small className="text-warning">voting: {carddetails.vote_average}</small></p>
   </div>
    </div>
  </div>
</div>

    </>
)
}
export default Carddatails;