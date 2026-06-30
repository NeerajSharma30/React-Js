import React, { useReducer } from 'react'

const Reducer = () => {

    function reducer (state ,action){
        switch(action.type){
            case "increment" :
                return{count : state.count + 1}
            case "decrement" :
                 return{count : state.count - 1}
            case "reset" :
                 return{count : 0}
        default:
            return state
        }
    }
   

    
    const [state ,  dispatch] = useReducer(Reducer,{count:0})
  return (
    <div>
        <h1>Count : {state.count}</h1>
        
    </div>
  )
}

export default Reducer