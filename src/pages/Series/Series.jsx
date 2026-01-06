import { useEffect, useState } from "react"
import { Calendar,  Star, Timer,  Video } from "lucide-react";
import { Link } from "react-router-dom";
import { Nav } from "../../Components/Nav"
import axios from "axios";
import { Footer } from "../../Components/Footer";

export const Series = ()=>
    {
        const type =[
            {name:"all"},
            {name:"Horror"},
            {name:"Drama"},
            {name:"Crime"},
            {name:"Action"},
            {name:"Thriller"}
        ];

        const[typestate , setTypestate] = useState([
            {name:"All"},
            {name:"Horror"},
            {name:"Drama"},
            {name:"Crime"},
            {name:"Action"}
        ]);

        const [rate1 ,setRate1] = useState("");
        const [rate2 , setRate2] = useState("");

        const[serie , setSerie] = useState([]);

        const [search , setSearch] = useState('');

        useEffect(()=>{
            const fetchSeries = async()=>{
                    const res = await fetch("https://entertainment-laravel-production.up.railway.app/api/series",{
                        method:"GET",
                        headers:{
                            Accept:"application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                        
                    })
                    const data = await res.json();
                    setSerie(data);
                }
                
                fetchSeries();
        },[]);

       
        

        const handelSearch = async (e)=>
            {
                const value = e.target.value;
                setSearch(value);
                const searchout = await axios.get(`https://entertainment-laravel-production.up.railway.app/api/series?searchname=${value}`,{
                    headers:{
                            Accept:"application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                     });
                setSerie(searchout.data);

            }

            

            const handelType = async (e)=>
                {
                    const typevalue = e.target.value;
                    setTypestate(typevalue)
                    const res = await axios.get(`https://entertainment-laravel-production.up.railway.app/api/series?selectedtype=${typevalue}`,{
                    headers:{
                            Accept:"application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                     });
                    setSerie(res.data);
                }


                const handelRate = async ()=>
                            {
                
                                const getDataByRate2 = await axios.get(`https://entertainment-laravel-production.up.railway.app/api/series?rate1=${rate1}&rate2= ${rate2}`,{
                                    headers:{
                                            Accept:"application/json",
                                            Authorization: `Bearer ${localStorage.getItem("token")}`
                                        }
                                });
                                setSerie(getDataByRate2.data);
                            }


        return(
        <div>
            <Nav/>
            <br/>
            <main className="pb-20">
                <h1 className="mt-20 text-center text-5xl font-bold p-5 duration-700">Series Manger</h1>
    <p class=" text-center text-md duration-700">Manage your personal Series collection</p>

    <div className="flex justify-center p-4  space-x-4">
                
                    

                    <div className="space-x-2">
                    <span>Rate Between </span>
                    <input name="rate1" type="number" value={rate1} onChange={(e)=>setRate1(e.target.value)}  className="w-20 rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" step="0.1" /> 
                    <span> and </span>
                    <input name="rate2" step="0.1" value={rate2} onChange={(e)=>setRate2(e.target.value)}  type="number" className="w-20 rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"/>
                    <button onClick={handelRate} type="submit" className="px-4 py-1 bg-green-500 rounded-md cursor-pointer hover:bg-green-600 duration-400">Filter</button>
                    </div>
                  </div>   
        
           <div className="flex py-4 px-10 md:space-x-4 w-full justify-center max-md:flex-col max-md:space-y-4 text-[#E0E0E0] max-md:items-center"> 
             <input type="search" name="searchname"  className="  w-[60%] max-md:w-full rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" placeholder="search movies or directors..." value={search} onChange={handelSearch} />
                
                
            <div  className=" w-[20%] max-md:w-full duration-700">
             <select name="selectedtype" onChange={handelType}  className="p-1 w-full rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-foreground  outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
                
                {type.map((data,key)=>
                <option className="bg-white dark:bg-gray-900  "  key={key} value={data.name}>{data.name}</option>
                )}
                
                </select>
            </div>
            <Link to={'/createserie'} className="py-1 px-6 max-md:w-full text-center rounded-lg bg-green-500 hover:bg-green-600 duration-500 max-md:duration-700 text-base">Add Serie</Link>
           </div> 
        

                 <div className="grid grid-cols-2 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-6 mt-10 z-80">
   
                {serie.map(data=>
                
                        <div key={data.id} className="flex flex-col duration-700 outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 dark:bg-white/5 h-[700px] overflow-hidden  rounded-xl ">
                            <Link to={`/series/${data.id}`}  class=" space-y-5  ">
                                <div>
                                    <img src={`https://entertainment-laravel-production.up.railway.app/storage/${data.image}`} class="duration-500  hover:scale-[1.05] w-[100%] h-[500px] hover:z-0 z-10" />
                                </div>
                                
                                
                                <div className="pl-5 font-bold text-lg z-100 ">
                                {data.name}
                                </div>


                                 <div className=" text-center text-sm flex justify-center space-x-1">  
                                <Video width="18px" height="18px"/><span>{data.TelevisionNetwork}</span><span>Streaming Network </span>
                                
                                </div>


                                <div className="flex space-x-3 justify-center">
                                    <div className="flex space-x-2 text-sm bg-gray-500  px-3 rounded-full animate-pulse transition duration-700 py-1"> 
                                    <Star width="16px" height="16px" className="text-amber-400"/><p className="text-gray-200"> {data.rate} </p>   
                                    </div>

                                    <div className="flex space-x-4 text-sm text-gray-900 bg-gray-200 py-1 px-4 rounded-full"> 
                                {data.type}
                                </div>  

                                <div className="flex space-x-1 text-sm text-gray-900 bg-gray-300 px-2 py-1 rounded-full"> 
                                    <Calendar width="15px" height="15px"/> <span >{new Date(data.releaseDate).getFullYear()}</span>

                                </div>  
                            
                                </div>

                                <div className="flex justify-center space-x-2">
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