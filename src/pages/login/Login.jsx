import "./login.scss";
import loginImage from "../../assets/supermarket.jpg"
import googleImg from "../../assets/icons8-google.svg"
import logo from "../../assets/logo.svg"
import React , {useState} from 'react';
// Import your CSS file for styling


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const handleLogin =(e)=>{
    e.preventDefault();
  }
  
  return (
    <div className="w-full h-screen flex item-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[25%] left-[10%] flex flex-col">
          <h1 className="text-6xl text-white font-bold mb-8">Welcome to expiReminder</h1>
          <p className="text-xl text-[#f5f5f5] font-normal">Your trusted partner in managing product expirations effortlessly</p>
          <p className="text-xl text-[#f5f5f5]  font-normal">We understand that keeping track of product lifespans can be challenging, but with expiReminder, you're in control.
          Say goodbye to wasted groceries and expired goods. It's time to start your journey towards a smarter, more organized life. </p>
        </div>
        <img src={loginImage} alt="Login" className="w-full h-full object-cover"/>
      </div>

      {/* Login Form */}
      <form className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-10 justify-between items-center">
        <div className="flex mb-4 items-center justify-center"><img src={logo} alt="logo" className="h-20 w-20"/><h1 className="text-3xl text-[#131a4e] font-bold">expiReminder</h1></div>

        <div className="w-full flex flex-col max-w-[500px]">
          <div className="flex flex-col w-full mb-2">
            <h3 className="text-4xl font-semibold mb-2">Login</h3>
            <p className="text-sm mb-2">Welcome back! Please enter your details</p>
          </div>

          <div className="w-full flex flex-col">
            {error && <span>Wrong Email or Password!</span>}
            <input 
            type="email"
            placeholder="Email"
            name={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full py-2 text-black bg-transparent my-2 border-b border-black outline-none focus:outline-none" />

            <input 
            type="password"
            placeholder="Password"
            name={password}
            onchange={(e)=>setPassword(e.target.value)}
            className="w-full py-2 text-black bg-transparent my-4 border-b border-black outline-none focus:outline-none" />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" name="" className="w-4 h-4 mr-2"/>
              <p className="text-sm">Remember me</p>
            </div>

            <p className="text-sm font-bold whitespace-nowrap cursor-pointer underline hover:text-[#FF7F00] underline-offset-2">Forgot Password</p>
          </div>

          <div className="w-full flex flex-col my-4">
            <button onSubmit={handleLogin}className="w-full my-2 bg-[#131a4e] rounded-md p-4 text-center font-semibold hover:bg-[#FF7F00] text-white">Log in</button>
          </div>

          <div className="w-full flex justify-center items-center relative py-2">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-xl absolute text-black/80 bg-[#f5f5f5]">or</p>
          </div>

          <div className="w-full my-2 bg-[white] flex items-center justify-center rounded-md p-4 hover:text-[#FF7F00] text-center font-semibold border border-[darkBlue]/10 text-[darkBlue] cursor-pointer">
            <img src={googleImg} alt="google-icon" className="mr-2 h-6"/>
            Sign In with google</div>
          
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[darkBlue]">Don't have an account? <span className="underline font-semibold hover:text-[#FF7F00] cursor-pointer underline-offset-2">Sign up for free</span></p>
        </div>
        
        

      </form>
    </div>
   
  );
}

export default Login;
