// src/ResponsiveTable.js
import React from 'react';

const ResponsiveTable = () => {
    const data = [
        { id: 1, title: 'John Doe', description: 'john@example.com', status: 'Admin' },
       
    ];

    return (
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
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.status}</td>
                                <td className=' d-flex gap-2'><button className='btn btn-danger'>Delete</button>
                                <button className='btn btn-success'>Done</button></td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ResponsiveTable;
