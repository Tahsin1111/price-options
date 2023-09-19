import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu ,AiOutlineClose} from 'react-icons/ai';


const Navbar = () => {
    const [open,setOpen] = useState(false)
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/products', name: 'Products', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '*', name: 'NotFound', id: 5 },
      ];
      
    return (
        <nav className="text-black p-6 bg-yellow-200">
           <div className="md:hidden" onClick={ () => setOpen(!open)}>
            {
                open === true ? <AiOutlineClose></AiOutlineClose> :
                <AiOutlineMenu className="text-3xl "></AiOutlineMenu>
            }
           

           </div>
        <ul className={`md:flex duration-1000 absolute md:static
        ${open ? 'top-16':'-top-60'}
        bg-yellow-200 px-6 `}>
        {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
        </ul>
        </nav>
    );
};

export default Navbar;