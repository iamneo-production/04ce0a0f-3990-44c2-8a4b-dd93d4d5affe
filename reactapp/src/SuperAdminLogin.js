import { useState } from "react";
import axios from 'axios';
import React from "react";
import { useHistory } from 'react-router-dom';
import './AdminSignup.css';

function SuperAdminLogin() {
    const baseURL = localStorage.getItem("baseURL");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const history = useHistory();

    function validateAdminDetails(){
        
        let data={email,password}
        console.log("data:",data);

        axios.post(baseURL+'/super/login', data)
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
        <br/><br/><br/><br/><br/><br/><br/>
    <div className="editRoomBox" id="superAdminLoginBox">
            <form className="edit">
            <table className="t" align="center"  width="30%" bgcolor="#F5F1F1" cellSpacing="20">
                <center><h2 >Super Admin</h2></center>
                <br/><br/>
                <table width="40%" cellSpacing="1">
                 <tr></tr>
                 <tr><input className="roomNo" placeholder="Enter Super Admin Email" type="email" id="email" /><br/></tr>
                 <tr><br/><br/><input className="roomPrice" placeholder="Enter Password" type="password" id="password" /><br/></tr>
                 <br/><br/>
                      <input className="editRoomButton"  type="button" value="Submit" id="submitButton"/>
                </table>
             </table>
            </form>
        </div>
    </center>

    )
}
export default SuperAdminLogin;




