import React from 'react';

export default function Item({name, quantity, category}, onSelect) {
    return (
        <div className="card border border-pink-600 m-5 space-y-1 p-2 hover:bg-pink-600 " onClick={onSelect}>
            <div className='card-body'>
                <h2 className='card-title'>{name}</h2>
                <p>Quantity: {quantity}</p>
                <p>Category: {category}</p>
            </div>
        </div>
    );
}
