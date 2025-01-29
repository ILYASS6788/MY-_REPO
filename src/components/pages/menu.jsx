import React, { useEffect, useState } from 'react';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [menuItems, setMenuItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]); // Fix typo here: use setCategories

  useEffect(() => {
    fetch("http://localhost:3004/menuItems")
      .then((response) => response.json())
      .then((jsondata) => {
        setMenuItems(jsondata);
        const uniqueCategories = Array.from(
          new Set(jsondata.map((item) => item.category))
        );
        setCategories(["All", ...uniqueCategories]); 
      })
      .catch((error) => console.error("Error fetching menu items:", error));
  }, []); 

  const filteredMenu = menuItems.filter(item => {
    const searchMatch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    return searchMatch && categoryMatch;
  });

  return (
    <div className="menu-page">
      <h2>Our Menu</h2>
      <div className="filters">
        <input type="text" placeholder="Search for a dish..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="menu-items">
        {filteredMenu.map(item => (
          <div className="menu-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="menu-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="price">${item.price}</span>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
