import ItemList from "./item-list";

export default function Page() {

    return(
        <main>
            <h1 className="text-xl font-bold m-2 text-pink-700">
                Shopping List
            </h1>
            <ItemList />
        </main>
    );

}