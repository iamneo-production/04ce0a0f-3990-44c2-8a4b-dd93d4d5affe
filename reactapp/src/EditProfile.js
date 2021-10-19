import React from 'react';
import './EditProfile.css';
function Editprofile(){
    return(
        
        <div class="card text-center" id="signupBox">
               <input type="button" class="back" value="< back"/>
            <label>Name</label>
            <input type="text" class="second" name="Name" size="15" id="adminname" placeholder="  Enter Admin Name" /> 
             <br/><br/>
             <label>Email</label>
            <input type="email" class="second" id="email" name="Email" placeholder="  Enter Email" /> 
            <br/>
             <br />
             <label>Password</label>
             <input type="Password"class="second"  id="password" name="Password" placeholder="  Enter Password" id="password" /> 
             <br/>
             <br/>
             <label>Age</label>
             <input type="text"class="second"  name="Age" size="3" id="hotelAddress" placeholder="  Enter Hotel Address" /> 
             <br/>
             <br/>
             <label>Mobile Number</label>
             <input type="tel" class="second" name="mobilenumber" size="10" pattern="[1-9]{1}[0-9]{9}" placeholder="   Enter Mobile Number" id="mobilenumber" />
             <br/>
             <br/>
             <button class="btn btn-danger" >Save Changes</button>
             </div>
    );

}

export default Editprofile
