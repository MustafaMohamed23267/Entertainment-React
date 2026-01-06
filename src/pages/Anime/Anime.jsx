import { useEffect, useState } from "react"
import { Nav } from "../../Components/Nav"
import { Link } from "react-router-dom";
import { Calendar,  Pen,  Star, Timer,  Video } from "lucide-react";
import { Footer } from "../../Components/Footer";


export const Anime = ()=>
    {
        const type = [{name:"shonin"}];
        const [anime , setAnime]=useState([]);
        useEffect(()=>{
            fetch("https://entertainment-laravel-production.up.railway.app//api/anime").then((res)=>res.json()).then((json)=>setAnime(json));
        },[])
        return(
            <div>
            <Nav/>
            <br/>
            <main>
            <h1 className="mt-20 text-center text-5xl font-bold p-5 duration-700">Anime Manger</h1>
    <p class=" text-center text-md duration-700">Manage your personal Anime collection</p>

    
        
           <div className="flex py-4 px-10 md:space-x-4 w-full justify-center max-md:flex-col max-md:space-y-4 text-[#E0E0E0] max-md:items-center"> 
             <input type="search" name="searchname"  class="py-1 px-2  w-[60%] max-md:w-full rounded-md  focus:outline-indigo-500 outline-1 -outline-offset-1 outline-gray-300 text-background bg-foreground duration-700"placeholder="search movies or directors..." value={""} onChange={""} />
                
                
            <div  className=" w-[20%] max-md:w-full duration-700">
             <select name="selectedtype" onChange={""}  className="p-1 w-full rounded-md focus:outline-indigo-500 text-background text-center bg-foreground duration-700">
                
                {type.map((data,key)=>
                <option key={key} value={data.name}>{data.name}</option>
                )}
                
                </select>
            </div>
            <Link to={'/addanime'} className="py-1 px-6 max-md:w-full text-center rounded-lg bg-green-500 hover:bg-green-600 duration-500 max-md:duration-700 text-base">Add Anime</Link>
           </div> 
        

                 <div className="grid grid-cols-2 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-6 mt-10 z-80">
   
                {anime.map(data=>
                
                        <div key={data.id} className="flex flex-col bg-card duration-700 shadow-lg/30 text-cardtext  h-[700px] overflow-hidden  rounded-xl ">
                            <Link to={`/anime/${data.id}`}  class=" space-y-5  ">
                                <div>
                                    <img src={`https://entertainment-laravel-production.up.railway.app//storage/${data.image}`} class="duration-500  hover:scale-[1.05] w-[100%] h-[500px] z-50" />
                                </div>
                                
                                
                                <div className="pl-5 font-bold text-lg z-100 ">
                                {data.name}
                                </div>

                                <div className=" text-center text-sm flex justify-center space-x-1">  
                                <Pen width="18px" height="18px"/><span>Written by </span>
                                <span>{data.writer}</span>
                                </div>

                                <div className="flex space-x-4 pl-3">
                                    <div className="flex space-x-2 text-sm bg-gray-500  px-3 rounded-full animate-pulse transition duration-700 py-1"> 
                                    <Star width="15px" height="15px" className="text-white"/><p className="text-gray-200"> {data.rate} </p>   
                                    </div>

                                    <div className="flex space-x-4 text-sm text-gray-900 bg-gray-200 py-1 px-2 rounded-full"> 
                                {data.type}
                                </div>  

                                <div className="flex space-x-1 text-sm text-gray-900 bg-gray-300 px-2 py-1 rounded-full"> 
                                    <Calendar width="15px" height="15px"/> <span >{new Date(data.releaseDate).getFullYear()}</span>

                                </div>  
                            
                                </div>

                                <div className="flex space-x-4 pl-3 ">
                                    <span className="text-sm px-2 py-1 text-gray-900 bg-gray-200 rounded-full">{data.seasons} Seasons</span>

                                     <span className="text-sm px-2 py-1 text-gray-900 bg-gray-200 rounded-full">{data.episodes} Episodes</span>
                                </div>
                                
                            </Link>
                        </div>    
                
                )}

                </div>
            </main>
            <Footer/>
            </div>
            
        )

    }