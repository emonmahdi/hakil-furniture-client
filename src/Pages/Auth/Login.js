import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";
import SocialLogin from "./SocialLogin";

const Login = () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail)

  const from = location.state?.from?.pathname || '/';

  const {singInUser, resetPassword} = useContext(AuthContext)


  if(token){
   return navigate(from, {replace: true});
  }

  // Handle Reset Password
  const handleResetPassword = () => {
    resetPassword(email)
    .then(() => {
      toast.success('Check your Email. Forgot password link')
    }).catch(error => {
      console.log(error.message);
    })
  }


  const handleSubmit = e => {
    e.preventDefault(); 
    setLoginError('');
    singInUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      setLoginUserEmail(email); 
      e.target.reset();
    }).catch(error => {
      console.log(error.message);
      setLoginError(error.message);
    })
  }

  return (
    <div className="">
      <div className="bg-base-200">
        <div className="min-h-screen flex items-center justify-center py-16"> 
          <div className="w-full max-w-md p-4 rounded-lg shadow-2xl bg-base-100">
            <h1 className="text-2xl text-center font-bold">Login now!</h1>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered"
                />
                <label className="label">
                  <p onClick={handleResetPassword} className="label-text-alt link link-hover">
                    Forgot password?
                  </p>
                </label>
              </div>
              <div>
                {loginError && <p className='text-red-600'>{loginError}</p>}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
              <div className="py-2">
                <p>I Don't have any account <Link to='/register' className="text-secondary" >Create new account</Link> </p>
              </div>
              <div className="flex items-center justify-around py-4">
                <div className="w-40 h-1 px-12 bg-gray-300"></div>
                <div>OR</div>
                <div className="w-40 h-1 px-12 bg-gray-300"></div>
              </div>
              </form>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
