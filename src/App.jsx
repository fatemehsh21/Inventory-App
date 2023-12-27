import { useEffect, useState } from "react";
import "./App.css";
import Category from "./components/Category";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = sortDate(result);
    result = selectCategory(result);
    setFilteredProducts(result);
  }, [products, search, sort, selectedCategory]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("Products")) || [];
    const savedCategories =
      JSON.parse(localStorage.getItem("Categories")) || [];
    setProducts(savedProducts);
    setCategories(savedCategories);
  }, []);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("Products", JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("Categories", JSON.stringify(categories));
    }
  }, [categories]);

  const filterSearchTitle = (array) => {
    return array.filter((item) => item.title.toLowerCase().includes(search));
  };

  const sortDate = (array) => {
    if (sort === "latest") {
      return array.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    if (sort === "earliest") {
      return array.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    }
  };
  const selectCategory = (array) => {
    if (!selectedCategory) return array;
    return array.filter((item) => item.categoryId === selectedCategory);
  };
  const searchHandler = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
  };

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const selectHandler = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <NavBar numOfProducts={products.length} />
        <div className="container mx-auto p-4 md:flex-row flex-col flex md:justify-between lg:max-w-screen-xl md:gap-x-12">
          <section className="w-full">
            <Category setCategories={setCategories} />
            <Products categories={categories} setProducts={setProducts} />
          </section>
          <section className="w-full">
            <Filter
              sort={sort}
              search={search}
              onSort={sortHandler}
              onSearch={searchHandler}
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={selectHandler}
            />
            <ProductList
              products={filteredProducts}
              categories={categories}
              setProducts={setProducts}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
