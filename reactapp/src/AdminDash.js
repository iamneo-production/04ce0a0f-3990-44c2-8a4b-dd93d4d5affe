import React from 'react';
import './AdminDash.css';
import Room from './Room';
import AdminNavbar from './AdminNavbar';
import {useEffect, useState} from 'react';
import axios from 'axios';
function AdminDash(){
    const baseURL = localStorage.getItem("baseURL");
    const [rooms,setRooms]=useState([]);
    const [admin,setAdmin]=useState();
    const email = localStorage.getItem('adminEmail')
    useEffect(()=>{
        axios.get(baseURL+'/admin/dashboard?email='+email)
        .then(response => {
            console.log(response);
            setAdmin(response.data);
            localStorage.setItem("adminId",response.data.id);
            setRooms(response.data.rooms);
        })
        .catch(error => {
            console.log('There was an error!', error);      
        });
      },[])

    return(
        
        <html>

            <head>
                <link href="https://fonts.googleapis.com/css?family=Merienda+One&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Red+Hat+Text&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Rakkas&display=swap" rel="stylesheet" />
                <link href="./css/main.css" rel="stylesheet" />
                <title>Document</title>
                <link href="./css/main.css" rel="stylesheet" />
                <title>Document</title>
            </head>

            <body>
                <AdminNavbar/>
                <center><h1 class="hotelName">Hotel Name</h1></center>
                <div class="container-outer" id="adminDashboard">
                
                <div class="room">
                    <br/>
                    {rooms.map(function (room) {
                        return(
                            <Room room={room} id={room.id} adminId={admin.id}
                            />
                        )
                    }
                    )}
                </div>
                <div class="outer">
                     <br/><br/><br/><br/><br/><br/>
                    <center>
                    <div class="add-container">
                        <center>
                        <br/>
                        <p class="add-text">Want to add a New Room?</p><br/>
                        <button class="add-button" id="addRoomButton">+ Add Room</button>
                        </center>
                    </div><br/><br/><br/>
                    <div class="container">
                        <center>
                            <br/>
                        <h3 class="earning-text">Earnings</h3><br/><br/>
                        <h4 class="total-today">Total Today</h4>
                        <p class="total" >$200</p>
                        <p >________________</p>
                        <h4 class="monthly-text">Monthly</h4>
                        <p class="monthly">$500</p>
                        </center>
                    </div>
                    </center>
                </div>
            </div>    
            </body>

            </html>
    );
}
export default AdminDash;