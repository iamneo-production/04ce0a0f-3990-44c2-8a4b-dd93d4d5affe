import React from 'react';
import IndividualStatus from './IndividualStatus';
import './hotelDetails.css';

function hotelDetails(props) {
    const name=sessionStorage.getItem("name");
    const address=sessionStorage.getItem("address");
    const number=sessionStorage.getItem("number");
    const rooms=JSON.parse(sessionStorage.getItem("rooms"))
        return (
            <div className="outer-div" style={{border:"2px solid #ff6347",borderRadius:"5px"}}>
                <div className="hotel-div">
                    <p>{name}</p>
                    <p>{address}</p>
                    <p>{number}</p>
                </div>
            {rooms.map(function (details) {
                return(
                    <IndividualStatus id={details.id} price={details.price} type={details.type} status={details.status}
                    />
                )
            }
            )}
            </div>
        );
}

export default hotelDetails;