



function ItemForm({onItemFormSubmit, form, setFormData}) {

function handleChange(event){
  const name = event.target.name
  const value = event.target.value

  setFormData({
    ...form,[name]: value,
  })
}

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={form.name} onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
