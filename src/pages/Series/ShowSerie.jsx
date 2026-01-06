import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import { Nav } from "../../Components/Nav";
import {  CalendarDays,  Clapperboard,  GalleryHorizontalEnd,  GalleryThumbnails, StarIcon, Tv} from "lucide-react";
import { Footer } from "../../Components/Footer";

export const ShowSerie = ()=>{
    const [ShowSerie , setShowSerie] = useState({});
    const {id} = useParams();
    const Navigate = useNavigate();

    useEffect(()=>{
const fetchSeries = async()=>{
                    const res = await fetch(`https://entertainment-laravel-production.up.railway.app//api/series/${id}`,{
                        method:"GET",
                        headers:{
                            Accept:"application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                        
                    })
                    const data = await res.json();
                    console.log(data);
                    setShowSerie(data);
                }
                
                fetchSeries();
                },[id]);

const HandelDelete = async (e)=>{
    e.preventDefault();
    await fetch(`https://entertainment-laravel-production.up.railway.app//api/series/${id}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });

    Navigate('/series');

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
        <>
        
       <Nav/>
                        
                <br/>  
            <div id="deletemodal" className="fixed hidden w-full h-[500px] flex-col justify-center items-center scale-[0] duration-700">     
                <div  className="relative  z-0 w-[450px] h-[150px] bg-foreground flex flex-col justify-center space-y-6 rounded-lg duration-400">
                    <p className="text-center text-background text-base font-semibold">Are you sure you want to delete this serie</p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-red-500 px-4 py-1 rounded-md cursor-pointer duration-500 hover:bg-red-600 text-gray-100" onClick={HandelDelete}>yes</button>
                        <button className="bg-gray-500 px-4 py-1 rounded-md cursor-pointer duration-500 hover:bg-gray-600 text-gray-100" onClick={noselected}>No</button>
                    </div>
                 </div>
            </div>


    <div class="grid grid-cols-2 md:grid-cols-2">

       <div className="p-20 flex justify-start w-[400px] h-[500px] md:w-[550px] md:h-[650px] ">
       <img src={`https://entertainment-laravel-production.up.railway.app//storage/${ShowSerie.image}`} className="w-full " />
       
      </div>

      <div class="felx flex-col p-20 space-y-5">
        <div className="flex justify-between">
            <span className="text-foreground text-3xl font-bold" >{ShowSerie.name}</span>
            <div class="flex justify-center pb-6 space-x-6">
              <Link to={`/series/${ShowSerie.id}/edit`} class="py-2 px-10 rounded-sm  bg-indigo-500 hover:scale-[1.04] hover:bg-indigo-600 duration-300 text-white">Edit </Link>
              <button type="button" onClick={modaldelete} class="py-2 px-10 rounded-sm  bg-red-500 hover:scale-[1.04] cursor-pointer hover:bg-red-600 duration-300 text-white">Delete</button>
            </div>
        </div>

        <div>
            <span className="text-detail">{ShowSerie.type}</span>
        </div>

        <div className="flex space-x-2">
             <Tv/>
            <span className="text-detail">{ShowSerie.TelevisionNetwork}</span>
        </div>

        <div className="flex space-x-2">
            <Clapperboard/>
            <span className="text-detail" > {ShowSerie.director}</span>
        </div>

        <div class="flex space-x-2">
            <StarIcon className="text-yellow-500" />
            <span className="text-detail">{ShowSerie.rate} </span>
        </div>

         <div className="flex space-x-2">
             <GalleryThumbnails/>
            <span className="text-detail">{ShowSerie.seasons} seasons</span>
        </div>

        <div className="flex space-x-2">
             <GalleryHorizontalEnd/>
            <span className="text-detail">{ShowSerie.episodes} episodes</span>
        </div>

        <div className="flex space-x-2">
            <CalendarDays/>
            <span className="text-detail">{ShowSerie.releaseDate}</span>
        </div>

        <div>
            
            <span className="text-detail">{ShowSerie.story}</span>
        </div>
        
        <div className="pt-5 flex justify-center space-x-6">
             
            <a href={ShowSerie.trailer} target="_blank" className="bg-green-600 px-6 py-2 rounded-sm text-white hover:bg-green-700 cursor-pointer duration-500"> Watch Trailer</a>
            
            <a href={ShowSerie.imdb} target="_blank" className="border px-4 py-2 rounded-sm cursor-pointer hover:bg-gray-700 duration-500 hover:text-white"> Rate Serie <span className="text-black bg-amber-400 p-1 rounded-sm text-sm font-extrabold ml-2 ">IMDb</span></a>
        </div>
        
      </div> 


    

</div>

    
<Footer/>
</>    
    )
}