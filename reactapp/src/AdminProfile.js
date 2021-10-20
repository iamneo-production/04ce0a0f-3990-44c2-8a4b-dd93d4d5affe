import React from 'react';
import './AdminProfile.css';

import {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
function AdminProfile(){
   
   const baseURL = localStorage.getItem("baseURL");
   const [adminData,setAdminData]=useState([]);
   const history = useHistory();
    useEffect(()=>{
      axios.post(baseURL+'/admin/profile?id='+localStorage.getItem("adminId"))
      .then(response => {
          setAdminData(response.data);
          console.log(response.data);
      })
      .catch(error => {
          console.log('There was an error!', error);      
      });
    },[])

    function editProfilePage(){
      history.push("/admin/editProfile/"+localStorage.getItem("adminId"));
    }

    return(
        <div class="x" id="adminProfile">
        
        <div class="main">
        <div class="sub1">
           <p>Name : {adminData.sellerName}</p>
           <p>Email : {adminData.email} </p>
           <p>Mobile no : {adminData.mobileNumber}</p>
           <p>password : {adminData.password}</p>
        </div>
        <div class="sub2">
          <p>Hotel Name : {adminData.hotelName}</p>
          <p>Hotel Address: {adminData.hotelAddress}</p>  
        </div>
        </div>
        <div class="editprofile">
        <center><input width="100px" type="image" src="https://cdn-icons.flaticon.com/png/512/3177/premium/3177440.png?token=exp=1634710666~hmac=38856b65b805d361e8894e2111b60e6c"/>
        </center>
        <br/>
        <button onClick={editProfilePage} class="editAdminProfile" id="editAdminProfile">Edit Profile</button>
        </div>
     </div>
    );

}

export default AdminProfile;