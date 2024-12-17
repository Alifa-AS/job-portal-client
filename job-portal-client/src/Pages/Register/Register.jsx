import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import registerLottieData from '../../assets/Lottie/register.json'
import { useContext, useState } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";


const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if(password.length < 6){
      setErrorMessage('password should be 6 character or more');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setErrorMessage("Password must include at least one uppercase letter");
      return;
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      setErrorMessage("Password must include at least one lowercase letter");
      return;
    }

    //call create user
    createUser(email,password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.log(error.message, errorMessage)
    })
  };

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={registerLottieData} />
          </div> 
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-3xl font-bold text-center">Register now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div>
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-green-500 underline font-bold">
                    {" "}Sign In{" "}
                  </Link>
                  Now!
                </p>
              </div>
            </form>
              <SocialLogin />    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
