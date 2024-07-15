"use client"

import React, { useEffect, useState } from 'react';
import "./globals.css";
import ResponsiveTable from '@/components/Table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Table from '@/components/Table';

function Page() {
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  const [todoData, setTodoData] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("/api");
      setTodoData(response.data.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
      toast.error("Failed to fetch todos.");
    }
  };

  const deleteTodo = async (Id) => {
    const response = await axios.delete('/api', {
      params: {
        mongoId: Id
      }
    })
    toast.success(response.data.msg);
    fetchTodos();
  }

  const completeTodo = async (id) => {
    const response = await axios.put('/api', {}, {
      params: {
        mongoId: id

      }
    })
    toast.success(response.data.msg)
    fetchTodos()
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call to submit new todo
      const response = await axios.post("/api", formData);
      toast.success(response.data.msg);

      // Clear form fields
      setFormData({
        title: "",
        description: ""
      });

      // Fetch updated todos after successful submission
      await fetchTodos();
    } catch (error) {
      console.error("Error submitting todo:", error);
      toast.error("Failed to submit todo.");
    }
  };

  return (
    <div>
      <ToastContainer theme='dark' />
      <main>
        <div className="container-fluid">
          <div className="row text-center justify-content-center">
            <div className="col col-4">
              <div className="formContainer">
                <form onSubmit={handleSubmit} className=' ' >
                  <h2>Todos</h2>
                  <div className="input-block ">
                    <input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className=' w-100 my-2  ' type="text" placeholder=' Enter Title' />
                  </div>
                  <div className="input-block">
                    <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className=' w-100 my-2 ' name="textarea" cols="30" placeholder=" Enter Description...."></textarea>
                  </div>
                  <div>
                    <button className='btn btn-primary'>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="container mt-5">
                <h4 className="mb-4">Your Todos :--</h4>
                <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {todoData.map((item, index) => (
                        <Table key={index} id={index} title={item.title} description={item.description} complete={item.isCompleted} mongoId={item._id} deleteTodo={deleteTodo} completeTodo={completeTodo} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
