import { useState } from "react";
import axios from 'axios';
import "./Login.css";
import { useHistory } from 'react-router-dom';

function Tabs() {
  const baseURL = localStorage.getItem("baseURL");
  const userSignup = baseURL+'/user/signup';
  const adminSignup = baseURL+'/admin/signup';
  const [toggleState, setToggleState] = useState(1);
  const history = useHistory();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  function validateCredentials()
  {
    let data={email,password}
    console.log("data:",data);

    axios.post(baseURL+'/user/login', data)
    .then(response => {
      if(response.data) history.push("/user/bookings")
      else alert("Please Enter Correct Password!")
    })
    .catch(error => {
        console.log('There was an error!', error);
        alert("Please Enter Valid Email Address!");       
    });
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body:JSON.stringify(data)
  // };
  // fetch(baseURL+"/user/login", requestOptions).then((resp)=>{
  //     console.log("resp",resp);
  //     resp.json().then((result)=>{
  //       console.log("result",result)
  //     })
  //   })
  }

  const toggleTab = (index) => {
    setToggleState(index);
  };


  return (
    <div className="loginbox">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs userTabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
         USER
        </button>
        <button
          className={toggleState === 2 ? "tabs userTabs" : "tabs"}
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
          <h2>USER LOGIN</h2>
          <div class="login">
                <div class="email" >
                    <br/>
                    <input id='email' type="text"  placeholder="    Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <br/>
                <div class="password" >
                    <input id='password' type="password" placeholder="    Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <br/>
                <div class="form-row" >
                    <button id='submitButton' class="btn" onClick={validateCredentials}>Submit </button>
                </div>
                <br/>
                <div class='userSignupLink' >
                    <p id='userSignupLink'>New to Booking?<a href={userSignup}>Click Here</a></p>
                </div>  
            </div>
        </div>

        <div
        id='adminTab' 
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
           <h2>ADMIN LOGIN</h2>         
          <div class="login">
                <div class="email" >
                    {/* <label for="">Email</label> */}
                    <br/>
                    <input id='email' type="text" placeholder="    Email"/>
                </div>
                <br/>
                <div class="password" >
                    <input id='password' type="password" placeholder="    Password"/>
                </div>
                <br/>
                <div class="form-row" >
                    <button id='submitButton' class="btn" onClick={validateCredentials}>Submit </button>
                </div>
                <br/>
                <div class='userSignupLink' >
                    <p id='userSignupLink'>New to Booking?<a href={adminSignup}>Click Here</a></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;