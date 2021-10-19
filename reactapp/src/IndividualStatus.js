import React from 'react';
import Grid from '@material-ui/core/Grid';
import './IndividualStatus.css';
import { useHistory } from 'react-router-dom';

function IndividualStatus (props) {
    const history = useHistory();

    function goToRoomDetails(){
        history.push("/user/roomDetail/"+props.id)
    }
    return (
        <div onClick={goToRoomDetails}>
            <div className="individual-div">
                <Grid container spacing={1}>
                    <Grid item xs={3} sm={3} className="inner-div">
                        <p>Room: {props.roomNo}</p>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                        <p>Rs. {props.price}</p>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                        <p>{props.type}</p>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                    {props.status==="BOOKED"?<button class="room-status" style={{color:'#8b0000'}}>{props.status}</button>:<button class="room-status-not" style={{color:'white'}}>{props.status}</button>}
                    </Grid>
                </Grid>
                </div>
        </div>
    );
}

export default IndividualStatus;