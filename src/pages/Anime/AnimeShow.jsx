import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { Nav } from "../../Components/Nav";

export const Animehow = ()=>
    {
        const [showAnime , setShowAnime] = useState({});
        const {id} = useParams();
        const navigate = useNavigate();
        useEffect(()=>{
            fetch(`http://127.0.0.1:8000/api/anime/${id}`).then((res)=>res.json()).then((json)=>setShowAnime(json))
        },[id]);

        const HandelDelete = async (e)=>{
            e.preventDefault();
            await fetch(`http://127.0.0.1:8000/api/anime/${id}` ,{
                method:"DELETE",
                headers:{
                    Accept:"application/json"
                }
            });
            navigate('/anime');
        }

        return(
            <>
             <Nav/>
             <br/>
              <div class="grid grid-cols-1 md:grid-cols-2">

                        <div class="p-20 flex justify-start">
                        <img src={`http://127.0.0.1:8000/storage/${showAnime.image}`} class="max-md:w-full md:w-[350px] md:h-[500px] " />
                        </div>

                        <div class="felx flex-col p-20 space-y-10">
                            <div class="grid grid-cols-2 space-x-10">
                                
                                <span class="text-primary font-bold">Anime</span>
                                <span class="text-detail" >{showAnime.name}</span>
                            </div>

                            <div class="grid grid-cols-2 space-x-10">
                                
                                <span class="text-primary font-bold">Writer</span>
                                <span class="text-detail" >{showAnime.writer}</span>
                            </div>

                            <div class="grid grid-cols-2 space-x-10">
                                
                                <span class="text-primary font-bold">Studio</span>
                                <span class="text-detail" >{showAnime.studio}</span>
                            </div>

                           
                            <div class="grid grid-cols-2 space-x-10">
                                <span class="text-primary font-bold">rate</span>
                                <span class="text-detail">{showAnime.rate} </span>
                            </div>

                            

                            <div class="grid grid-cols-2 space-x-10">
                                <span class="text-primary font-bold">type</span>
                                <span class="text-detail">{showAnime.type}</span>
                            </div>

                             <div class="grid grid-cols-2 space-x-10">
                                <span class="text-primary font-bold">Seasons</span>
                                <span class="text-detail">{showAnime.seasons}</span>
                            </div>

                            <div class="grid grid-cols-2 space-x-10">
                                <span class="text-primary font-bold">Episodes</span>
                                <span class="text-detail">{showAnime.episodes}</span>
                            </div>

                            
                            <div class="grid grid-cols-2 space-x-10">
                                <span class="text-primary font-bold">Release Date</span>
                                <span class="text-detail">{showAnime.releaseDate}</span>
                            </div>

                            <div class="grid grid-cols-2 space-x-10">
                                <span class="text-primary font-bold">Story</span>
                                <span class="text-detail">{showAnime.story}</span>
                            </div>
                            
                        </div>


                        

                    </div>

                    <div class="flex justify-center pb-6 space-x-6">
                        <Link to={`/anime/${showAnime.id}/edit`} class="py-1 px-10 rounded-md  bg-yellow-400 hover:scale-[1.04] hover:bg-yellow-500">Edit </Link>
                        
                            <button type="submit" onClick={HandelDelete} class="py-1 px-10 rounded-md  bg-red-500 hover:scale-[1.04] cursor-pointer hover:bg-red-600">Delete</button>
                       
                    </div>
             </>
           

        )
    }