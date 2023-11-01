import React from "react";
import "../styles/FilterProducts.scss";
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
  discountPage,
}) {
  return (
    <div className="filtration">
      <span className="filtration__title-price">Price</span>
      <input
        className="filtration__from-to"
        type="number"
        value={priceFrom}
        onChange={(e) => setPriceFrom(e.target.value)}
        placeholder="from"
      />
      <input
        className="filtration__from-to"
        type="number"
        value={priceTo}
        onChange={(e) => setPriceTo(e.target.value)}
        placeholder="to"
      />
      {!discountPage && (
        <>
          <label className="filtration__title-checkbox">
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
      <label className="filtration__title-sort">
        Sorted
        <div className="select">
          <select
            className="filtration-select"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">by default</option>
            <option value="asc">Price: Ascending</option>
            <option value="desc">Price: Descending</option>
          </select>
        </div>
      </label>
    </div>
  );
}

export default FormFilter;
