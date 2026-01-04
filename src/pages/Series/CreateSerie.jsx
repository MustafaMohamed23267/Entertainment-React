import { useState } from "react"
import { Nav } from "../../Components/Nav"
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";
import { Footer } from "../../Components/Footer";

export const CreateSerie = ()=>{

    const [form , setForm]=useState({
        gener:"series",
        name:"",
        director:"",
        TelevisionNetwork:"",
        type:"",
        rate:"",
        episodes:"",
        seasons:"",
        releaseDate:"",
        story:"",
        trailer:"",
        imdb:"",
        image:null
    });

    const [errors , setErrors]=useState({});
    const Navigate = useNavigate();

    const HandelCreate = async (e)=>{
        e.preventDefault();

        const DataForm = new FormData();
        DataForm.append("name",form.name);
        DataForm.append("gener",form.gener);
        DataForm.append("director",form.director);
        DataForm.append("TelevisionNetwork",form.TelevisionNetwork);
        DataForm.append("type",form.type);
        DataForm.append("rate",form.rate);
        DataForm.append("seasons",form.seasons);
        DataForm.append("episodes",form.episodes);
        DataForm.append("releaseDate",form.releaseDate);
        DataForm.append("story",form.story);
        DataForm.append("trailer",form.trailer);
        DataForm.append("imdb",form.imdb);
        DataForm.append("image",form.image);

        const res = await fetch("http://127.0.0.1:8000/api/series",{
            method:"POST",
            body:DataForm,
            headers:{
                Accept:"application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });

        const serie = await res.json();

        if(serie.errors)
            {
                setErrors(serie.errors);
            
            }
            else{
                Navigate('/series');
            }

    }

    return(
        <>
        <Nav/>
        <br/>
       
         <form onSubmit={HandelCreate} className="space-y-2 flex  flex-col items-center pt-25 text-xl p-2 w-full  pb-10">
                <p class="text-center text-4xl duration-700 font-bold text-indigo-400 ">Add Serie</p>
                <div class="flex flex-col ">
                    <label class=" block py-2 text-md text-base ">Name</label>
                    <input   value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Serie Name" className="py-1 px-30 w-full rounded-md bg-white dark:bg-white/5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" type="text" required/>
                    {errors.name&&<p className="text-base text-red-500 pt-2">{errors.name[0]}</p>}
                </div>


                <div class="flex flex-col">
                    <label class=" block py-2 text-md text-base">Director</label>
                    <input   value={form.director} onChange={(e)=>setForm({...form,director:e.target.value})} placeholder="Director Name" className="py-1 px-30 w-full rounded-md bg-white dark:bg-white/5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" type="text" required/>
                    {errors.director&&<p className="text-base text-red-500 pt-2">{errors.director[0]}</p>}
                </div>


                <div class="flex flex-col">
                    <label class=" block py-2 text-md text-base">Television Network</label>
                    <input  value={form.TelevisionNetwork} onChange={(e)=>setForm({...form,TelevisionNetwork:e.target.value})} placeholder="Television Network" className="py-1 px-30 w-full rounded-md bg-white dark:bg-white/5  text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" type="text" required/>
                    {errors.TelevisionNetwork&&<p className="text-base text-red-500 pt-2">{errors.TelevisionNetwork[0]}</p>}
                </div>


                <div class="flex flex-col ">
                    <label class=" block py-2 text-md text-base">type</label>
                    <input type="text" value={form.type} onChange={(e)=>setForm({...form,type:e.target.value})} placeholder="Type" className="py-1 px-30 w-full rounded-md bg-white dark:bg-white/5  text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" required />
                    {errors.type && <p className="text-base text-red-500 pt-2">{errors.type[0]}</p>}
                </div>

                <div class="flex flex-col">
                    <label class=" block py-2 text-md text-base">Rate</label>
                    <input type="number"  value={form.rate} onChange={(e)=>setForm({...form,rate:e.target.value})} placeholder="Rate" step="0.1" className="py-1 px-30 w-full rounded-md bg-white dark:bg-white/5  text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" required/>
                    {errors.rate && <p className="text-base text-red-500 pt-2">{errors.rate[0]}</p>}
                </div>

                <div class="flex flex-col">
                    <label class=" block py-2 text-md text-base">Seasons</label>
                    <input type="number"  value={form.seasons} onChange={(e)=>setForm({...form,seasons:e.target.value})} placeholder="Seasons" step="1" className="py-1 px-30 w-full rounded-md bg-white dark:bg-white/5  text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" required/>
                    {errors.seasons && <p className="text-base text-red-500 pt-2">{errors.seasons[0]}</p>}
                </div>

                 <div class="flex flex-col">
                    <label class=" block py-2 text-md text-base">Episodes</label>
                    <input type="number"  value={form.episodes} onChange={(e)=>setForm({...form,episodes:e.target.value})} placeholder="Episodes" step="1"className="py-1 px-30 w-full rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" required/>
                    {errors.episodes && <p className="text-base text-red-500 pt-2">{errors.episodes[0]}</p>}
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

            {/* <div class="flex space-x-4 "> </div> */}
                <div class="flex flex-col ">
                    <label class=" block py-2 text-md text-base">Release Date</label>
                    <label className="w-full rounded-md bg-white dark:bg-white/5 px-38 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
                        <input  type="date" value={form.releaseDate} onChange={(e)=>setForm({...form,releaseDate:e.target.value})}  placeholder="releasedate" className="cursor-pointer " required/>
                        {errors.releaseDate && <p className="text-base text-red-500 pt-2">{errors.releaseDate[0]}</p>}
                    </label>
                
                </div>

                <div class="flex flex-col ">
                    <label class=" block py-2  text-md text-base">Image</label>
                    
                    <label className="w-full rounded-md bg-white dark:bg-white/5 px-38 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
                    <div className="flex justify-between space-x-4">
                        <span >Upload Image  </span>
                        <span><Upload/> </span>
                    </div>
                    </label>

                    <input className="cursor-pointer" type="file"  onChange={(e)=>setForm({...form,image:e.target.files[0]})} name="image" />
                </div>
            
                <div class="flex flex-col">
                    <label class="resize  block py-2 text-md text-base">Story</label>
                    <textarea  value={form.story}  onChange={(e)=>setForm({...form,story:e.target.value})} placeholder="enter the story" className=" py-10 pl-4  w-[26rem] rounded-md bg-white dark:bg-white/5 px-30 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" required></textarea>
                    {errors.story && <p className="text-base text-red-500 pt-2">{errors.story[0]}</p>}
                    
                </div>
                <hr/>
                <div className="px-20 py-6 w-full flex justify-center">
                    <button type="submit" className="  bg-green-500 px-48 py-1.5 rounded-md cursor-pointer hover:bg-green-700 duration-500 text-base">ADD</button>

                </div>
                
                </form>
                
                <Footer/>
        </>
        
    )
}