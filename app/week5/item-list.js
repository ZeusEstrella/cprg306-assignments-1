import React, { useEffect, useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
    
    const [sortBy, setSortBy] = useState('name');
    
    useEffect(() => {
      
        const initialSort = () => {
            switch (sortBy) {
                case 'name':
                    items.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'category':
                    handleClickSortByCategory();
                    break;
            }
        }
        
        initialSort();

    }, [items, sortBy]);

    function handleClickSortByName(e) {
        
        console.log('Clicked name!');
        
        items.sort((a, b) => a.name.localeCompare(b.name));

        setSortBy('name');
    }

    function handleClickSortByCategory(e) {
        
        console.log('Clicked category!');
        
        items.sort((a, b) => a.category.localeCompare(b.category));

        setSortBy('category');
    }

    function handleClick(e) {
        
        console.log('Clicked!');

        switch (sortBy) {
            
            case 'name':
                handleClickSortByName(e);
                break;
            
            case 'category':
                handleClickSortByCategory(e);
                break;
        }

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
