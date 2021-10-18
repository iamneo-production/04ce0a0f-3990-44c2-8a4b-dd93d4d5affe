import React from 'react';
import './AdminBooking.css';
function adminBooking(){
    const bookingList=[
        {
            bookingid: "123",
            userid:"456",
            roomNo: "502",
            price: 1000,
            quantity: 1,
            totalPrice: 1000
        },
        {
            bookingid: "456",
            userid:"789",
            roomNo: "5012",
            price: 1000,
            quantity: 1,
            totalPrice: 1000
        },
        {
            bookingid: "789",
            userid:"123",
            roomNo: "502",
            price: 1000,
            quantity: 1,
            totalPrice: 1000
        }
    ];
    return(
        <div className="adminBookings">
           <table className="bookinglist" align="center">
               <tr className="tr1" cellSpacing="50">
                        {/*<td>Booking ID</td>
                        <td>User ID</td>
                        <td>Room No</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total Price</td>*/}
                        <td className="t1" Style="border-top-left-radius:15px">Booking ID</td>
                        <td className="t2">User ID</td>
                        <td className="t3">Room No</td>
                        <td className="t4">Price</td>
                        <td className="t5">Quantity</td>
                        <td className="t6" Style="border-top-right-radius:15px">Total Price</td>
               </tr>
               {bookingList.map(booking => (
                <tr className="tr2" cellSpacing="50">
                        <td className="td1">{booking.bookingid}</td>
                        <td className="td2">{booking.userid}</td>
                        <td className="td3">{booking.roomNo}</td>
                        <td className="td4">{booking.price}</td>
                        <td className="td5">{booking.quantity}</td>
                        <td className="td6">{booking.totalPrice}</td>
               </tr>
            ))}
           </table>
        </div>
    );
}

export default adminBooking;