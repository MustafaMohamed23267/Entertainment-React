import { Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Link } from "react-router-dom"
import batman from "../assets/batmanvsbane2.png"

export const Footer =()=>{

    const Pages = [
         {name:"Home" ,path:"/"},
         {name:"Movies",path:"/movies"},
         {name:"Series",path:"/series"},
         {name:"Anime",path:"/anime"},
    ];
       
                  
    

    return(
        <div className=" flex flex-col  text-amber-200 font-serif text-[15px]  h-[250px] bg-foreground overflow-hidden ">
            <img  src={batman} className="absolute  z-0 w-full h-[250px] object-cover" />
            <div className="absolute  w-full h-[250px] bg-black/70"></div>
            <div className="flex justify-around p-10 relative">
                <h1>Entertainment</h1>
                <div className="flex space-x-8">
                   {Pages.map(page=><Link className="hover:text-indigo-500 duration-500" to={page.path}>{page.name}</Link>)}
                </div>
            </div>

            <hr className="text-white mx-4 z-100 "/>

            <div className="flex flex-col space-y-4 p-4 relative z-100">
                <div className="flex justify-center space-x-4 ">
                    <a className="border rounded-full p-1 hover:text-indigo-500 duration-500" href=""><Facebook className="w-5 h-5 "/></a>
                    <a className="border rounded-full p-1 hover:text-indigo-500 duration-500 " href=""><Linkedin className="w-5 h-5"/></a>
                    <a className="border rounded-full p-1 hover:text-indigo-500 duration-500" href=""><Github className="w-5 h-5"/></a>
                    <a className="border rounded-full p-1 hover:text-indigo-500 duration-500" href=""><Mail className="w-5 h-5"/></a>
                    <a className="border rounded-full p-1 hover:text-indigo-500 duration-500" href=""><Twitter className="w-5 h-5"/></a>
                </div>
                <div className="flex flex-col space-y-2 justify-center items-center">
                     <span>&copy;Entertainment All rights reserved</span>
                      <span>oct-2025</span>
                </div>
               
            </div>
            
        </div>
    )
}