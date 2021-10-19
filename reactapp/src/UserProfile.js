import React from 'react'
import './UserProfile.css'; 
    function UserProfile(){
        
        return (




            <div class="grid-container">
                <div className="first">

            <table className="Profile"  width="97%"    bgcolor="#F5F1F1" Style="border-radius:15px">
                
                
               <tr align="left">
                 <tr ><br/><label className="Name"> 
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name
                 &nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 :
                 </label></tr>
                 <tr ><br/><br/><label class="Mail">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email
                 &nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label></tr>
                 <tr ><br/><br/><label class="Pwd">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;Password
                 &nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label></tr>
                 <tr><br/><br/><label class="Age">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;Age &nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;:
                 </label></tr>
                 <tr ><br/><br/><label class="Number">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mobile Number
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label></tr>
                 <br/><br/>
                     

                     </tr>  
               
             </table>
             </div>


             <div className="second">
  <table className="Edit" width="99%" height="200%"  bgcolor="#F5F1F1" >
 <center>
 <table align="center" > 
 <br></br>
 <table>

 <img src="https://lh3.googleusercontent.com/-G7zE-TE_ik8/V4pq0BxKbdI/AAAAAAAAkbM/HB0_RoOT2vI/s1600/Tom-Ellis-Profile-Dp-pics-whatsapp-facebook-468.jpg"  alt="Avatar" class="Profile_Img"></img>
    </table>


</table>
<br></br>
</center>
<a href='Editprofile'> <center><button className="Edit_Button" > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Edit Profile &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </button></center></a>
</table>

</div>



  </div>


   )
    }

export default UserProfile