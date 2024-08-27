import React, { useState } from 'react';
import Logo from '../picture/png-transparent-facebook-ads-facebook-marketing-marketing-facebook-ads-icon-thumbnail.png';
import { Link } from 'react-router-dom';
import Navlinks from './Navlinks';
import Buttons from './Buttons';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='bg-white font-bold fixed w-full z-[1000] shadow-lg'>
           <div className='flex items-center font-medium justify-around h-[70px]'>
           <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
             <img src={Logo} alt="logo" className='md:cursor-pointer h-9' /> 
             <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
             <i className={`${open ? "fa-solid fa-x" : "fa-solid fa-list"}`}></i>
             </div>
           </div>

           <ul className='md:flex hidden items-center gap-8 font-[Montserrat] text-sm'>
            <li>
                <Link to='/trang-chu' className='py-7 px-3 inline-block'>
                    TRANG CHỦ
                </Link>
            </li>
            <Navlinks/>
            <li>
                <Link to='/thiet-ke-trang-web' className='py-7 px-3 inline-block'>
                   THIẾT KẾ TRANG WEB
                </Link>
            </li>
            <li>
                <Link to='/lien-he' className='py-7 px-3 inline-block'>
                   LIÊN HỆ
                </Link>
            </li>
           </ul>
           <div className="md:block hidden">
            <Buttons/>
           </div>
           
           {/* responsive */}
           <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" :"left-[-100%]"}`}>
           <li>
                <Link to='/trang-chu' className='py-7 px-3 inline-block'>
                    TRANG CHỦ
                </Link>
            </li>
            <Navlinks/>
            <li>
                <Link to='/thiet-ke-trang-web' className='py-7 px-3 inline-block'>
                   THIẾT KẾ TRANG WEB
                </Link>
            </li>
            <li className='py-7 px-3 inline-block'>
                <Link to='/lien-he' className='py-7 px-3 inline-block'>
                   LIÊN HỆ
                </Link>
            </li>
          
            <div className="py-5">
            <Buttons/>
           </div>
           </ul>
           </div>
        </nav>
    );
};

export default Navbar;
