import React from 'react'
import './Login.css'

function Login() {
    const register = () => {};
  return (
    <div className='login'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/400px-LinkedIn_Logo.svg.png" alt=""/>
        <form>
            <input placeholder="Full Name (required if registering)" type='text'/>
            <input placeholder="Profile pic URL (optional)" type="text" />
            <input placeholder="Email" type="email" />
            <input placeholder="Passowrd" type="password" />
            <button>Sign In</button>
        </form>

        <p>Not a member?
            <span className="login__register" onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login