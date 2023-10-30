import React, { useState } from 'react';
import Item from './item';
import { Combobox } from '@headlessui/react';

export default function ItemList({items, onItemSelect}) {
    
    const itemsCopy = [...items];
    const [sortBy, setSortBy] = useState('name');
    
    function handleClickSortByName(e) {
        setSortBy('name');
    }

    function handleClickSortByCategory(e) {
        setSortBy('category');
    }

    if (sortBy === 'name') {
        itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortBy === 'category') {
        itemsCopy.sort((a, b) => a.category.localeCompare(b.category));
    }

    const [selectedItem, setSelectedItem] = useState(itemsCopy);
    const [query, setQuery] = useState('');

    const filteredItems = 
        query === ''
        ? itemsCopy
        : itemsCopy.filter((item) => {
            return item.name
            .toLowerCase()
            .includes(query.toLowerCase())
        })

    return (
        <div>
            <div className='flex items-center'>
                <button onClick={handleClickSortByName} className='m-2 p-2 btn-outline btn'>Sort by Name</button>
                <button onClick={handleClickSortByCategory} className='m-2 p-2 btn-outline btn'>Sort by Category</button> 
            </div>

            <div className='relative mt-1'>
                <div className=''>
                    <Combobox value={selectedItem} onChange={setSelectedItem}>
                        <div className='relative w-full cursor-default overflow-hidden rounded-lg '>
                            <Combobox.Input 
                                onChange={(event) => setQuery(event.target.value)}
                                displayValue={(item) => item.name}
                                className='w-full border-none py-2 pl-3 pr-10 text-sm leading-5 focus:ring-0'
                                placeholder='Search for an item'
                            />
                        </div>
                        <Combobox.Options>
                            {filteredItems.map((item) => (
                            <Combobox.Option 
                                key={item.id} 
                                value={item}
                                className={({ active }) => 
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active ? 'bg-white text-black' : 'text-white'
                                }`
                            }
                            >
                                {item.name}
                                <p>{item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')}</p>
                            </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    </Combobox>
                </div>

                {itemsCopy.map((item) => (
                    <Item 
                        key={item.id} 
                        name={item.name} 
                        quantity={item.quantity} 
                        category={item.category} 
                        onClick={() => onItemSelect(item)}
                    />
                ))}
            </div>
            
            

        </div>
    );
}
