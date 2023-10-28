import "./signup.scss";
import logo from "../../assets/logo.svg"
import React, {useState} from 'react'

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const handleRegister =(e)=>{
    e.preventDefault();
  }
  
     return ( 
         <div className="body">
               
               <div className="card">
                    <div className="left">
                         <div className="flex mb-8 items-center justify-center"><img src={logo} alt="logo" className="h-20 w-20"/><h2 className="text-3xl text-[#131a4e] font-bold">expiReminder</h2></div>
                         <h1>Welcome to ExpiReminder: Your Expiration Date Guardian</h1>
                         <p>Unlock a world of proactive product safety and expiration tracking with ExpiReminder. At ExpiReminder, we understand the importance of keeping your products safe, your family healthy, and your business efficient.</p>
                         <h1>Why Register with ExpiReminder?</h1>
                         <p>ExpiReminder is more than just a tool; it's your guardian against waste and safety risks. By registering with us, you gain exclusive access to a range of features designed to make your life easier and safer:</p>
                    </div>

                    <form action="" onSubmit={handleRegister}>

                         <h1>Get started</h1>
                         <p>Signing up takes only a few seconds. It's the first step towards a safer, more organized life.</p>

                         <div>
                              <label for="name">Name</label>
                              <input type="text"
                              placeholder="UserName"
                              name={name}
                              onChange={(e)=>setName(e.target.value)} />
                         </div>

                         <div>
                              <label for="email">Email</label>
                              <input type="email"
                              placeholder="@example.com"
                              name={email}
                              onChange={(e)=>setEmail(e.target.value)} />
                         </div>

                         <div>
                              <label for="email">Password</label>
                              <input type="password" 
                              placeholder="Password"
                              name={password}
                              onChange={(e)=>setPassword(e.target.value)}/>
                         </div>
                         <button type="submit">Create Account</button>

                         {/* <h3>Join the ExpiReminder Community Today!</h3> */}
                         <small>ExpiReminder is trusted by thousands of users worldwide, and our commitment to your privacy and data security is unwavering.</small>
                    </form>
               </div>
         
         </div>
      );
}
 
export default Signup;