import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect_url = location.state?.from || "/home";

  const googleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(redirect_url, { replace: true });
    });
  };
  
  return (
    <div className="text-center container mt-5">
      <h1>Login with Google</h1>
      <button className="btn btn-primary" onClick={googleSignIn}>Google signin</button>
    </div>
  );
};

export default Login;
