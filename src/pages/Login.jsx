import { UserCircle} from "lucide-react"
import { Nav } from "../Components/nav"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../Components/AppContext";
import { useNavigate } from "react-router-dom";

export const  Login = ()=> {

  const[login , setLogin] = useState({
  email:"",
  password:"",
});
  const {setToken} =useContext(AppContext);
  const [errors , setErrors] = useState({});
  const navigate = useNavigate()
const [loginfetch , setLoginfetch] = useState([]);
const [message , setMessage] = useState("");
const [passwordMessage , setPasswordMessage] = useState("");

useEffect(()=>{
  const fetchlogin = async()=>{
    const fetchres = await fetch("http://127.0.0.1:8000/api/login",{
      method:"GET",
      
      headers:{
        Accept:"application/json"
      }
    });
    const LoginData = await fetchres.json();
     setLoginfetch(LoginData);
  }

  fetchlogin();
},[])

const handleLogin = async (e)=>
  {
    e.preventDefault();
   const loginData = new FormData();
      loginData.append("email",login.email);
      loginData.append("password",login.password);

    const res = await fetch("http://127.0.0.1:8000/api/login",{
      method:"POST",
      body:loginData,
      headers:{
        Accept:"application/json"
      }
    });
    const reg = await res.json();
    

    if (reg.errors) {
    setErrors(reg.errors || {});
  }
  else
    {
      if (reg.password != loginfetch.password) {
         setMessage(`the password you have entered is wrong. 
          please enter the right one.`);
      }
      else{
      localStorage.setItem("token",reg.token);
      setToken(reg.token);
      setMessage("Success Login");
      setTimeout(() => {
         navigate('/');
      }, 2000);
      }
     
     
    }

  }


  return (
    <>
      <Nav/>
      
      
        {message&&<span className="bg-green-400 z-100 fixed w-full h-10 duration-400 text-xl text-center">{message}</span>}
      
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="flex flex-col justify-center pt-8 items-center sm:mx-auto sm:w-full sm:max-w-sm">
          <UserCircle className="w-12 h-12" />
          
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-foreground">Login To Your Account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLogin} className="space-y-6">
           
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-foreground">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={login.email}
                  onChange={(e)=>setLogin({...login,email:e.target.value})}
                  required
                  
                  className="block w-full rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {errors.email&&<p className="text-base text-red-500 pt-2">{errors.email[0]}</p>}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-foreground">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={login.password}
                  onChange={(e)=>setLogin({...login,password:e.target.value})}
                  className="block w-full rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
                {errors.password&&<p className="text-base text-red-500 pt-2">{errors.password[0]}</p>}
                {passwordMessage&&<p className="text-base text-red-400 pt-2 ">{passwordMessage}</p>}

              </div>
            </div>

           
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 duration-500 cursor-pointer"
              >
                Login
              </button>
            </div>
          </form>

          
        </div>
      </div>
    </>
  )
}
