import React from 'react';
// import logo from './images/465709.jpg';
import { useHistory } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import './AllHotels.css';

function AllHotels(props) {
    const history = useHistory();
    // const data = {
    //     image:props.image,
    //     name:props.name,
    //     address:props.address,
    //     number:props.number,
    //     rooms:props.rooms,
    //     hotelId:props.hotelId
    // }

    function getDetails()
    {   
        console.log(props);
        sessionStorage.setItem('image',props.hotelImageURL);
        sessionStorage.setItem('name',props.hotelName);
        sessionStorage.setItem('address',props.hotelAddress);
        sessionStorage.setItem('number',props.mobileNumber);
        history.push('/user/hotelDetail/'+props.hotelId);
    }
        return (
            <div onClick={()=>{getDetails()}}>
                <div className="main-div">
                <Grid container spacing={1}>
                    <Grid item xs={4} sm={4} className="inner-div">
                    <input width="50px" type="image" src="https://cdn-icons.flaticon.com/png/512/3177/premium/3177440.png?token=exp=1634710666~hmac=38856b65b805d361e8894e2111b60e6c"/>
                        <p style={{marginLeft:"5%"}}>{props.hotelAddress}</p>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <p>Hotel Name: {props.hotelName}</p>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <p>Mobile Number: {props.mobileNumber}</p>
                    </Grid>
                </Grid>
                </div>  
            </div>
        );
}

export default AllHotels;