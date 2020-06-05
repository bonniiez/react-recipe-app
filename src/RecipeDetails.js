import React from 'react';
import './App.css';



const RecipeDetails = ({ eachRecipe, recipeIndex }) => {

    console.log("recipeIndex: ", recipeIndex);
    var recipe = eachRecipe.recipe;
    var ingredients = recipe.ingredients;
    const healthLabelString = recipe.healthLabels.join(', ');

    
    return (

        <div className="recipe-details-container">
            <header className="recipe-details-header">
                <div className="recipe-details-image">
                    <img src={recipe.image} alt={recipe.label} />
                </div>
                <div className="recipe-details-header-content">
                    <h2 className="recipe-details-title">{recipe.label}</h2>
                    <hr />
                    <div className="recipes-details-rating">*****</div>
                    <div className="recipes-details-details">
                        <ul className="recipes-details-list">
                            <li className="recipe-detail-header-calories">
                                <span>calories: {recipe.calories}</span>
                            </li>
                            <li className="recipe-detail-header-healthlabels">
    <span>{healthLabelString} </span>
                            </li>
                            <li className="recipe-detail-header-yield">
                                <span>yields: {recipe.yield}</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </header>
            <div className="recipe-details-content">
            </div>
            <ul>
                {ingredients.map((item, index) => {
                    return <li key={index}>{item.text}</li>;
                })}
            </ul>
        </div>
    )
}
export default RecipeDetails;
