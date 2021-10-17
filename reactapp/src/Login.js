import { useState } from "react";
import "./Login.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

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
                    <input id='email' type="text"  placeholder="    Email"/>
                </div>
                <br/>
                <div class="password" >
                    <input id='password' type="password" placeholder="    Password"/>
                </div>
                <br/>
                <div class="form-row" >
                    <button id='submitButton' class="btn" >Submit </button>
                </div>
                <br/>
                <div class='userSignupLink' >
                    <p id='userSignupLink'>New to Booking?<a href="http://localhost:4200/login">Click Here</a></p>
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
                    <button id='submitButton' class="btn">Submit </button>
                </div>
                <br/>
                <div class='userSignupLink' >
                    <p id='userSignupLink'>New to Booking?<a href="http://localhost:4200/login">Click Here</a></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;