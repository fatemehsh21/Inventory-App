import React, { useState } from "react";

function Filter({
  sort,
  search,
  onSort,
  onSearch,
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="mb-6">
      <h2 className="text-slate-500 font-bold mb-5 border-b-slate-500 border-b">
        Filters
      </h2>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="search-input" className="text-slate-500 text-lg">
          search
        </label>
        <input
          type="text"
          name="search-input"
          id="search-input"
          value={search}
          onChange={onSearch}
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" className="text-slate-500 text-lg">
          sort
        </label>
        <select
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-slate-400 rounded-xl"
          value={sort}
          onChange={onSort}
        >
          <option className="bg-slate-500 text-slate-300" value="">
            select a category
          </option>
          <option className="bg-slate-500 text-slate-300" value="latest">
            latest
          </option>
          <option className="bg-slate-500 text-slate-300" value="earliest">
            earliest
          </option>
        </select>
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="select-category" className="text-slate-500 text-lg">
          Category
        </label>
        <select
          name="select-category"
          id="fselect-category"
          className="bg-transparent text-slate-400 rounded-xl"
          value={selectedCategory}
          onChange={onSelectCategory}
        >
          <option className="bg-slate-500 text-slate-300" value="">
            All
          </option>
          {categories.map((category) => {
            return (
              <option
                className="bg-slate-500 text-slate-300"
                value={category.id}
                key={category.id}
              >
                {category.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Filter;
