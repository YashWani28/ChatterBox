import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import MessageSkeleton from './MessageSkeleton'
import {useEffect,useRef} from 'react'

const Messages = () => {
	const{messages,loading}=useGetMessages();
	const lastMessageRef = useRef();
	
	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}
			{loading && [...Array(5)].map((_,indx)=> <MessageSkeleton key={indx}/>)}
			{!loading && messages.length===0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		
		</div>
	);
};
export default Messages;