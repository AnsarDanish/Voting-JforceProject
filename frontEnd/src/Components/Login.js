import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast, ToastContainer} from 'react-toastify'






export default function Login() {


    const [name, setName] = useState("")
  
  const [phoneNO, setPhoneNo] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState("notadmin")
 


  const [loginName, setLoginName] = useState("");
  const [loginPassword, setPLoginPassword] = useState("");

  useEffect(
    () => {
      toast.dark("Please First Do Registration")
      setLoginName("");setPLoginPassword("");
    }
    , []
  );



    async function VoterLogin() {
        var notvalid=true;  

        let item = { loginName, loginPassword }
        axios.post("http://localhost:8080/Login/", item)
        .then((res) => {
          console.log(res.data);
           var check='notadmin'
         // console.log(res.data.phoneNO);
          if(loginName===res.data.name && loginPassword===res.data.password && res.data.status===check ) //&& loginPassword===res.data.password 
          {
            notvalid=false;
          
            localStorage.setItem("validName" , loginName);
            localStorage.setItem("validPhone" , res.data.phoneNO);
           //alert("Logged")
            toast.success("Login Successfully Done")
          // alert("Login Successfully Done");

            console.log(localStorage.getItem("validName"));
            //navigate("/profile");
            setLoginName("");setPLoginPassword("");
            window.location.href = "http://localhost:3000/doVoting";
            
          }
          else{
                if(loginName===res.data.name && loginPassword===res.data.password && res.data.status==="admin")
                {
                  toast.success("Admin login Successfully Done")
                  window.location.href="http://localhost:3000/counting"; 

                }
              if( !loginName !==res.data.name)
               //  alert("userName is Wrong")
               {
                toast.error(" Voter Name OR Password is Wrong")
                setLoginName("");setPLoginPassword("");
               }
                 else{
                   // alert("password is wrong")
                    toast.error("Voter Name OR Password is Wrong")
                    setLoginName("");setPLoginPassword("");
                 }
                 
  
          }
          
        })
        .catch((err) => {
          console.log(err);
        
         // alert("Server Error : Please try again later.");
          toast.error("Server Error : Please try again later.")
         
        })
      
    }
        
           
          
        
      


    let Registeration = async (e) => {

        
        //  console.log(name , age , gender);
        let result = { name, phoneNO, email, password  , status}
        console.log(result);
        var pattern_MobileNO=/^[6-9][1-9]{9}$/
      

       var flage=true;
       axios.post("http://localhost:8080/registeration/" ,result)
       .then(
        (res)=>{
          console.log(res);
              
           toast.success("Successfully Registeration Done")
          flage=false;
          setName(""); setEmail(""); setPassword("");setPhoneNo(""); 
        }
       )
 
       .catch((error) => {
       
           toast.error("Wrong feild value")
       })
       .then((res)=>{
 
       //  if(flage)
          //  toast.error("someting is wrong")
        
      })
    
     }

    return (
        <div >
     
        <div class="container p-1">
  
          <div class="row mt-4">
  
            <div class="col-xl-6 ">
  
              <div class="border border-dark rounded p-4  " >
                <h2 class="text-center mb-3">Login</h2>
                <label>Voter Name</label>
                <input type="text" style={{height: "40px"}} value={loginName} onChange={(e) => setLoginName(e.target.value)} placeholder="Voter Name" class="form-control mb-3" />
                <label>Password</label>
                <input  style={{height: "40px"}}  type="password" value={loginPassword} onChange={(e) => setPLoginPassword(e.target.value)} placeholder="password" class="form-control mb-3" />
  
                <input style={{height: "40px"}}  type="button" onClick={VoterLogin} value="Login" class="form-control mb-3 btn btn-primary" />
              </div>
  
            </div>
  
  
            <div class="col-xl-6">
              <div class="border border-dark rounded p-4">
                <h2 class="text-center mb-3">Registration</h2>
  
                <label>Name</label>                           
                <input style={{height: "40px"}}  type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" class="form-control mb-3" />
  
        
                <label>Phone Number</label>
                <input style={{height: "40px"}}  type="text" value={phoneNO} onChange={(e) => setPhoneNo(e.target.value)} placeholder="Phone Number" class="form-control mb-3" />
  
                <label>Email</label>
                <input style={{height: "40px"}}  type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" class="form-control mb-3" />
  
                <label>Password</label>
                <input style={{height: "40px"}}  type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" class="form-control mb-3" />
  
               
  
                <input style={{height: "40px"}}  type="button" onClick={Registeration} value="Register" class="form-control mb-3 btn btn-primary" />
              </div>
            </div>
  
          </div>
  
  
        </div>
  
  
      </div>



                )
}
