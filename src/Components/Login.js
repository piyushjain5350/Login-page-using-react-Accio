import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom"

const Login=()=>{
    const [userData,setUserData]=useState({email:"", password:"",});
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    const navigate=useNavigate();
    
    useEffect(()=>{
        sessionStorage.clear();
    },[]);

    function validateUser(e){
        e.preventDefault();
        if(userData.email===''|| userData.password===''){
            setError("Please enter valid credintials")
            return;
        }
        // console.log(userData);
        axios.post("https://dummyjson.com/auth/login",
        {
            username:userData.email,
            password:userData.password
        }
        )
        .then(response=>{

            console.log(response.data);
            sessionStorage.setItem("token", response.data.token);
            sessionStorage.setItem("id", response.data.id);
            
            setSuccess("Logged in successfull");
            navigate("/page");
        })
        .catch(err=>{setError(err.response.data.message)
        setSuccess('')});
        
    }
    
    return(
        <div className="App">
            <div className='login'>
                <p>Welcome back! 👋</p>
                <h2>Sign in to your account</h2>
                <form onSubmit={validateUser}>
                    <label htmlFor="mail">Your email</label>
                    <br />
                    <input type="text" name="mail" id="mail" onChange={(event)=>setUserData({...userData,email:event.target.value})} value={userData.email}/>
                    <br />
                    <label htmlFor="pass">Password</label>
                    <br />
                    <input type="password" name="pass" id="pass" onChange={(event)=>setUserData({...userData,password:event.target.value})} value={userData.password}/>
                    <br />
                    <button type="submit">Continue</button>
                </form>
                {error&& <h4 className='error'>{error}</h4>}
                {success&& <h4 className='success'>{success}</h4>}
                <p> <Link to={"/password-recovery"}>Forget you Password? </Link></p>
            </div>
            <div className="text-center">
                 Don't have an account ? <Link to={"/sign-up"}>Sign up</Link>
            </div>
        </div>
    )
}

export default Login;