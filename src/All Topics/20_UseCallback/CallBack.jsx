import React, { useCallback, useState } from 'react'

const CallBack = () => {
    const [count ,setCount] = useState(0)

    const increment = useCallback(() =>{
        setCount((prev) => prev +1)
    },[])
  return (
   <>
   <h1>count : {count}</h1>
   <button onClick={increment}>Increment</button>

   </>
  )
}

export default CallBack