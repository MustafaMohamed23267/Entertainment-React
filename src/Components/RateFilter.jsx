
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {  ChevronDownIcon } from "lucide-react";
import { useState } from 'react';

export const RateFilter = ()=>
    {
        // const rate = [{value:6},{value:7},{value:8},{value:9}];

        // const[rate , setRate] = useState("");

        

        // return (
        //     <div className="flex justify-center p-4 ">
                
        //             <select className="bg-gray-500 px-8 py-1 rounded-md text-base text-md font-semibold">
        //                 {rate.map(rate=>
        //                     <option value={rate.value}>rate &ge; {rate.value}</option>
        //                 )}
        //             </select>
                
        //      </div>   
        // )
    }


    // <Menu as="div" className="relative  inline-block ">
    //   <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20">
    //     Filter By rate
    //     <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        
    //   </MenuButton>

    //   <MenuItems
    //     transition
    //     className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-500 data-enter:ease-out data-leave:duration-75 data-leave:ease-in "
    //   >
    //     <div className="py-1 ">
    //         {rate.map(rate=><MenuItem>
    //       <form className="flex space-x-2 px-2">
    //         <input type="radio"
    //         name="rate"
    //         // checked={(e)=>{e.target.value = rate.value}}
    //           value={rate.value}
    //           className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
    //         />
    //           <label> rate &ge; {rate.value}</label>
    //        </form>
    //       </MenuItem>)}
          

         
         
    //     </div>
    //   </MenuItems>
    //   </Menu>