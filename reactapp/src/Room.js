import React from 'react';
import './room.css';
import Edit from './icons8-edit-35 (2).png';
import Delete from './icons8-delete-35.png';
function Room(){
    return (
        <div class="room">
            <div class="status">
            <p >Available</p>
            </div>
            
            <div class="details"> 
            <div class="roomno">
            <p >Room No:</p>
            </div>
            <div id="smaple">
            <span >Type: </span>
            <button id="edit"><img src={Edit} alt="my image"  /></button>
            <button id="delete"><img src={Delete} alt="my image"/></button>
            </div>

            <div class="price">
                  <p >Price</p>
            </div>
            </div>
        </div>
    );

}

export default Room;