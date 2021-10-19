import React from 'react';
import './AdminProfile.css';
function AdminProfile(){
    return(
        <div class="x">
        
        <div class="main">
        <div class="sub1">
           <p>Name : </p>
           <p>Email : </p>
           <p>Mobile no :</p>
           <p>password : </p>
        </div>
        <div class="sub2">
          <p>Hotel Name : </p>
          <p>Hotel Address: </p>  
        </div>
        </div>
        <div class="editprofile">
        <input type="image" src="profilepic.png"/>
        <br/>
        <button>edit profile</button>x
        </div>
     </div>
    );

}

export default AdminProfile;