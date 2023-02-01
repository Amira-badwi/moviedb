import axios from "axios";
import { useEffect, useRef, useState } from "react";

function Search(){
    const search=useRef("");

const[searchdata,setsearch]=useState();
const[searcharr,setarr]=useState([]);

    useEffect(()=>{
        axios.get( `https://api.themoviedb.org/3/search/movie?api_key=9b743af1d4fde1d65af33c40dcccce87&query=${searchdata} `)
        .then((date)=>setarr(date.data.results[0])).catch((error)=>console.log(error));
    },[searchdata])
const searchmovie=(searcdata)=>{
if(searcdata.current.value.length<3){
     
setsearch(searcdata.current.value);
}


}
    return(
        <>
      
    

            <div className="card mb-3 m-auto my-4 bg-dark  cardsearch w-75 " >
  <div className="row g-0">
    <div className="col-md-4">
    <input className="form-control w-100" type="text"  onChange={()=>searchmovie(search)}  ref={search} placeholder="Search" aria-label="Search" />

    <img  src={`https://image.tmdb.org/t/p/w500${searcharr.poster_path}?api_key=9b743af1d4fde1d65af33c40dcccce87`} className="img-fluid rounded-start w-100 "   alt="..."/>

    </div>
    <div className="col-md-8">
      <div className="card-body text-center">
        <h5 className="card-title text-warning">{searcharr.title}       </h5>

        <p className="card-text text-light fs-small">{searcharr.overview}</p>
    <p className="card-text "><small className="text-muted">{searcharr.release_date}</small></p>
    <p className="card-text "><small className="text-warning">voting: {searcharr.vote_average}</small></p>
   </div>
    </div>
  </div>
</div>

        
        </>        
               
               
                
    
    )

}


export default Search;