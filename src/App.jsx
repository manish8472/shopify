import { useState } from "react";
import Navbar from "./NavBar/Navbar";
import Products from "./products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./SideBar/Sidebar";
import "./App.css";

// This is Home Page of website

//Database
import productsData from "./db/data";
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //input Filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  //--------------Filter By Search------------
  const filterProducts = productsData.filter(
    (data) =>
      data.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  // -------------------Category Filter -------------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let fitleredItem = products;

    //Filtering input items
    if (query) {
      fitleredItem = filterProducts;
    }

    //Selected Filter
    if (selected) {
      fitleredItem = fitleredItem.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return fitleredItem.map(
      ({ img, title, reviews, prevPrice, newPrice, color }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          color={color}
        />
      )
    );
  }

  const result = filteredData(productsData, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navbar query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
