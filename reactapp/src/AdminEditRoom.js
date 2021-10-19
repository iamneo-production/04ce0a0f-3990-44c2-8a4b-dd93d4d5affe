import React, {useEffect, useState} from 'react';
import './AdminEditRoom.css';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AdminEditRoom(props){
    // props.match.params.roomId
    const [room,setRoom]=useState();
    const [roomNo,setRoomNo]=useState("");
    const [price,setPrice]=useState("");
    const [type,setType]=useState("");
    const baseURL = localStorage.getItem("baseURL");
    const [admin,setAdmin] = useState("");
    const history = useHistory();
    // onChange={(e)=>{setEmail(e.target.value)}}

    useEffect(()=>{
        setAdmin(localStorage.getItem("adminId"));
        
        axios.get(baseURL+'/admin/getroom?id='+props.match.params.roomId)
        .then(response => {
            setRoom(response.data);
            setPrice(response.data.price);
            setRoomNo(response.data.roomNo);
            setType(response.data.type);
            console.log(localStorage.getItem("adminId"));
        })
        .catch(error => {
            console.log('There was an error!', error);      
        });
      },[])

    function goToDashboard(){
        history.push('/admin/dashboard')
    }
    function saveChanges(){
        let adminId = {"id":localStorage.getItem("adminId")};
        let data = {"admin":adminId, "id":props.match.params.roomId, "roomNo":roomNo,"type":type, "price":price};
        console.log(data);
        axios.post(baseURL+'/admin/editRoom',data)
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
        <div className="editRoomBox" id="editRoomBox">
            <form className="edit">
            <table className="t" align="center"  width="30%" bgcolor="#F5F1F1" cellSpacing="20">
                <table width="40%" cellSpacing="1"> 
                 <tr> <input className="back"  type="button" onClick={goToDashboard} value="< back"/><br/></tr>   
                 <tr><br/><label className="rno">Room No</label><br/><input className="roomNo" id="roomNo" placeholder="Enter Room No" value={roomNo} onChange={(e)=>{setRoomNo(e.target.value)}} type="text"/><br/></tr>
                 <tr><br/><br/><label className="rp">Room Price</label><br/><input className="roomPrice" id="roomPrice" placeholder="Enter Room Price" value={price} onChange={(e)=>{setPrice(e.target.value)}} type="text"/><br/></tr>
                 <tr><br/><br/><label className="rt">Room Type</label><br/><input className="roomType" id="roomType" placeholder="Enter Room Type" value={type} onChange={(e)=>{setType(e.target.value)}} type="text"/><br/></tr>
                 <br/><br/>
                      <input onClick={saveChanges} className="editRoomButton"  id="editRoomButton" type="button" value="Save Change"/>
                </table>
             </table>
            </form>
        </div>
        </center>
    );

}

export default withRouter(AdminEditRoom);
