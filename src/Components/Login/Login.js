import React from 'react';
import { FirebaseContext } from "../../store/Context";
import Logo from '../../olx-logo.png';
import './Login.css';
import { useState } from 'react';
import { useContext } from 'react';
import {useHistory} from  'react-router-dom'


function Login() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()

  const handleLogin = (e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin} >
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            onChange={(e)=>setemail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="lname"
            onChange={(e)=>setpassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href='/signup' >Signup</a>
      </div>
    </div>
  );
}

export default Login;
