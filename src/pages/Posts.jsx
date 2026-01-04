import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Posts = ()=>
    {
        const[formData , setFormData] = useState({
            title:"",
            body:"",
        });

        const navigate = useNavigate();

        const handelSubmit=async (e)=>
            {
                e.preventDefault();
                const res = await fetch("http://127.0.0.1:8000/api/posts",{
                    method:"post",
                    body:JSON.stringify(formData),
                    headers:{
                            Accept:'application/json'
                            ,"Content-Type":"application/json"},
                });

                const data = await res.json();
                console.log(data);
                navigate('/');
            }

            return(
                <form onSubmit={handelSubmit} className="w-1/2 mx-auto space-y-6">
                    <input type="text"
                     placeholder="post title" 
                     value={formData.title}
                     id="title"
                     onChange={(e)=>setFormData({...formData,title:e.target.value})}
                     />

                     <textarea
                     placeholder="Post Content"
                     value={formData.body}
                     id="body"
                     onChange={(e)=>setFormData({...formData , body:e.target.value})}
                     >

                     </textarea>

                     <button type="submit" className="cursor-pointer"> submit </button>

                </form>
            )
    } 