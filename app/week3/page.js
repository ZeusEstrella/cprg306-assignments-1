import ItemList from "./item-list";
import Link from 'next/link';

export default function Page() {

    return(
        <main>
            <h1 className="text-xl font-bold m-2 text-pink-700 content-evenly">
                
                <div className="text-right">
                    <Link href='/' className="hover:underline text-right">
                        🏠Home
                    </Link>
                </div>

                Shopping List 
                
            </h1>
            <ItemList />
        </main>
    );

}