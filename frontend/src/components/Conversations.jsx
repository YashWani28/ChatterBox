import Conversation from "./Conversation";
import useGetConversation from "../hooks/useGetConversation";
const Conversations = () => {
	const {loading,conversations} = useGetConversation();
	//console.log(conversations);
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{conversations.map((conv,indx)=>{
				return(
					<Conversation key={conv._id} conversation={conv} lastIdx={indx===conversations.length - 1}/>
				)
			})}
			{loading?<span className="loading loading-spinner mx-auto"></span>:null}
		</div>
	);
};
export default Conversations;
