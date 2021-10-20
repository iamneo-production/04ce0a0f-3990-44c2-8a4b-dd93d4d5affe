import React, {useEffect, useState} from 'react';
import './AdminProfileEdit.css';

import {withRouter} from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
function AdminProfileEdit(props){
    const baseURL = localStorage.getItem("baseURL");
    const history = useHistory();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobileNumber,setMobileNumber] = useState("");
    const [password,setPassword] = useState("");
    const [hotelName,setHotelName] = useState("");
    const [hotelAdress,setHotelAddress] = useState("");
    const [adminData,setAdminData] = useState({});

    useEffect(()=>{
        
        
        axios.get(baseURL+'/admin/editProfile?id='+props.match.params.adminId)
        .then(response => {
            setAdminData(response.data);
            setName(response.data.sellerName);
            setEmail(response.data.email);
            setMobileNumber(response.data.mobileNumber);
            setPassword(response.data.password);
            setHotelName(response.data.hotelName);
            setHotelAddress(response.data.hotelAddress);
            console.log(response.data);
        })
        .catch(error => {
            console.log('There was an error!', error);      
        });
      },[])


    function saveChanges(){
        let data = {
            "earnings": adminData.earnings,
            "email": email,
            "hotelAddress": hotelAdress,
            "hotelImageURL": adminData.hotelImageURL,
            "hotelName": hotelName,
            "id": Number(props.match.params.adminId),
            "mobileNumber": mobileNumber,
            "password": password,
            "sellerName": name,
            "userRole": adminData.userRole
          };
        console.log(data);
         axios.post(baseURL+'/admin/editProfile',data)
        .then(response => {
            history.push("/admin/dashboard");
        })
        .catch(error => {
            console.log('There was an error!', error);      
        });
      

    }  
    function goBack(){
        history.push("/admin/profile")
    }
    return(
        <center>
        <div className="adminEditBox" id="adminEditBox">
            <form className="edit">
            <table className="t" align="center"  width="30%" bgcolor="#F5F1F1" cellSpacing="20">
                <table width="40%" cellSpacing="1"> 
                 <tr> <input className="back"  type="button" value="< back" onClick={goBack}/><br/></tr>   
                 <tr><br/><label className="Name">Name</label><br/><input value={name} onChange={(e)=>{setName(e.target.value)}} className="adminName" id="adminName" placeholder="Enter Name" type="text"/><br/></tr>
                 <tr><br/><br/><label className="Mail">Email</label><br/><input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="adminEmail" id="adminEmail" placeholder="Enter Mail" type="text"/><br/></tr>
                 <tr><br/><br/><label className="Number">Mobile Number</label><br/><input value={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}} className="adminMobileNumber" id="adminMobileNumber" placeholder="Enter Number" type="text"/><br/></tr>
                 <tr><br/><br/><label className="Pwd">Password</label><br/><input value={password} onChange={(e)=>{setPassword(e.target.value)}} className="adminPassword" id="adminPassword" placeholder="Enter Password" type="password"/><br/></tr>
                 <tr><br/><br/><label className="hotelname">Hotel Name</label><br/><input value={hotelName} onChange={(e)=>{setHotelName(e.target.value)}} className="hotelName" id="hotelName" placeholder="Enter Hotel Name" type="text"/><br/></tr>
                 <tr><br/><br/><label className="hoteladdress">Hotel Address</label><br/><input value={hotelAdress} onChange={(e)=>{setHotelAddress(e.target.value)}} className="hotelAddress" id="hotelAddress" placeholder="Enter Hotel Address" type="text"/><br/></tr>
                 <br/><br/>
                      <input onClick={saveChanges} className="profileEditButton" id="profileEditButton"  type="button" value="Save Changes"/>
                </table>
             </table>
            </form>
        </div>
        </center>
    );

}

export default withRouter(AdminProfileEdit);
