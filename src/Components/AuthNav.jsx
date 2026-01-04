// import { Link, Links, NavLink } from "react-router-dom"
// import { Home } from "../pages/Home"
// import { Theme } from "./Theme"
// import { useContext, useState } from "react"
// import { AppContext } from "../Context/AppContext"
// import { Nav } from "./nav"
// export const AuthNav = ()=>
//     {
//         const {user} = useContext(AppContext);

//         const links= [
          
//             {path:"/register" , name:"Register"},
//             {path:"/Login" , name:"Login"},
            
//         ];

       
//         return(
//             <>
//             <div className="flex z-100 w-full fixed justify-between text-foreground p-4 duration-700 shadow-md/10 bg-background">
//                 <h1 className="text-lg font-bold">Entertainment</h1>

//                {user ? <div className="flex space-x-4">
//                 <div className="text-red-500">welcome {user.firstname}</div> 
//                      <nav className="space-x-10">
//                     {links.map((link , key)=><NavLink  className={({isActive})=>isActive?" duration-700 font-semibold bg-foreground text-background p-2 rounded-xl duration-700":"hover:text-indigo-500 duration-700 font-semibold "} key={key} to={link.path}>{link.name}</NavLink>)}  
//                     </nav>
                   
//                     </div> :
//                <Nav/>
//                }
                
//                  <div><Theme/></div>
//             </div>
            
//             </>
            
//         )
//     }

