"use client";

import Link from "next/link";
import NewItem from "./new-item";
import ItemList from "./item-list";
import ItemData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState(ItemData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    function handleAddItem(item) {
        setItems([...items, item]);
    }

    function handleItemSelect(item) {
        
        let selectedName = item
        .name
        .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
        .split(',')[0]
        .trim();

        setSelectedItemName(selectedName);

        console.log(selectedItemName)
    }

    return (
        <main>
            <Link href='/' className="hover:underline ">
                    🏠Home
            </Link>

            <h1 className="m-2 p-2 font-bold text-xl">Shopping List</h1>
            <p className="m-3">Week 7 WIP</p>

            <div className="flex ">

                <NewItem onAddItem={handleAddItem} />
                <ItemList
                    items={items}
                    onItemSelect={handleItemSelect}
                />
                <MealIdeas
                    ingredient={selectedItemName}
                />
            </div>
        </main>
    );

}