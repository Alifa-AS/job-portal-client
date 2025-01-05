import Lottie from "lottie-react";
import signInLottieData from '../../assets/Lottie/signin.json'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('in login page', location)
    const from = location.state || '/';

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signInUser(email, password)
        .then(result =>{
          console.log(result.user)
          navigate(from);
        })
        .catch(error =>{
          console.log(error.message)
        })
    }

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left W-80">
            <Lottie animationData={signInLottieData} />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-4xl font-bold text-center">Sign In now!</h1>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
              <p>Don't have any account? <Link to="/register" 
              className="text-red-600 underline font-bold"> Register </Link>Now!</p>
            </form>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
