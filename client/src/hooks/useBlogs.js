import { useState,useEffect } from "react"
import { publishedBlogs } from "../Services/blogs";
const useBlogs = ({Title,Page,Limit}) => {
    const [data,setData]=useState([]);
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(false);
    const [message,setMessage]=useState("")
    useEffect(()=>{
const FeatchedData=async()=>{
    try{
        setLoading(true);
        const {data}=await publishedBlogs({Title,Page,Limit});
        setMessage(message);
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
          setMessage("");
        }, 3000);
} 
   };
FeatchedData();}
,[Title,Page,Limit]);
return {data,error,loading,message
}
}


export default useBlogs