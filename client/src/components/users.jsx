import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constant'

function Users() {

 const [users, setUsers] = useState([])

 const getUsers = () =>{
    try {
        axios.get(BASE_URL + `get-all-users`).then((res) => {
            setUsers(res.data)
        })

    } catch (err) {
        console.log(err)
    }
 }

 const deleteUser = (userId) =>{
    try{
        axios.delete(BASE_URL + `deleteUser/${userId}`).then((res)=>{
            try{
                getUsers()  
            }
            catch (err) {
                console.log(err);
            }
        })
    }catch (err) {
        console.log(err);
    }
 }

 useEffect(() =>{
    getUsers()
 }, [])
  return (
    <div className='container mt-3'>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
 
  <tbody>
    {
        users.map((user)=>{
            return (
                <tr key={user._id}>
      <th scope="row">{user.name}</th>
      <td>{user.contact_number}</td>
      <td>{user.email}</td>
      <td>{user.address}</td>
      <td>
        <button className='btn btn-danger' onClick={()=>{deleteUser(user._id)}}>
                Delete
        </button>
        <button className='btn btn-success mx-3'>
                Edit
        </button>
      </td>
    </tr>
            )
        })
    }
  </tbody>
</table>

<button className='btn btn-primary'>
    Add User
</button>
    </div>
  )
}

export default Users