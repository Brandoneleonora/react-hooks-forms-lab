import { useState } from "react";
import { v4 as uuid } from "uuid";
import Filter from "./Filter";
import Item from "./Item";
import ItemForm from "./ItemForm";

function ShoppingList({ items, setItems }) {
  const [form, setFormData] = useState({
    id: uuid(),
    name: '',
    category: 'Produce',
  })
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  let displayItems = items.filter((item) => selectedCategory === "All" ? true : item.category === selectedCategory).filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function onItemFormSubmit(event) {
    event.preventDefault()
    setItems([...items, form])
    setFormData({
      id: uuid(),
      name: '',
      category: 'Produce',
    })
  }


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} form={form} setFormData={setFormData} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
