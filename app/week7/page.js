"use client";

import Link from "next/link";
import NewItem from "./new-item";
import ItemList from "./item-list";
import ItemData from "./items.json";
import MealIdeas from "./meal-ideas";
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
            <p className="m-3">🚧 Week 7 WIP</p>

            <div className="flex ">

                <NewItem onAddItem={handleAddItem} />
                <ItemList
                    items={items}
                />
            </div>
        </main>
    );

}