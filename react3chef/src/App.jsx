import Header from './components/Header.jsx'
import IngredientForm from './components/IngredientForm.jsx'

/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
 */

export default function App() {
  return (
      <>
        <div className="contentRoot">
          <Header />
          <IngredientForm />
        </div>
      </>
  )
}
