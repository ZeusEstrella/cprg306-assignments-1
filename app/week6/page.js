"use client";

import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemData from "./items.json";
import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState(ItemData);

    function handleAddItem(item) {
        setItems([...items, item]);
    }

    return (
        <main>
            <Link href='/' className="hover:underline ">
                    🏠Home
            </Link>

            <h1 className="m-2 p-2 font-bold text-xl">Shopping List</h1>
            <ItemList
                items={items}
            />
            <NewItem onAddItem={handleAddItem}/>
            
        </main>
    );

}