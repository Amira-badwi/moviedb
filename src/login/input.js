import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Input()
{
  const [userData, setUserData] = useState({
  
    email: "",
    password:""
})
const [error,seterror]=useState({
emailerror:null,
passerror:null
})

const userdata=(e)=>{
  console.log("ss");
  if(e.target.name == "email"){
    setUserData({
        ...userData,
        email: e.target.value
    })
 seterror({ ...error,
  emailerror: e.target.value.length==0?"this field is required":e.target.value.length<8?"less than 8 characters":
 e.target.value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+(.com|.edu)+$/)?null :"invailed email"})
 
    
}

else{
setUserData({
 ...userData,
 password:e.target.value 
})
seterror({
  ...error,
  passerror:e.target.value==""?"this field is required":e.target.value.length<8?"less than 8 char":null
})
}
}
    return(

      
        <>
         <div className="form-outline form-white mb-4">
                <input type="email" required className="form-control form-control-lg" name="email"
                onChange={(e)=>userdata(e)}
                />
                <span className="text-danger">{error.emailerror}</span>
               <br></br> <label className="form-label" >Email</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" required  className="form-control form-control-lg" name="password"
                onChange={(e)=>userdata(e)} />
                 <span className="text-danger">{error.passerror}</span>
               <br></br>
                <label className="form-label" >Password</label>
              </div>
              
              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

              <button className="btn btn-outline-light btn-lg px-5"  type="submit" disabled={error.emailerror ||error.passerror ||userData.email==""||userData.password=="/Movielist"}>  <Link to="/Movielist" className="text-decoration-none">Login</Link>  </button>

        </>
    )
}
export default Input;