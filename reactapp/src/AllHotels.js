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
                        <img src="" alt="logo" style={{width:"40px", height:"40px",borderRadius:"40px" ,marginTop:"2%"}}/>
                        <p style={{marginLeft:"5%"}}>{props.hotelImageURL}</p>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <p>{props.hotelName}</p>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <p>{props.mobileNumber}</p>
                    </Grid>
                </Grid>
                </div>
                <button onClick={()=>{getDetails()}}>click</button>
            </div>
        );
}

export default AllHotels;