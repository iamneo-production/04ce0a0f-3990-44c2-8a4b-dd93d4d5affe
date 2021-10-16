import React from 'react';
import './EditProfile.css';
function Editprofile(){
    return(
        <div className="editProfileBox">
            <form className="edit">
            <table className="t" align="center"  width="30%" bgcolor="#F5F1F1" cellSpacing="20">
                <table width="40%" cellSpacing="1"> 
                 <tr> <input className="back"  type="button" value="< back"/><br/></tr>   
                 <tr><br/><label className="Name">Name</label><br/><input className="username" placeholder="Enter Name" type="text"/><br/></tr>
                 <tr><br/><br/><label className="Mail">Email</label><br/><input className="email" placeholder="Enter Mail" type="text"/><br/></tr>
                 <tr><br/><br/><label className="Pwd">Password</label><br/><input className="password" placeholder="Enter Password" type="password"/><br/></tr>
                 <tr><br/><br/><label className="Age">Age</label><br/><input className="userAge" placeholder="Enter Age" type="text"/><br/></tr>
                 <tr><br/><br/><label className="Number">Mobile Number</label><br/><input className="mobilenumber" placeholder="Enter Number" type="text"/><br/></tr>
                 <br/><br/><br/>
                      <input className="editProfileButton"  type="button" value="Save Changes"/>
                </table>
             </table>
            </form>
        </div>
    );

}

export default Editprofile
