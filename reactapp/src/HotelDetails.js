import React from 'react';
import IndividualStatus from './IndividualStatus';
import './HotelDetails.css';
import {withRouter} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

function HotelDetails(props) {
    const name=sessionStorage.getItem("name");
    const address=sessionStorage.getItem("address");
    const number=sessionStorage.getItem("number");

    const baseURL = localStorage.getItem("baseURL");
    const [rooms,setRooms]=useState([]);

    useEffect(()=>{
        console.log(props,name,address,number);
        axios.post(baseURL+'/user/rooms?id='+props.match.params.hotelId)
        .then(response => {
            setRooms(response.data)
        })
        .catch(error => {
            console.log('There was an error!', error);      
        });
      },[])

        return (
            <div className="outer-div" style={{border:"2px solid #ff6347",borderRadius:"5px"}}>
                <div className="hotel-div">
                    <p>{name}</p>
                    <p>{address}</p>
                    <p>{number}</p>
                </div>
            {rooms.map(function (details) {
                return(
                    <IndividualStatus id={details.id} price={details.price} type={details.type} status={details.status} roomNo={details.roomNo}
                    />
                )
            }
            )}
            </div>
        );
}

export default withRouter(HotelDetails);