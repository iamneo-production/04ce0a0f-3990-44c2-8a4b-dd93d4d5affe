import {useState} from 'react';
import axios from 'axios';
import "./Login.css";
import { useHistory } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Tabs() {
  const baseURL = localStorage.getItem("baseURL");
  const userSignup = baseURL+'/user/signup';
  const adminSignup = baseURL+'/admin/signup';
  const [toggleState, setToggleState] = useState(1);
  const history = useHistory();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  function validateUserCredentials()
  {
    let data={email,password}
    console.log("data:",data);
    localStorage.setItem("userEmail",email);
    
    
      axios.post(baseURL+'/user/login', data)
      .then(response => {
        if(response.data) history.push("/user/dashboard")
        else alert("Please Enter Correct Password!")
      })
      .catch(error => {
          console.log('There was an error!', error);
         
          alert("Please Enter Valid Email Address!");   
          window.location.reload();
      });
    
  
  }

  function validateAdminCredentials()
  {
    let data={email,password}
    console.log("data:",data);
    localStorage.setItem("adminEmail",email);
    axios.post(baseURL+'/admin/login', data)
    .then(response => {
      if(response.data) history.push("/admin/dashboard")
      else alert("Please Enter Correct Password!")
    })
    .catch(error => {
        console.log('There was an error!', error);
        alert("Please Enter Valid Email Address!");  
        window.location.reload();     
    });
  
  }

  function gotouserSignup(){
    history.push("/user/signup");
  }
  function gotoadminSignup(){
    history.push("/admin/signup");
  }

  const toggleTab = (index) => {
    setToggleState(index);
  };


  return (
    <div className="loginbox">
      <div className="bloc-tabs">
      <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
         USER
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
        ADMIN
        </button>
      </div>

      <div className="content-tabs">
        <div
            id='userTab' 
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2> LOGIN</h2>
          <div className="login">
                    <br/>
                    <br/>
                    <input id='email' type="text"  placeholder="  Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              
                <br/>
                <br/>
                <br/>
                    <input id='password' type="password" placeholder="  Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            
                <br/>
                <br/>
                <div className="form-row" >
                    <button id='submitButton' className="btn" onClick={validateUserCredentials}>Submit </button>
                </div>
                <br/>
                <div className='userSignupLink' >
                    <p id='userSignupLink'>New to Booking? <Link to="/user/signup">Click Here</Link></p>
                </div>  
            </div>
        </div>

        <div
        id='adminTab' 
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
           <h2>LOGIN</h2>         
          <div className="login">
          <br/>
          <br/>
                    <input id='email' type="text" placeholder="  Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
  
                <br/>
                <br/>
                <br/>
                    <input id='password' type="password" placeholder="  Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          
                <br/>
                <br/>
                <div className="form-row" >
                    <button id='submitButton' className="btn" onClick={validateAdminCredentials}>Submit </button>
                </div>
                <br/>
                <div className='userSignupLink' >
                    <p id='adminSignupLink'>New to Booking? <Link to="/admin/signup">Click Here</Link></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;