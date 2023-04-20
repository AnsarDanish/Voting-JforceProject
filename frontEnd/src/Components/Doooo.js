import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast, ToastContainer} from 'react-toastify'
import { useNavigate } from 'react-router-dom';

export default function Doooo() {

    const navigate = useNavigate();

    const [select, SetSelect] = useState("");
    const [nname, Setnname] = useState("");
    const [phoneNO, setPhoneNo] = useState("");
   
  
   
  function logoutuser(){
    localStorage.removeItem("validPhone",undefined);
    navigate("/home");
  }
   
  
    const voting = () => {
        var name=localStorage.getItem("validName");
         var phoneNo =localStorage.getItem("validPhone")
         
        
        
        let item = { select , name , phoneNo}
        console.log(item.select);
        console.log(item.name);
        console.log(item.phoneNo);
        console.log(item);

     axios.post("http://localhost:8080/voting/" ,item)
    .then((res)=>
      {
      //  alert("Voting done")
        if(res.data.select=="null")
        toast.success("Voting done");
        else
        {
      
          toast.error("You have Already done Voting  to "+res.data.select);
        }
        

       
      }

    ).catch(
        (error)=> toast.error("You have Already done Voting")
    ).then()
         
  }
    return (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
           transform: "translate(-50%, -50%)",
           // background: "red"
          }}
        >
              <div >
             
     <h1>Select one candidate</h1>
<input  style={{size:"50" }}type="radio" value="Jill" name="gender"   onChange={(e) => SetSelect(e.target.value)}  /> &ensp;  <b>Jill</b>

<   br/><br></br>
< input type="radio" value="Jess" name="gender"  onChange={(e) => SetSelect(e.target.value)} />&ensp; <b>Jess</b>
<br/><br></br>
    
<input type="radio" value="John" name="gender"  onChange={(e) => SetSelect(e.target.value)} /> &ensp;<b>John</b>
<br/><br></br>
<input type="radio" value="Jack" name="gender"  onChange={(e) => SetSelect(e.target.value)} />&ensp;<b>Jack</b>
<br/><br></br>
{/* <input style={{height: "40px"}}  type="button" onClick={voting} vclass="form-control mb-3 btn btn-primary" class="form-control mb-3 btn btn-primary" />

<button className='btn btn-danger' onClick={logoutuser}>Logout</button> */}

<div  style={{display:"flex" , justifyContent:"space-between"}}>
<input onClick={voting}  type="button"  value="Vote"  style={{float: "right" ,width:"100%" , margin:"10px"}} class="form-control mb-3 btn btn-primary" />

<input onClick={logoutuser}  type="button"  value="LogOut"  style={{float: "right" ,width:"100%" , margin:"10px"}} class="form-control mb-3 btn btn-danger" /> 
 
{/* <button className='btn btn-danger' onClick={logoutuser}>Logout</button>  */}
</div>

</div>
        </div>
      );
}
