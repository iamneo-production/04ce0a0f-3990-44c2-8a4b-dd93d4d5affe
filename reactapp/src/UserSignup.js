import { useState } from "react";
import axios from 'axios';
import React from "react";
import './AdminSignup.css';
import { useHistory } from 'react-router-dom';

function UserSignup() {
    const baseURL = localStorage.getItem("baseURL");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [mobileNumber,setMobileNumber]=useState("");
    const [userRole,setUserRole]=useState("user");
    const [userName,setUserName]=useState("");
    const [age,setAge]=useState(0);
    const history = useHistory();

    function sendUserDetails(){
        
        let data={email,password,mobileNumber,userRole,userName,age}
        console.log("data:",data);

        axios.post(baseURL+'/user/signup', data)
        .then(response => {
            history.push("/login");
        })
        .catch(error => {
            console.log('There was an error!', error);
            alert("Please enter valid details!");       
        });
    }
    
    
   return(
        
        <center>
           <div class="card text-center" id="signupBox">
               <br />
               <h2> SIGN UP</h2>
               <br />
               <input type="email" id="email" name="email" placeholder="  Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> 
               <br/>
                <br />
                <input type="Password" id="password" name="password" placeholder="  Enter Password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/> 
                <br/>
                <br />
                <input type="tel" name="phone" size="10" pattern="[1-9]{1}[0-9]{9}" placeholder="   Enter Mobile Number" id="mobilenumber" value={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}}/>
                <br />
                <br />
                <select id="userrole">
                    <option value="user" >user</option>
                    <option value="admin">admin</option>
                </select>
                <br />
                <br />
                <input type="text" name="Username" size="15" id="username" placeholder="  Enter Username" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/> 
                <br/><br/>
                <input type="number" name="age" min="20" id="age" placeholder="  Enter Age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                <br/><br/>
                <button type="button" value="Submit" id="submitButton" class="btn btn-danger"  onClick={sendUserDetails}>Submit</button>
                <br />
                <small>Go to Login<a href="/login" id="loginlink">Click Here</a></small>
            </div>
        </center>

    )
}
export default UserSignup;




