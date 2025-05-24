import React, { useState } from 'react'
import './Create.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function Create() {
    const [values , setValues] = useState({
        name: '',
        email: ''
    })
  const navigate = useNavigate();
    const handlesubmit = (e) =>{
         e.preventDefault();
         axios.post('http://localhost:6060/user' , values)
         .then(res =>{
            console.log(res);
            navigate('/')
         })
         .catch(err =>console.log(err))
    }
  return (
    <div className='conte'>
        <div className='w-50 bg-white rounded p-3'>

            <form onSubmit={handlesubmit}>
                <h1> Create a new user</h1>
                <div className='mb-2'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' placeholder='Enter Name' required className='form-control' name='name'
                    onChange={e =>setValues({...values, name:e.target.value})} />
                </div>
                <div className='mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Enter Email' required className='form-control'  name='email'
                    onChange={e =>setValues({...values, email:e.target.value})}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}
