import React from 'react';
import './UserHotelDetails.css';
function UserHotelDetails(){
    const book=<b Style="color:red">Booked</b>
    const avail=<b Style="color:green">Available</b>
    const hotel=[
        {
        address:"guntur ponnur vizag",

    }
];
    const roomdetails=[
        {
            roomno:"100",
            price:1235,
            type:"Luxury",
            status:book
        },
        {
            roomno:"101",
            price:1234,
            type:"Normal",
            status:avail
        },        
        {
            roomno:"104",
            price:1256,
            type:"Deluxe",
            status:book
        }
    ];
    return(
       <div className="hotelDetails">
     <table className="tab1" align="center" Style="margin-top:25px;" width="80%" height="200px">
         {hotel.map(hoteldesc=>(
             <tr className="tr1" align="center" Style="background-color:rgba(0,0,0,0.1)">
                 <td className="td1" Style="border-radius:15px">{hoteldesc.address}</td>
             </tr>
         ))}
     </table>
     <table className="tab2" align="center" Style="margin-top:25px;" width="80%" height="50px">
         {roomdetails.map(roomdesc=>(
            <tr className="tr2"  Style="margin-top:50px; background-color:rgba(0,0,0,0.1)">
                <td className="td2" Style="border-top-left-radius:15px;border-bottom-left-radius:15px" align="center">Room No:{roomdesc.roomno}</td>
                <td className="td3" align="center">{roomdesc.price}</td>
                <td className="td4" align="center">{roomdesc.type}</td>               
                <td className="td5" Style="border-top-right-radius:15px;border-bottom-right-radius:15px" align="center">{roomdesc.status}</td>
            </tr>
         ))}
     </table>
    </div>
    );
}
export default UserHotelDetails;