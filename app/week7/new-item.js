import { useState } from "react";
export default function NewItem({onAddItem}) {
    
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        
        const parseInput = parseInt(event.target.value);

        if (!isNaN(parseInput)) {
            setQuantity(parseInput);
        }
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const handleSubmit = (event) => { 
        event.preventDefault();

        const id = Math.random();
        const item = {id, name, quantity, category};
        console.log("Item Created: ", item);
        
        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <div className="m-5">
            <form onSubmit={handleSubmit} className="gap-2 flex-col flex-1">
                
                <label htmlFor="name">Name</label>
                <input required type="text" value={name} onChange={handleNameChange} className="text-white"/>
                <pre>{'\n'}</pre>

                <label htmlFor="name">Quantity</label>
                <input required type="number" min={1} max={99} value={quantity} onChange={handleQuantityChange} className="text-white"/>
                <pre>{'\n'}</pre>

                <label htmlFor="quantity">Category {'\n'}
                    <select onChange={handleCategoryChange} className="bg-white text-black">
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozenFoods">Frozen Foods</option>
                        <option value="cannedFoods">Canned Goods</option>
                        <option value="dryGoods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <pre>{'\n'}</pre>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Item</button>

            </form>
        </div>
    )
}