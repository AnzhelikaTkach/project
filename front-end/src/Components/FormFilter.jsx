import React from "react";
import "../styles/FilterProducts.scss"
function FormFilter({
  priceFrom,
  priceTo,
  showDiscount,
  sortType,
  setPriceFrom,
  setPriceTo,
  setShowDiscount,
  setSortType,
  isDiscountPage,
  discountPage
}) {
  return (
    <div className="filtration">
      <span className="filtration__title-price">Price</span>
      <input
       className="filtration__from-to"
        type="number"
        value={priceFrom}
        onChange={(e) => setPriceFrom(e.target.value)}
        placeholder="From"
      />
      <input
       className="filtration__from-to"
        type="number"
        value={priceTo}
        onChange={(e) => setPriceTo(e.target.value)}
        placeholder="To"
      />
      {!discountPage && (
        <>
          <label  className="filtration__title">
            Discounted Items
            <input
            className="filtration__checkbox"
              type="checkbox"
              checked={showDiscount}
              onChange={(e) => setShowDiscount(e.target.checked)}
            />
          </label>
        </>
      )}
      <label className="filtration__title">
        Sorted
        <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <option value="">Выберите</option>
          <option value="asc">По Возрастанию</option>
          <option value="desc">По убыванию</option>
        </select>
      </label>
    </div>
  );
}

export default FormFilter;
