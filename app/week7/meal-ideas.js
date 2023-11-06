import { useState, useEffect } from "react";

// API: https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}

async function fetchMealIdeas(ingredient) {

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;

}

export default function MealIdeas({ingredient}) {

    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {

        try {
            const data = await fetchMealIdeas(ingredient);
            setMeals(data.meals);
            console.log('loadMealIdeas')
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas</h2>
            <ul>
                {meals ?

                    <div>
                        <h3>Searching for: {ingredient}</h3>
                        {meals.map((meal) => (
                            
                            <li 
                                key={meal.idMeal}
                                className=""
                            >
                                {meal.strMeal}
                            </li>
                        ))}
                    </div>
                    
                    :

                    <div>
                        {ingredient === null ?
                            <p>Search for an item to get meal ideas</p>
                            :
                            <div>
                                <h3>Searching for: {ingredient}</h3>
                                <p>No Recipes found</p>
                            </div>
                        }
                        
                    </div>
                    
                }
            </ul>
        </div>
    );

}