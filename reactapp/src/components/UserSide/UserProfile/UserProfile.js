import React from 'react';
import './UserProfile.css';

import {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

function UserProfile(props){
   
   const baseURL = localStorage.getItem("baseURL");
   const [userData,setUserData]=useState([]);
   const history = useHistory();
    useEffect(()=>{
      axios.get(baseURL+'/user/by?id='+props.match.params.userId)
      .then(response => {
          setUserData(response.data);
          console.log(response.data);
      })
      .catch(error => {
          console.log('There was an error!', error);      
      });
    },[])

    function editProfilePage(){
      history.push("/user/editProfile/"+props.match.params.userId);
    }

    return(
        <div class="x" id="userProfileBody">
        
        <div class="main">
        <div class="sub1">
           <p>Name : {userData.userName}</p>
           <p>Email : {userData.email} </p>
           <p>password : {userData.password}</p>
        </div>
        <div class="sub2">
          <p>Age : {userData.age}</p>
          <p>Mobile Number : {userData.mobileNumber}</p>  
        </div>
        </div>
        <div class="editprofile">
        <input class="image-icon" align="center" type="image" src="https://www.life-refine.com/Login101/avatar.png" width="100px"/>
        <br/>
        <button onClick={editProfilePage} class="editAdminProfile" id="editUserProfile">Edit Profile</button>
        </div>
     </div>
    );

}

export default withRouter(UserProfile);