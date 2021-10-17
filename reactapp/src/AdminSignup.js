import { useState } from "react";
import axios from 'axios';
import React from "react";
import './AdminSignup.css';
import { useHistory } from 'react-router-dom';

function AdminSignup() {
    const baseURL = localStorage.getItem("baseURL");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [mobileNumber,setMobileNumber]=useState("");
    const [userRole,setUserRole]=useState("admin");
    const [adminName,setAdminName]=useState("");
    const [hotelName,setHotelName]=useState("");
    const [hotelImageURL,setHotelImageURL]=useState("");
    const [hotelAddress,setHotelAddress]=useState("");
       
    
    const history = useHistory();

    function sendAdminDetails(){
        
        let data={email,password,mobileNumber,userRole,adminName,hotelName,hotelImageURL,hotelAddress}
        console.log("data:",data);

        axios.post(baseURL+'/admin/signup', data)
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
                <input type="tel" name="mobilenumber" size="10" pattern="[1-9]{1}[0-9]{9}" placeholder="   Enter Mobile Number" id="mobilenumber" value={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}}/>
                <br />
                <br />
                <select id="userrole">
                    <option value="user" >user</option>
                    <option value="admin">admin</option>
                </select>
                <br />
                <br />
                <input type="text" name="adminname" size="15" id="adminname" placeholder="  Enter Admin Name" value={adminName} onChange={(e)=>{setAdminName(e.target.value)}}/> 
                <br/><br/>
                <input type="text" name="hotelname" size="15" id="hotelname" placeholder="  Enter Hotel Name" value={hotelName} onChange={(e)=>{setHotelName(e.target.value)}}/> 
                <br/><br/>
                <input type="text" name="hotelimageURL" size="15" id="hotelimageURL" placeholder="  Enter Hotel Image URL" value={hotelImageURL} onChange={(e)=>{setHotelImageURL(e.target.value)}}/> 
                <br/><br/>
                <input type="text" name="hotelAddress" size="15" id="hotelAddress" placeholder="  Enter Hotel Address" value={hotelAddress} onChange={(e)=>{setHotelAddress(e.target.value)}}/> 
                <br/><br/>
                <button type="button" value="Submit" id="submitButton" class="btn btn-danger"  onClick={sendAdminDetails}>Submit</button>
                <br />
                <small>Go to Login<a href="/login" id="adminLoginLink">Click Here</a></small>
            </div>
        </center>

    )
}
export default AdminSignup;




