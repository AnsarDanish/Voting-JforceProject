import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import NavBar from './Components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login';
import Logout from './Components/Login';

import Counting from './Components/Counting';
import Doooo from './Components/Doooo'
import Home from './Components/Home';
import AdminLogin from './Components/AdminLogin';

 var loginProfileElement = false;
if (localStorage.getItem("validPhone")!=null && localStorage.getItem("validPhone")!=undefined) {
  loginProfileElement = <> <Doooo  /></>
  //alert("Profile");
} else {
  loginProfileElement = <> <Login /></>
  //alert("Login");

} 

/* var  loginpanel =false;

if (localStorage.getItem("adminPass")!=null && localStorage.getItem("adminPass")!=undefined) {
  loginpanel = <> <Counting  /></>
  //alert("Profile");
} else {
  loginpanel = <> <AdminLogin /></>
  //alert("Login");

}  */


const route = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    //  element:<Subscription/>,
    children: [
      {
       path: "/home",
        element: <Home />
      },
     
  
      {
        path: "/Login",
        element: loginProfileElement
      },

      {
        path: "/doVoting",
        element:loginProfileElement
      },

      {
        path: "/counting",
        element: <Counting />
      },

     /*  {
        path: "/admin",
        element: <AdminLogin  />
      }, */

      
     
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <ToastContainer />
    <RouterProvider router={route} />
    
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
