import React from 'react';
import Grid from '@material-ui/core/Grid';
import './IndividualStatus.css';

function IndividualStatus (props) {
    return (
        <div>
            <div className="individual-div">
                <Grid container spacing={1}>
                    <Grid item xs={3} sm={3} className="inner-div">
                        <p>{props.id}</p>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                        <p>{props.price}</p>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                        <p>{props.type}</p>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                    {props.status==="Booked"?<p style={{color:'#8b0000'}}>{props.status}</p>:<p style={{color:'#0000ff'}}>{props.status}</p>}
                    </Grid>
                </Grid>
                </div>
        </div>
    );
}

export default IndividualStatus;