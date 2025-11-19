import Header from './components/Header.jsx'
import IngredientForm from './components/IngredientForm.jsx'
import React from "react"

/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
 */

export default function App() {
  const [ingredients, setIngredients] = React.useState([])

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
          <IngredientForm 
            addFunction={addIngredient}
          />
          <ul>
            {ingredientsList}
          </ul>
        </div>
      </>
  )
}
