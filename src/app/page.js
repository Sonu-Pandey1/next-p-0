"use client"

import React, { useState } from 'react'
import "./globals.css"
import ResponsiveTable from '@/components/Table'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Page() {
  const [formData,setFormData] = useState({
    title:"",
    description:""
  })
  

  let handleSubmit = async (e)=>{
      e.preventDefault()
      console.log(formData)
      setFormData({
        title:"",
        description:""
      })
      
      try {
        // api code
        

        toast.success("success")
      } catch (error) {
        console.log(error)
        toast.error(error)
        
      }
    

  }


  return (
    <div>
    <ToastContainer theme='dark' />
      <main>
        <div className="container-fulid ">
          <div className="row text-center justify-content-center">
            <div className="col col-4">
              <div className="formContainer ">
                <form onSubmit={handleSubmit} className=' ' >
                <h2>Todos</h2>
                  <div className="input-block ">
                    <input value={formData.title} onChange={(e)=>{setFormData({...formData,title:e.target.value})}} className=' w-100 my-2  ' type="text" placeholder=' Enter Title' />
                  </div>
                  <div className="input-block">
                    <textarea value={formData.description} onChange={(e)=>{setFormData({...formData,description:e.target.value})}} className=' w-100 my-2 ' name="textarea" id="" cols="30" placeholder=" Enter Description...."></textarea>
                  </div>
                  <div>
                  <button  className='btn btn-primary'>Submit</button>
                  
                  </div>
                </form>
              </div>
            </div>
            
          </div>
          <div className="row">
            <div className="col">
            <ResponsiveTable/>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Page
