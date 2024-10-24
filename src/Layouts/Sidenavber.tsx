
import { NavLink } from "react-router-dom";


const Sidenavber = () => {
    return (
        <aside className="h-screen bg-gray-300 col-span-2 sticky top-0 left-0 overflow-hidden p-2 ">
            <nav className="flex flex-col gap-1">
                <NavLink 
                // className={({isActive})=>{
                //     cn(
                //         "bg-gray-100 rounded-md hover:bg-gray-200 transition-all truncate",
                //         {
                //             "bg-gray-400 text-white":isActive,
                //         }
                //     )
                // }}
                className="bg-gray-400 px-2 py-px rounded-md truncate border border-gray-300 hover:bg-gray-900 hover:text-white transition-all"
                to='/admin/dashboard'>
                Dashboard
                </NavLink>
                <NavLink 
                // className={({isActive})=>{
                //     cn(
                //         "bg-gray-100 rounded-md hover:bg-gray-200 transition-all truncate",
                //         {
                //             "bg-gray-400 text-white":isActive,
                //         }
                //     )
                // }}
                className="bg-gray-400 px-2 py-px rounded-md truncate border border-gray-300 hover:bg-gray-900 hover:text-white transition-all"
                to='/admin/dashboard'>Add Service</NavLink>
            </nav>
        </aside>
    );
};

export default Sidenavber;