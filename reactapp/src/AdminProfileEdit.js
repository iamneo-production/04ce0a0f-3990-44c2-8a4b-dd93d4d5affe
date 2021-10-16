import React from 'react';
import './AdminProfileEdit.css';
function adminprofileEdit(){
    return(
        <div className="adminEditBox">
            <form className="edit">
            <table className="t" align="center"  width="30%" bgcolor="#F5F1F1" cellSpacing="20">
                <table width="40%" cellSpacing="1"> 
                 <tr> <input className="back"  type="button" value="< back"/><br/></tr>   
                 <tr><br/><label className="Name">Name</label><br/><input className="adminName" placeholder="Enter Name" type="text"/><br/></tr>
                 <tr><br/><br/><label className="Mail">Email</label><br/><input className="adminEmail" placeholder="Enter Mail" type="text"/><br/></tr>
                 <tr><br/><br/><label className="Number">Mobile Number</label><br/><input className="adminMobileNumber" placeholder="Enter Number" type="text"/><br/></tr>
                 <tr><br/><br/><label className="Pwd">Password</label><br/><input className="adminPassword" placeholder="Enter Password" type="password"/><br/></tr>
                 <tr><br/><br/><label className="hotelname">Hotel Name</label><br/><input className="hotelName" placeholder="Enter Hotel Name" type="text"/><br/></tr>
                 <tr><br/><br/><label className="hoteladdress">Hotel Address</label><br/><input className="hotelAddress" placeholder="Enter Hotel Address" type="text"/><br/></tr>
                 <br/><br/>
                      <input className="profileEditButton"  type="button" value="Save Changes"/>
                </table>
             </table>
            </form>
        </div>
    );

}

export default adminprofileEdit;
