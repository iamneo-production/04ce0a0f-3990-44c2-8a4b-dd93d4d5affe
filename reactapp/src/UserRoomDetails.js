import React from 'react';
import './UserRoomDetails.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './UserNavbar.css';
import { useHistory } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

function UserRoomDetails(props){

    const history = useHistory();
    const baseURL = localStorage.getItem("baseURL");
    const [room,setRoom]=useState();
    useEffect(()=>{
        console.log(props);
        console.log(baseURL);
        axios.post(baseURL+'/user/roomsDetails?id='+props.match.params.roomId)
        .then(response => {
            setRoom(response.data)
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
    return(
        <html>

        <head>
            <link href="https://fonts.googleapis.com/css?family=Red+Hat+Text&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Rakkas&display=swap" rel="stylesheet" />
        </head>

        <body>
            <div class="v27_137">
                <div class="v27_193">
                    <div class="v27_191"></div><span class="v27_192">Book the Room</span></div>
                    <div className="Navbar_Hotel" id="userNavbar">
                 <a href='#' className="title"><strong>Rental Rooms</strong></a>
                                <Link to="/user/dashboard" className="dashboard">Dashboard</Link>
                                <Link to="/user/profile" className="profile">Profile</Link>
                                <Link to="/user/booking" className="mybooking">MyBooking</Link>
                                <button onClick={()=>{logout()}} className="UserLogoutButton">Logout</button>       
                    
                </div>
                <div class="v27_185" id="roomBookingPage">
                    <div class="v27_171"></div>
                    <div class="v27_184">
                        <div class="v27_172"></div>
                        <div class="v27_180"></div>
                        <div class="v27_173"></div>
                        <div class="v27_181"></div>
                        <div class="v27_178"></div>
                        <div class="v27_182"></div>
                        <div class="v27_179"></div>
                        <div class="v27_183"></div>
                    </div>
                </div>
                <div class="v27_194"><span class="v27_186">Room No    :  {room.roomNo}</span><span class="v27_187">Price            :  Rs. {room.price} </span><span class="v27_188">Type            :  {room.type} </span><span class="v27_189">Description</span>
                    <div class="v27_190"></div>
                </div>
            </div>
        </body>

        </html>
    );
}

export default withRouter(UserRoomDetails);