

export default function IngredientForm(props) {

    const addFunction = props.addFunction;

    function addIngredientFromForm(formData) {
        const newIngredient = formData.get("ingredient")
        if (!newIngredient.trim())
            return;
        addFunction(newIngredient);
        console.log(newIngredient)
    }

  
  return (
      <div className="formRoot">
          <div className="formContent">
              <form className="formInputRow" action={addIngredientFromForm}>
                  <input 
                      type="text"
                      placeholder="e.g. oregano"
                      aria-label="Add ingredient"
                      name="ingredient"
                  />
                  <button>+ Add Ingredient</button>
              </form>
          </div>
      </div>
  )
}
