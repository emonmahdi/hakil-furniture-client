import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider'

const SocialLogin = () => {
  const {user, googleSignIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';


  const handleGoogleLogin =() => {
    googleSignIn(user)
    .then(result => {
      const googleUser = result?.user;
      console.log(googleUser);
      if(googleUser){
        navigate(from,{replace: true}); 
      }
    }).catch(error => {
      console.log(error.message);
    })
  }

  return (
    <div className='text-center'>
      <button onClick={handleGoogleLogin} className='btn btn-md w-full border-2 border-primary  rounded-full text-primary hover:bg-primary hover:text-white my-2'>Login with Google</button>
      <button className='btn btn-md w-full border-2 border-primary  rounded-full text-primary hover:bg-primary hover:text-white my-2'>Login with Facebook</button>
    </div>
  )
}

export default SocialLogin
