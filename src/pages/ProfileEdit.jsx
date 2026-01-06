import { Nav } from "../Components/Nav"
import { Upload, UserCircle} from "lucide-react"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Components/AppContext";
import { Footer } from "../Components/Footer";

export const ProfileEdit = ()=>{

  const[errors , setErrors] = useState({});
    const navigate = useNavigate();
    const { user} = useContext(AppContext);
    const [message , setMessage] = useState("");

    const [form , setForm] = useState({
      firstname:"",
      lastname:"",
      phone:"",
      email:"",
      birthdate:"",
      country:"",
      profile_image:null
      
    });

    useEffect(()=>{
       if(user){
        setForm({
      firstname:user.firstname||"",
      lastname:user.lastname||"",
      phone:user.phone||"",
      email:user.email||"",
      birthdate:user.birthdate||"",
      country:user.country||"",
      profile_image:null
      
    })
       } 
    
        
    },[user]);
    
    
    
    
    
    
    
    const RegistterForm = async (e)=>
      {
        e.preventDefault();
        const data = new FormData();
        data.append('_method', 'PUT');
        data.append("firstname",form.firstname);
        data.append("lastname",form.lastname);
        data.append("phone",form.phone);
        data.append("email",form.email);
        data.append("birthdate",form.birthdate);
        data.append("country",form.country);
        data.append("profile_image",form.profile_image);
        
    
        const res = await fetch("https://entertainment-laravel-production.up.railway.app//api/profileupdate",{
          method:"POST",
          body:data,
          headers:{
            Accept:"application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        const reg = await res.json();
    
        if (reg.errors) {
        setErrors(reg.errors);
      }
      else
        {
          setMessage("Successfull editing")
          setTimeout(() => {
             navigate('/profile');
          }, 4000);
        }
    
      }

    //   if(!user){
    //     return <div>Loading.......</div>
    // }

      return (
        <>
          <Nav/>
          <br/>
    
          
          
          {message&&<span className="bg-green-400 z-100 fixed w-full h-10 duration-400 text-xl text-center">{message}</span>}
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="flex flex-col justify-center pt-8 items-center sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight  text-foreground">Edit   <span className="text-indigo-500 text-3xl">{user.firstname}</span>  Profile</h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={RegistterForm} className="space-y-6" encType="multipart/form-data">
    
                <div className="mt-2 space-y-2 flex flex-col items-center justify-center">
                     <label htmlFor="lastname" className="block text-sm/6 font-medium text-foreground">
                    Profile Image
                  </label>
                  <div className={` w-35 h-35 overflow-hidden rounded-full  bg-white dark:bg-white/5 ${form.profile_image ?"":"px-3 py-1.5 "} text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 flex flex-col  justify-center items-center cursor-pointer`} >
                    <input
                      id="profile_image"
                      name="profile_image"
                      type="file"
                      onChange={(e)=>setForm({...form,profile_image:e.target.files[0]})}
                      className={`cursor-pointer w-full h-fit ${form.profile_image ? "hidden" : ""}` }
                      
                    />
                            {form.profile_image ? form.profile_image && (<img src={URL.createObjectURL(form.profile_image) } className=" w-35 rounded-full h-35 "/>) : "none"}
    
                    <Upload className={` ${form.profile_image ? "hidden" : ""}` } />
                    <img src={`https://entertainment-laravel-production.up.railway.app//storage/${user.profile_image}`} className="rounded-full" />
                  </div>
                    
                  </div>
    
                <div className="flex justify-between">
    
                  <div className="mt-2  space-x-1">
                    <label htmlFor="firstname" className="block text-sm/6 font-medium text-foreground">
                    First Name
                  </label>
                    <input
                      id="name1"
                      name="name1"
                      type="text"
                      onChange={(e)=>setForm({...form,firstname:e.target.value})}
                      value={form.firstname}
                      required
                      className="block w-full  rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                    {errors.firstname&&<p className="text-base text-red-500 pt-2">{errors.firstname[0]}</p>}
                  </div>
    
                  
                  <div className="mt-2 space-x-1">
                     <label htmlFor="lastname" className="block text-sm/6 font-medium text-foreground">
                    Last Name
                  </label>
                    <input
                      id="name2"
                      name="name2"
                      type="text"
                      onChange={(e)=>setForm({...form,lastname:e.target.value})}
                      value={form.lastname}
                      required
                      className="block w-full  rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                    {errors.lastname&&<p className="text-base text-red-500 pt-2">{errors.lastname[0]}</p>}
                  </div>
                </div>
    
               
    
    
                <div>
                  <label htmlFor="phone" className="block text-sm/6 font-medium text-foreground">
                    Phone
                  </label>
                  <div className="mt-2 flex space-x-1">
                    <select className="block rounded-md bg-gray-100 dark:bg-white/10 px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
                        <option> Eg +20</option>
                    </select>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                       onChange={(e)=>setForm({...form,phone:e.target.value})}
                      value={form.phone}
                      required
                      className="block w-full rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                    {errors.phone&&<p className="text-base text-red-500 pt-2">{errors.phone[0]}</p>}
                  </div>
                </div>
    
                <div className="mt-2 space-x-1">
                     <label htmlFor="lastname" className="block text-sm/6 font-medium text-foreground">
                    Country
                  </label>
                    <input
                      id="name2"
                      name="name2"
                      type="text"
                      onChange={(e)=>setForm({...form,country:e.target.value})}
                      value={form.country}
                      required
                      className="block w-full  rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                    {errors.country&&<p className="text-base text-red-500 pt-2">{errors.country[0]}</p>}
                  </div>
                
                
                
    
                <div>
                  <label htmlFor="birthdate" className="block text-sm/6 font-medium text-foreground">
                    Birth Date
                  </label>
                  <div className="mt-2">
                    <input
                      id="birthdate"
                      name="birthdate"
                      type="date"
                       onChange={(e)=>setForm({...form,birthdate:e.target.value})}
                      value={form.birthdate}
                      required
                      className="block w-full rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                    {errors.birthdate&&<p className="text-base text-red-500 pt-2">{errors.birthdate[0]}</p>}
                  </div>
                </div>
    
    
    
                <div>
                  <label htmlFor="email" className="block text-sm/6 font-medium text-foreground">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                       onChange={(e)=>setForm({...form,email:e.target.value})}
                      value={form.email}
                      required
                      autoComplete="email"
                      className="block w-full rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                    {errors.email&&<p className="text-base text-red-500 pt-2">{errors.email[0]}</p>}
                  </div>
                </div>
    
               
    
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 duration-500 cursor-pointer"
                  >
                    Edit Profile
                  </button>
                </div>
              </form>
    
              
            </div>
          </div>
          <br/>
          <Footer/>
        </>
      )
}