import { useEffect } from "react";
import { useSocketContext } from "../context/Socketcontext";
import useConversation from "../store/useConversation";

const useListenMessages = ()=>{
    const {socket}=useSocketContext()
    const{messages,setMessages}=useConversation();

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            setMessages([...messages,newMessage])
        })
        return () => socket?.off("newMessage")
    },[socket,setMessages,messages]);
}
export default useListenMessages