import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
export default function useLogout() {
    const [loading,setLoading]=useState(false);
    const {setAuthUser} = useAuthContext();
    const logout = async ()=>{
        setLoading(true);
        try{
            const res=await fetch("/api/auth/logout",{
                method:"POST",
                headers:{"Content-Type":"application/json"}
            })
            if (!res.ok) {
				
				const errorData = await res.json();
				toast.error(errorData.error || "Signup failed");
				return;
			}
            localStorage.removeItem("chat-user");
            setAuthUser(null)
        }catch(error)
        {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
  return {loading,logout}
}
