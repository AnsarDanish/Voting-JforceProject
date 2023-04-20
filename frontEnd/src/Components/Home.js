import React from 'react'
import abc from '../images/abc.jpg';

export default function 

() {
  return (
    <div>
         <div className='container'>
            {/* 2 top cols */}
            <div className='row row-cols-md-2 row-cols-1 mt-5 align-items-center'>
                <div className=''>
                    <div className='h1 fw-bold'>Welcome To Online Pooling Booth!!</div>
                    <p className='h5 mt-3'> this is an eVoting platform which enables you to create and manage elections
                       <span className='fw-bold text-warning'></span>. </p>
                </div>
                <div className=''>
                    <img className='img-fluid' src={abc} alt="illus-0"/>
                </div>
            </div>
            {/* Top startategies */}
            <div className='mt-3 mx-auto px-5'>
                <div className='h3 d-flex justify-content-between'>
                    
                </div>
                <hr className='border border-dark border-1 opacity-50' />
                <div className='row '>
                
               
                </div>
                
            </div>
        </div>
        
    </div>
  )
}
