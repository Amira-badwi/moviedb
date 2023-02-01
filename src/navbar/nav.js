import "./nav.css";
import merastoreimg from "./../assets/mera Store.png"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { useContext, useEffect } from "react";
import { langContext } from "../context/langcontext";


function MyNavbar() {
  const countstar=useSelector((palod)=>palod.favcount);
  const {contextlang,setcontextlang} =useContext(langContext);
  const datalang={
    register:"register",
    login:"login"
  }
  
switch(contextlang)
{
  case "Ar":
   {
    datalang.register="سجل الان";
    datalang.login="سجل دخول ";
    break;
   }
 
    
    default:
      {
        datalang.register="register";
        datalang.login="login";
        break;
       }
}

  return (
    <>
    <nav className="navbar navbar-light bg-white m-0  p-0"  dir={`${contextlang=="En"?"ltr":"rtl"}`}>
  <div className="container-fluid px-md-1 px-sm-4">
    <Link className="navbar-brand" to="/Movielist"> <img src={merastoreimg} width="60px" className="m-0 p-0 " />      mera moives</Link>
    <button className=" btn btn-outline-info fs-6 fw-bold " onClick={()=>setcontextlang(contextlang==="En"? "Ar":"En")}>{contextlang}</button>
    <Link to="/favourite">
    <i className="fa-solid fa-star text-warning fs-3"><span className="fs-5 text-dark"> {countstar}</span></i>
    </Link>
        <div className="d-flex justify-content-around w-25" > <Link className="px-4 link fw-bold" to="/register"> {datalang.register}   </Link> <Link className="link px-l-2 fw-bold" to="/Login">{datalang.login}</Link> </div>
  </div>

</nav>
    
    </>
  );
}

export default MyNavbar;