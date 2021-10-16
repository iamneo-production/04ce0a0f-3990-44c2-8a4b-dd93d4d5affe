import React, {useEffect, useState} from 'react';
import './UserHotelBooking.css';
function UserHotelBooking(){
    const [bookings,setBookings]=useState([])

    useEffect(()=>{
        const url='https://jsonplaceholder.typicode.com/posts';//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setBookings(resp))//setting response to state posts
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

    
    const bookingList=[
        {
            hotelName: "jay",
            roomNo: "502",
            price: 1000,
            quantity: 1,
            totalPrice: 1000
        },
        {
            hotelName: "uhiuhy",
            roomNo: "5012",
            price: 1000,
            quantity: 1,
            totalPrice: 1000
        },
        {
            hotelName: "jay",
            roomNo: "502",
            price: 1000,
            quantity: 1,
            totalPrice: 1000
        }
    ];
    return(
        
        <div className="userBookingBody">
           <table className="ta" align="center">
               <tr className="tr1" cellSpacing="50">
                        <td>Hotel Name</td>
                        <td>Room No</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total Price</td>
               </tr>
           </table>                    
           <table className="tb" align="center">
           {bookings.map(booking => (
                <tr className="tr_tb" cellSpacing="50">
                        <td>{booking.userId}</td>
                        <td>{booking.id}</td>
                        <td>{booking.title}</td>
                        <td>{booking.id}</td>
                        <td>{booking.body}</td>
               </tr>
            ))}
           </table>
        </div>
    );
}

export default UserHotelBooking;