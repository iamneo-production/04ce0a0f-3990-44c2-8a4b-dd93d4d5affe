import React from 'react';
import logo from './images/465709.jpg';
import Grid from '@material-ui/core/Grid';
import './allHotels.css';

function allHotels(props) {
    const data = {
        image:props.image,
        name:props.name,
        address:props.address,
        number:props.number,
        rooms:props.rooms
    }

    function getDetails()
    {
        sessionStorage.setItem('image',props.image);
        sessionStorage.setItem('name',props.name);
        sessionStorage.setItem('address',props.address);
        sessionStorage.setItem('number',props.number);
        sessionStorage.setItem('rooms',JSON.stringify(props.rooms));
        history.push('/hotel');
    }
        return (
            <div onClick={()=>{getDetails()}}>
                <div className="main-div">
                <Grid container spacing={1}>
                    <Grid item xs={4} sm={4} className="inner-div">
                        <img src={logo} alt="logo" style={{width:"40px", height:"40px",borderRadius:"40px" ,marginTop:"2%"}}/>
                        <p style={{marginLeft:"5%"}}>{props.name}</p>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <p>{props.address}</p>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <p>{props.number}</p>
                    </Grid>
                </Grid>
                </div>
                <button onClick={()=>{getDetails()}}>click</button>
            </div>
        );
}

export default allHotels;