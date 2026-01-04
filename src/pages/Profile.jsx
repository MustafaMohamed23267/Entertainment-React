import { Link } from "react-router-dom"
import { Nav } from "../Components/nav"
import { useContext } from "react";
import { AppContext } from "../Components/AppContext";
import { Footer } from "../Components/Footer";
import {  MailIcon } from "lucide-react";
import { StarBackground } from "../Components/StarBackground";
// import loki from '../assets/loki.jpg';

 
export const Profile = ()=>{

    const {user} = useContext(AppContext);

        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString(undefined, options);
        
        const dateofbirth = new Date(user.birthdate); // Assuming user.birthdate is a valid date string

        let Age = currentDate.getFullYear() - dateofbirth.getFullYear();
        const monthDifference = currentDate.getMonth() - dateofbirth.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dateofbirth.getDate())) {
            Age--;
        }
        


    return(
        <>
         <StarBackground  />  
        <Nav/>
        <br/>
        <div className="flex flex-col space-y-2 pt-15 pl-4 pb-2.5 z-10 animate-pulse navlink">
           <span className="font-bold text-3xl ">Welcome, {user.firstname}</span>
           <span className="text-gray-400">{formattedDate}</span> 
        </div>
        
        <div className=" h-30 bg-linear-to-r rounded-t-lg m-2 from-cyan-500 to-amber-200 dark:scale-z-100">     </div>
         <div className="flex w-full justify-between p-10 overflow-hidden scale-z-100 ">
                <div className="flex space-x-2 ">
                    <div className="rounded-full w-25 h-25 overflow-hidden  ">
                        <img src={`http://127.0.0.1:8000/storage/${user.profile_image}`} className="rounded-full " />
                    </div>
                    <div className="flex flex-col justify-center ">
                        <span className="font-bold text-xl ">{user.firstname} {user.lastname}</span>
                        <span>{user.email}</span>
                    </div>
                </div>
                <div className="flex items-center">
                  <Link to={`/profile/${user.id}/edit`} className="rounded-md px-7 py-2.5 bg-sky-500 hover:bg-sky-600 duration-400">Edit</Link>  
                </div>
                
            </div>

            <div className="flex justify-around p-10">
                <div className="flex flex-col space-y-1">
                    <label className="font-semibold">First Name</label>
                    <span className="py-1.5  w-80 pl-2 rounded-md  text-lg text-gray-600 dark:text-gray-400 " >{user.firstname}</span>
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="font-semibold">Last Name</label>
                    <span className="py-1.5  w-80 pl-2 rounded-md  text-lg text-gray-600 dark:text-gray-400 " >{user.lastname}</span>
                </div>
            </div>

            <div className="flex justify-around p-10">
                <div className="flex flex-col space-y-1">
                    <label className="font-semibold">Birth Date</label>
                    <span className="py-1.5  w-80 pl-2 rounded-md  text-lg text-gray-600 dark:text-gray-400 " >{user.birthdate}</span>
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="font-semibold">Age</label>
                    <span className="py-1.5  w-80 pl-2 rounded-md  text-lg text-gray-600 dark:text-gray-400 " >{Age}</span>
                </div>
            </div>

            <div className="flex justify-around p-10">
                <div className="flex flex-col space-y-1">
                    <label className="font-semibold">Country</label>
                    <span className="py-1.5  w-80 pl-2 rounded-md  text-lg text-gray-600 dark:text-gray-400 " >{user.country}</span>
                </div>

                   <div className="flex flex-col space-y-1">
                    <label className="font-semibold">Phone</label>
                    <span className="py-1.5  w-80 pl-2 rounded-md  text-lg text-gray-600 dark:text-gray-400 " >+2{user.phone}</span>
                </div>
                </div>

                <div className="flex flex-col space-y-4 ml-40 p-10">
                    <label className="font-bold text-2xl">My email Address</label>
                    
                      <div className="flex space-x-4 justify-baseline">
                        <MailIcon className="border text-blue-500 w-7 h-7 rounded-full p-1" />
                        <span className="py-1.5 pl-2 rounded-md  text-lg text-gray-500 dark:text-gray-400 " >   {user.email}</span>
                      </div> 
                    
                </div> 

            <Footer/>
        </>
    )
}