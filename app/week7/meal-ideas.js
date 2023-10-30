import { useState, useEffect } from "react";

// API: https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}

function fetchMealIdeas(ingredient) {

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data.meals;
        });

}

export default function MealIdeas(ingredient) {

    const [meals, setMeals] = useState([]);

    function loadMealIdeas() {
        fetchMealIdeas(ingredient)
            .then((meals) => setMeals(meals));
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );

}