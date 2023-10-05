import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, json } from 'react-router-dom'

function UserLogin() {

    
        const[username, setUsername] = useState("")
        const [Password, setPassword] = useState("")

        const loginHandle = async () => {
            let result = await axios.post ("http://localhost:4000/user/login",{
                username: username,
                Password: Password
            })
            result =result.data

            if(result.name){
                localStorage.setItem(userData,json.stringify(result))
                Navigate ("/")
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