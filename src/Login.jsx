import { useState } from "react";
import './Login.css';
function Login(){
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    //const [darkMode, setDarkMode] = useState(false);
    const [showPasswd, setShowPasswd] = useState(false);
    const [msg, setMsg] = useState('');
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const userData = {
        email: 'usertest@gmail.com',
        passwd: 'usertest@123'
    }
    const handleEventLogin = (e) => {
        e.preventDefault()
        if(email === userData.email && passwd === userData.passwd){
            setMsg('Hi, Welcome Back!, '+ email)
        }
        else{
            setMsg(`Oops! User Email not found, Please Sign Up to continue`)
        }
        setTimeout(() => 
            setMsg(''), 3000);
    }
    const handleMouseMove = (e) => {
        const x = (e.clientX - window.innerWidth / 2) / 50; 
        const y = (e.clientY - window.innerHeight / 2) / 50;
        setMousePos({ x, y });
      };
    return(
        <>
           <div className="logincont" onMouseMove={handleMouseMove}>
                <div className="logindiv" style = {{transform: `translate(${mousePos.y}px) rotate(${mousePos.x / 5}deg)`}}>
                    <h1>Welcome Back !</h1>
                    <form id = "loginform" onSubmit={handleEventLogin}>
                        <label> Email id </label>
                        <input type = "email" value ={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <label> Password </label>
                        <div className="passwd-wrapper">
                            <input type={showPasswd ? "text" : "password"} value={passwd} onChange={(e) => setPasswd(e.target.value)} className={showPasswd ? "show-anim" : ""} /> 
                            <span className="eye" onClick={() => setShowPasswd(!showPasswd)}> {showPasswd ? "Hide" : "Show"} </span>     
                        </div>
                        <input type = "submit" form="loginform"  value={"Login"}/>
                        <div className="oauth2">
                            <p>Or Continue With</p>
                            <div className="oauthbtns">
                                <button className="google">Google</button>
                                <button className="fb">Facebook</button>
                            </div>
                        </div>
                        <a href = "#" className="forgothref"> Forgot Password? </a>
                        
                    </form>
                </div>
                {msg && <div className = { `popup ${msg ? "show" : ""} `}> {msg} </div>}
            </div>
        </>
    );
}
export default Login