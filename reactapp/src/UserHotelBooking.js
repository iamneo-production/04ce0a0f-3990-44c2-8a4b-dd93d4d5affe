import React from 'react';
import './UserHotelBooking.css';
function userHotelBooking(){
    
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
           {bookingList.map(booking => (
                <tr className="tr_tb" cellSpacing="50">
                        <td>{booking.hotelName}</td>
                        <td>{booking.room}</td>
                        <td>{booking.price}</td>
                        <td>{booking.quantity}</td>
                        <td>{booking.totalPrice}</td>
               </tr>
            ))}
           </table>
        </div>
    );
}

export default userHotelBooking;