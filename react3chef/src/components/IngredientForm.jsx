

export default function IngredientForm() {
  return (
      <div className="formRoot">
        <div className="formContent">
            <form className="formInputRow">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button>+ Add Ingredient</button>
            </form>
        </div>
      </div>
  )
}
