import Header from './components/Header.jsx'
import IngredientForm from './components/IngredientForm.jsx'
import React from "react"
import GetRecipeSection from './components/GetRecipeSection.jsx'

/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
 */

export default function App() {
  const [ingredients, setIngredients] = React.useState([])

  function haveIngredients() {
    return (ingredients.length > 0);
  }

  function addIngredient(newIngredient) {
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  const ingredientsList = ingredients.map((ingredient, i) => (
    <li key={ingredient+i}>{ingredient}</li>
  ));
  
  return (
      <>
        <div className="contentRoot">
          <Header />
          <div className='formContentRoot'>
              <IngredientForm 
                addFunction={addIngredient}
              />
              
              {haveIngredients() && 
                <section>
                    <div className="ingredientsListSection">
                        <h2>Ingredients on hand:</h2>
                        <ul className="ingredients-list" aria-live="polite">
                            {ingredientsList}
                        </ul>
                    </div>
                    <GetRecipeSection />
                </section>
              }
          </div>
          
        </div>
      </>
  )
}
