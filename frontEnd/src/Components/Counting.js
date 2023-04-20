import axios from 'axios';
import React from 'react'
import {useEffect, useState } from 'react';
import table, { Table } from 'react-bootstrap'
import { counting } from '../CSS/counting.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';





export default function Counting() {
  const navigate = useNavigate();
 // const flag=false;

  const [AllCandidate, setAllCandidate] = useState({})
  const [candidateName, SetCadidateName] = useState("");
  var  [falg , SetFlag]=useState(false);
   var [subData , SetSubData]= useState([])
  // var subData;
  
  useEffect(
    () => {

      Counting();
    }
    , []
  );

  const Counting = () => {
    axios.post("http://localhost:8080/count/")
      .then((res) => {
        setAllCandidate(res.data);
        console.log(AllCandidate.c1);
        console.log(AllCandidate.c2);
      })
      .catch((res) => {
        alert("some thing is wrong");
      })


  }

  const logoutuser = () => {
    localStorage.removeItem("adminName", undefined);
    localStorage.removeItem("adminPass", undefined);
    navigate("/home");

  }


  const getCandidateVoter=( candidateForList)=>
  {
       console.log(candidateForList);

         axios.get(`http://localhost:8080/count/${candidateForList}`)
      .then((res) => {
        console.log(res.data);
         
       // subData=res.data;
            SetSubData(res.data)
            console.log("value of subData");
          console.log(subData);
          
                // setData(res.data)

      }
      ).catch((err) => {
        
     toast.error("Internal Server Error")
      }).then(() => {
       
      
      })
  }
  const ToSeeVoterListJess = () => {
    SetFlag(true);
    getCandidateVoter("Jess")
    
  }

  const ToSeeVoterListJeck = () => {
    SetFlag(true)
    getCandidateVoter("Jack")
   }

    const ToSeeVoterListJill = () => {
      SetFlag(true)
    getCandidateVoter("Jill")
   }

    const ToSeeVoterListJohn = () => {
      SetFlag(true)
    getCandidateVoter("John")
   }


  return (
    <div>
      <div class="container p-1">

        <div class="row mt-4">

          <div class="col-xl-6 ">


            <input onClick={logoutuser} type="button" value="LogOut" style={{ float: "right", width: "20%", margin: "80px" }} class="form-control mb-3 btn btn-danger" />




            <table style={{
              //  position: "absolute", top: "50%", left: "50%", transform: "translate(-50% ,-50%)", width: "30%",
              border: "1px solid black ", borderCollapse: "collapse"
            }}>
              <tr style={{ border: "1px solid black ", borderCollapse: "collapse" }}>
                <th>Candidate Name</th>
                <th>Total Vote</th>

              </tr>
              <tr>
                <td >Jill<input onClick={ToSeeVoterListJill} type="button" value="Click To See Voter List" style={{ float: "right", width: "80%", margin: "20px" }} class="form-control mb-3 btn btn-primary" /> </td>
                <td>{AllCandidate.c1}</td>


              </tr>

              <tr>
                <td>Jess <input onClick={ToSeeVoterListJess} type="button" value="Click To See Voter List" style={{ float: "right", width: "80%", margin: "20px" }} class="form-control mb-3 btn btn-primary" /></td>
                 <td>{AllCandidate.c2}</td>
                

              </tr>

              <tr>
                <td>John <input onClick={ToSeeVoterListJohn} type="button" value="Click To See Voter List" style={{ float: "right", width: "80%", margin: "20px" }} class="form-control mb-3 btn btn-primary" /> </td>
                <td>{AllCandidate.c3}</td>

              </tr>

              <tr>
                <td>Jack  <input onClick={ToSeeVoterListJeck} type="button" value="Click To See Voter List" style={{ float: "right", width: "80%", margin: "20px" }} class="form-control mb-3 btn btn-primary" /></td>
                <td>{AllCandidate.c4}</td>

              </tr>

            </table>


          </div>

          <div class="col-xl-6 ">


   
      <Table striped bordered hover variant="blue text-dark-blue">
      <thead className=''>
        <tr>
          <th>Name of Voter</th>
          <th>Selected candidate</th>
          <th>Voter Phone No</th>
          
          
        </tr>
      </thead>
            {
             /*  if(flag)
              {
                <h1>ALL candidate List</h1>
              } */
              falg===true && subData.map(

                val=>
                <tbody>
                <tr>
                  <td>{val.name}</td>
                  <td>{val.select}</td>
                  <td>{val.phoneNo}</td>
                  
                  
                </tr>
              </tbody>
              )
              
                 
            }
         </Table>
            
          </div>
        </div>

      </div>
    </div>
  )
}
