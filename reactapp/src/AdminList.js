import React from 'react';
// import logo from './images/465709.jpg';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import './SuperAdminDashboard.css';

function AdminList(props) {
    
    const baseURL = localStorage.getItem("baseURL");
    const history = useHistory();
    // const data = {
    //     image:props.image,
    //     name:props.name,
    //     address:props.address,
    //     number:props.number,
    //     rooms:props.rooms,
    //     hotelId:props.hotelId
    // }
    function deleteAdmin(){
        console.log("deleted");
        axios.post(baseURL+'/super/deleteAdmin?id='+props.hotelId)
        .then(response => {
            window.location.reload();            
        })
        .catch(error => {
            console.log('There was an error!', error);      
        });
    }
   
        return (
            
            <div class="row">
            <div class="col adminimg"><img width="50px" src="https://cdn-icons.flaticon.com/png/512/3177/premium/3177440.png?token=exp=1634710666~hmac=38856b65b805d361e8894e2111b60e6c" alt="admin image"/></div>
            <div class="col left"><p>{props.sellerName}</p></div>
            <div class="col mid"><p>{props.hotelName}</p></div>
            <div class="col mid"><p>{props.hotelAddress}</p></div>
            <div class="col mid"><p>{props.mobileNumber}</p></div>
            <div class="col last"><button onClick={deleteAdmin}>X</button></div>
            </div>
            // <div>
            //     <div className="main-div">
            //     <Grid container spacing={1}>
            //         <Grid item xs={4} sm={4} className="inner-div">
            //         <input width="50px" type="image" src="https://cdn-icons.flaticon.com/png/512/3177/premium/3177440.png?token=exp=1634710666~hmac=38856b65b805d361e8894e2111b60e6c"/>
            //             <p style={{marginLeft:"5%"}}> {props.sellerName}</p>
            //         </Grid>
            //         <Grid item xs={4} sm={4}>
            //             <p> {props.hotelName}</p>
            //         </Grid>
            //         <Grid item xs={4} sm={4}>
            //             <p> {props.hotelAddress}</p>
            //         </Grid>
            //         <Grid item xs={4} sm={4}>
            //             <p>{props.mobileNumber}</p>
            //         </Grid>
            //         <Grid item xs={4} sm={4}>
            //             <button>DELETE</button>
            //         </Grid>
            //     </Grid>
            //     </div>  
            // </div>
        );
}

export default AdminList;