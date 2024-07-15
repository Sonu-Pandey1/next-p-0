// src/ResponsiveTable.js
import React from 'react';

const Table = ({id,title,description,mongoId,complete,deleteTodo,completeTodo}) => {
    // const data = [
    //     { id: id, title:title, description: description, complete: complete },
       
    // ];

    return (
        
            <tr key={id}>
                <td>{id+1}</td>
                <td className={`${complete ?"text-decoration-line-through ":""}`}   >{title}</td>
                <td className={`${complete ?"text-decoration-line-through ":""}`} >{description}</td>
                {/* <td>{mongoId}</td> */}
                <td>{complete ?"Completed":"Panding"}</td>
                <td className=' d-flex gap-2'><button className='btn btn-danger' onClick={()=>{deleteTodo(mongoId)}}>Delete</button>
                {complete?"":<button className='btn btn-success' onClick={()=>{completeTodo(mongoId)}}>Done</button>}</td>
                
            </tr>
     
        
    );
};

export default Table;
