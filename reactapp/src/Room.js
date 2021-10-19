import React from 'react';
import './Room.css';
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
            <button id="edit"><img src="https://raw.githubusercontent.com/iamneo-production/04ce0a0f-3990-44c2-8a4b-dd93d4d5affe/ui/reactapp/src/icons8-edit-35%20(2).png" alt="my image"  /></button>
            <button id="delete"><img src="https://raw.githubusercontent.com/iamneo-production/04ce0a0f-3990-44c2-8a4b-dd93d4d5affe/ui/reactapp/src/icons8-delete-35.png" alt="my image"/></button>
            </div>

            <div class="price">
                  <p >Price</p>
            </div>
            </div>
        </div>
    );

}

export default Room;