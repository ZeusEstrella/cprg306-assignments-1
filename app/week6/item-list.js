import React, { useState } from 'react';
import Item from './item';

export default function ItemList({items}) {
    
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

    return (
        <div>
            <div className='flex items-center'>
                <button onClick={handleClickSortByName} className='m-2 p-2 border border-white rounded hover:bg-white hover:text-black btn'>Sort by Name</button>
                <button onClick={handleClickSortByCategory} className='m-2 p-2 border border-white rounded hover:bg-white hover:text-black btn'>Sort by Category</button> 
            </div>

            <div className='flex flex-col flex-grow'>
                {itemsCopy.map((item) => (
                    <Item 
                        
                        key={item.id} 
                        name={item.name} 
                        quantity={item.quantity} 
                        category={item.category} 
                    />
                ))}
            </div>

        </div>
    );
}
