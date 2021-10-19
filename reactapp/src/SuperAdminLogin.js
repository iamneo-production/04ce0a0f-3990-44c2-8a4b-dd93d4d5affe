import React from 'react';
import "./SuperAdminLogin.css";
import { useHistory } from 'react-router-dom';
 function SuperAdminLogin(){

  return (
    

      <div id="main">
          <h2> Super Admin </h2>
          <div className="login">
                    <br/>
                    <br/>
                    <input id='email' type="text"  placeholder="  Enter Super Admin Email" />
              
                <br/>
                <br/>
                <br/>
                    <input id='password' type="password" placeholder="  Enter Password" />
                <br/>
                <br/>
                <div className="form-row" >
                    <button id='submitButton' className="btn" >Submit </button>
                </div>
            </div>
            </div>
       
  );
}

export default SuperAdminLogin;