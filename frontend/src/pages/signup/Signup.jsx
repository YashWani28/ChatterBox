import React,{useState,useEffect} from 'react'
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.jsx'

const SignUp = () => {

	const [inputs,setinputs]=useState({
		fullName:"",
		userName:"",
		password:"",
		confirmPassword:"",
		gender:""
	})

	const {loading,signup}=useSignup();

	const handleOnChange = (e)=>{
		const {name,value}=e.target;
		setinputs({...inputs,[name]:value});
	}

	const handleOnSubmit = async(e)=>{
		e.preventDefault();
		await signup(inputs);
	}
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatterBox</span>
				</h1>

				<form onSubmit={handleOnSubmit}>
					<div>
						<label className='label p-2 '>
							<span className='text-base label-text  text-gray-300'>Full Name</span>
						</label>
						<input type='text' value={inputs.fullName} onChange={handleOnChange} name="fullName" placeholder='Enter your full name' className='w-full input input-bordered  h-10' />
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text  text-gray-300'>Username</span>
						</label>
						<input type='text' value={inputs.userName} onChange={handleOnChange} name="userName" placeholder='Enter username' className='w-full input input-bordered h-10' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text  text-gray-300'>Password</span>
						</label>
						<input
							type='password'
							value={inputs.password} onChange={handleOnChange}
							name="password"
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text  text-gray-300'>Confirm Password</span>
						</label>
						<input
							type='password'
							value={inputs.confirmPassword} onChange={handleOnChange}
							name="confirmPassword"
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
						/>
					</div>

					<GenderCheckbox changeGender={handleOnChange}/>

					<Link className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' to='/login'>
						Already have an account?
					</Link>

					<div>
						<button disabled={loading} className='btn btn-block btn-sm mt-2 border border-slate-700'>
							{loading?<span className='loading loading-spinner'></span>:"Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;