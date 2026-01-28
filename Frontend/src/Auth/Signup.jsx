import React, { useState } from 'react'

const Signup = () => {
    const [userData, setUserData] = useState({
        name:"",
        email : "",
        password : ""
    })
    const[]=useState("");
    const handleChange=(e)=>{
        e.preventDefault();
        setUserData((prev)=>({...prev,[e.target.name]:e.target.value}));
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(userData);
    }
  return (
    <div>
         <form onSubmit={handleSubmit}>
            <label>Name : </label>
            <input type="name" 
                value={userData.name} 
                name="name"
                onChange={handleChange} 
                placeholder='Enter the Name'/>
            <br /><br />
            <label>Email : </label>
            <input type="email" 
                value={userData.email} 
                name="email"
                onChange={handleChange} 
                placeholder='Enter the Email'/>
            <br /><br />
            <label>Password</label>
            <input type="password" 
                name="password"
                value={userData.password} 
                onChange={handleChange}
                placeholder='Enter the Password'/>
            <br /><br />    
            <button type="submit">Login</button>
         </form>
    </div>
  )
}

export default Signup