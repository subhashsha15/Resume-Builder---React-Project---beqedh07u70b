import React, { useState } from 'react'
import './SignUp.css'
import signupImg from '../../../public/images/signupImg.jpg'
import logInImg from '../../../public/images/logInImg.jpg'
import avatarImg from '../../../public/images/avatar.jpg'
import googleImg from "../../../public/images/GoogleImg.png"
import openEyeIcon from "../../../public/images/openEyed.svg"
import { auth, provider } from "../../components/firebase";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router'
const SignUp = () => {
    const [logIn, setLogIn] = useState(false);
    const [UserName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInLoader, setSignInLoader] = useState(false);
    const [error, setError] = useState({
        userNameError: "",
        emailError: "",
        passwordError: ""
    })
    const navigate = useNavigate();
    const handleSingin = () => {
        // Perform validation checks
        let hasError = false;

        if (!UserName && !logIn) {
            setError({ userNameError: "Please enter your name" });
            hasError = true;
        }

        if (!email) {
            setError({ ...error, emailError: "Please enter your email" });
            hasError = true;
        }

        if (!password) {
            setError({ ...error, passwordError: "Please enter your password" });
            hasError = true;
        }

        if (!hasError) {
            // If there are no errors, proceed with user creation
            // setSignInLoader(true);
            // createUserWithEmailAndPassword(auth, email, password)
            //     .then((data) => {
            //         localStorage.setItem('username', UserName);
            //         localStorage.setItem('email', data.user.email);
            //         setSignInLoader(false);
            //         setLogIn(true);
            //         setPassword("");
            //     })
            //     .catch((error) => {
            //         setSignInLoader(false);
            //         alert("Account is already created with:", email);
            //         const errorCode = error.code;
            //         const errorMessage = error.message;
            //     });
            console.log("signup function runned")
        }
    }
    const handleLogin = () => {
        setSignInLoader(true);
        signInWithEmailAndPassword(auth, email, password).then((data) => {
            // console.log("sign in data", data);
            localStorage.setItem('email', data.user.email);
            if(!UserName){
                localStorage.setItem('username',email.split('@')[0]);
            }
            setSignInLoader(false);
            navigate('/home');
        })
            .catch((error) => {
                setSignInLoader(false);
                alert("Email or Password incorrect");
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    const handleGoogleSignUp = () => {
        signInWithPopup(auth, provider).then((data) => {
            localStorage.setItem('username', data.user.displayName);
            localStorage.setItem('email', data.user.email);
            navigate('/home');
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        <>
            <div className="signup">
                {signInLoader ? <h1 className='signIn-loader'>{logIn ? "Loging..." : "Signing..."}</h1> : (<div className="signup-container">
                    <div className="signup-container-left">
                        <div className="signup-heading">
                            {logIn ? <h3>Welcome Back !!!</h3> : <h3>Create Account</h3>}
                        </div>
                        <div className="signup-sub-heading">
                            <p>Provide your details.</p>
                        </div>
                        <div className="user-signup-details">
                            {!logIn && (<div className="user-details">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" placeholder="Jhon Doe" onChange={(e) => setUserName(e.target.value)} value={UserName} />
                                <div className='username-error'>{error.userNameError}</div>
                            </div>)}

                            <div className="user-details">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" placeholder="jhondoe@domain.com" onChange={(e) => setEmail(e.target.value)} value={email} />
                                <div className='email-error'>{error.emailError}</div>
                            </div>
                            <div className="user-details">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Jh.D0u02" onChange={(e) => setPassword(e.target.value)} value={password} />
                                <div className="password-error">{error.passwordError}</div>
                            </div>
                            <div className="para">
                                By signing up I agree to the <span>terms & conditions</span> and
                                <span> privacy policy</span>
                            </div>
                        </div>
                        {
                            logIn ? (<div className="signin-button" onClick={handleLogin}>Log In</div>)
                                :
                                (<div className="signin-button" onClick={handleSingin}>Sign In</div>)
                        }
                        {!logIn && (<button className="google-button" onClick={handleGoogleSignUp}>
                            <img src={googleImg} alt="" />
                            <span>Or register with Google</span>
                        </button>)}
                        {logIn ? <div className='para-bottom'><span onClick={() => setLogIn(false)}>Back</span></div> : <div className='para-bottom'>Already a Member? <span onClick={() => setLogIn(true)}>Log In</span></div>}
                    </div>
                    <div className="signup-container-right">
                        {logIn ? <img src={logInImg} alt="" /> : <img src={signupImg} alt="" />}
                    </div>
                </div>)}
            </div >
        </>
    )
}
export default SignUp;