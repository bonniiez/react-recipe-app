import React, { useState, useEffect } from 'react';
// import {Link} from 'react-router-dom';
import styled from 'styled-components';
import RecipeDetails from "./RecipeDetails";


const CaptionBanner = styled.div`
    &:hover{
        background: #723f5f;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        opacity: 1;
        color: #fff;
        font-family: 'Dosis',sans-serif;
        font-size: 22px;
        line-height: 1;
        height: 94px;
        overflow: hidden;
        text-align: center;
        text-transform: lowercase;
    }
`;





const Recipe = () => {
    var [isRecipeDetails, setRecipeDetails] = useState(false);
    var [recipeIndex, setRecipeIndex] = useState(0);
    var [eachRecipe, setEachRecipe] = useState('');

    var handleRecipeDetails = (eachRecipe, recipeIndex) => {
        setRecipeDetails(true);

        setRecipeIndex(recipeIndex);
        setEachRecipe(eachRecipe);
    }

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken');


    const APP_ID = 'f7be027e';
    const APP_KEY = '38555891ce91633ed9569bbda9c382b4';


    useEffect(() => {
        getRecipes();
    }, [query]); // only run getRecipe when query is submited 

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        setRecipes(data.hits)
    }

    const updateSearch = (e) => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        console.log("get search", search);
        setSearch('');

    }

    const displaySearchBar = () => {
        return (
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" value={search} type="textbox" onChange={updateSearch} />
                <button
                    className="search-button"
                    type="submit">
                    Search
        </button>
            </form>
        )
    }



    return (
        <div className="recipe-wrap">
            <div className="content-sidebar-wrap flex-container">
                {isRecipeDetails ?
                    <div>
                        <RecipeDetails
                            eachRecipe={eachRecipe}
                            recipeIndex={recipeIndex} />
                    </div> :
                    <div >
                        {displaySearchBar()}
                        <div className="main-content-wrap flex-container">
                        {recipes.map((recipe, index) => (
                            <main className="main-content"  key={index}>
                                <article  className="entry-article" >
                                    <button onClick={() => handleRecipeDetails(recipe, index)}>
                                        <img src={recipe.recipe.image} alt="" />
                                    </button>
                                    <CaptionBanner>
                                        <div className="caption">
                                            <span className="subtitle">{recipe.recipe.label}</span>
                                        </div>
                                    </CaptionBanner>

                                </article>
                            </main>

                        )
                        )}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Recipe;
