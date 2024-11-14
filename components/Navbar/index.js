'use client'
import { Link } from 'react-scroll'
import React, { useEffect, useState } from 'react'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import SidebarComponent from '../Sidebar';
import { navbarData } from '@/utils/constants';
import ModalComponent from '../Modal';
import { IoMdArrowForward } from 'react-icons/io';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSidebarVisiblity = () => {
        setSidebar((prev) => !prev);
    };

    return (
        <nav className={`w-full px-8 py-3 flex justify-between items-center fixed h-20 z-50 border-b
            bg-white/95 backdrop-blur-sm shadow-sm
            transition-all duration-300`}>
            <a href='/' className='flex items-center w-[200px]'>
                <img src='/logo.png' className='h-12 hover:scale-105 transition-transform duration-300 hover:brightness-110' alt="Logo" />
            </a>

            <div className='lg:flex hidden gap-10 flex-1 justify-center'>
                {navbarData.map((data) => (
                    <Link 
                        key={data.name} 
                        to={data.name.toLowerCase()} 
                        smooth={true} 
                        className='text-sm text-slate-700 transition duration-300 hover:text-slate-900  
                            relative group cursor-pointer text-center'
                    >
                        {data.name}
                        <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-[#4059AC] transition-all duration-300 
                            group-hover:w-full'></span>
                    </Link>
                ))}
            </div>

            <div className='w[200px] flex justify-end'>
                <button 
                    onClick={() => setOpenModal(prev => !prev)} 
                    className='bg-[#A3B1E0] text-white font-medium rounded-full px-8 py-3 lg:flex h-11 hidden 
                        items-center gap-3 transition-all duration-300 hover:bg-white hover:text-[#4059AC] 
                        hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 hover:scale-105'
                >
                    <span className='z-20 relative'>Connect With Us</span>
                    <IoMdArrowForward className='text-xl z-20 transition-transform group-hover:translate-x-1' />
                </button>
            </div>

            <button 
                className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-all duration-300 
                    hover:scale-110 active:scale-95" 
                onClick={handleSidebarVisiblity}
            >
                <RxHamburgerMenu className={`${!sidebar ? 'block':'hidden'} text-3xl text-[#4059AC]`} />
                <RxCross1 className={`${sidebar ? 'block':'hidden'} text-3xl text-[#4059AC]`} />
            </button>

            <div className={`fixed top-16 right-0 w-full transform transition-transform duration-300 ease-in-out
                ${sidebar ? 'translate-x-0' : 'translate-x-full'}`}>
              <SidebarComponent />
            </div>

            {openModal && <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />}

        </nav>
    )
}

export default Navbar