import React from 'react';

export default function Item({name, quantity, category}) {
    return (
        <div className="border border-pink-600 m-5 space-y-1 p-2 ">
            <h2>{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </div>
    );
}
