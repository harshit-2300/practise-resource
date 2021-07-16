import React,{useState} from 'react'; 
import RegisterForm from "./RegisterForm";
import SigninForm from "./SigninForm";
import Button from "./Button"
import '../css/Sync.css'

function Sync() {
    
  const [register,setRegister]=useState("signIn"); 
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [loggedInAs,setLoggedInAs]=useState("");
  // console.log("is logged in =",isLoggedIn);
  // console.log("is logged in as ",loggedInAs);
  if(isLoggedIn)
  return (
    <div className="Sync">
       <center><Button loggedInAs={loggedInAs} /></center> 
    </div>
  );
  else 
  {
      if(register==="signIn")
      return (
          <SigninForm setRegister={setRegister} setIsLoggedIn={setIsLoggedIn} setLoggedInAs={setLoggedInAs} />
      );
      else
      return (
          <RegisterForm setRegister={setRegister} setIsLoggedIn={setIsLoggedIn} />
      )
  }
}

export default Sync;
