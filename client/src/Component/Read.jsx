import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './Read.css';

export default function Read() {
  const { id } = useParams();
  const [user, setUser] = useState([]); // Initialize as an empty object

  useEffect(() => {
    axios.get('http://localhost:6060/Read/'+id) // Concatenate id properly into the URL
      .then(res => {
        console.log(res);
        setUser(res.data[0]); // Set the data correctly
      })
      .catch(err => console.log(err));
  }, []);
   
  return (
    <div className='Read'>
      <div className='w-50 bg-white rounded p-3'>
        <h2>User Details</h2>
        <h2>ID:{user.id}</h2>
        <h2>Name:{user.name}</h2>
        <h2>Email:{user.email}</h2>
        <Link to="/" className='btn btn-primary me-3'>Back</Link>
        <Link to={`/Edit/${user.id}`} className='btn btn-info '>Edit</Link>
      </div>
    </div>
  );
}