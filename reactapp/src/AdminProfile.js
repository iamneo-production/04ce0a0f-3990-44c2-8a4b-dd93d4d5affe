import React from 'react'
import './AdminProfile.css';
    function AdminProfile(){
        
        return (




            <div class="grid-container">
                <div className="first">

            <table className="Profile" width="97%"    bgcolor="#F5F1F1" Style="border-radius:15px">
                
                <table width="52%" className="Admin_Profile"align="left" > 
               <tr align="left">
                 <tr align="left" rowspan="20"><br/><label class="Name">&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                 </label></tr>
                 <tr align="left"><br/><br/><label class="Mail">&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;Email&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label></tr>
                 <tr align="left"><br/><br/><label class="Number">&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;Mobile No&nbsp;&nbsp;&nbsp;:</label></tr>
                 <tr align="left" ><br/><br/><label class="Pwd">&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;Password
                 &nbsp;&nbsp;&nbsp;&nbsp;:</label></tr>
                 <br/><br/> 
                 
                     

                     </tr>  
                </table>
                <div className="hotel_tab">
                
                <table align="center"  width="44%" className="Hotel">
                    
                    
                <tr align="left"><br/><label class="Name">Hotel Name
                &nbsp;&nbsp;&nbsp;&nbsp;:
                 </label></tr>
                 <tr align="left"><br/><br/><label class="Mail">Hotel Address&nbsp;&nbsp;:
                 </label></tr>
                 <br/><br/>  <br/><br/>  <br/><br/>  <br/><br/>  
                    </table>
                    </div>
             </table>
             </div>


             <div className="second">
  <table className="Edit" width="99%" height="235%"  bgcolor="#F5F1F1">
 <center>
 <table align="center"    > 
 <br></br>
 <table>
      
 <img src="https://lh3.googleusercontent.com/-G7zE-TE_ik8/V4pq0BxKbdI/AAAAAAAAkbM/HB0_RoOT2vI/s1600/Tom-Ellis-Profile-Dp-pics-whatsapp-facebook-468" alt="Avatar" class="Profile_Img"></img>
    </table>


</table>
<br></br>
</center>
<a href='Editprofile'><center> <button className="Edit_Button"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Edit Profile &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </button></center></a>
</table>

</div>



  </div>


   )
    }
export default AdminProfile;
