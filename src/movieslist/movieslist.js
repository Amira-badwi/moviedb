import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { langContext } from "../context/langcontext";
import { moviesaction } from "../store/action";
import Search from "../navbar/search";
import Movieitem from "./movieitem";

function Movielist(){
    const moviesarray=useSelector((palod)=>( palod.list))

const [movies,setmovies]=useState(moviesarray);
const dispatch=useDispatch();
const arraystar=useSelector((palod)=>palod.arrayoffav);
const {contextlang,setcontextlang} =useContext(langContext);

useEffect(
    ()=>{
     moviesarray.map(element => {
               arraystar.forEach(ele => {
                if(element.id==ele.id){
                    element.isfire=true;
                }
               });
            });
 setmovies(moviesarray);
dispatch(moviesaction());
},[]);



    return(
        <>
         <Search></Search>
<div className="card-group row text-left" >
            { 
           movies.map((data)=>{
            return (
            <>
            
           <div key={data.id} className=" col-12 col-sm-6 g-2 col-md-3 col-lg-2  m-auto text-center  "  >  
            <Movieitem  moviedate={data}/>
            </div>
           
            </>
            )
                 })}

</div>
        </>
    )
}

export default Movielist;