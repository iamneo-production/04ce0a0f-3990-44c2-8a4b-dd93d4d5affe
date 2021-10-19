import React, {useEffect, useState} from 'react';
import './UserHotelBooking.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

function UserHotelBooking(props){
    const [bookings,setBookings]=useState([]);
    const baseURL = localStorage.getItem("baseURL");
    
    useEffect(()=>{
        axios.post(baseURL+'/user/bookings?id='+props.match.params.userId)
        .then(response => {
            setBookings(response.data)
        })
        .catch(error => {
            console.log('There was an error!', error);      
        });
      },[])

    // fetch('<API URL>')
    // .then(res => res.json())
    // .then(json => {
    //     this.setState({
    //         items: json,
    //         isLoaded: true, 
    //     })
    // }).catch((err) => {
    //     console.log(err);
    // });

    // constructor(){

    //     super(props);

    //     this.state = {
    //         items: [],
    //         isLoaded: false
    //     }

    // }

    // componentDidMount(){

    

    // }

    
    // const bookingList=[
    //     {
    //         hotelName: "jay",
    //         roomNo: "502",
    //         price: 1000,
    //         quantity: 1,
    //         totalPrice: 1000
    //     },
    //     {
    //         hotelName: "uhiuhy",
    //         roomNo: "5012",
    //         price: 1000,
    //         quantity: 1,
    //         totalPrice: 1000
    //     },
    //     {
    //         hotelName: "jay",
    //         roomNo: "502",
    //         price: 1000,
    //         quantity: 1,
    //         totalPrice: 1000
    //     }
    // ];
    return(
        
        <center>
        <div class="table" id="userBookingBody">
        <table>
            <tr>
                <th>Hotel Name</th>
                <th>Room No</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
            </tr>
            {bookings.map(booking => (
                <tr className="tb" cellSpacing="50">
                        <td>{booking.hotelName}</td>
                        <td>{booking.roomNo}</td>
                        <td>{booking.price}</td>
                        <td>1</td>                        
                        <td>{booking.price}</td>
               </tr>
            ))}   
        </table>
        </div></center>
    );
}

export default withRouter(UserHotelBooking);