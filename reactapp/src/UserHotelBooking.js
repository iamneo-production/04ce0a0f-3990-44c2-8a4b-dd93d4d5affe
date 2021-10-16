import React from 'react';
import './UserHotelBooking.css';
function userHotelBooking(){

    constructor(props){

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    componentDidMount() {

        fetch('<API URL>')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    
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

    const { isLoaded, items } = this.state;

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