import React from "react";
import './AdminSignup.css';
function AdminSignup() {
   return(
        
        <center>
           <div class="card text-center" id="signupBox">
               <br />
               <h2> SIGN UP</h2>
               <br />
               <input type="email" id="email" name="email" placeholder="  Enter Email" /> 
               <br/>
                <br />
                <input type="Password" id="password" name="password" placeholder="  Enter Password" id="password" /> 
                <br/>
                <br />
                <input type="tel" name="phone" size="10" pattern="[1-9]{1}[0-9]{9}" placeholder="   Enter Mobile Number" id="mobilenumber" />
                <br />
                <br />
                <select id="userrole">
                    <option value="  User">  User</option>
                    <option value="  admin">  admin</option>
                </select>
                <br />
                <br />
                <input type="text" name="Username" size="15" id="username" placeholder="  Enter Username" /> 
                <br/><br/>
                <input type="number" name="age" min="20" id="age" placeholder="  Enter Age" />
                <br/><br/>
                <button type="button" value="Submit" id="submitButton" class="btn btn-danger">Submit</button>
                <br />
                <small>Go to Login<a href="#" id="loginlink">Click Here</a></small>
            </div>
        </center>

    )
}
export default AdminSignup;




