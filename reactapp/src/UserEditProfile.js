import React from 'react';
import './EditProfile.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
function UserEditProfile(props){

   const baseURL = localStorage.getItem("baseURL");
   const [userData,setUserData]=useState({});
   const history = useHistory();
   const [name,setName] = useState("");
   const [email,setEmail] = useState("");
   const [mobileNumber,setMobileNumber] = useState("");
   const [password,setPassword] = useState("");
   const [age,setAge] = useState(0);

    useEffect(()=>{
      axios.get(baseURL+'/user/by?id='+props.match.params.userId)
      .then(response => {
          setUserData(response.data);
          console.log(response.data);
           setName(response.data.userName);
            setEmail(response.data.email);
            setMobileNumber(response.data.mobileNumber);
            setPassword(response.data.password);
            setAge(response.data.age);
      })
      .catch(error => {
          console.log('There was an error!', error);      
      });
    },[])

    function saveChanges(){
        let data = {
            "id":props.match.params.userId,
            "email": email,
            "userName":name,
            "password":password,
            "mobileNumber":mobileNumber,
            "age":age,
            "userRole":"user"
            
          };
        console.log(data);
         axios.post(baseURL+'/user/editProfile',data)
        .then(response => {
            history.push("/user/profile/"+props.match.params.userId);
        })
        .catch(error => {
            console.log('There was an error!', error);      
        });
      

    }

    function goBack(){
        history.push("/user/profile/"+props.match.params.userId);
    }

    return(
        
        <div class="card text-center" id="editProfileBox">
               <button class="back" onClick={goBack}>&lt; back</button>
            <label>Name</label>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" class="second" name="Name" size="15" id="userName" placeholder="  Enter Admin Name" /> 
             <br/><br/>
             <label>Email</label>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" class="second" id="email" name="Email" placeholder="  Enter Email" /> 
            <br/>
             <br />
             <label>Password</label>
             <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="Password"class="second"  id="password" name="Password" placeholder="  Enter Password" id="password" /> 
             <br/>
             <br/>
             <label>Age</label>
             <input value={age} onChange={(e)=>{setAge(e.target.value)}} type="text"class="second"  name="Age" size="3" id="userAge" placeholder="  Enter Hotel Address" /> 
             <br/>
             <br/>
             <label>Mobile Number</label>
             <input value={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}} type="tel" class="second" name="mobilenumber" size="10" pattern="[1-9]{1}[0-9]{9}" placeholder="   Enter Mobile Number" id="mobilenumber" />
             <br/>
             <br/>
             <button class="btn btn-danger" id="editProfileButton" onClick={saveChanges}>Save Changes</button>
             </div>
    );

}

export default withRouter(UserEditProfile);