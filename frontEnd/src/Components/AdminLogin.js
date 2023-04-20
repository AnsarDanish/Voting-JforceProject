import React from 'react'
import { useState } from 'react';
import {toast, ToastContainer} from 'react-toastify'
import axios from 'axios';

export default function AdminLogin() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


/*   const [adminName ,SetLoginName]=useState("danish");
  const [adminPass ,SetPass]=useState("danish"); */

  
    const AdminLogin= ()=>
    {
        console.log(email);
        console.log(password);
        let result ={email ,password};
        console.log(result);
        axios.post("http://localhost:8080/admin/" , result)
        .then((res)=>
        {
            if(res.data.email===email &&  res.data.password===password)
            {
                toast.success("Admin Loggin Successfull")
                window.location.href="http://localhost:3000/counting"; 
                localStorage.setItem("adminName" ,email );
               localStorage.setItem("adminPass" ,password );
            }
        })
        .catch((error)=>{

            toast.error("You are not Admin");

        })

    /*     if(loginName===adminName && loginPassword===adminPass )
        {
            toast.success("Admin Loggin Succesfull");
            window.location.href="http://localhost:3000/counting"; 
            localStorage.setItem("adminName" ,loginName );
            localStorage.setItem("adminPass" ,loginPassword );

        }
        else{
            toast.error("You are not Admin");
        } */

    }


    return (
        <div>
            <div class="container p-1">

                <div class="row mt-4">

                    <div class="col-xl-6 ">

                        <div class="border border-dark rounded p-4  " >
                            <h2 class="text-center mb-3">Admin Panel Login</h2>
                            <label>Admin Email</label>
                            <input type="text" style={{ height: "40px" }} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Admin Email" class="form-control mb-3" />

                            <label>Password</label>
                            <input style={{ height: "40px" }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" class="form-control mb-3" />

                            <input style={{ height: "40px" }} type="button" onClick={AdminLogin} value="Login" class="form-control mb-3 btn btn-primary" />
                        </div>
                        </div>

                        </div>

                    </div>

                    </div>
                    )
}
