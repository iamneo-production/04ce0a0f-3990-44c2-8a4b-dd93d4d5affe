import React from 'react';
import './UserRoomDetails.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './components/UserSide/UserNavbar/UserNavbar.css'
import { useHistory } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

function UserRoomDetails(props){
    const history = useHistory();
    const baseURL = localStorage.getItem("baseURL");
    const [room,setRoom]=useState({});
    
    useEffect(()=>{
        axios.post(baseURL+'/user/roomsDetails?id='+props.match.params.roomId)
        .then(response => {
            setRoom(response.data);
        })
        .catch(error => {
            console.log('There was an error!', error);      
        });
      },[])

    function logout(){
        localStorage.clear();
        sessionStorage.clear();
        history.push("/login");
    }

    function bookRoom(){
        let data={"roomId":props.match.params.roomId,"email":localStorage.getItem("userEmail")};
        console.log(data);
        axios.post(baseURL+'/user/bookRoom',data)
        .then(response => {
            console.log(response.data);
            history.push("/user/bookings/"+response.data.userId);
        })
        .catch(error => {
            console.log('There was an error!', error);      
        });
    }

    return(
                <div>
                   
                <div class="v27_185" id="roomBookingPage">
                    <div class="v27_171"></div>
                    <div class="v27_184">
                        <div class="v27_172"></div>
                        <div class="v27_173"></div>
                        <div class="v27_178"></div>
                        <div class="v27_179"></div>
                    </div>
                </div>
                <div class="v27_194"><span class="v27_186">Room No    :  {room.roomNo}</span><span class="v27_187">Price            :  Rs. {room.price} </span><span class="v27_188">Type            :  {room.type} </span><span class="v27_189">
                {/* <button class="book-button">Book the Room</button> */}
                {room.status==="BOOKED"?<button class="book-button-not" disabled>Already Booked :(</button>:<button onClick={bookRoom} class="book-button">Book the Room</button>}
                </span>
                    
                </div> 
                </div>   
                
            
    );
}

export default withRouter(UserRoomDetails);