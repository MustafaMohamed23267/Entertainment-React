import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import { Nav } from "../../Components/Nav";
import { CalendarDays, Clapperboard, Clock, StarIcon } from "lucide-react";
import { Footer } from "../../Components/Footer";

export const ShowMovie = ()=>
    {
        const [movie , setMovie] = useState({});
        const {id} = useParams();
        const Navigate = useNavigate();

        useEffect(()=>
            {
                const fetchMovie = async()=>{
                    const res = await fetch(`http://127.0.0.1:8000/api/movies/${id}`,{
                        method:"GET",
                        headers:{
                            Accept:"application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                        
                    })
                    const data = await res.json();
                    setMovie(data);
                }
                
                fetchMovie();
            },[id])


            const HandelDelete = async (e)=>
                {
                    e.preventDefault();
                     await fetch(`http://127.0.0.1:8000/api/movies/${id}`,
                        {
                            method:"DELETE",
                            headers:{
                                Accept:"application/json",
                                Authorization: `Bearer ${localStorage.getItem("token")}`
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
<div id="deletemodal" className="fixed hidden backdrop-blur-sm w-full h-[500px]  flex-col justify-center items-center ">     
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
        <div className="flex justify-between">
            <span className="text-detail text-3xl font-bold" >{movie.name}</span>
            <div class="flex justify-center space-x-6">
            <Link to={`/movies/${movie.id}/edit`} className="py-2 px-10 rounded-md bg-linear-to-r from-cyan-300 to-indigo-700 hover:scale-[1.04] 
            hover:to-cyan-300 hover:from-indigo-700 duration-500 text-white font-mono font-bold">Edit </Link>
            <div >
            
                <button type="submit" className="py-2 px-10 rounded-md text-white font-mono font-bold bg-red-500 hover:scale-[1.04] cursor-pointer hover:bg-red-600 duration-300" onClick={modaldelete}>Delete</button>
            </div>
            </div>
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
             
            <a target="_blank" href={movie.trailer} className="bg-green-600 px-6 py-2 rounded-sm text-white hover:bg-green-700 cursor-pointer duration-500"> Watch Trailer</a>
            
            <a target="_blank" href={movie.imdb} className="border px-4 py-2 rounded-sm cursor-pointer hover:bg-gray-700 duration-500 hover:text-white "> Rate Movie <span className="text-black bg-amber-400 p-1 rounded-sm text-sm font-extrabold ml-2 font-[sans-serif] tracking-tighter " >IMDb</span> </a>
        </div>
        
      </div> {/* */}


    

</div>



       </main>
        <Footer/>
</div>)
    }