import React from 'react';

const Header: React.FC = () => {
    const headerData: string[] = ['shop', 'stories', 'skills', 'category', 'about'];

    return (
        <div className='container mx-auto'>
            <header className="grid grid-cols-3 items-center p-[1rem] border-b border-[#e5e5e5]">
                <div className="flex items-center justify-start">
                    <h3 className="text-lg font-bold text-gray-800 md:text-xl lg:text-2xl">Ecom</h3>
                </div>

                <div className="flex items-center justify-center">
                    <img src='/images/dummy-logo.png' className='cursor-pointer' width='150px' height='65px' alt='Logo' />
                </div>

                <div className="flex items-center justify-end gap-[2rem]">
                    <svg className="w-[1.5rem] h-[1.5rem] text-black md:w-[2rem] md:h-[2rem] cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14c4.418 0 8 3.582 8 8H4c0-4.418 3.582-8 8-8zm0-8a4 4 0 11-.001 8.001A4 4 0 0112 6z" />
                    </svg>
                </div>
            </header>

            <div className='flex flex-wrap justify-center gap-[1.5rem] md:gap-[2rem] py-[1rem] border-b border-[#e5e5e5]'>
                {headerData.map((data, index) => (
                    <ul key={index} className='list-none'>
                        <li className='text-base md:text-xl capitalize cursor-pointer'>{data}</li>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default Header;