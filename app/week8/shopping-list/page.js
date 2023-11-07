"use client";
// Import necessary modules and components
import Link from 'next/link';
import ItemList from './item-list'; 
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';
import { useState } from 'react';
import { useUserAuth } from "../_utils/auth-context";

// Define the Page component for Week 7
export default function Page() {

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => { 
    await gitHubSignIn();
  }

  const handleSignOut = async () => {
    await firebaseSignOut();
  }

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleItemSelect(item) {
    let name = item.name.split(",")[0].replace(/[^a-zA-Z ]/g, "").trim();
    setSelectedItemName(name);
  }

  return (
    
    <main className="bg-gray-900 text-white p-8 flex">
      { user ? (

      <div className='flex flex-none'>

        {/* Left side: Shopping List */}
        <div className="w-1/2 pr-4">
          <h1 className="text-4xl mb-8 text-center">Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} /> {/* Pass onItemSelect prop */}
          <p className="text-center mt-4">
            <Link href="/" className="text-orange-400 hover:text-orange-600">
              Home
            </Link>
          </p>
        </div>

        {/* Right side: Meal Ideas */}
        <div className="w-1/2">
          <MealIdeas ingredient={selectedItemName} /> {/* Pass selectedItemName as ingredient */}
        </div>

        {/* Sign Out Button and Landing Page Navigation */}
        <div>
          <button 
            onClick={handleSignOut}
            className="btn btn-outline btn-error"
          >
            Sign Out
          </button>

          <Link href='/week8' className="btn btn-neutral">
            Week 8 Home
          </Link>
        </div>

      </div>

      ) : (
      
      <div className='flex flex-col '>
        
        <p>You're not logged in!</p>

        <Link href='/week8' className="hover:underline btn btn-neutral">
          Week 8 Home
        </Link>

        <button 
          onClick={handleSignIn}
          className="btn btn-outline btn-success"
        >
          Sign In
        </button>
        
        
      </div>

      )}
    </main>
  );
}