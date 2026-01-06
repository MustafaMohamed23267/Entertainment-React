import { useState } from "react"
import { Nav } from "../../Components/Nav"
import { useNavigate } from "react-router-dom";

export const AddAnime = ()=>
    {
        const[form ,setForm] = useState([
            {
                name:"",
                type:"",
                writer:"",
                studio:"",
                rate:"",
                seasons:"",
                episodes:"",
                releaseDate:"",
                story:"",
                image:null
            }
            
        ]);

        const [errors , setErrors] = useState({});
        const navigate = useNavigate();

        const HandelCreate = async (e)=>
            {
                e.preventDefault();
                const dataForm = new FormData();
                dataForm.append("name",form.name);
                dataForm.append("writer",form.writer);
                dataForm.append("studio",form.studio);
                dataForm.append("type",form.type);
                dataForm.append("rate",form.rate);
                dataForm.append("releaseDate",form.releaseDate);
                dataForm.append("seasons",form.seasons);
                dataForm.append("episodes",form.episodes);
                dataForm.append("story",form.story);
                dataForm.append("image",form.image);

                const CreateAnime = await fetch("https://entertainment-laravel-production.up.railway.app/api/anime",{
                    method:"POST",
                    body:dataForm,
                    headers:{
                        Accept:"application/json"
                    }
                });

                const Anime = await CreateAnime.json();

                if(Anime.errors)
                    {
                        setErrors(Anime.errors);
                    }
                    else
                        {
                            navigate('/Anime');
                        }

            }


        return(
            <>
            <Nav/>
            <br/>
             <form onSubmit={HandelCreate} className="space-y-2 flex  flex-col items-center pt-25 text-xl p-2 w-full h-[100vh] ">
                <p class="text-center text-4xl duration-700 font-bold">Add Movie</p>
                <div class="flex flex-col">
                    <label class=" block py-2 text-md text-base">Name</label>
                    <input   value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Anime Name" className="py-1 px-30 w-full text-black text-center bg-white rounded-xl focus:outline-indigo-500 outline-1 -outline-offset-1 outline-gray-300 text-base shadow-md/20" type="text" required/>
                    {errors.name&&<p className="text-base text-red-500 pt-2">{errors.name[0]}</p>}
                </div>

                <div class="flex flex-col">
                    <label class=" block py-2 text-md text-base">Writer</label>
                    <input   value={form.writer} onChange={(e)=>setForm({...form,writer:e.target.value})} placeholder="Writer" className="py-1 px-30 w-full text-black text-center bg-white rounded-xl focus:outline-indigo-500 outline-1 -outline-offset-1 outline-gray-300 text-base shadow-md/20" type="text" required/>
                    {errors.writer&&<p className="text-base text-red-500 pt-2">{errors.name[0]}</p>}
                </div>

                <div class="flex flex-col">
                    <label class=" block py-2 text-md text-base">Studio</label>
                    <input   value={form.studio} onChange={(e)=>setForm({...form,studio:e.target.value})} placeholder="Studio" className="py-1 px-30 w-full text-black text-center bg-white rounded-xl focus:outline-indigo-500 outline-1 -outline-offset-1 outline-gray-300 text-base shadow-md/20" type="text" required/>
                    {errors.studio&&<p className="text-base text-red-500 pt-2">{errors.name[0]}</p>}
                </div>



                <div class="flex flex-col ">
                    <label class=" block py-2 text-md text-base">type</label>
                    <input type="text" value={form.type} onChange={(e)=>setForm({...form,type:e.target.value})} placeholder="Type" className="py-1 bg-white px-30 w-full text-black text-center rounded-xl shadow-md/20 focus:outline-indigo-500 outline-1 -outline-offset-1 outline-gray-300 text-base" required />
                    {errors.type && <p className="text-base text-red-500 pt-2">{errors.type[0]}</p>}
                </div>

                <div class="flex flex-col">
                    <label class=" block py-2 text-md text-base">Rate</label>
                    <input type="number"  value={form.rate} onChange={(e)=>setForm({...form,rate:e.target.value})} placeholder="Rate" step="0.1" className="py-1 px-30 w-full bg-white text-black text-center rounded-xl shadow-md/20 focus:outline-indigo-500 outline-1 -outline-offset-1 outline-gray-300 text-base" required/>
                    {errors.rate && <p className="text-base text-red-500 pt-2">{errors.rate[0]}</p>}
                </div>

                <div class="flex flex-col">
                    <label class=" block py-2 text-md text-base">Seasons</label>
                    <input type="number"  value={form.seasons} onChange={(e)=>setForm({...form,seasons:e.target.value})} placeholder="Seasons" step="1" className="py-1 px-30 w-full bg-white text-black text-center rounded-xl shadow-md/20 focus:outline-indigo-500 outline-1 -outline-offset-1 outline-gray-300 text-base" required/>
                    {errors.seasons && <p className="text-base text-red-500 pt-2">{errors.seasons[0]}</p>}
                </div>

                 <div class="flex flex-col">
                    <label class=" block py-2 text-md text-base">Episodes</label>
                    <input type="number"  value={form.episodes} onChange={(e)=>setForm({...form,episodes:e.target.value})} placeholder="Episodes" step="1" className="py-1 px-30 w-full bg-white text-black text-center rounded-xl shadow-md/20 focus:outline-indigo-500 outline-1 -outline-offset-1 outline-gray-300 text-base" required/>
                    {errors.episodes && <p className="text-base text-red-500 pt-2">{errors.seasons[0]}</p>}
                </div>

            <div class="flex space-x-4 ">
                <div class="flex flex-col  w-[200px]">
                    <label class=" block py-2 text-md text-base">Release Date</label>
                    <label class="py-2 w-full  bg-white text-black text-center rounded-full shadow-md/20 focus:outline-indigo-500 outline-1 -outline-offset-1 outline-gray-300 text-base">
                        <input  type="date" value={form.releaseDate} onChange={(e)=>setForm({...form,releaseDate:e.target.value})}  placeholder="releasedate" className="cursor-pointer " required/>
                        {errors.releaseDate && <p className="text-base text-red-500 pt-2">{errors.releaseDate[0]}</p>}
                    </label>
                
                </div>

                <div class="flex flex-col w-[200px]">
                    <label class=" block py-2  text-md text-base">Image</label>
                    <label class="bg-white py-2  cursor-pointer  text-black text-center rounded-full focus:outline-indigo-500 outline-1 -outline-offset-1 outline-gray-300 text-base">
                        <span>Upload Image</span>
                    
                    </label>


                    <input type="file"  onChange={(e)=>setForm({...form,image:e.target.files[0]})} name="image" class=""/>
                </div>
             </div>
                <div class="flex flex-col">
                    <label class="resize  block py-2 text-md text-base">Story</label>
                    <textarea  value={form.story}  onChange={(e)=>setForm({...form,story:e.target.value})} placeholder="enter the story" className="bg-white py-4 pl-4 px-10 w-[30rem]  text-black rounded-xl shadow-md/20 focus:outline-indigo-500 outline-1 -outline-offset-1 outline-gray-300 text-base" required></textarea>
                    {errors.story && <p className="text-base text-red-500 pt-2">{errors.story[0]}</p>}
                    
                </div>
                <hr/>
                <div className="px-20 py-6 w-full flex justify-center">
                    <button type="submit" className="  bg-green-500 px-40 py-1 rounded-xl cursor-pointer hover:bg-green-700 duration-500">ADD</button>

                </div>
                
                </form>
            </>
        )
    }