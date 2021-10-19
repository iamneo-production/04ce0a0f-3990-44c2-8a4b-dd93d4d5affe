import React from 'react';
import './Room.css';
import { useHistory } from 'react-router-dom';
function Room(props){
    const history = useHistory();
    function editClicked(){
        console.log("edit");
        history.push('/admin/editRoom/'+props.room.id)
    }
    function deleteClicked(){
        console.log("delete");
    }
    return (
        <div class="room">
            <div class={props.room.status}><p >{props.room.status}</p></div>
            {/* {props.status==="BOOKED"?<div class="status"><p >{props.room.status}</p></div>:<div class="non-status"><p >{props.room.status}</p></div>} */}
            
            
            <div class="details"> 
            <div class="roomno">
            <p >Room No: {props.room.roomNo}</p>
            </div>
            <div id="smaple">
            <span >Type: {props.room.type}</span>
            <button onClick={editClicked} class="editbutton" id="edit"><img src="https://raw.githubusercontent.com/iamneo-production/04ce0a0f-3990-44c2-8a4b-dd93d4d5affe/ui/reactapp/src/icons8-edit-35%20(2).png" alt="my image"  /></button>
            <button onClick={deleteClicked} class="deletebutton" id="delete"><img src="https://raw.githubusercontent.com/iamneo-production/04ce0a0f-3990-44c2-8a4b-dd93d4d5affe/ui/reactapp/src/icons8-delete-35.png" alt="my image"/></button>
            </div>

            <div class="price">
                  <p >Price: {props.room.price}</p>
            </div>
            </div>
        </div>
    );

}

export default Room;