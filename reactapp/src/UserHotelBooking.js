import React from 'react';
import './UserHotelBooking.css';
function userHotelBooking(){

    // constructor(props){

    //     super(props);

    //     this.state = {
    //         items: [],
    //         isLoaded: false
    //     }

    // }

    // componentDidMount() {

    //     fetch('<API URL>')
    //         .then(res => res.json())
    //         .then(json => {
    //             this.setState({
    //                 items: json,
    //                 isLoaded: true, 
    //             })
    //         }).catch((err) => {
    //             console.log(err);
    //         });

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
            hotelName: "ijay",
            roomNo: "502",
            price: 1000,
            quantity: 1,
            totalPrice: 1000
        }
    ];

    // const { isLoaded, items } = this.state;

    return(
        
        <div className="userBookingBody">
           <table className="ta" align="center">
               <tr className="tr1" cellSpacing="50">
                        <td className="t1" Style="border-top-left-radius:15px">Hotel Name</td>
                        <td className="t2">Room No</td>
                        <td className="t3">Price</td>
                        <td className="t4">Quantity</td>
                        <td className="t5" Style="border-top-right-radius:15px">Total Price</td>
               </tr>
           {bookingList.map(booking => (
                <tr className="tr_tb" cellSpacing="50">
                        <td className="td1">{booking.hotelName}</td>
                        <td className="td2">{booking.roomNo}</td>
                        <td className="td3">{booking.price}</td>
                        <td className="td4">{booking.quantity}</td>
                        <td className="td5">{booking.totalPrice}</td>
               </tr>
            ))}
           </table>
        </div>
    );
}

export default userHotelBooking;