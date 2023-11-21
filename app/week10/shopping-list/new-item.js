// Import necessary modules
"use client";
import { useState } from "react";

// Define the NewItem component
export default function NewItem({onAddItem}) {
  // State variables for item details
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let item = {
      name,
      quantity,
      category,
    };

    // Log item details to the console
    console.log(item);

    // Add the new item to the list
    onAddItem(item);

    
    // Reset form fields to default values
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  // Render the component
  return (
    <div className="text-red-300 bg-slate-800 border border-blue-800 p-4 rounded-lg">
      {/* Form title */}
      <h2 className="text-2xl mb-4">Add a New Item</h2>

      {/* Form for adding a new item */}
      <form onSubmit={handleSubmit}>
        {/* Input field for item name */}
        <div className="mb-4">
          <label htmlFor="name" className="block">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Input field for item quantity */}
        <div className="mb-4">
          <label htmlFor="quantity" className="block">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            min="1"
            max="99"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Dropdown for item category */}
        <div className="mb-4">
          <label htmlFor="category" className="block">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen-foods">Frozen Foods</option>
            <option value="canned-goods">Canned Goods</option>
            <option value="dry-goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit button */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Add Item
        </button>
      </form>
    </div>
  );
}