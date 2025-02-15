import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

export default function useGetConversation() {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    // using useEffect becoz we only want it to load once
    useEffect(() => {
        const getConversation = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/users')
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setConversations(data);
            }
            catch (error) {
                toast.error(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        getConversation();
    }, []);
    return { loading, conversations };
}

