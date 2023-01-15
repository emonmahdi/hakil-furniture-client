import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";
import Loading from "../../shared/Loading";
import SocialLogin from "./SocialLogin";

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [accountType, setAccountType] = useState('buyer'); 
    const [signUpError, setSignUpError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const navigate = useNavigate();

    const [createUserEmail, setCreateUserEmail] = useState('');
    const [token] = useToken(createUserEmail)

    const {createUser, updateUser, loading} = useContext(AuthContext)

    if(token){
      navigate('/');
    }

    if(loading){
      return <Loading />
    }

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
        name,
        email,
        password,
        rePassword,
        role: accountType
    }
    setSignUpError('');
    if(password === rePassword){ 
    createUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      
      // update user displayName
      const userInfo = {
        displayName: name,
        role: accountType,
      }
      updateUser(userInfo)
      .then(() => {
        savedUser(name, email, userData.role)
        
      })
      .catch(error => {
        console.log(error?.message);
        // setSignUpError(error.message);
      });  
      toast.success('User create successfully!.');
      // reset the form data
      e.target.reset();
    }).catch(error =>{
      console.log(error.message);
      setSignUpError(error.message);
    })
  }else{
    setPasswordError('Password does not match')
  }
    // console.log(userData);
  };

  // Save user the Database
  const savedUser = (name, email, role) => {
    const user = {name, email, role}
    fetch(`http://localhost:5000/users`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      }, 
      body:JSON.stringify(user)
    }).then(res => res.json())
    .then(data => {
      console.log(data); 
      setCreateUserEmail(email)
    })
  }
 


  return (
    <div className="">
      <div className="bg-base-200">
        <div className="min-h-screen flex items-center justify-center py-16">
          <div className="w-full max-w-md p-4 rounded-lg shadow-2xl bg-base-100">
            <h1 className="text-2xl text-center font-bold">Sign Up Here!</h1>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered"
                  />
                </div>
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
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setRePassword(e.target.value)}
                    className="input input-bordered"
                  /> 
                </div>
                { passwordError && <p className="text-red-500">{passwordError}</p>}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Account Type</span>
                     </label>
                  <select onChange={(e) => setAccountType(e.target.value)} className="select select-bordered w-full max-w-md"> 
                    <option>buyer</option>   
                    <option>seller</option>
                  </select>
                </div>
                { signUpError && <p className="text-red-500">{signUpError}</p>}
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="py-2">
                  <p>
                    Already have an account{" "}
                    <Link to="/login" className="text-secondary">
                     Login Account
                    </Link>{" "}
                  </p>
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

export default Register;
