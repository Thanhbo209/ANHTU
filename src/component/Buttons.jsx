import React from 'react';
import { Link } from "react-router-dom";
const Buttons = () => {
    return (
       <Link to ='chi-tiet'>

       <button className='bg-[#58efd8] font-[Montserrat] text-black px-6 py-2 rounded-full '>Chi Tiết</button>
       </Link>
    );
};

export default Buttons;