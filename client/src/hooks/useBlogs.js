import { useState,useEffect } from "react"
import { publishedBlogs } from "../Services/blogs";
const useBlogs = () => {
    const [data,setData]=useState([]);
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(false);
    const [message,setMessage]=useState("")
    useEffect(()=>{
const FeatchedData=async()=>{
    try{
        setLoading(true);
        const {data}=await publishedBlogs();
        setMessage(message)
        setData(data);
    }
    catch(e)
{
    const err = e?.response?.data?.msg || "something went wrong";
        setError(err);
}
finally{
    setLoading(false);
        setTimeout(() => {
          setError("");
          setMsg("");
        }, 3000);
}    };
FeatchedData(),})
return {data,error,loading,message
}
}


export default useBlogs