import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

interface Filter {
    label: string;
    value: string;
}

interface FilterData {
    title: string;
    filters: Filter[];
    noFilter: boolean;
}

interface AccordionWithFilterComponentProps {
    handleProductFilter: (filter: { filters: string[]; searchQuery: string }) => void;
    isDrawerOpen: boolean;
}

const filterData: FilterData[] = [
    {
        title: 'Search',
        filters: [],
        noFilter: true
    },
    {
        title: 'Category',
        filters: [
            { label: 'Leather Purse', value: 'leather' },
            { label: 'Normal Purse', value: 'normal' },
            { label: 'Fancy Purse', value: 'fancy' }
        ],
        noFilter: false
    },
    {
        title: 'Customer Ratings',
        filters: [
            { label: '5 Stars', value: '5' },
            { label: '4 Stars', value: '4' },
            { label: '3 Stars', value: '3' },
            { label: '2 Stars', value: '2' },
            { label: '1 Star', value: '1' },
        ],
        noFilter: false
    }
];

function AccordionWithFilterComponent({ handleProductFilter, isDrawerOpen }: AccordionWithFilterComponentProps) {
    const [activeIndexes, setActiveIndexes] = useState<number[]>([0]);
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const filters = searchParams.get('filters')?.split(',') || [];
        const search = searchParams.get('q') || '';

        setSelectedFilters(filters);
        setSearchQuery(search);
        handleProductFilter({ filters, searchQuery: search });
    }, [searchParams, handleProductFilter]);

    useEffect(() => {
        const params = new URLSearchParams();

        if (selectedFilters.length > 0) {
            params.set('filters', selectedFilters.join(','));
        }

        if (searchQuery) {
            params.set('q', searchQuery);
        }

        router.push(`?${params.toString()}`);

        handleProductFilter({ filters: selectedFilters, searchQuery });
    }, [selectedFilters, searchQuery, router, handleProductFilter]);

    const toggleAccordion = (index: number) => {
        setActiveIndexes((prevIndexes) =>
            prevIndexes.includes(index)
                ? prevIndexes.filter((i) => i !== index)
                : [...prevIndexes, index]
        );
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setSelectedFilters((prevFilters) =>
            checked
                ? [...prevFilters, value]
                : prevFilters.filter((filter) => filter !== value)
        );
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchClear = () => {
        setSearchQuery('');
    };

    return (
        <div className={`${isDrawerOpen ? 'block' : 'hidden'} md:block w-full py-[1.5rem] ${isDrawerOpen ? 'max-w-inherit' : 'max-w-[315px]'} mx-auto`}>
            {filterData.map((item, index) => (
                <div key={index} className="border-b border-gray-300">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full text-left flex justify-between items-center py-[1rem] px-[0.5rem] focus:outline-none"
                    >
                        <span className="font-medium">{item.title}</span>
                        <svg className={`w-[1.25rem] h-[1.25rem] transform transition-transform duration-200 ${activeIndexes.includes(index) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {activeIndexes.includes(index) && (
                        <div className="p-[0.5rem] text-gray-600">
                            {item.noFilter && (
                                <div className="mb-[1rem] flex items-center gap-[0.5rem]">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        placeholder="Search product"
                                        className="w-full px-[1rem] py-[0.5rem] border rounded-md focus:outline-none"
                                    />
                                    <button onClick={handleSearchClear} className="px-[1rem] py-[0.5rem] border bg-white text-black rounded-md">
                                        Clear
                                    </button>
                                </div>
                            )}

                            {item.filters.map((filter, i) => (
                                <div key={i} className="flex items-center mb-[1rem]">
                                    <input
                                        type="checkbox"
                                        value={filter.value}
                                        id={`filter-${index}-${i}`}
                                        className="mr-2 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                        onChange={handleFilterChange}
                                        checked={selectedFilters.includes(filter.value)}
                                    />
                                    <label htmlFor={`filter-${index}-${i}`} className="text-gray-700">
                                        {filter.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default function AccordionWithFilter(props: AccordionWithFilterComponentProps) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AccordionWithFilterComponent {...props} />
        </Suspense>
    );
}
