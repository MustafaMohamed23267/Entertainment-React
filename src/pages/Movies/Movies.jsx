import { useEffect, useState } from "react"

import { Calendar, Star, Timer,  Video } from "lucide-react";
import { Link } from "react-router-dom";
import { Nav } from "../../Components/Nav";
import axios from "axios";
import { RateFilter } from "../../Components/RateFilter";
import { Footer } from "../../Components/Footer";

export const Movies = ()=>
    {
        const type = [{name:"all"},{name:"Crime"} ,{name:" Sci-Fi" }, {name:"Drama"}, {name:"Action"} , {name:"War"} , {name:"Thriller"}];
        const [data , setData]= useState([]);
        useEffect(()=>
            {
                // fetch("https://entertainment-laravel-production.up.railway.app/api/movies").then((Response)=>Response.json()).then((json)=>setData(json));
                const fetchMovies = async()=>{
                    const res = await fetch("https://entertainment-laravel-production.up.railway.app/api/movies",{
                        method:"GET",
                        headers:{
                            Accept:"application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                        
                    })
                    const data = await res.json();
                    setData(data);
                }
                
                fetchMovies();
            },[]);

            const [activetype , setActivetype] = useState("all");

            

            const handeltype = async (e)=>
                {
                    

                    const enteredtype = e.target.value;
                    setActivetype(enteredtype);
                    const apitype = await axios.get(`https://entertainment-laravel-production.up.railway.app/api/movies?selecttype=${enteredtype}`,{
                    headers:{
                            Accept:"application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                     });
                    setData(apitype.data);
                        
                   

                   

                }


            const [search,setSearch] = useState('');

            const handelsearch = async (e)=>
                {
                    const value = e.target.value;
                    setSearch(value);
                    const searchget = await axios.get(`https://entertainment-laravel-production.up.railway.app/api/movies?searchname=${value}`,{
                    headers:{
                            Accept:"application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    });

                    setData(searchget.data);
                }

       // const ratevalue = [{value:6},{value:7},{value:8},{value:9}];

       // const[rate , setRate] = useState("all");

        //const moviesrat = data.filter(datarate=> rate === "all " || datarate.rate >= rate);
        // const handelRate = async (e)=>
        //     {
        //         const ratevalue = e.target.value;
        //         setRate(ratevalue);
        //         const getDataByRate = await axios.get(`https://entertainment-laravel-production.up.railway.app/api/movies?rate=${ratevalue}`);
        //         setData(getDataByRate.data);
        //     }

            const [rate1 ,setRate1] = useState("");
            const [rate2 , setRate2] = useState("");

            const handelRate = async ()=>
            {

                const getDataByRate2 = await axios.get(`https://entertainment-laravel-production.up.railway.app/api/movies?rate1=${rate1}&rate2= ${rate2}`,{
                    headers:{
                            Accept:"application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                });
                setData(getDataByRate2.data);
            }



            
        return(

        <div>
              <Nav/>
              <br/>
              <head><title>Movies</title></head>
            <main className="pb-20 ">
                <h1 className="mt-20 text-center text-5xl font-bold p-5 duration-700 navlink">Movie Manger</h1>
                <p className=" text-center text-md duration-700 animate-pulse navlink">Manage your personal movie collection</p>
    
                  <div className="flex justify-center p-4  space-x-4">
                
                    {/* <select
                    name="rate"
                    onChange={handelRate}
                    className="bg-gray-500 px-8 py-1 rounded-md text-base text-md font-semibold">
                        <option value="all">All</option>
                        {ratevalue.map((rate,key)=>
                            <option key={key} value={rate.value}>rate &ge; {rate.value}</option>
                        )}
                    </select> */}

                    <div className="space-x-2">
                    <span>Rate Between </span>
                    <input name="rate1" type="number" value={rate1} onChange={(e)=>setRate1(e.target.value)}  className="w-20 rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" step="0.1" /> 
                    <span> and </span>
                    <input name="rate2" step="0.1" value={rate2} onChange={(e)=>setRate2(e.target.value)}  type="number" className="w-20 rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"/>
                    <button onClick={handelRate} type="submit" className="px-4 py-1 bg-green-500 rounded-md cursor-pointer hover:bg-green-600 duration-400">Filter</button>
                    </div>
                  </div>   

           <div className="flex py-4 px-10 md:space-x-4 w-full justify-center max-md:flex-col max-md:space-y-4 text-[#E0E0E0] max-md:items-center"> 
           
                <input type="search" name="searchname" onChange={handelsearch} value={search} className="  w-[60%] max-md:w-full rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" placeholder="search movies or directors..." />
                
            <div  className=" w-[20%] max-md:w-full duration-700">
             <select name="selecttype" onChange={handeltype} className="p-1 w-full rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
             {/* <option value="all">All</option> */}
                {type.map((data)=>
                <option className="bg-white dark:bg-gray-900  "  value={data.name }>{data.name}</option>
                )}
                
                </select>
            </div>
            <Link to={'/createmovie'} className="py-1 px-6 max-md:w-full text-center rounded-lg bg-green-500 hover:bg-green-600 duration-500 max-md:duration-700 text-base">Add Movie</Link>
           </div> 
        


         <div className="grid grid-cols-2 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-6 mt-10 z-80">
   
{data.map(data=>
   
        <div key={data.id} className="flex flex-col  duration-700 outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 dark:bg-white/5  h-[700px] overflow-hidden  rounded-xl ">
             <Link to={`/movies/${data.id}`}  class=" space-y-5  ">
                 <div>
                    <img src={`https://entertainment-laravel-production.up.railway.app/storage/${data.image}`} class="duration-500  hover:scale-[1.05] w-[100%]  z-50 overflow-hidden" />
                </div>
                
                <div className="pl-5  z-100 ">
                    <span className="font-extrabold text-lg">{data.name}</span>
                    </div>

                <div className=" text-center text-sm flex justify-center space-x-1">  
                    <Video width="18px" height="18px"/><span>Directed by </span>
                    <span>{data.director}</span>
                </div>

                <div className="flex space-x-4 pl-3">
                    <div className="flex space-x-2 text-sm bg-gray-500  px-3 rounded-full animate-pulse transition duration-700 py-1"> 
                    <Star width="18px" height="18px" className="text-amber-300 profile_image"/><p className="text-gray-200"> {data.rate} </p>   
                    </div>

                    <div className="flex space-x-4 text-[12px] text-gray-900 bg-gray-200 py-1 px-2 rounded-full"> 
                        {data.type}
                    </div>  

                    <div className="flex space-x-1 text-sm text-gray-900 bg-gray-300 px-2 py-1 rounded-full"> 
                            <Calendar width="15px" height="15px"/> <span >{new Date(data.releaseDate).getFullYear()}</span>
                    </div>  
                
                </div>

                 <div className="flex pl-3">
                    <div className="flex space-x-1 text-gray-900 text-sm bg-gray-300 px-2 rounded-full"> 
                    <Timer width="15px" height="15px"/>{data.duration}<span>m</span>
                     </div>  
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