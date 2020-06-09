import React, { useState } from 'react';
import './App.css';



const RecipeDetails = ({ eachRecipe, recipeIndex }) => {
    var recipe = eachRecipe.recipe;
    var ingredients = recipe.ingredients;
    const healthLabelString = recipe.healthLabels.join(', ');
    const dailyValue = recipe.totalDaily.ENERC_KCAL.quantity / recipe.yield;
    const recipeCaloriesPerServing = recipe.calories / recipe.yield;
    const nutritionVal = recipe.digest;
    var [isToggleSub, setToggleSub] = useState(false);

    console.log(recipe);
    console.log("calories per serving:", recipeCaloriesPerServing);

    const toggleSub = (e) => {
        e.preventDefault();
        // console.log("target: ",e.target);
        setToggleSub(!isToggleSub);
    }

    const displaySub = (subs) => {
        console.log("macro: ", subs);
        return (
            <div className="macro-sub-container" >
                {subs.map(sub => (
                    <span >
                        {isToggleSub ?
                            <div className="macro-sub-collapsible-toggle" style={{ color: "red" }}>
                                <span className="macro-label">{sub.label}</span>
                                <span className="macro-grams">{Number(sub.total / recipe.yield).toFixed(2)}g</span>
                                <span className="macro-percentage">{Math.round(sub.daily / recipe.yield, 1)}%</span>
                            </div> : <div className="macro-sub-none"></div>}

                    </span>

                ))}
            </div>
        )
    }

    return (

        <div className="recipe-details-container">
            <header className="recipe-details-header">
                <div className="recipe-details-image">
                    <img src={recipe.image} alt={recipe.label} />
                </div>
                <div className="recipe-details-header-content">
                    <h2 className="recipe-details-title">{recipe.label}</h2>
                    <hr />
                    <div className="recipes-details-rating"></div>
                    <div className="recipes-details-details">

                    </div>
                </div>

            </header>
            <div className="recipe-details-content">
                <div className="recipe-details-content-ingredients">
                    <h3>Ingredients</h3>
                    <ul className="recipes-details-ingredients-list">
                        {ingredients.map((item, index) => {
                            return <li key={index}>{item.text}</li>;
                        })}
                    </ul>
                </div>
                <div className="recipe-details-content-nutrition">
                    <h3>Nutritional Information</h3>
                    <ul className="recipes-details-list">
                        <li className="recipe-detail-calories">
                            <span>{Number(recipeCaloriesPerServing).toFixed(2)} CALORIES / SERVING</span>
                        </li>
                        <li>
                            <span>{Math.round(dailyValue, 1)}% DAILY VALUE</span>
                        </li>
                        <li className="recipe-detail-healthlabels">
                            <span>{healthLabelString} </span>
                        </li>
                        <li className="recipe-detail-yield">
                            <span><input value={recipe.yield} /> SERVINGS </span>
                        </li>
                    </ul>

                    <div>
                        <button className="expand-all-nutrition" onClick={(e) => toggleSub(e)}> expand all</button>
                        {nutritionVal.map((macro, index) => (
                            <div className="macro-sub-collapsible" >
                                <div className="macro-sub-collapsed" key={index}>
                                    <span className="macro-label" >{macro.label} </span>
                                    <span className="macro-grams">{Number(macro.total / recipe.yield).toFixed(2)}g </span>
                                    <span className="macro-percentage">{Math.round(macro.daily / recipe.yield, 1)}%</span>
                                </div>
                                <div className="macro-sub-expanded">
                                    {macro.sub && macro.sub !== null ? displaySub(macro.sub) : null}
                                </div>
                            </div>

                            // (macro.sub && macro.sub !== null) ?
                            //     <div className="macro-sub-collapsible" >
                            //         <div className="macro-sub-collapsed" key={index}
                            //         >
                            //             <span className="macro-label" >{macro.label} </span>
                            //             <span className="macro-grams">{Number(macro.total / recipe.yield).toFixed(2)}g </span>
                            //             <span className="macro-percentage">{Math.round(macro.daily / recipe.yield, 1)}%</span>
                            //         </div><div className="macro-sub-expanded">
                            //             {displaySub(macro)}
                            //         </div>
                            //     </div> :
                            //     <div className="macro-basic">
                            //         <span className="macro-label">{macro.label}</span>
                            //         <span className="macro-grams">{Number(macro.total / recipe.yield).toFixed(2)}g </span>
                            //         <span className="macro-percentage">{Math.round(macro.daily / recipe.yield, 1)}%</span>
                            //     </div>


                        ))}
                    </div>
                </div>


            </div>
            <a href={recipe.url}><div className="recipe-link-container"> click here for full recipe </div></a>


        </div>
    )
}
export default RecipeDetails;
