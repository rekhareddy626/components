import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Hook = () => {
  return (
    <div>
        <ol>
            <li><Link to="useState">UseState</Link></li>
            <li><Link to="useEffect">UseEffect</Link></li>
            <li><Link to="useEffectApi">UseEffectApi</Link></li>
            <li><Link to="useRef">UseRef</Link></li>
            <li><Link to="useReducer">UseReducer</Link></li> 
            <li><Link to="useMemo">UseMemo</Link></li>
            <li><Link to="useCallback">UseCallback</Link></li>


        </ol>
        <Outlet/>
    </div>
  )
}

export default Hook