import React, { useState } from 'react'
import {toast} from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext';

const useSignup=()=> {
    const {authUser,setAuthUser}=useAuthContext();
    const [loading,setLoading]=useState(false);
    
    const signup = async({fullName,userName,password,confirmPassword,gender})=>{
        const success = handleInputErrors({fullName,userName,password,confirmPassword,gender})
        if(!success)return;
        setLoading(true);
        try{
            const res=await fetch("/api/auth/signup",
                {method:"POST",
                 headers:{"Content-Type":"application/json"},
                 body:JSON.stringify({fullName,userName,password,confirmPassword,gender})
                }
            )
            if (!res.ok) {
				
				const errorData = await res.json();
				toast.error(errorData.error || "Signup failed");
				return;
			}
            const data=await res.json();

            localStorage.setItem("chat-user",JSON.stringify(data));
            setAuthUser(data)

        }catch(error){
            toast.error(error.message)
        }finally{
            setLoading(false);
        }
    }
    return {loading,signup};
};
export default useSignup;

function handleInputErrors({ fullName, userName, password, confirmPassword, gender }) {
	if (!fullName || !userName || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 5) {
		toast.error("Password must be at least 5 characters");
		return false;
	}

	return true;
}
