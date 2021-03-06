import React from 'react';
import AllHotels from './AllHotels';
import './UserDashboard.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function UserDashboard(){
    const baseURL = localStorage.getItem("baseURL");
    const [hotels,setHotels]=useState([]);
    const history = useHistory();
    
    useEffect(()=>{
        if(localStorage.getItem("userEmail")===null) history.push("/login");
        axios.get(baseURL+'/user/dashboard')
        .then(response => {
            setHotels(response.data);
            console.log(localStorage.getItem("testing"));
            
        })
        .catch(error => {
            console.log('There was an error!', error);      
        });

        


      },[])
    // const hotelsList=[
    //     {
    //         image:"../../images/465709.jpg",
    //         name:"Hotel 1",
    //         address:"Hotel Address 1",
    //         number:"9876543219",
    //         rooms:[
    //             {
    //                 id:"100",
    //                 price:"Hotel Price",
    //                 type:"Hotel Type",
    //                 status:"Booked"
    //             },
    //             {
    //                 id:"101",
    //                 price:"Hotel Price",
    //                 type:"Hotel Type",
    //                 status:"Available"
    //             },
    //             {
    //                 id:"102",
    //                 price:"Hotel Price",
    //                 type:"Hotel Type",
    //                 status:"Booked"
    //             }
    //         ]
    //     },
    //     {
    //         name:"Hotel 2",
    //         image:"../../images/35879.jpg",
    //         address:"Hotel Address 2",
    //         number:"9876543218",
    //         rooms:[
    //             {
    //                 id:"200",
    //                 price:"Hotel Price",
    //                 type:"Hotel Type",
    //                 status:"Booked"
    //             },
    //             {
    //                 id:"201",
    //                 price:"Hotel Price",
    //                 type:"Hotel Type",
    //                 status:"Booked"
    //             },
    //             {
    //                 id:"202",
    //                 price:"Hotel Price",
    //                 type:"Hotel Type",
    //                 status:"Available"
    //             }
    //         ]
    //     },
    //     {
    //         name:"Hotel 3",
    //         image:"../../images/wp6581315.jpg",
    //         address:"Hotel Address 3",
    //         number:"9876543217",
    //         rooms:[
    //             {
    //                 id:"300",
    //                 price:"Hotel Price",
    //                 type:"Hotel Type",
    //                 status:"Available"
    //             },
    //             {
    //                 id:"301",
    //                 price:"Hotel Price",
    //                 type:"Hotel Type",
    //                 status:"Booked"
    //             },
    //             {
    //                 id:"302",
    //                 price:"Hotel Price",
    //                 type:"Hotel Type",
    //                 status:"Booked"
    //             }
    //         ]
    //     }
        
    // ];
    return (
        <div className="user-dashboard" id="userDashboard" style={{border:"2px solid #ff6347",borderRadius:"5px"}}>
            {hotels.map(function (hotel) {
                return(
                    <AllHotels hotelImageURL={hotel.hotelImageURL} hotelName={hotel.hotelName} hotelAddress={hotel.hotelAddress} mobileNumber={hotel.mobileNumber} hotelId={hotel.id} rooms={hotel.rooms}
                    />
                )
            }
            )}
        </div>
    );
}

export default UserDashboard;