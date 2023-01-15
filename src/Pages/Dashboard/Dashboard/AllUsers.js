import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey:['users'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data
        }
    });


    const handleMakeAdmin = (id) => {
        const url = `http://localhost:5000/users/admin/${id}`;
        fetch(url,{
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make Admin Create Successfully')
                refetch();
            }
            console.log(data);
        })
    }

  return (
    <div>
      <h2 className="text-2xl text-secondary font-bold">All Users</h2>
      <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => {
                const {_id,email, name, role} = user;
                return(
                  <tr key={_id}>
                    <th>{index + 1}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{ role !== 'admin' && <button onClick={() => handleMakeAdmin(_id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                    <td><button className='btn btn-xs btn-accent'>Delete</button></td> 
                  </tr> 
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default AllUsers
