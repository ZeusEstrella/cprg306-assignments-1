import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
    
    const [sortBy, setSortBy] = useState('name');

    function handleClickSortByName(e) {
        setSortBy('name');
    }

    function handleClickSortByCategory(e) {
        setSortBy('category');
    }

    function handleClick(e) {

        switch (sortBy) {
            
            case 'name':
                handleClickSortByName(e);
                break;
            
            case 'category':
                handleClickSortByCategory(e);
                break;
        }

    }

    if (sortBy === 'name') {
        items.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortBy === 'category') {
        items.sort((a, b) => a.category.localeCompare(b.category));
    }

    return (
        <div>
            <div className='flex items-center'>
                <button onClick={handleClickSortByName} className='m-2 p-2 border border-white rounded hover:bg-white hover:text-black btn'>Sort by Name</button>
                <button onClick={handleClickSortByCategory} className='m-2 p-2 border border-white rounded hover:bg-white hover:text-black btn'>Sort by Category</button> 
            </div>

            <div className='flex flex-col flex-grow items-center'>
                {items.map((item) => (
                    <Item 
                        
                        key={item.id} 
                        name={item.name} 
                        quantity={item.quantity} 
                        category={item.category} 
                        
                        className='flex-none'
                    />
                ))}
            </div>

        </div>
    );
}
