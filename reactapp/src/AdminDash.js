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
            console.log(response)
            setAdmin(response.data)
            setRooms(response.data.rooms)
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
                <div class="container">
                
                <div class="room">
                    <br/>
                    {rooms.map(function (room) {
                        return(
                            <Room room={room}
                            />
                        )
                    }
                    )}
                </div>
                <div class="v6_4" id="adminDashboard">
                    <div class="v6_18"></div><span class="v6_19">200</span><span class="v6_20">300</span><span class="v6_21">Total Today</span><span class="v6_22">Monthly</span><span class="v6_23">Earnings</span>
                    
                    <div class="v6_90"></div><span class="v15_1">Want to add a New Room</span>
                    <div class="v20_151">
                        <div class="v15_2" id="addRoomButton"></div>
                        <div class="v24_92"><span class="v15_0">Add Room</span>
                            
                        </div>
                    </div>
                    <div class="name"></div>
                
                </div>
                </div>
            </body>

            </html>
    );
}
export default AdminDash;