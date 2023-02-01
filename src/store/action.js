import { axiosInstance } from "../Network/axiosinstanceConfig"


export   function Favacounter(payload){
    return({
        type:"ADDCOUNT",
        payload
    })
}
export   function Favarray(payload){
    return({
        type:"FAVARRAY",
        payload
    })
}
export   function deleteFromarray(payload){
    return({
        type:"DELETE",
        payload
    })
}

export const moviesaction=()=>(dispatch)=>{
    return    axiosInstance.get("popular?api_key=9b743af1d4fde1d65af33c40dcccce87"
    ).
    then((res)=>dispatch(
       {
            type:"MOVIELIST",
            payload:res.data.results

        }
    )).catch((err)=>console.log(err))


}