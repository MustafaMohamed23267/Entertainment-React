import { Link, Links, NavLink, useNavigate } from "react-router-dom"
import { Movies } from "../pages/Movies/Movies"
import { Home } from "../pages/Home"
import { Theme } from "./Theme"
import {  useContext, useState } from "react"
import axios from "axios"
import { AppContext, AppProvider } from "./AppContext"
import { Menu, User, User2Icon, X } from "lucide-react"



export const Nav = ()=>
    {
        const [menu , setMenu] = useState(false);
        const links= [
           
            {path:"/" , name:"Home"},
            {path:"/movies" , name:"Movies"},
            {path:"/series",name:"Series"},
            {path:"/anime",name:"Anime"}
        ];

       



        const AuthLinks= [
          
            {path:"/register" , name:"Register"},
            {path:"/Login" , name:"Login"},
            
        ];


         const showDropdown = ()=>{
            const dropdownDisplay = document.getElementById("dropdownAvatar");
            if (dropdownDisplay.style.display =="none") {

                 dropdownDisplay.style.display="inline-block";
            }
            else{
                dropdownDisplay.style.display="none";
            }
           
         }


     const  logoutmodal = ()=>
    {

        const modaldisplay = document.getElementById("logoutmodal").style.display= "flex" ;
        return  modaldisplay;    
    }  


    const  noselected = ()=>
    {

        const modaldisplay = document.getElementById("logoutmodal").style.display= "none" ;
        return  modaldisplay;    
    }  

        const {user , token , setToken , setUser} = useContext(AppContext);
        const navigate = useNavigate();
        const handleLogout = async (e)=>
            {
                e.preventDefault();
                 const res = await fetch("https://entertainment-laravel-production.up.railway.app/api/logout",{
                 method:"POST",
                headers:{
                    Authorization:`Bearer ${token}`,
                }
                });
                const out = await res.json();
                console.log(out);
                
                if(res.ok)
                    {
                        setUser(null)
                        setToken(null)
                        localStorage.removeItem("token")
                        navigate('/login')
                    }
            }

        const [search , setSearch] = useState("");
        const [searchForm , setSearchForm] = useState("none");
        const [data , setData] = useState([]);
        const handelSearch = async (e) =>
            {
                //const serachoutput = document.getElementById("searchform");
                //const searchinput = document.getElementsByName("search").value;
                if(  search.trim==="")
                    {
                        //serachoutput.style.display="none";
                        setSearchForm("none")
                        
                    }
                    else
                        {
                            setSearchForm("flex")
                           //serachoutput.style.display="flex"; 
                        }
                //const serachoutput = document.getElementById("searchform").style.scale="100%";
                const searchvalue = e.target.value;
                setSearch(searchvalue);
                const result = await axios.get(`https://entertainment-laravel-production.up.railway.app/api/search?search=${searchvalue}`,{
                    headers:{
                            Accept:"application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                });
                const finalresult = setData(result.data);

                return  finalresult;
            }

        

        return(
            <>
            <div className=" flex z-100 w-full fixed justify-between text-foreground font-[Copperplate] text-[15px] px-2 py-3 duration-700 bg-background">
                <h1 className="text-lg font-bold navlink">Entertainment</h1>
                
  
        
               <form className={`w-[300px] max-md:w-[200px] max-lg:w-[200px] ${user && user.id ? "":"scale-0"}`} >   
                 <div class="relative bottom-1">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" name="search"  onChange={handelSearch} value={search}  id="search" className="block w-full  p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                    <button onClick={handelSearch} type="submit" className="text-white absolute max-md:px-2 end-2 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Search</button>
                  </div>
                </form>

                {/*        */}

                <div className={user && user.id ? (""):("hidden")}>
                        <nav className="space-x-10  max-md:hidden  navlink ">
                            {links.map((link , key)=><NavLink  className={({isActive})=>isActive?"font-semibold  bg-foreground text-background p-2 rounded-xl duration-700 ":"hover:text-indigo-500 duration-700 font-semibold"} key={key} to={link.path}>{link.name}</NavLink>)}  
                        </nav>
                </div>
              
                    {/* Menu  */}
                  <button onClick={()=>setMenu((prev)=>!prev)}>
                    {menu?<X className="hover:text-red-500 duration-500 cursor-pointer md:hidden"  />:<Menu  
                    className={`md:hidden  hover:text-indigo-500 duration-500 cursor-pointer`}/>
                    }
                 </button>  

                  {/*          */}
        
    {user && user.id ? (
        
        <div className="flex justify-between  space-x-30 max-md:hidden">
                   {/* <div className="flex space-x-2">
                        <span className="text-indigo-400">welcome</span><p className="text-indigo-700 text-base text-md font-semibold"> {user.firstname}</p> 
                    </div>
                    
                    <button onClick={logoutmodal}  className="hover:text-red-500 duration-700 font-semibold cursor-pointer " >Logout</button> */}
                    
            <div className="">
                <button onClick={showDropdown}  id="dropdownUserAvatarButton"  className="flex text-sm dark:text-white dark:bg-gray-800 rounded-full md:me-0 focus:ring-1  cursor-pointer  text-gray-900 profile_image " type="button">
                <span className="sr-only">user </span>
                {/* <User/>  */}
                <img src={`https://entertainment-laravel-production.up.railway.app/storage/${user.profile_image}`} className="rounded-full w-10 h-10 " />
                </button>

                {/*  */}
                <div id="dropdownAvatar"  className="z-10 absolute hidden bg-white divide-y  rounded-lg shadow-sm w-44 dark:bg-gray-700 divide-gray-200 dark:divide-gray-600">
                <div className="px-4 py-3 space-y-2 text-sm text-gray-900 dark:text-white">
                <div>
                    Hello {user.firstname}
                </div>
                
                <div className="font-medium truncate">{user.email}</div>
                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" >
                <li>
                    <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                </li>
               
                </ul>
                <div class="py-2 flex justify-center">
                 <button onClick={logoutmodal}  className="hover:text-red-500 duration-700 font-semibold cursor-pointer text-center" >Logout</button>
                </div>
                </div>
            </div>     
            

            

                    <div className="max-sm:hidden"> <Theme/></div> 
         </div>
     ):(

        <div className="flex space-x-10">
            <nav className="space-x-10 ">
                    {AuthLinks.map((link , key)=><NavLink  className={({isActive})=>isActive?" font-semibold bg-foreground text-background p-2 rounded-xl duration-700":"hover:text-indigo-500 duration-700 font-semibold "} key={key} to={link.path}>{link.name}</NavLink>)}  
            </nav>
            <div className="max-sm:hidden"> <Theme/></div>
        </div>
            
     
              )}

                
              <div className="md:hidden"> <Theme/></div>  
            </div>


            {/* Mobile Nav */}

            <div className={` fixed inset-0 space-y-6 bg-background/70 backdrop-blur-md flex flex-col items-center justify-center z-40  transition-all duration-400 md:hidden ${menu? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                          

                        <div className=" flex flex-col space-y-8">
                         
                        {links.map(items =>
                            (
                            
                                <NavLink className="px-3  text-center hover:bg-indigo-500 rounded-full fill-indigo-500 drop-shadow-lg drop-shadow-indigo-500/50 duration-400" to={items.path} >{items.name}</NavLink>
                            ))}
                            <div className="">
                            <button onClick={logoutmodal}  className="px-3 text-center cursor-pointer hover:bg-red-500 rounded-full fill-indigo-500 duration-400"  >Logout</button>
                          </div>
                    
                    
                        </div>
                   </div>

              {/* Serarch Form */}
            <div id="searchform" value={searchForm} style={{display:searchForm}} className="fixed z-100 justify-center mt-13 ml-50 hidden flex-col space-y-6 bg-foreground rounded-md ">
                {data.map(data=>
                // {data.name ?"": <p>no items</p>}
                    <Link to={ data.gener === "movies" ?`/movies/${data.id}`:
                data.gener === "series"?`/series/${data.id}`:
                "/notfound"} className="flex w-[400px] space-x-6 text-background cursor-pointer hover:scale-[1.02] pl-10 py-4  shadow-md duration-500 ">
                    
                    <img src={`https://entertainment-laravel-production.up.railway.app/storage/${data.image}`} class="duration-500  hover:scale-[1.05] w-[10%] h-[50px] z-50" />
                    <p className="text-md hover:text-indigo-500 duration-500">{data.name}</p>
                </Link>
                    
                
                )}
                
            </div>

            <div id="logoutmodal"  className="fixed hidden z-100 w-full h-screen backdrop-blur-sm  flex-col pt-10  justify-center items-center duration-500">     
                <div className="  w-[450px] h-[150px] bg-foreground flex flex-col justify-center space-y-6 rounded-lg  duration-400">
                    <p className="text-center text-background text-base font-semibold">Are you sure you want to logout</p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-red-500 px-4 py-1 rounded-md cursor-pointer duration-500 hover:bg-red-600 text-gray-100" onClick={handleLogout}>yes</button>
                        <button className="bg-gray-500 px-4 py-1 rounded-md cursor-pointer duration-500 hover:bg-gray-600 text-gray-100" onClick={noselected}>No</button>
                    </div>
                 </div>
            </div>
            </>
            
        )
    }




