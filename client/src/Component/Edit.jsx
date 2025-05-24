import React, { useState, useEffect } from 'react'; // Combined imports
import './Edit.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    axios
      .get(`http://localhost:6060/Read/${id}`) // Fixed URL template string
      .then((res) => {
        console.log(res);
        setValues({
          ...values,
          name: res.data[0].name,
          email: res.data[0].email
        });
      })
      .catch((err) => console.log(err));
  }, [id]); // Added id as a dependency

  const handleEdit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:6060/Edit/${id}`, values) // Fixed URL template string
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='conten'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleEdit}>
          <h1>Edit a user</h1>
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              placeholder='Enter Name'
              className='form-control'
              name='name'
              value={values.name}
              onChange={(e) =>
                setValues({
                  ...values,
                  name: e.target.value
                })
              }
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='Enter Email'
              className='form-control'
              name='email'
              value={values.email}
              onChange={(e) =>
                setValues({
                  ...values,
                  email: e.target.value
                })
              }
            />
          </div>
          <button className='btn btn-success'>Edit</button>
        </form>
      </div>
    </div>
  );
}