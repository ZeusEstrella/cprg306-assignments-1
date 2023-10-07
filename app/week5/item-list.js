import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
    
    const [sortBy, setSortBy] = useState('name');

    switch (sortBy) {

        case 'name':
            items.sort((a, b) => a.name.localeCompare(b.name));
            break;
        
        case 'category':
            items.sort((a, b) => a.category.localeCompare(b.category));
            break;
    }

    function handleClickSortByName(e) {
        items.sort((a, b) => a.name.localeCompare(b.name));
    }

    function handleClickSortByCategory(e) {
        items.sort((a, b) => a.category.localeCompare(b.category));
    }

    return (
        <div>
            
            //TODO: Make the buttons actually work, stylize the page
            <div className='flex items-center'>
                <button onClick={handleClickSortByName} className='m-2 p-2 border border-white rounded hover:bg-white hover:text-black '>Sort by Name</button>
                <button onClick={handleClickSortByCategory} className='m-2 p-2 border border-white rounded hover:bg-white hover:text-black'>Sort by Category</button>
            </div>

            <div className='flex flex-col flex-grow items-center'>
            
                {items.map((item) => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} className='flex-none'/>
                ))}
            </div>

        </div>
    );
}
