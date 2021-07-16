import React,{useState} from 'react';
import '../css/Form.css'
import 'tachyons';
   


// Function to check letters and numbers
function alphanumeric(inputtxt)
{
    var letterNumber = /^[0-9a-zA-Z\-'_]+$/;
    if((inputtxt.match(letterNumber))) 
    {
    return true;
    }
    else
    { 
    return false; 
    }
}

    function SigninForm({setIsLoggedIn,setRegister,setLoggedInAs})
    {
            
        const [userName,setUserName]=useState("");
        const [password,setPassword]=useState("");
        const [error,setError]=useState("");

        const onSubmitSignin= async (e)=> {
            
            
            if(!alphanumeric(userName))
            {
            setUserName("");
            setError("User Name not allowed");
            }
            else
            {
                const flag=await fetch('https://harshit-resource.herokuapp.com/login',{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                user_name:userName,
                password:password,
                })
                })
                .then(response=>response.json())
                .then(success=>{
                    return success;
                })
                .catch((err)=>{
                    console.log(err);
                    return false;        
                }); 
                
                // console.log("flag=",flag);

                if(flag)
                {
                setLoggedInAs(userName);    
                setUserName("");
                
                setIsLoggedIn(true);
                }
                else
                {
                    alert("Incorrect User Name or Password ");
                }
                setError("");
                
            }
        
        
        }

        // console.log("user name=",userName);
        // console.log("password=",password);

            return (
                    <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">

                        <main className="pa4 black-80">
                                <div className="measure">
                                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                                        
                                        <div className="mt3">
                                        <label className="db fw6 lh-copy f6" htmlFor="user_name">User Name</label>
                                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                                onChange={(e)=>setUserName(e.target.value)}
                                                type="name"
                                                name="user_name"
                                                id="user_name"
                                                value={userName}
                                                placeholder={error}
                                    
                                                />
                                        </div>

                                        <div className="mv3">
                                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                            //  onChange={this.onPasswordChange}
                                                onChange={(e)=>setPassword(e.target.value)}
                                                value={password}
                                                type="password"
                                                name="password"
                                                id="password" />
                                        </div>

                                </fieldset>

                                <div className="">
                                        <input
                                        onClick={(e)=>{onSubmitSignin(e)}}
                                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                            type="submit"
                                            value="Sign in" />
                                </div>

                                <div className="lh-copy mt3">
                                        <p 
                                        onClick={()=> setRegister("Register")}
                                        className="f6 link dim black db pointer">Register</p>
                                        
                                </div>
                                </div>
                        </main>
                    </article> 					
                    );
        }
// }


export default SigninForm;