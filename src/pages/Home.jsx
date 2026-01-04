import { Footer } from "../Components/Footer"
import { Nav } from "../Components/nav"
import peak from '../assets/cinema2.mp4'

export const Home = ()=>
    {
        return(
            <div >
            <Nav className="z-10 "/>
            
            <main>
                <div  className=" w-full h-screen overflow-hidden ">
                    <video src={peak} loop autoPlay muted className="absolute  z-0 top-0 left-0 w-full h-full max-sm:w-full max-sm:h-full object-cover"/> 

                    <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

                    <div className="relative z-10 h-screen text-white flex flex-col items-center  justify-center space-y-6">
                      <span className="font-bold text-9xl">Welcome</span>
                      <p className="text-md max-sm:w-full max-sm:px-6">Hello there i am making a website where you can handel your movies, Series and animes </p>
                   </div>
                </div>
                
            </main>
            <Footer/>
            </div>
            
        )

    }