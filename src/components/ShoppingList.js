import { useState } from "react";
import { v4 as uuid } from "uuid";
import Filter from "./Filter";
import Item from "./Item";
import ItemForm from "./ItemForm";

function ShoppingList({ items, setItems }) {
  const [form, setFormData] = useState({
    id: uuid(),
    name: '',
    category:'Produce',
   })
  const [displayItems, setDisplayItems] = useState(items)

  console.log(items)
  function handleCategoryChange(event) {
    let filteredItems = items.filter((item) => event.target.value === "All" ? true : item.category === event.target.value);
    setDisplayItems(filteredItems);
  }

  function handleSearchChange(event){
    let filteredItems = items.filter((item) => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setDisplayItems(filteredItems);
  }

  function onItemFormSubmit(event){
    event.preventDefault()
    setItems([...items, form])
    setFormData({
      id: uuid(),
      name: '',
      category:'Produce',
     })
  }


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} form={form} setFormData={setFormData}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange = {handleSearchChange} />
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
