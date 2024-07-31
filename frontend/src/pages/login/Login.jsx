import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();

    const {loading,login}=useLogin();

    const handleOnSubmit = async(e)=>{
        e.preventDefault();
        await login(username,password);
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
                <span className='text-blue-500'>  ChatterBox</span>
            </h1>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text  text-gray-300'>Username</span>
                    </label>
                    <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter username' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text  text-gray-300'>Password</span>
                    </label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password' className='w-full input input-bordered h-10'/>
                </div>
                {/* dont have an account link here */}
                <Link className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' to="/signup">
						Don't have an account?
					</Link>
                <div>
                    <button disabled={loading} className='btn btn-block btn-sm mt-2'>
                    {loading?<span className='loading loading-spinner'></span>:"Login"}
                        </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login