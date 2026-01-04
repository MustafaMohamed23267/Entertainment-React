import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import { CalendarDays, Clapperboard, Clock, StarIcon } from "lucide-react";
import { Nav } from "../Components/nav";
import axios from "axios";

export const ShowSearch = ()=>
    {
        const [movie , setMovie] = useState({});
        const {id} = useParams();
        const Navigate = useNavigate();

        //const Api = "http://127.0.0.1:8000/api/movies";
        useEffect(()=>
            {
                const fetchMovies = async()=>{
                    const res = await axios.get(`http://127.0.0.1:8000/api/search?search=${id}`,{
                        method:"GET",
                        headers:{
                            Accept:"application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                        
                    })
                    const data = await res.json();
                    setMovie(data);
                }
                
                fetchMovies();
            },[id])


            const HandelDelete = async (e)=>
                {
                    e.preventDefault();
                     await fetch(`http://127.0.0.1:8000/api/search/${id}`,
                        {
                            method:"DELETE",
                            headers:{
                                Accept:"application/json"
                            }

                        });
                    Navigate('/movies');
                }

    const  modaldelete = ()=>
    {
        const fullopacity = document.getElementById("deletemodal").style.display="flex" ;
        const duratin = document.getElementById("deletemodal").style.scale= "100%" ;
        return fullopacity && duratin;
    } 

const  noselected = ()=>
    {
const fullopacity = document.getElementById("deletemodal").style.display="none" ;
        const duratin = document.getElementById("deletemodal").style.scale= "0%" ;
        return fullopacity && duratin;    
    }  

        return(
             <div>
                        <Nav/>
                        <head>
                            <title>{movie.name}</title>
                        </head>
                        <main>
                        {/* <div className="h-[100vh] flex flex-col items-center  justify-center text-5xl font-bold">{movie.name}</div> */}
<div id="deletemodal" className="fixed hidden w-full h-[500px] flex flex-col justify-center items-center ">     
                <div  className="relative  z-0 w-[450px] h-[150px] bg-foreground flex flex-col justify-center space-y-6 rounded-lg  duration-400">
                    <p className="text-center text-background text-base font-semibold">Are you sure you want to delete this serie</p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-red-500 px-4 py-1 rounded-md cursor-pointer duration-500 hover:bg-red-600 text-gray-100" onClick={HandelDelete}>yes</button>
                        <button className="bg-gray-500 px-4 py-1 rounded-md cursor-pointer duration-500 hover:bg-gray-600 text-gray-100" onClick={noselected}>No</button>
                    </div>
                 </div>
            </div>
<div class="grid grid-cols-2 md:grid-cols-2">

       <div className="p-20 flex justify-start w-[400px] h-[500px] md:w-[550px] md:h-[650px] ">
       <img src={`http://127.0.0.1:8000/storage/${movie.image}`} className="w-full " />
      </div>

      <div class="felx flex-col p-20 space-y-5">
        <div >
            <span className="text-detail text-2xl font-bold" >{movie.name}</span>
        </div>

        <div>
            <span className="text-detail">{movie.type}</span>
        </div>

        <div className="flex space-x-2">
            <Clapperboard/>
            <span className="text-detail" > {movie.director}</span>
        </div>

        <div class="flex space-x-2">
            <StarIcon className="text-yellow-500" />
            <span className="text-detail">{movie.rate} </span>
        </div>

        <div class="flex space-x-2">
            <Clock/>
            <span className="text-detail">{movie.duration}m</span>
        </div>

        <div className="flex space-x-2">
            <CalendarDays/>
            <span className="text-detail">{movie.releaseDate}</span>
        </div>

        <div>
            
            <span className="text-detail">{movie.story}</span>
        </div>
        
        <div className="pt-5 flex justify-center space-x-6">
             
            <a href="https://www.youtube.com/" className="bg-green-600 px-6 py-2 rounded-sm text-white hover:bg-green-700 cursor-pointer duration-500"> Watch Trailer</a>
            
            <a className="border px-4 py-2 rounded-sm cursor-pointer hover:bg-gray-700 duration-500 hover:text-white"> Rate Movie</a>
        </div>
        
      </div> {/* */}


    

</div>

<div class="flex justify-center pb-6 space-x-6">
      <Link to={`/movies/${movie.id}/edit`} className="py-1 px-10 rounded-md  bg-yellow-400 hover:scale-[1.04] hover:bg-yellow-500">Edit </Link>
      <div >
       
        <button type="submit" className="py-1 px-10 rounded-md  bg-red-500 hover:scale-[1.04] cursor-pointer hover:bg-red-600" onClick={modaldelete}>Delete</button>
      </div>
    </div>

                        </main>
            </div>
        )
    }