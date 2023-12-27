import React, { useState } from "react";

function Products({ categories, setProducts }) {
  const [productFormData, setProductFormData] = useState({
    title: "",
    quantity: 0,
    categoryId: "",
  });
  const changeHandler = (e) => {
    setProductFormData({ ...productFormData, [e.target.name]: e.target.value });
  };
  const addNewProductHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      ...productFormData,
      id: new Date().getTime(),
      createdAt: new Date().toISOString(),
    };
    setProducts((prev) => [...prev, newProduct]);
    setProductFormData({
      title: "",
      quantity: "",
      categoryId: "",
    });
  };
  return (
    <div className="mb-10">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
        <div>
          <label htmlFor="title" className="block mb-1 text-slate-400">
            title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={productFormData.title}
            onChange={changeHandler}
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block mb-1 text-slate-400">
            quantity
          </label>
          <input
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
            type="number"
            name="quantity"
            id="quantity"
            value={productFormData.quantity}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label
            htmlFor="product-category"
            className="block mb-1 text-slate-400"
          >
            category
          </label>
          <select
            name="categoryId"
            id="category"
            value={productFormData.categoryId}
            className="bg-transparent text-slate-400 rounded-xl w-full"
            onChange={changeHandler}
          >
            <option className="bg-slate-500 text-slate-300" value="">
              select a category
            </option>
            {categories.map((category) => {
              return (
                <option
                  key={category.id}
                  className="bg-slate-500 text-slate-300"
                  value={category.id}
                >
                  {category.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button
            id="add-new-product"
            className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
            onClick={addNewProductHandler}
          >
            Add new Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default Products;
