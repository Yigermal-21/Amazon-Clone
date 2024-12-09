import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/Firebase"; // Firebase authentication
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider"; // Context provider for global state
import { ClipLoader } from "react-spinners";
import classes from "./Signup.module.css";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {state, dispatch } = useContext(DataContext);
  // console.log(state.user);
  const navigate = useNavigate();

  const [loading, setLoading] = useState({
    SignIn: false,
    SignUp: false,
  });

  const authHandler = async (e) => {
    e.preventDefault();

    if (e.target.name === "Sign in") {
      setLoading({
        ...loading,
        SignIn: true,
        SignUp: false, 
      });

      // Firebase sign-in
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log("Sign in userInfo:", userInfo);
          dispatch({
            type: "SET_USER", 
            user: userInfo.user,
            
          });
          navigate("/"); 
          // Reset loading state after sign-in
          setLoading({
            ...loading,
            SignIn: false,
            SignUp: false, 
          });

          // navigate("/"); 
        })
        .catch((error) => {
          setError(error.message); // Set error message if the request fails
          setLoading({
            ...loading,
            SignIn: false, // Reset SignIn loading state
            SignUp: false, // Ensure SignUp is false
          });
        });
    } else {
      // Use spread operator to update only the SignUp status
      setLoading({
        ...loading,
        SignIn: false, // Ensure SignIn is false when signing up
        SignUp: true,
      });

      // Firebase sign-up
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          
          dispatch({
            type: "SET_USER", 
            user: userInfo.user,
          });

         
          setLoading({
            ...loading,
            SignIn: false, 
            SignUp: false, 
          });

          navigate("/"); 
        })
        .catch((error) => {
          setError(error.message);
          setLoading({
            ...loading,
            SignIn: false, 
            SignUp: false, 
          });
        });
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://m.media-amazon.com/images/I/31epF-8N9LL.png"
          alt="Amazon-Logo"
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign-in</h1>
        <form action="">
          <div>
            <label htmlFor="">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="Password"
              id="Password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="Sign in"
            className={classes.login_signInbutton}
          >
            {loading.SignIn ? (
              <ClipLoader color="#000" size={15} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        <p>
          By sign in you are agree to the AMAZOn FAKE CLONE. conditions of use &
          sale. Please see our privacy Notice, our cookies notice and our
          interest based Ads Notice.
        </p>
        {/* Create account btn */}
        <button
          type="submit"
          onClick={authHandler}
          name="Sign up"
          className={classes.login_registerbotton}
        >
          {loading.SignUp ? (
            <ClipLoader color="#000" size={15}/>
          ) : (
            "  Create Your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
