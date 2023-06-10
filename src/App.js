import React,{useEffect , useContext} from 'react';
import { BrowserRouter as Router,Route } from "react-router-dom";
import Signup from "./Pages/Signup"
import Login from './Pages/Login'
import { FirebaseContext, authContext } from "./store/Context";
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const {setuser} = useContext(authContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setuser(user)
    })
  })
  

  return (
    <div>
      <Router>
        <Route exact path='/' >
          <Home />
        </Route>
        <Route  path='/signup' >
          <Signup/>
        </Route>
        <Route  path='/login' >
          <Login/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
