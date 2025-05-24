import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:6060/')
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => { 
    axios
      .delete(`http://localhost:6060/Delete/${id}`)
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.error('Error deleting item:', err));
  };

  return (
    <div className='content'>
      <div className="con w-50 bg-white rounded p-3">
        <h2>User List</h2>
        <div className='link'>
          <Link to="/Create" className='btn btn-success'>Create new user</Link>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                  <Link to={`/Read/${student.id}`} className='btn btn-sm btn-info'>Read</Link>
                  <Link to={`/Edit/${student.id}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                  <button 
                    onClick={() => handleDelete(student.id)} 
                    className='btn btn-sm btn-danger'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}