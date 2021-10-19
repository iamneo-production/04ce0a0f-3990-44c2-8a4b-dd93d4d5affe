import React from 'react';
import './AdminAddRoom.css';

import { useHistory } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
function AdminAddRoom(){
    const baseURL = localStorage.getItem("baseURL");
    const [roomNo,setRoomNo]=useState("");
    const [price,setPrice]=useState("");
    const [type,setType]=useState("");
    
    const history = useHistory();
    function addRoom(){
        let data={roomNo,price,type};
        axios.post(baseURL+'/admin/addRoom?id='+localStorage.getItem("adminId"),data)
        .then(response => {
            console.log(response.data);
            history.push("/admin/dashboard");
        })
        .catch(error => {
            console.log('There was an error!', error);      
        });
    }
    return(
        <center>
        <div className="addRoomBox" id="addRoomBox">
            <form className="edit">
            <table className="t" align="center"  width="30%" bgcolor="#F5F1F1" cellSpacing="20">
                <table width="40%" cellSpacing="1"> 
                 <tr> <input className="back"  type="button" value="< back"/><br/></tr>   
                 <tr><br/><label className="rno">Room No</label><br/><input className="roomNo" id="roomNo" placeholder="Enter Room No" type="text" value={roomNo} onChange={(e)=>{setRoomNo(e.target.value)}}/><br/></tr>
                 <tr><br/><br/><label className="rp">Room Price</label><br/><input className="roomPrice" id="roomPrice"  placeholder="Enter Room Price" type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} /><br/></tr>
                 <tr><br/><br/><label className="rt">Room Type</label><br/><input className="roomType" id="roomType" placeholder="Enter Room Type" type="text" value={type} onChange={(e)=>{setType(e.target.value)}} /><br/></tr>
                 <br/><br/>
                      <input onClick={addRoom} className="addRoomButton" id="addRoomButton"  type="button" value="Add Room"/>
                </table>
             </table>
            </form>
        </div>
        </center>
    );

}

export default AdminAddRoom;