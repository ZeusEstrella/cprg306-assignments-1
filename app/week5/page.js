"use client";

import Link from "next/link";
import ItemList from "../week5/item-list";

export default function Page() {

    

    return (
        <main>
            <Link href='/' className="hover:underline ">
                    🏠Home
            </Link>

            <h1 className="m-2 p-2 font-bold text-xl">Shopping List</h1>
            <ItemList/>
            
        </main>
    );

}