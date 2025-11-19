

export default function IngredientForm(props) {

  const addFunction = props.addFunction;

  function handleSubmit(event) {
        event.preventDefault()
        console.log("Form submitted!")
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        addFunction(newIngredient);
        //console.log(newIngredient)
    }
  
  return (
      <div className="formRoot">
        <div className="formContent">
            <form className="formInputRow" onSubmit={handleSubmit}>
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
