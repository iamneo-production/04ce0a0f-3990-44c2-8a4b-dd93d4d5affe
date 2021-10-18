import React from 'react';
import './AdminEditRoom.css';
function AdminEditRoom(){
    return(
        <div className="editRoomBox">
            <form className="edit">
            <table className="t" align="center"  width="30%" bgcolor="#F5F1F1" cellSpacing="20">
                <table width="40%" cellSpacing="1"> 
                 <tr> <input className="back"  type="button" value="< back"/><br/></tr>   
                 <tr><br/><label className="rno">Room No</label><br/><input className="roomNo" placeholder="Enter Room No" type="text"/><br/></tr>
                 <tr><br/><br/><label className="rp">Room Price</label><br/><input className="roomPrice" placeholder="Enter Room Price" type="text"/><br/></tr>
                 <tr><br/><br/><label className="rt">Room Type</label><br/><input className="roomType" placeholder="Enter Room Type" type="text"/><br/></tr>
                 <br/><br/>
                      <input className="editRoomButton"  type="button" value="Save Change"/>
                </table>
             </table>
            </form>
        </div>
    );

}

export default AdminEditRoom;
