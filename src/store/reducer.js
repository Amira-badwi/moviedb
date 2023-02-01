const initial={
    favcount:0,
    arrayoffav:[],
    list:[]
}
export default function reducer(state=initial,action){

switch( action.type){
case "ADDCOUNT":{
return({
    ...state,
    favcount:action.payload
})
}
case "FAVARRAY":{

        return({
        ...state,
        arrayoffav: [...state.arrayoffav,action.payload] 
    })
    }
    case "DELETE":{
 
var y= state.arrayoffav.filter(fav=>fav.id== action.payload.id);
   state.arrayoffav.splice ((state.arrayoffav.indexOf( y[0])),1)

            return({
        ...state,
        arrayoffav: state.arrayoffav
        
    
    })
    }
    case "MOVIELIST":{
        return({
            ...state,
           list:action.payload
        })
        }



default :return state;



}}