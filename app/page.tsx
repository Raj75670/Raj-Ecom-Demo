"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import ProductGrid from '@/components/ProductGrid/ProductGrid';

interface FilterProps {
  filters: string[];
  searchQuery: string;
}

export default function Page() {
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleProductFilter = ({ filters, searchQuery }: FilterProps) => {
    setSelectedFilters(filters);
    setSearchQuery(searchQuery);
  };

  const handleSort = (option: string) => {
    setSortOption(option);
    setIsSortOpen(false);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="container mx-auto px-[1rem] md:px-0">
      <div className="text-center py-[2rem]">
        <h1 className="text-4xl text-[#252020]">Bags</h1>
        <p className="text-xl my-[1rem] px-[4rem] line-clamp-2 md:line-clamp-none">
          Bags are versatile and practical accessories designed for carrying and transporting various items, ranging from personal belongings to groceries, laptops, books, and more.
        </p>
      </div>

      <div className="border-t border-b border-[#e5e5e5] py-[1rem]">
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold underline cursor-pointer" onClick={toggleDrawer}>Filter</p>
          <div className="relative inline-block text-left">
            <div>
              <button
                className="flex w-full justify-center gap-[0.5rem] rounded-md bg-white px-3 py-2 text-base font-semibold"
                onClick={() => setIsSortOpen(!isSortOpen)}
              >
                Sort by
                <svg className={`w-[1.25rem] h-[1.25rem] transform transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {isSortOpen && (
              <div className="absolute right-0 z-10 mt-2 w-[14rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="p-[1rem]">
                  <ul className="flex flex-col gap-[1rem]">
                    <li className="flex items-center gap-[0.5em] cursor-pointer" onClick={() => handleSort('lowprice')}>
                      {sortOption === 'lowprice' ? (
                        <svg className="w-[1rem] h-[1rem] text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : <div className="p-[0.5rem]" />}
                      Price - Low to High
                    </li>
                    <li className="flex items-center gap-[0.5em] cursor-pointer" onClick={() => handleSort('highprice')}>
                      {sortOption === 'highprice' ? (
                        <svg className="w-[1rem] h-[1rem] text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : <div className="p-[0.5rem]" />}
                      Price - High to Low
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1 gap-[1rem]">
          <Sidebar handleProductFilter={handleProductFilter} />
          <div className="flex-1">
            <ProductGrid selectedFilters={selectedFilters} searchQuery={searchQuery} sortOption={sortOption} />
          </div>
        </div>
      </div>

      {isDrawerOpen && (
        <div className={`fixed top-0 left-0 w-[100%] h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-[1rem]">
            <div className="flex justify-between items-center py-[1rem] border-b border-[#e5e5e5]">
              <p className="text-xl">Filter</p>
              <div onClick={toggleDrawer}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.5rem] w-[1.5rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>

            <Sidebar handleProductFilter={handleProductFilter} isDrawerOpen={isDrawerOpen} />
          </div>
        </div>
      )}
    </div>
  );
}
