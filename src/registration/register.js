
import { useRef, useState } from "react";

import "./register.css"
import registerimg from "./../assets/Tatra Mountains - A view from Kościelec.jpg"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Registerion(){
  var aye= document.getElementById("togglebtn");

const [userData,setUserData]=useState({
  namee:"",
  username:"",
  email:"",
  password:"",
  repeatpassword:""
})
const [error, seterror]=useState({
  namee:null,
  username:null,
  email:null,
  password:null,
  repeatpassword:null
})
const datacheck=(e)=>{
  if(e.target.name === "email"){
    setUserData({
        ...userData,
        email: e.target.value
    })
 seterror({ ...error,
  email: e.target.value.length==0?"this field is required":e.target.value.length<8?"less than 8 characters":
 e.target.value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+(.com|.edu)+$/)?null :"invailed email"})
 
 }
if(e.target.name === "Name"){
  setUserData({
    ...userData,
    namee:e.target.value
  })
  seterror({
    ...error,
    namee:e.target.value.length==""?"this field is required ":e.target.value.length<3?"is very short name":""
  })}
  
  if(e.target.name==="username"){
    setUserData({
      ...userData,
      username:e.target.value
    })
    seterror({
      ...error,
      username:e.target.value.length==""?"this field is required ":e.target.value.match(/\s/)?"spaces not allawed": e.target.value.length<3? "is very short name":""
    })



}
const test=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i;


if(e.target.name=="password"){

  setUserData({
    ...userData,
    password:e.target.value
  })
  seterror({
    ...error,
    password:e.target.value.length==0?"this field is required ":!test.test(e.target.value)?"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:like'P@ssword1234'": null
  })
 
}



if(e.target.name==="repeatpassword"){

  setUserData({
    ...userData,
    repeatpassword:e.target.value
  })
  seterror({
    ...error,
  repeatpassword:e.target.value.length==""?"this field is required ":e.target.value!==userData.password?" no matching ": null
  })
}

}

const inputElement=useRef();


const checkhide=(ele )=>{

    if(ele.current.type=="password"){
    ele.current.type="text";    

  }
  else{
    ele.current.type="password"
  }
}


const submitData = (e) => {
  e.preventDefault()
}


    return(
        <>
  <section className="vh-100" >
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4" onSubmit={(e) => submitData(e)}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name="Name"   onChange={(e)=>datacheck(e)} className="form-control" />
                      <span className="text-danger">{error.namee}</span>
               <br></br>
                      <label className="form-label" >Your Name</label>
                    </div>
                  </div>


                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name="username" onChange={(e)=>datacheck(e)} className="form-control" />
                      <span className="text-danger">{error.username}</span>
               <br></br>
                      <label className="form-label" >Your userName</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email"className="form-control" onChange={(e)=>datacheck(e)} name="email" />
                      <span className="text-danger">{error.email}</span>
               <br></br>
                      <label className="form-label">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="parent form-outline flex-fill mb-0">
                      <input type="password"id="inputpass"  ref={inputElement}  className="form-control" onChange={(e)=>datacheck(e)} name="password"/>
                     
                    <span  id="togglebtn" onClick={()=>checkhide(inputElement)}>
                     
                    <i   className="fa-solid fa-eye-slash" ></i>
                    </span>

                    <span className="text-danger">{error.password}</span>
               <br></br>
                      <label className="form-label" >Password </label>
                   <div className="validation ">
                   </div>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div  className=" form-outline flex-fill mb-0">
                     
                      <input type="password" name="repeatpassword" onChange={(e)=>datacheck(e)} className="form-control" />
                      <span className="text-danger">{error.repeatpassword}</span>
                       <br></br>
                  <label className="form-label" >Repeat your password</label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button"  disabled={ userData.email==""|| error.email||error.namee||error.username||error.repeatpassword||error.password} className="btn btn-primary btn-lg">
                    <Link to="/Movielist" className="text-decoration-none text-dark">register</Link>
                    </button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src={registerimg} className="img-fluid d-none d-lg-block" alt="this me" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}
export default Registerion ;