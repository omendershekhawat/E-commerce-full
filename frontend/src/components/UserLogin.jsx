import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Admin.css'

function UserLogin() {

    const navigate = useNavigate()
        const[username, setUsername] = useState("")
        const [Password, setPassword] = useState("")

        const loginHandle = async () => {
            let result = await axios.post ("http://localhost:4000/user/login",{
                username: username,
                password: Password
            })
            result =result.data
            // console.log(result);

            if(result.name){
                localStorage.setItem("userData",JSON.stringify(result))
                navigate("/")
            }
            else{
                alert("please enter correct details")
            }

        }
    
  return (
    <div className='user'>
        <h1>login</h1>
        <form action="">
            <input type="text" placeholder='username' value={username} onChange={(e) => setUsername (e.target.value)}/>
            <input type="text" placeholder='password' value={Password} onChange={(e) => setPassword(e.target.value)}/>
            <div>
                <button onClick={(e)=>{e.preventDefault()
                loginHandle()
            }}
                type='submit'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default UserLogin