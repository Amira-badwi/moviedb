import { Switch } from "react-router-dom/cjs/react-router-dom";
import { BrowserRouter,Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from "../login/login";
import Favourite from "../movieslist/favourite";
import Carddatails from "../movieslist/movie.details";
import Movieitem from "../movieslist/movieitem";
import Movielist from "../movieslist/movieslist";
import  Mynavbar from "../navbar/nav";
import Notfound from "../notfound";
import Registerion from "../registration/register";
import { langContext } from "../context/langcontext";
import {useState} from "react"

function Home(){
    const [contextlang,setcontextlang]=useState("En");
    return(
        <>
<langContext.Provider  value={{contextlang,setcontextlang}}>
<BrowserRouter>
<Route path="" component={Mynavbar}/>
<Switch>
<Route exact path="/Movielist" component={Movielist} />
<Route exact path="/Moviecard" component={Movieitem} />
<Route exact path="/favourite" component={Favourite} />
<Route exact path="/Login" component={Login} />
<Route exact path="/register" component={Registerion} />
<Route exact path="/carddetailes/:id" component={Carddatails} />
<Route path="" component={Movielist}/>

<Route exact path="*" component={Notfound} />


</Switch>

</BrowserRouter>
</langContext.Provider>
        </>
    )
}
export default Home ;