const initial={
   
    list:[]
}
export default function moviesreducer(state=initial,action){

switch( action.type){
case "MOVIELIST":{
return({
    ...state,
   list:action.payload
})
}

default :return state;

}}