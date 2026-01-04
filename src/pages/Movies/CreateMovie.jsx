// import axios from "axios";
import {   useState } from "react"
import { useNavigate } from "react-router-dom";
import { Nav } from "../../Components/Nav";
import { Upload } from "lucide-react";
import { Footer } from "../../Components/Footer";

export const CreateMovie = ()=>
    {
        const [form,setForm] = useState(
            {
                name:"",
                gener:"movies",
                type:"",
                releaseDate:"",
                rate:"",
                story:"",
                duration:"",
                director:"",
                trailer:"",
                imdb:"",
                image:null
            }    
        );

        const[errors , setErrors] = useState({});
        const navigate = useNavigate();
         

        
        const handelSubmit= async (e)=>
            {
                e.preventDefault();

                const formData = new FormData();
                formData.append('name', form.name);
                formData.append('gener', form.gener);
                formData.append('type', form.type);
                formData.append('releaseDate', form.releaseDate);
                formData.append('rate', form.rate);
                formData.append('story', form.story);
                formData.append('duration', form.duration);
                formData.append('director', form.director);
                formData.append('trailer', form.trailer);
                formData.append('imdb', form.imdb);
                formData.append('image', form.image); // file object

                const res = await fetch("http://127.0.0.1:8000/api/movies", {
                    method: "POST",
                    body: formData, // no JSON.stringify
                    headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                    
                    },
                });

                const data = await res.json();
                if (data.errors) {
                    setErrors(data.errors);
                } else {
                    console.log(data);
                    
                    navigate('/movies');
                }
     
            }

            return(
            <div>
              <Nav/> 
                
                <form onSubmit={handelSubmit} className="space-y-2 flex  flex-col items-center pb-25 pt-25 text-xl  w-full font-[Copperplate]">
                <p class="text-center text-4xl duration-700 font-[Copperplate] ">Add Movie</p>
                <div class="flex flex-col">
                    <label class=" block py-2 text-md text-base">Name</label>
                    <input   value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Movie Name" className="py-1 px-30 w-full rounded-md bg-white dark:bg-white/5  text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" type="text" required/>
                    {errors.name&&<p className="text-base text-red-500 pt-2">{errors.name[0]}</p>}
                </div>


                <div class="flex flex-col">
                    <label class=" block py-2 text-md text-base">Director</label>
                    <input  value={form.director} onChange={(e)=>setForm({...form,director:e.target.value})} placeholder="director" className="py-1 px-30 w-full rounded-md bg-white dark:bg-white/5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" type="text" required/>
                    {errors.director && <p className="text-base text-red-500 pt-2">{errors.director[0]}</p>}
                </div>

                <div class="flex flex-col ">
                    <label class=" block py-2 text-md text-base">type</label>
                    <input type="text" value={form.type} onChange={(e)=>setForm({...form,type:e.target.value})} placeholder="Type" className=" w-full rounded-md bg-white dark:bg-white/5 px-30 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" required />
                    {errors.type && <p className="text-base text-red-500 pt-2">{errors.type[0]}</p>}
                </div>

                <div class="flex flex-col">
                    <label class=" block py-2 text-md text-base">Rate</label>
                    <input type="number"  value={form.rate} onChange={(e)=>setForm({...form,rate:e.target.value})} placeholder="Rate" step="0.1" className="w-full rounded-md bg-white dark:bg-white/5 px-30 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" required/>
                    {errors.rate && <p className="text-base text-red-500 pt-2">{errors.rate[0]}</p>}
                </div>

                <div class="flex flex-col">
                    <label class=" block py-2 text-md text-base">Duration</label>
                    <input type="number"  value={form.duration} onChange={(e)=>setForm({...form,duration:e.target.value})} placeholder="Duration" step="1" className="w-full rounded-md bg-white dark:bg-white/5 px-30 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" required/>
                    {errors.duration && <p className="text-base text-red-500 pt-2">{errors.duration[0]}</p>}
                </div>

                <div class="flex flex-col ">
                    <label class=" block py-2 text-md text-base">Trailer</label>
                    <input type="text" value={form.trailer} onChange={(e)=>setForm({...form,trailer:e.target.value})} placeholder="import trailer link" className=" w-full rounded-md bg-white dark:bg-white/5 px-30 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" required />
                    {errors.trailer && <p className="text-base text-red-500 pt-2">{errors.trailer[0]}</p>}
                </div>

                <div class="flex flex-col ">
                    <label class=" block py-2 text-md text-base">imdb</label>
                    <input type="text" value={form.imdb} onChange={(e)=>setForm({...form,imdb:e.target.value})} placeholder="import imdb link" className=" w-full rounded-md bg-white dark:bg-white/5 px-30 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" required />
                    {errors.imdb && <p className="text-base text-red-500 pt-2">{errors.imdb[0]}</p>}
                </div>

            {/* <div class="flex space-x-4 "></div> */}
                <div class="flex flex-col ">
                    <label className=" block py-2 text-md text-base">Release Date</label>
                    <label className="w-full rounded-md bg-white dark:bg-white/5 px-38 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
                        <input  type="date" value={form.releaseDate} onChange={(e)=>setForm({...form,releaseDate:e.target.value})}  placeholder="releasedate" className="cursor-pointer " required/>
                        {errors.releaseDate && <p className="text-base text-red-500 pt-2">{errors.releaseDate[0]}</p>}
                    </label>
                
                </div>

                <div class="flex flex-col ">
                    <label className=" block py-2  text-md text-base">Image</label>
                    <label className="w-full rounded-md bg-white dark:bg-white/5 px-38 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
                        <div className="flex justify-between space-x-4">
                            <span >Upload Image  </span>
                            <span><Upload/> </span>
                        </div>
                    
                    </label>


                    <input className="cursor-pointer " type="file"  onChange={(e)=>setForm({...form,image:e.target.files[0]})} name="image" />
                </div>
             
                <div class="flex flex-col">
                    <label class="resize  block py-2 text-md text-base">Story</label>
                    <textarea  value={form.story}  onChange={(e)=>setForm({...form,story:e.target.value})} placeholder="enter the story" className="bg-white py-10 pl-4  w-[26rem] rounded-md  dark:bg-white/5 px-30  text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" required></textarea>
                    {errors.story && <p className="text-base text-red-500 pt-2">{errors.story[0]}</p>}
                    
                </div>
                <hr/>
                <div className="px-20 py-6 w-full flex justify-center">
                    <button type="submit" className="  bg-green-500 px-48 py-1.5 rounded-md cursor-pointer hover:bg-green-700 duration-500 text-base">ADD</button>

                </div>
                
                </form>
                <Footer/>
            </div>
                
            )
    }
