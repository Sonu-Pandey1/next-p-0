// src/ResponsiveTable.js
import React from 'react';

const Table = ({id,title,description,mongoId,complete}) => {
    // const data = [
    //     { id: id, title:title, description: description, complete: complete },
       
    // ];

    return (
        
            <tr key={id}>
                <td>{id+1}</td>
                <td>{title}</td>
                <td>{description}</td>
                {/* <td>{mongoId}</td> */}
                <td>{complete ?"Complited":"Panding"}</td>
                <td className=' d-flex gap-2'><button className='btn btn-danger'>Delete</button>
                <button className='btn btn-success'>Done</button></td>
                
            </tr>
     
        
    );
};

export default Table;
